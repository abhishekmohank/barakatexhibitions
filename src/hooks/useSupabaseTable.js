import { useState, useEffect, useCallback } from "react";
import { supabase, isSupabaseConfigured } from "../supabaseClient";

export const useSupabaseTable = (table, options = {}) => {
  const { orderBy = "created_at", ascending = false } = options;
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refetch = useCallback(async () => {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const { data, error: fetchError } = await supabase
      .from(table)
      .select("*")
      .order(orderBy, { ascending });

    if (fetchError) setError(fetchError.message);
    else setRows(data ?? []);
    setLoading(false);
  }, [table, orderBy, ascending]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { rows, loading, error, refetch };
};
