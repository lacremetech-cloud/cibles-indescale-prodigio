import { Link } from 'react-router-dom'
import { isDemo } from '../lib/dataClient'

export default function Home() {
  return (
    <div className="home">
      <div className="home-eyebrow">PROSPECTION · COLD CALL</div>
      <h1 className="home-title">Deux univers, un seul moteur</h1>
      <p className="home-lead">Choisis ta porte d'entrée.</p>

      <div className="doors">
        {/* INDESCALE — dark mode tech / growth */}
        <Link to="/indescale" className="door door-indescale">
          <div className="door-aura" aria-hidden="true" />
          <div className="door-inner">
            <div className="door-eyebrow">AGENCE MARKETING PREMIUM</div>
            <div className="door-name">INDESCALE</div>
            <p className="door-desc">
              Explore un secteur → une catégorie → une ville, et tombe sur une liste de
              dirigeants prête à appeler. Enrichissement automatique.
            </p>
            <span className="door-cta">Entrer dans l'univers growth →</span>
          </div>
        </Link>

        {/* PRODIGIO — luxe éditorial / immobilier d'exception */}
        <Link to="/prodigio" className="door door-prodigio">
          <div className="door-inner">
            <div className="door-eyebrow">POUR L'IMMOBILIER D'EXCEPTION</div>
            <div className="door-name">Prodigio</div>
            <p className="door-desc">
              Vos agences de prestige et marchands de biens, centralisés et rangés par ville.
              Le calme, l'espace, la précision.
            </p>
            <span className="door-cta">Entrer dans l'univers luxe →</span>
          </div>
        </Link>
      </div>

      <div className="home-foot">
        <Link to="/relances" className="pill">📅 Mes relances du jour (tous secteurs)</Link>
      </div>

      {isDemo && (
        <div className="banner home-banner">
          <b>Mode démo</b> — PRODIGIO affiche déjà les 71 prospects réels ; INDESCALE tourne sur
          des exemples. Branche <b>Supabase</b> + <b>Google Places</b> pour la donnée réelle et persistante.
        </div>
      )}
    </div>
  )
}
