import { useEffect, useState } from 'react'
import { supabase, supabaseConfigured } from '../lib/supabaseClient'

// Porte d'entrée : sans session, on demande l'email et on envoie un lien de connexion.
// L'accès aux données est ensuite filtré côté base (table indescale.membres).
export default function AuthGate({ children }) {
  const [session, setSession] = useState(undefined)
  const [email, setEmail] = useState('')
  const [etat, setEtat] = useState('')

  useEffect(() => {
    if (!supabaseConfigured) return
    supabase.auth.getSession().then(({ data }) => setSession(data.session))
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s))
    return () => sub.subscription.unsubscribe()
  }, [])

  if (!supabaseConfigured) return children
  if (session === undefined) return null
  if (session) return children

  async function envoyer(e) {
    e.preventDefault()
    setEtat('envoi')
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: window.location.origin, shouldCreateUser: true }
    })
    setEtat(error ? 'erreur:' + error.message : 'ok')
  }

  return (
    <div className="shell" data-brand="home">
      <div className="app" style={{ maxWidth: 420, margin: '15vh auto', padding: 24 }}>
        <h1 style={{ marginBottom: 8 }}>Connexion</h1>
        <p style={{ opacity: .7, marginBottom: 20 }}>Entre ton email : tu reçois un lien pour te connecter.</p>
        <form onSubmit={envoyer}>
          <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
            placeholder="ton@email.com"
            style={{ width: '100%', padding: 14, borderRadius: 12, border: '1px solid #333', background: '#111', color: '#fff', fontSize: 16 }} />
          <button type="submit" disabled={etat === 'envoi'}
            style={{ width: '100%', marginTop: 12, padding: 14, borderRadius: 12, border: 0, background: '#8B5CF6', color: '#fff', fontSize: 16, fontWeight: 600 }}>
            {etat === 'envoi' ? 'Envoi…' : 'Recevoir le lien'}
          </button>
        </form>
        {etat === 'ok' && <p style={{ marginTop: 16 }}>✅ Lien envoyé. Ouvre ton email sur cet appareil.</p>}
        {etat.startsWith('erreur:') && <p style={{ marginTop: 16, color: '#f87171' }}>{etat.slice(7)}</p>}
      </div>
    </div>
  )
}
