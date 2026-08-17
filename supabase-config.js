// Supabase project config — shared by registration.html and login.html
// Supabase project config — shared by registration.html and login.html
const SUPABASE_URL = "https://gufajzpankaemsaceywq.supabase.co";
const SUPABASE_KEY = "sb_publishable__d9TsCMfb_btbgawBz3N9Q_6nWLKlFH";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// The forms only collect a code name (not an email), but Supabase Auth
// requires an email address. We derive a stable, unique placeholder email
// from the code name so Auth's built-in uniqueness + password handling
// still works without changing the UI.
function codenameToEmail(codename) {
  const clean = codename.trim().toLowerCase().replace(/[^a-z0-9._-]/g, "");
  return `${clean}@codename.local`;
}
