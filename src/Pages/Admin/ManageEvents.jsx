import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { uploadImage, uploadThumbnail } from "../../lib/uploadImage";
import { useSupabaseTable } from "../../hooks/useSupabaseTable";
import galleryCategories from "../../constants/galleryCategories";

const emptyForm = {
  id: null,
  title: "",
  location: "",
  date: "",
  description: "",
  link: "",
  status: "upcoming",
  endDate: "",
  galleryCategory: "events",
};

const ManageEvents = () => {
  const { rows: events, loading, error, refetch } = useSupabaseTable("events");
  const [form, setForm] = useState(emptyForm);
  const [files, setFiles] = useState([]);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  const resetForm = () => {
    setForm(emptyForm);
    setFiles([]);
    setFormError("");
  };

  const handleEdit = (event) => {
    setForm({
      id: event.id,
      title: event.title || "",
      location: event.location || "",
      date: event.date || "",
      description: event.description || "",
      link: event.link || "",
      status: event.status || "upcoming",
      endDate: event.end_date || "",
      galleryCategory: event.gallery_category || "events",
    });
    setFiles([]);
  };

  const handleDelete = async (event) => {
    if (!confirm(`Delete "${event.title}"?`)) return;
    const { error: deleteError } = await supabase
      .from("events")
      .delete()
      .eq("id", event.id);
    if (deleteError) alert(deleteError.message);
    else refetch();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!form.title.trim()) {
      setFormError("Title is required.");
      return;
    }
    if (!form.id && files.length === 0) {
      setFormError("At least one image is required for a new event.");
      return;
    }

    setSaving(true);
    try {
      let image_urls;
      let image_url;
      if (files.length > 0) {
        [image_urls, image_url] = await Promise.all([
          Promise.all(files.map((file) => uploadImage(file, "events"))),
          uploadThumbnail(files[0], "events"),
        ]);
      }

      const payload = {
        title: form.title,
        location: form.location,
        date: form.date,
        description: form.description,
        link: form.link,
        status: form.status,
        end_date: form.endDate || null,
        gallery_category: form.galleryCategory,
        ...(image_urls ? { image_urls, image_url } : {}),
      };

      const { error: saveError } = form.id
        ? await supabase.from("events").update(payload).eq("id", form.id)
        : await supabase.from("events").insert(payload);

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
          {form.id ? "Edit Event" : "Add Event"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm"
          />
          <input
            type="text"
            placeholder="Location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm"
          />
          <input
            type="text"
            placeholder="Date (e.g. 20 Nov 2025 to 18 April 2026)"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
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
          <input
            type="url"
            placeholder="Link (optional)"
            value={form.link}
            onChange={(e) => setForm({ ...form, link: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm"
          />
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              End Date (optional)
            </label>
            <input
              type="date"
              value={form.endDate}
              onChange={(e) => setForm({ ...form, endDate: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm"
            />
            <p className="text-xs text-gray-400 mt-1">
              If set, the event automatically switches to "Past" once this
              date has passed - the Status dropdown below is only used when
              this is left blank.
            </p>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Status
            </label>
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm bg-white"
            >
              <option value="upcoming">Upcoming</option>
              <option value="past">Past</option>
            </select>
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
              This event's photos will automatically also appear on the
              public Gallery page, filed under this category.
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
              {saving ? "Saving…" : form.id ? "Update Event" : "Add Event"}
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
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Existing Events
        </h2>
        {loading && <p className="text-sm text-gray-500">Loading…</p>}
        {error && <p className="text-sm text-red-600">{error}</p>}
        <ul className="space-y-3">
          {events.map((event) => (
            <li
              key={event.id}
              className="flex items-center gap-4 rounded-lg border border-gray-200 p-3"
            >
              {event.image_url && (
                <img
                  src={event.image_url}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-16 h-16 rounded object-cover shrink-0"
                />
              )}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-800 truncate">
                  {event.title}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {event.location} · {event.date}
                </p>
              </div>
              <button
                onClick={() => handleEdit(event)}
                className="text-sm font-semibold text-[#822168] hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(event)}
                className="text-sm font-semibold text-red-600 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
          {!loading && events.length === 0 && (
            <p className="text-sm text-gray-500">No events added yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ManageEvents;
