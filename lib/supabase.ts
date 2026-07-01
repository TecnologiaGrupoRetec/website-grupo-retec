import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL ou Service Role Key estão ausentes nas variáveis de ambiente.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
