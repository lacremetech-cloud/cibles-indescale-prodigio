// Couche d'accès aux données : Supabase si configuré, sinon store mémoire (mode démo).
// Le brief interdit localStorage comme base : le mode démo est volatil (rechargement = reset),
// la VRAIE persistance passe exclusivement par Supabase.

import { supabase, supabaseConfigured } from './supabaseClient'
import { seedProspects } from './demoData'
import { DEFAULT_STATUT } from './statuses'

export const isDemo = !supabaseConfigured

// ─── Store mémoire (mode démo) ───────────────────────────────────────────────
const demoStore = {
  prospects: seedProspects(),
  notes: {}, // { prospectId: [{id, contenu, created_at}] }
  listeners: new Set()
}
function emit() { demoStore.listeners.forEach(l => l()) }
function uid() { return 'p-' + Math.random().toString(36).slice(2, 10) }

export function subscribe(listener) {
  demoStore.listeners.add(listener)
  return () => demoStore.listeners.delete(listener)
}

// ─── API publique ────────────────────────────────────────────────────────────

export async function listProspects(filter = {}) {
  if (isDemo) {
    let rows = [...demoStore.prospects]
    rows = applyFilter(rows, filter)
    return rows
  }
  let q = supabase.from('prospects').select('*')
  if (filter.app) q = q.eq('app', filter.app)
  if (filter.prodigio_type) q = q.eq('prodigio_type', filter.prodigio_type)
  if (filter.secteur_id) q = q.eq('secteur_id', filter.secteur_id)
  if (filter.categorie) q = q.eq('categorie', filter.categorie)
  if (filter.ville) q = q.eq('ville', filter.ville)
  const { data, error } = await q.order('entreprise', { ascending: true })
  if (error) throw error
  return data || []
}

function applyFilter(rows, f) {
  return rows.filter(r =>
    (!f.app || r.app === f.app) &&
    (!f.prodigio_type || r.prodigio_type === f.prodigio_type) &&
    (!f.secteur_id || r.secteur_id === f.secteur_id) &&
    (!f.categorie || r.categorie === f.categorie) &&
    (!f.ville || r.ville === f.ville)
  )
}

export async function updateProspect(idValue, patch) {
  if (isDemo) {
    const r = demoStore.prospects.find(p => p.id === idValue)
    if (r) Object.assign(r, patch)
    emit()
    return r
  }
  const { data, error } = await supabase.from('prospects').update(patch).eq('id', idValue).select().single()
  if (error) throw error
  return data
}

export async function addProspect(prospect) {
  const row = {
    statut: DEFAULT_STATUT, qualification: '', date_relance: null,
    ne_plus_contacter: false, data: {}, source: 'manuel', ...prospect
  }
  if (isDemo) {
    row.id = uid()
    demoStore.prospects.unshift(row)
    emit()
    return row
  }
  const { data, error } = await supabase.from('prospects').insert(row).select().single()
  if (error) throw error
  return data
}

export async function listNotes(prospectId) {
  if (isDemo) return [...(demoStore.notes[prospectId] || [])].sort((a, b) => b.created_at.localeCompare(a.created_at))
  const { data, error } = await supabase.from('prospect_notes').select('*')
    .eq('prospect_id', prospectId).order('created_at', { ascending: false })
  if (error) throw error
  return data || []
}

// Ajout de note = historique daté, on n'écrase jamais l'existant (brief §5).
export async function addNote(prospectId, contenu) {
  const note = { id: uid(), prospect_id: prospectId, contenu, created_at: new Date().toISOString() }
  if (isDemo) {
    demoStore.notes[prospectId] = [note, ...(demoStore.notes[prospectId] || [])]
    emit()
    return note
  }
  const { data, error } = await supabase.from('prospect_notes')
    .insert({ prospect_id: prospectId, contenu }).select().single()
  if (error) throw error
  return data
}
