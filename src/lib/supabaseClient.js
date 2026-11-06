import { createClient } from '@supabase/supabase-js'

// Supabase est optionnel au démarrage : sans variables d'env, l'app bascule en mode démo.
// Les données vivent dans le schéma « indescale » du projet prodigio-os, séparé de PRODIGIO OS.
const url = import.meta.env.VITE_SUPABASE_URL
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY
const schema = import.meta.env.VITE_SUPABASE_SCHEMA || 'indescale'

export const supabaseConfigured = Boolean(url && anon)
export const supabase = supabaseConfigured ? createClient(url, anon, { db: { schema } }) : null
