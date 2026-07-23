import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircleMore } from "lucide-react";
import { ADMIN_PATH } from "../adminConfig";
import { supabase, isSupabaseConfigured } from "../supabaseClient";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const AUTO_OPEN_KEY = "contactPopupAutoOpened";
const AUTO_OPEN_DELAY = 3000;

const FloatingContactButton = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    setEmail("");
    setPhone("");
    setError("");
    setSubmitted(false);
    setSubmitting(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (pathname.startsWith(ADMIN_PATH)) return;
    if (sessionStorage.getItem(AUTO_OPEN_KEY)) return;

    const timer = setTimeout(() => {
      sessionStorage.setItem(AUTO_OPEN_KEY, "1");
      setIsOpen(true);
    }, AUTO_OPEN_DELAY);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() && !phone.trim()) {
      setError("Please enter your email or mobile number.");
      return;
    }
    if (email.trim() && !emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!isSupabaseConfigured) {
      setError("Contact form is not configured yet.");
      return;
    }

    setError("");
    setSubmitting(true);
    const { error: fnError } = await supabase.functions.invoke(
      "submit-lead",
      { body: { email: email || undefined, phone: phone || undefined } }
    );
    setSubmitting(false);

    if (fnError) {
      setError("Something went wrong. Please try again.");
      return;
    }
    setSubmitted(true);
  };

  if (pathname.startsWith(ADMIN_PATH)) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Contact us"
        className="group fixed bottom-6 right-6 z-40 flex items-center gap-0 lg:gap-2.5 rounded-full bg-gradient-to-br from-[#822168] to-[#a12e83] pl-3.5 pr-3.5 lg:pl-5 lg:pr-6 py-3.5 text-white shadow-lg shadow-[#822168]/30 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-[#822168]/40 hover:-translate-y-1 hover:scale-105 active:scale-95"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#822168] animate-pulse-ring"
        />
        <MessageCircleMore className="relative w-6 h-6 shrink-0" strokeWidth={2} />
        <span className="relative max-w-0 lg:max-w-none opacity-0 lg:opacity-100 overflow-hidden group-hover:max-w-[140px] group-hover:opacity-100 group-active:max-w-[140px] group-active:opacity-100 transition-all duration-300 ease-in-out whitespace-nowrap font-satoshi font-semibold text-sm">
          Contact Us
        </span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {submitted ? (
              <div className="text-center py-4">
                <h2 className="font-satoshi text-2xl font-bold tracking-tight text-gray-900 mb-3">
                  Thank You
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Thank you for contacting us - let's keep in touch!{" "}
                  {email
                    ? "A confirmation has been sent to your email."
                    : "Our team will reach out to you soon."}
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-satoshi text-2xl font-bold tracking-tight text-gray-900 mb-2">
                  Get in Touch
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  Enter your email or mobile number and we'll reach out to
                  you.
                </p>
                <form onSubmit={handleSubmit} noValidate className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#822168] focus:border-transparent"
                  />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#822168] focus:border-transparent"
                  />
                  {error && (
                    <p className="text-sm text-red-600 mt-2">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-5 w-full rounded-full bg-[#822168] py-3 text-sm font-semibold text-white shadow hover:bg-[#6d1b56] transition-colors disabled:opacity-50"
                  >
                    {submitting ? "Sending…" : "Submit"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingContactButton;
