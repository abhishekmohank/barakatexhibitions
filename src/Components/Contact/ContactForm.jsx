import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { supabase, isSupabaseConfigured } from "../../supabaseClient";

const emptyForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "company", label: "Company", type: "text", required: false },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", required: false },
];

const ContactForm = () => {
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !emailPattern.test(form.email)) {
      setError("Please enter your name and a valid email address.");
      return;
    }
    if (!isSupabaseConfigured) {
      setError("Contact form is not configured yet.");
      return;
    }

    setSubmitting(true);
    const { error: fnError } = await supabase.functions.invoke("submit-lead", {
      body: form,
    });
    setSubmitting(false);

    if (fnError) {
      setError("Something went wrong. Please try again.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 h-full">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center h-full py-10"
          >
            <CheckCircle2 className="w-14 h-14 text-[#822168] mb-4" />
            <h3 className="font-satoshi text-xl font-bold text-gray-900 mb-2">
              Message Sent
            </h3>
            <p className="text-sm text-gray-600 max-w-xs">
              Thank you for reaching out - our team will get back to you
              shortly.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            noValidate
          >
            <h3 className="font-satoshi text-2xl font-bold tracking-tight text-gray-900 mb-1">
              Send a Message
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Fill in the form and we'll get back to you within 24 hours.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              {fields.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5"
                  >
                    {field.label}
                    {field.required && (
                      <span className="text-[#822168]"> *</span>
                    )}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    value={form[field.name]}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#822168] focus:border-transparent"
                  />
                </div>
              ))}
            </div>

            <div className="mb-5">
              <label
                htmlFor="subject"
                className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#822168] focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#822168] focus:border-transparent resize-none"
              />
            </div>

            {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 rounded-full bg-[#822168] py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-lg hover:bg-[#6d1b56] transition-colors disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
