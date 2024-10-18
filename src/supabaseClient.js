// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xjvuijgnsmzxbfjerdal.supabase.co'; // Replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqdnVpamduc216eGJmamVyZGFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxNTYwODgsImV4cCI6MjA0NDczMjA4OH0.kBR84hcfv9RBXDb5XIuDWUUWFbUE3lkWG6U0onpRM5s'; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// REACT_APP_SUPABASE_URL=https://xjvuijgnsmzxbfjerdal.supabase.co
// REACT_APP_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqdnVpamduc216eGJmamVyZGFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxNTYwODgsImV4cCI6MjA0NDczMjA4OH0.kBR84hcfv9RBXDb5XIuDWUUWFbUE3lkWG6U0onpRM5s
        