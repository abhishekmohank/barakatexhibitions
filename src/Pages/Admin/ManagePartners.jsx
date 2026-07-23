import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { uploadThumbnail } from "../../lib/uploadImage";
import { useSupabaseTable } from "../../hooks/useSupabaseTable";

const ManagePartners = () => {
  const {
    rows: partners,
    loading,
    error,
    refetch,
  } = useSupabaseTable("partners");
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [formError, setFormError] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    setFormError("");
    if (!name.trim() || !file) {
      setFormError("Name and logo are both required.");
      return;
    }

    setUploading(true);
    try {
      const logo_url = await uploadThumbnail(file, "partners");
      const { error: insertError } = await supabase
        .from("partners")
        .insert({ name, logo_url });
      if (insertError) throw insertError;
      setName("");
      setFile(null);
      refetch();
    } catch (err) {
      setFormError(err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (partner) => {
    if (!confirm(`Remove "${partner.name}"?`)) return;
    const { error: deleteError } = await supabase
      .from("partners")
      .delete()
      .eq("id", partner.id);
    if (deleteError) alert(deleteError.message);
    else refetch();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Add Partner Logo
      </h2>
      <form
        onSubmit={handleUpload}
        className="flex flex-wrap items-center gap-3 mb-8"
      >
        <input
          type="text"
          placeholder="Partner / organization name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="text-sm"
        />
        <button
          type="submit"
          disabled={uploading}
          className="rounded-full bg-[#822168] px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#6d1b56] transition-colors disabled:opacity-50"
        >
          {uploading ? "Uploading…" : "Add"}
        </button>
      </form>
      {formError && <p className="text-sm text-red-600 mb-4">{formError}</p>}

      <h2 className="text-xl font-semibold text-gray-900 mb-4">Partners</h2>
      {loading && <p className="text-sm text-gray-500">Loading…</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="relative group aspect-square border border-gray-200 rounded-lg flex items-center justify-center p-3"
          >
            <img
              src={partner.logo_url}
              alt={partner.name}
              loading="lazy"
              decoding="async"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => handleDelete(partner)}
              className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/60 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {!loading && partners.length === 0 && (
        <p className="text-sm text-gray-500">No partners added yet.</p>
      )}
    </div>
  );
};

export default ManagePartners;
