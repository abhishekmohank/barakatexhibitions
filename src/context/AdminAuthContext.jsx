import { createContext, useContext, useEffect, useState } from "react";
import { supabase, isSupabaseConfigured } from "../supabaseClient";
import { ADMIN_PATH } from "../adminConfig";

const allowedEmails = (import.meta.env.VITE_ADMIN_EMAILS || "")
  .split(",")
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean);

const AdminAuthContext = createContext(null);

export const AdminAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const isAllowedEmail =
    user?.email && allowedEmails.includes(user.email.toLowerCase());

  const signInWithPassword = async (email, password) => {
    if (!isSupabaseConfigured) return { error: "Supabase is not configured." };
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error: error?.message };
  };

  const signInWithGoogle = async () => {
    if (!isSupabaseConfigured) return { error: "Supabase is not configured." };
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}${ADMIN_PATH}` },
    });
    return { error: error?.message };
  };

  const signOut = async () => {
    if (!isSupabaseConfigured) return;
    await supabase.auth.signOut();
  };

  const value = {
    user,
    loading,
    isAuthenticated: Boolean(user),
    isAuthorized: Boolean(user) && isAllowedEmail,
    signInWithPassword,
    signInWithGoogle,
    signOut,
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) {
    throw new Error("useAdminAuth must be used within AdminAuthProvider");
  }
  return ctx;
};
