// Helpers liens cliquables — clic-pour-appeler, mailto, LinkedIn pré-rempli.

export function telHref(num) {
  if (!num) return null
  return 'tel:' + num.replace(/[^+\d]/g, '')
}

export function mailtoHref(email) {
  if (!email) return null
  return 'mailto:' + email.trim()
}

// LinkedIn sans connecteur : lien de recherche pré-rempli (dirigeant + entreprise).
// On passe par une recherche Google ciblée linkedin.com/in → tombe direct sur le profil.
export function linkedinSearchHref(dirigeant, entreprise) {
  const q = [dirigeant, entreprise].filter(Boolean).join(' ')
  if (!q.trim()) return null
  return 'https://www.google.com/search?q=' + encodeURIComponent('site:linkedin.com/in ' + q)
}

// Détecte un email suspect : domaine de l'email ≠ domaine du site web (brief §4 PRODIGIO).
// On NE corrige rien : on signale seulement pour vérification manuelle.
export function emailSuspect(email, siteWeb) {
  if (!email || !siteWeb) return false
  const emailDom = (email.split('@')[1] || '').toLowerCase().trim()
  if (!emailDom) return false
  let siteDom = ''
  try {
    const u = siteWeb.startsWith('http') ? siteWeb : 'https://' + siteWeb
    siteDom = new URL(u).hostname.replace(/^www\./, '').toLowerCase()
  } catch { return false }
  if (!siteDom) return false
  // Comparaison sur la racine de domaine (gère sous-domaines / .fr vs .com partiels).
  const root = d => d.split('.').slice(-2).join('.')
  return root(emailDom) !== root(siteDom)
}
