import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { useSupabaseTable } from "../../hooks/useSupabaseTable";

const emptyForm = { id: null, quote: "", name: "", company: "", country: "" };

const ManageTestimonials = () => {
  const {
    rows: testimonials,
    loading,
    error,
    refetch,
  } = useSupabaseTable("testimonials");
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  const resetForm = () => {
    setForm(emptyForm);
    setFormError("");
  };

  const handleEdit = (item) => {
    setForm({
      id: item.id,
      quote: item.quote || "",
      name: item.name || "",
      company: item.company || "",
      country: item.country || "",
    });
  };

  const handleDelete = async (item) => {
    if (!confirm(`Delete testimonial from "${item.name}"?`)) return;
    const { error: deleteError } = await supabase
      .from("testimonials")
      .delete()
      .eq("id", item.id);
    if (deleteError) alert(deleteError.message);
    else refetch();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!form.quote.trim() || !form.name.trim()) {
      setFormError("Quote and name are required.");
      return;
    }

    setSaving(true);
    try {
      const payload = {
        quote: form.quote,
        name: form.name,
        company: form.company || null,
        country: form.country || null,
      };

      const { error: saveError } = form.id
        ? await supabase.from("testimonials").update(payload).eq("id", form.id)
        : await supabase.from("testimonials").insert(payload);

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
          {form.id ? "Edit Testimonial" : "Add Testimonial"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            placeholder="Client quote"
            rows={4}
            value={form.quote}
            onChange={(e) => setForm({ ...form, quote: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm"
          />
          <input
            type="text"
            placeholder="Client name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm"
          />
          <input
            type="text"
            placeholder="Company (optional)"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm"
          />
          <input
            type="text"
            placeholder="Country (optional)"
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm"
          />

          {formError && <p className="text-sm text-red-600">{formError}</p>}

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={saving}
              className="rounded-full bg-[#822168] px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#6d1b56] transition-colors disabled:opacity-50"
            >
              {saving ? "Saving…" : form.id ? "Update" : "Add Testimonial"}
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
          Existing Testimonials
        </h2>
        {loading && <p className="text-sm text-gray-500">Loading…</p>}
        {error && <p className="text-sm text-red-600">{error}</p>}
        <ul className="space-y-3">
          {testimonials.map((item) => (
            <li
              key={item.id}
              className="rounded-lg border border-gray-200 p-3"
            >
              <p className="text-sm text-gray-700 italic line-clamp-2 mb-2">
                "{item.quote}"
              </p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500">
                  {item.name}
                  {item.company ? `, ${item.company}` : ""}
                  {item.country ? ` · ${item.country}` : ""}
                </p>
                <div className="flex gap-3">
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
                </div>
              </div>
            </li>
          ))}
          {!loading && testimonials.length === 0 && (
            <p className="text-sm text-gray-500">
              No testimonials added yet.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ManageTestimonials;
