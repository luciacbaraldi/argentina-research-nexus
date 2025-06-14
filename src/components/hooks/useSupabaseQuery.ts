
import { useQuery } from "@tanstack/react-query";

// You can set this to your Supabase REST endpoint
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export function useSupabaseQuery(path: string, deps: any[] = []) {
  return useQuery({
    queryKey: [path, ...deps],
    queryFn: async () => {
      // Path is like "/publications?select=…"
      const url = `${SUPABASE_URL}/rest/v1${path}`;
      const res = await fetch(url, {
        headers: {
          apikey: SUPABASE_KEY || "",
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
      });
      if (!res.ok) throw new Error("Failed to fetch");
      return await res.json();
    },
    staleTime: 1000 * 60,
  });
}
