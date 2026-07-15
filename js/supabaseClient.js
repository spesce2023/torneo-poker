// Completar con los datos del proyecto de Supabase (Project Settings > API).
// La "anon key" es publica por diseno: la seguridad la da Row Level Security,
// no el hecho de ocultar esta clave.
const SUPABASE_URL = 'https://TU-PROYECTO.supabase.co';
const SUPABASE_ANON_KEY = 'TU-ANON-KEY';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
