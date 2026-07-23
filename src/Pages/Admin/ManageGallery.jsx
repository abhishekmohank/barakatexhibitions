import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { uploadGalleryImage } from "../../lib/uploadImage";
import { useSupabaseTable } from "../../hooks/useSupabaseTable";
import categories from "../../constants/galleryCategories";

const emptyDetails = { title: "", location: "", year: "", category: "events" };

const ManageGallery = () => {
  const {
    rows: images,
    loading,
    error,
    refetch,
  } = useSupabaseTable("gallery_images");
  const [files, setFiles] = useState([]);
  const [details, setDetails] = useState(emptyDetails);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(null);
  const [formError, setFormError] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    setFormError("");
    if (files.length === 0) {
      setFormError("Choose at least one image first.");
      return;
    }

    setUploading(true);
    try {
      for (let i = 0; i < files.length; i++) {
        setUploadProgress({ current: i + 1, total: files.length });
        const { image_url, thumb_url } = await uploadGalleryImage(
          files[i],
          "gallery"
        );
        const { error: insertError } = await supabase
          .from("gallery_images")
          .insert({
            image_url,
            thumb_url,
            title: details.title || null,
            location: details.location || null,
            year: details.year || null,
            category: details.category,
          });
        if (insertError) throw insertError;
      }
      setFiles([]);
      setDetails(emptyDetails);
      refetch();
    } catch (err) {
      setFormError(err.message);
    } finally {
      setUploading(false);
      setUploadProgress(null);
    }
  };

  const handleDelete = async (image) => {
    if (!confirm("Remove this image from the gallery?")) return;
    const { error: deleteError } = await supabase
      .from("gallery_images")
      .delete()
      .eq("id", image.id);
    if (deleteError) alert(deleteError.message);
    else refetch();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Add Gallery Image
      </h2>
      <form onSubmit={handleUpload} className="space-y-4 mb-10 max-w-xl">
        <div>
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
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder={
              files.length > 1
                ? "Event name (optional, applied to all)"
                : "Event name (optional)"
            }
            value={details.title}
            onChange={(e) =>
              setDetails({ ...details, title: e.target.value })
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm"
          />
          <input
            type="text"
            placeholder="Location (optional)"
            value={details.location}
            onChange={(e) =>
              setDetails({ ...details, location: e.target.value })
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm"
          />
          <input
            type="text"
            placeholder="Year (optional)"
            value={details.year}
            onChange={(e) =>
              setDetails({ ...details, year: e.target.value })
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm"
          />
          <select
            value={details.category}
            onChange={(e) =>
              setDetails({ ...details, category: e.target.value })
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm bg-white"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={uploading}
          className="rounded-full bg-[#822168] px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#6d1b56] transition-colors disabled:opacity-50"
        >
          {uploading
            ? uploadProgress
              ? `Uploading ${uploadProgress.current} of ${uploadProgress.total}…`
              : "Uploading…"
            : files.length > 1
            ? `Upload ${files.length} Images`
            : "Upload"}
        </button>
        {formError && <p className="text-sm text-red-600">{formError}</p>}
      </form>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Gallery Images
      </h2>
      {loading && <p className="text-sm text-gray-500">Loading…</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative group aspect-square">
            <img
              src={image.thumb_url || image.image_url}
              alt={image.title || ""}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              onClick={() => handleDelete(image)}
              className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/60 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {!loading && images.length === 0 && (
        <p className="text-sm text-gray-500">No gallery images added yet.</p>
      )}
    </div>
  );
};

export default ManageGallery;
