// Statuts CRM + couleurs — repris du « Mode d'emploi » PRODIGIO et complétés (brief §5).
// La couleur de ligne change automatiquement selon le statut.

export const STATUTS = [
  { value: 'À contacter',            color: '#1f2a44', accent: '#5b8def', label: 'À contacter' },
  { value: 'Contacté – en attente',  color: '#2a2540', accent: '#a78bfa', label: 'Contacté – en attente' },
  { value: 'Appelé – pas répondu',   color: '#3a2b1c', accent: '#f59e0b', label: 'Appelé – pas répondu' },
  { value: 'À rappeler',             color: '#3a2333', accent: '#ec4899', label: 'À rappeler' },
  { value: 'RDV pris',               color: '#16304a', accent: '#38bdf8', label: 'RDV pris' },
  { value: 'Qualifié',               color: '#143036', accent: '#2dd4bf', label: 'Qualifié' },
  { value: 'Non qualifié',           color: '#2b2f36', accent: '#94a3b8', label: 'Non qualifié' },
  { value: 'En négociation',         color: '#2f2a14', accent: '#eab308', label: 'En négociation' },
  { value: 'Gagné',                  color: '#16351f', accent: '#22c55e', label: 'Gagné' },        // ligne verte
  { value: 'Perdu',                  color: '#23262b', accent: '#6b7280', label: 'Perdu' }          // ligne grisée
]

export const STATUT_VALUES = STATUTS.map(s => s.value)
export const DEFAULT_STATUT = 'À contacter'

const byValue = Object.fromEntries(STATUTS.map(s => [s.value, s]))
export function statutMeta(value) {
  return byValue[value] || STATUTS[0]
}

// Un prospect compte comme "contacté" (barre de progression) s'il a dépassé "À contacter".
export function estContacte(statut) {
  return statut && statut !== 'À contacter'
}

// Une relance ressort si sa date est aujourd'hui ou passée.
export function relanceDue(dateStr) {
  if (!dateStr) return false
  const today = new Date(); today.setHours(0, 0, 0, 0)
  const d = new Date(dateStr); d.setHours(0, 0, 0, 0)
  return d <= today
}
