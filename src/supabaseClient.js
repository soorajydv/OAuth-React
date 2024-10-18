import { createClient } from '@supabase/supabase-js';
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANNON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
