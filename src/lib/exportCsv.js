// Export CSV (ouvrable dans Excel) d'une vue CRM. Pas de dépendance externe.
const COLS = [
  'entreprise', 'dirigeant_principal', 'ville', 'zone', 'categorie',
  'telephone', 'portable_dirigeant', 'email', 'email_dirigeant', 'site_web',
  'linkedin_dirigeant', 'siren', 'siret', 'forme_juridique', 'note_avis',
  'note_priorite', 'statut', 'qualification', 'date_relance', 'ne_plus_contacter', 'source'
]

function escape(v) {
  if (v == null) return ''
  const s = String(v)
  return /[",\n;]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s
}

export function exportCsv(rows, filename = 'prospects.csv') {
  const header = COLS.join(';')
  const lines = rows.map(r => COLS.map(c => escape(r[c])).join(';'))
  const csv = '﻿' + [header, ...lines].join('\n') // BOM pour Excel/accents
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url; a.download = filename; a.click()
  URL.revokeObjectURL(url)
}
