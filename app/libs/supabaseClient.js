import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const options = {
    auth: {
      autoRefreshToken: true,
      persistSession: false, // Set to false
      detectSessionInUrl: true,
    },
  };

export const supabase = createClient(supabaseUrl, supabaseAnonKey, options);
