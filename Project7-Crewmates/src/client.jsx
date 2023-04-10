import { createClient } from '@supabase/supabase-js';

const URL = "https://mffhralzlmkbgcejnfyp.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mZmhyYWx6bG1rYmdjZWpuZnlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNjAxMTYsImV4cCI6MTk5NjczNjExNn0.hdH3DjD7I_S9yfEvegJd1wJCMkh9pwIZX7LWxl96DaQ";

export const supabase = createClient(URL, API_KEY);

