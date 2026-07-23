import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
  console.warn(
    "Supabase is not configured (missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY). " +
      "The site will fall back to its bundled static content, and the admin panel will be unusable until this is set."
  );
}

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        // Use sessionStorage instead of the default localStorage so the
        // admin's login doesn't survive closing the browser/tab - it still
        // persists across reloads and normal navigation within the same
        // session, just not once the tab/window is actually closed.
        storage: window.sessionStorage,
      },
    })
  : null;
