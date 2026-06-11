import { createClient } from '@supabase/supabase-js'

// Supabase est optionnel au démarrage : sans variables d'env, l'app bascule en mode démo.
const url = import.meta.env.VITE_SUPABASE_URL
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabaseConfigured = Boolean(url && anon)
export const supabase = supabaseConfigured ? createClient(url, anon) : null
