import { supabase } from "../../supabaseClient";
import { useSupabaseTable } from "../../hooks/useSupabaseTable";

const formatDate = (isoString) =>
  new Date(isoString).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });

const csvEscape = (value) => `"${(value ?? "").toString().replace(/"/g, '""')}"`;

const downloadCsv = (leads) => {
  const header = "Name,Email,Company,Phone,Subject,Message,Submitted At\n";
  const rows = leads
    .map((lead) =>
      [
        lead.name,
        lead.email,
        lead.company,
        lead.phone,
        lead.subject,
        lead.message,
        formatDate(lead.created_at),
      ]
        .map(csvEscape)
        .join(",")
    )
    .join("\n");

  const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
};

const Field = ({ label, value }) =>
  value ? (
    <p className="text-sm text-gray-600">
      <span className="font-semibold text-gray-800">{label}:</span> {value}
    </p>
  ) : null;

const ManageLeads = () => {
  const { rows: leads, loading, error, refetch } = useSupabaseTable("leads");

  const handleDelete = async (lead) => {
    if (!confirm(`Delete lead "${lead.email || lead.phone}"?`)) return;
    const { error: deleteError } = await supabase
      .from("leads")
      .delete()
      .eq("id", lead.id);
    if (deleteError) alert(deleteError.message);
    else refetch();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Contact Leads
        </h2>
        <button
          onClick={() => downloadCsv(leads)}
          disabled={leads.length === 0}
          className="rounded-full bg-[#822168] px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#6d1b56] transition-colors disabled:opacity-40"
        >
          Download CSV (Excel)
        </button>
      </div>

      {loading && <p className="text-sm text-gray-500">Loading…</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}

      {!loading && leads.length === 0 && (
        <p className="text-sm text-gray-500">
          No leads yet - these come from the "Contact Us" popup and the
          Contact page form.
        </p>
      )}

      <div className="space-y-4">
        {leads.map((lead) => (
          <div
            key={lead.id}
            className="rounded-lg border border-gray-200 p-5"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <p className="font-semibold text-gray-900">
                  {lead.name || "(no name provided)"}
                </p>
                <p className="text-sm text-gray-500">
                  {lead.email || lead.phone || "(no contact info)"}
                </p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {formatDate(lead.created_at)}
                </span>
                <button
                  onClick={() => handleDelete(lead)}
                  className="text-sm font-semibold text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>

            <div className="grid gap-1 sm:grid-cols-2">
              <Field label="Company" value={lead.company} />
              <Field label="Phone" value={lead.phone} />
              <Field label="Subject" value={lead.subject} />
            </div>
            {lead.message && (
              <p className="mt-2 text-sm text-gray-600 whitespace-pre-line">
                <span className="font-semibold text-gray-800">Message:</span>{" "}
                {lead.message}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageLeads;
