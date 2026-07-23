import { useAdminAuth } from "../../context/AdminAuthContext";
import { isSupabaseConfigured } from "../../supabaseClient";
import AdminLogin from "../../Pages/Admin/AdminLogin";

const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated, isAuthorized, user, signOut } =
    useAdminAuth();

  if (!isSupabaseConfigured) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
        <div className="max-w-md text-center">
          <h1 className="font-satoshi text-2xl font-bold text-gray-900 mb-3">
            Admin panel not configured
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Supabase environment variables are missing. Add
            VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to a .env.local file
            (see .env.example) and restart the dev server.
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">Loading…</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
        <div className="max-w-md text-center">
          <h1 className="font-satoshi text-2xl font-bold text-gray-900 mb-3">
            Access denied
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            Signed in as <span className="font-medium">{user.email}</span>,
            which is not authorized to access this panel.
          </p>
          <button
            onClick={signOut}
            className="rounded-full bg-[#822168] px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#6d1b56] transition-colors"
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
