import { useState, useEffect, useRef } from "react";
import { supabase } from "../../supabaseClient";
import { uploadImage, uploadThumbnail } from "../../lib/uploadImage";
import { useSupabaseTable } from "../../hooks/useSupabaseTable";
import galleryCategories from "../../constants/galleryCategories";

const emptyForm = {
  id: null,
  exhibition: "",
  title: "",
  description: "",
  location: "",
  year: "",
  galleryCategory: "awards",
};

const ManageAchievements = () => {
  const {
    rows: achievements,
    loading,
    error,
    refetch,
  } = useSupabaseTable("achievements", {
    orderBy: "sort_order",
    ascending: true,
  });
  const [form, setForm] = useState(emptyForm);
  const [files, setFiles] = useState([]);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");
  const [orderedItems, setOrderedItems] = useState([]);
  const [reordering, setReordering] = useState(false);
  const [draggingId, setDraggingId] = useState(null);
  const orderedItemsRef = useRef([]);
  const dragIndexRef = useRef(null);

  useEffect(() => {
    setOrderedItems(achievements);
    orderedItemsRef.current = achievements;
  }, [achievements]);

  // Native HTML5 drag-and-drop is unreliable here (Firefox needs
  // dataTransfer.setData to even start a drag, and dragging from on top of
  // the thumbnail <img> triggers the browser's native image-drag instead of
  // our reorder). Pointer events + elementsFromPoint sidesteps all of that
  // and works the same on mouse and touch.
  const persistOrder = async (items) => {
    setReordering(true);
    const results = await Promise.all(
      items.map((item, index) =>
        item.sort_order === index
          ? Promise.resolve(null)
          : supabase
              .from("achievements")
              .update({ sort_order: index })
              .eq("id", item.id)
      )
    );
    const failed = results.find((result) => result?.error);
    if (failed) {
      alert(`Couldn't save the new order: ${failed.error.message}`);
    }
    setReordering(false);
    refetch();
  };

  const handlePointerMove = (e) => {
    if (dragIndexRef.current === null) return;
    const target = document
      .elementsFromPoint(e.clientX, e.clientY)
      .find((el) => el.dataset && el.dataset.achievementIndex !== undefined);
    if (!target) return;
    const overIndex = Number(target.dataset.achievementIndex);
    if (overIndex === dragIndexRef.current) return;

    setOrderedItems((prev) => {
      const updated = [...prev];
      const [moved] = updated.splice(dragIndexRef.current, 1);
      updated.splice(overIndex, 0, moved);
      orderedItemsRef.current = updated;
      return updated;
    });
    dragIndexRef.current = overIndex;
  };

  const handlePointerUp = () => {
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);
    document.body.style.userSelect = "";
    dragIndexRef.current = null;
    setDraggingId(null);
    persistOrder(orderedItemsRef.current);
  };

  const handlePointerDown = (index, id) => (e) => {
    e.preventDefault();
    dragIndexRef.current = index;
    setDraggingId(id);
    document.body.style.userSelect = "none";
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
  };

  const resetForm = () => {
    setForm(emptyForm);
    setFiles([]);
    setFormError("");
  };

  const handleEdit = (item) => {
    setForm({
      id: item.id,
      exhibition: item.exhibition || "",
      title: item.title || "",
      description: item.description || "",
      location: item.location || "",
      year: item.year || "",
      galleryCategory: item.gallery_category || "awards",
    });
    setFiles([]);
  };

  const handleDelete = async (item) => {
    if (!confirm(`Delete "${item.title}"?`)) return;
    const { error: deleteError } = await supabase
      .from("achievements")
      .delete()
      .eq("id", item.id);
    if (deleteError) alert(deleteError.message);
    else refetch();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!form.exhibition.trim() || !form.title.trim()) {
      setFormError("Exhibition and title are required.");
      return;
    }
    if (!form.id && files.length === 0) {
      setFormError("At least one image is required for a new achievement.");
      return;
    }

    setSaving(true);
    try {
      let image_urls;
      let image_url;
      if (files.length > 0) {
        [image_urls, image_url] = await Promise.all([
          Promise.all(files.map((file) => uploadImage(file, "achievements"))),
          uploadThumbnail(files[0], "achievements"),
        ]);
      }

      const payload = {
        exhibition: form.exhibition,
        title: form.title,
        description: form.description,
        location: form.location || null,
        year: form.year || null,
        gallery_category: form.galleryCategory,
        ...(image_urls ? { image_urls, image_url } : {}),
      };

      const { error: saveError } = form.id
        ? await supabase
            .from("achievements")
            .update(payload)
            .eq("id", form.id)
        : await supabase.from("achievements").insert({
            ...payload,
            sort_order:
              Math.max(-1, ...achievements.map((a) => a.sort_order ?? -1)) +
              1,
          });

      if (saveError) throw saveError;

      resetForm();
      refetch();
    } catch (err) {
      setFormError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {form.id ? "Edit Achievement" : "Add Achievement"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Exhibition (e.g. Little World Kuwait)"
            value={form.exhibition}
            onChange={(e) => setForm({ ...form, exhibition: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm"
          />
          <input
            type="text"
            placeholder="Award title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm"
          />
          <textarea
            placeholder="Description"
            rows={5}
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Location (optional)"
              value={form.location}
              onChange={(e) =>
                setForm({ ...form, location: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm"
            />
            <input
              type="text"
              placeholder="Year (optional)"
              value={form.year}
              onChange={(e) => setForm({ ...form, year: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Show in Gallery as
            </label>
            <select
              value={form.galleryCategory}
              onChange={(e) =>
                setForm({ ...form, galleryCategory: e.target.value })
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm bg-white"
            >
              {galleryCategories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
            <p className="text-xs text-gray-400 mt-1">
              This achievement's photos will automatically also appear on
              the public Gallery page, filed under this category.
            </p>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              {form.id ? "Replace images (optional)" : "Images"}
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
              className="w-full text-sm"
            />
            {files.length > 0 && (
              <p className="text-xs text-gray-500 mt-1">
                {files.length} image{files.length > 1 ? "s" : ""} selected
              </p>
            )}
            {form.id && files.length === 0 && (
              <p className="text-xs text-gray-400 mt-1">
                Leave empty to keep the existing images.
              </p>
            )}
          </div>

          {formError && <p className="text-sm text-red-600">{formError}</p>}

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={saving}
              className="rounded-full bg-[#822168] px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#6d1b56] transition-colors disabled:opacity-50"
            >
              {saving ? "Saving…" : form.id ? "Update" : "Add Achievement"}
            </button>
            {form.id && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-full border border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Existing Achievements
          </h2>
          {reordering && (
            <span className="text-xs text-gray-400">Saving order…</span>
          )}
        </div>
        {orderedItems.length > 1 && (
          <p className="text-xs text-gray-500 mb-3">
            Drag items by the handle to change the order they appear in on
            the site - top of the list shows first.
          </p>
        )}
        {loading && <p className="text-sm text-gray-500">Loading…</p>}
        {error && <p className="text-sm text-red-600">{error}</p>}
        <ul className="space-y-3">
          {orderedItems.map((item, index) => (
            <li
              key={item.id}
              data-achievement-index={index}
              className={`flex items-center gap-4 rounded-lg border p-3 transition-all duration-150 ${
                draggingId === item.id
                  ? "border-[#822168] shadow-lg scale-[1.02] bg-[#822168]/5 relative z-10"
                  : "border-gray-200 bg-white"
              }`}
            >
              <span
                aria-hidden="true"
                onPointerDown={handlePointerDown(index, item.id)}
                className={`shrink-0 select-none cursor-grab active:cursor-grabbing touch-none ${
                  draggingId === item.id ? "text-[#822168]" : "text-gray-300"
                }`}
                style={{ touchAction: "none" }}
                title="Drag to reorder"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <circle cx="7" cy="5" r="1.5" />
                  <circle cx="13" cy="5" r="1.5" />
                  <circle cx="7" cy="10" r="1.5" />
                  <circle cx="13" cy="10" r="1.5" />
                  <circle cx="7" cy="15" r="1.5" />
                  <circle cx="13" cy="15" r="1.5" />
                </svg>
              </span>
              {item.image_url && (
                <img
                  src={item.image_url}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-16 h-16 rounded object-cover shrink-0"
                />
              )}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-800 truncate">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {item.exhibition}
                </p>
              </div>
              <button
                onClick={() => handleEdit(item)}
                className="text-sm font-semibold text-[#822168] hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item)}
                className="text-sm font-semibold text-red-600 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
          {!loading && orderedItems.length === 0 && (
            <p className="text-sm text-gray-500">
              No achievements added yet.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ManageAchievements;
