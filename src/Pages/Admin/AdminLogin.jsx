import { useState } from "react";
import { useAdminAuth } from "../../context/AdminAuthContext";
import logo from "../../assets/images/logo-removebg.png";

const AdminLogin = () => {
  const { signInWithPassword, signInWithGoogle } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [googleSubmitting, setGoogleSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    const { error: signInError } = await signInWithPassword(email, password);
    if (signInError) setError(signInError);
    setSubmitting(false);
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setGoogleSubmitting(true);
    const { error: signInError } = await signInWithGoogle();
    if (signInError) {
      setError(signInError);
      setGoogleSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 text-center">
        <img src={logo} alt="" className="max-w-40 mx-auto mb-6" />
        <h1 className="font-satoshi text-2xl font-bold tracking-tight text-gray-900 mb-2">
          Admin Sign In
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          Sign in with your admin email and password to manage site content.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#822168] focus:border-transparent"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#822168] focus:border-transparent"
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-full bg-[#822168] py-3 text-sm font-semibold text-white shadow hover:bg-[#6d1b56] transition-colors disabled:opacity-50"
          >
            {submitting ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs text-gray-400">OR</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={googleSubmitting}
          className="w-full flex items-center justify-center gap-3 rounded-full border border-gray-300 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors disabled:opacity-50"
        >
          <svg className="w-4 h-4" viewBox="0 0 48 48" aria-hidden="true">
            <path
              fill="#FFC107"
              d="M43.6 20.5h-1.9V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l6-6C34.6 6 29.6 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.7-.4-3.5z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7l6.6 4.8C14.7 15.5 19 12.5 24 12.5c3.1 0 5.8 1.1 8 3l6-6C34.6 6 29.6 4 24 4c-7.5 0-14 4.2-17.7 10.7z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.5 0 10.4-1.9 14.2-5.1l-6.6-5.4C29.6 35.5 27 36.5 24 36.5c-5.2 0-9.6-3.3-11.3-8l-6.6 5.1C9.9 39.7 16.4 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.5h-1.9V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.5l6.6 5.4C41.4 35.6 44 30.2 44 24c0-1.3-.1-2.7-.4-3.5z"
            />
          </svg>
          {googleSubmitting ? "Redirecting…" : "Sign in with Google"}
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
