// Completar con los datos del proyecto de Supabase (Project Settings > API).
// La "anon key" es publica por diseno: la seguridad la da Row Level Security,
// no el hecho de ocultar esta clave.
const SUPABASE_URL = 'https://lapajabcaegrwmkhokui.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhcGFqYWJjYWVncndta2hva3VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxMzA0NTUsImV4cCI6MjA5OTcwNjQ1NX0.bW_C1OIMOsu9nRLNwMo2RIT2MckHrZu6lslpJvRJptc';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
