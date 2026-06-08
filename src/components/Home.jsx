import { Link } from 'react-router-dom'
import { isDemo } from '../lib/dataClient'

export default function Home() {
  return (
    <div className="home">
      <div className="brand">PROSPECTION · COLD CALL</div>
      <h2>Choisis ton activité</h2>
      <div className="doors">
        <Link to="/indescale" className="door">
          <h3>INDESCALE</h3>
          <p>Agence marketing premium. Explore un secteur → une catégorie → une ville, et tombe sur une liste de dirigeants prête à appeler.</p>
          <span className="tag">11 secteurs · enrichissement auto →</span>
        </Link>
        <Link to="/prodigio" className="door">
          <h3>PRODIGIO</h3>
          <p>Immobilier de luxe. Tes agences de prestige et marchands de biens, centralisés et rangés par ville.</p>
          <span className="tag">Agences de luxe · Marchands de biens →</span>
        </Link>
      </div>
      <div style={{ marginTop: 28 }}>
        <Link to="/relances" className="pill">📅 Mes relances du jour (tous secteurs)</Link>
      </div>
      {isDemo && (
        <div className="banner" style={{ marginTop: 22, textAlign: 'left' }}>
          <b>Mode démo</b> — l'app tourne sans clés API, avec des données d'exemple (fictives, signalées).
          Branche <b>Supabase</b> + <b>Google Places</b> pour passer en données réelles et persistantes.
        </div>
      )}
    </div>
  )
}
