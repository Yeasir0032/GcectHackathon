import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ecqnzpihycmnsgsqnkrc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjcW56cGloeWNtbnNnc3Fua3JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2NTQyMTEsImV4cCI6MjAxMjIzMDIxMX0.mcpLW8KQKXcqfdtYcu6dKMxlxAHYfBWxFi7aWKeXiBs";
export const supabase = createClient(supabaseUrl, supabaseKey);
