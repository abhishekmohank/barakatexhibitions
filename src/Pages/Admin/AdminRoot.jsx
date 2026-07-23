import { AdminAuthProvider } from "../../context/AdminAuthContext";
import ProtectedRoute from "../../Components/Admin/ProtectedRoute";
import AdminDashboard from "./AdminDashboard";

// Everything admin-related (auth context, login, dashboard, the three
// Manage* panels) lives behind this one lazy-loaded entry point in App.jsx,
// so public visitors never download or execute any of it, and never trigger
// the Supabase auth session check that AdminAuthProvider does on mount.
const AdminRoot = () => (
  <AdminAuthProvider>
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  </AdminAuthProvider>
);

export default AdminRoot;
