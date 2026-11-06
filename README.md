# INDESCALE / PRODIGIO — Application de prospection (cold calling)

Outil CRM mobile-first pour démarcher des **dirigeants** : explore un secteur → une catégorie → une ville (INDESCALE), ou tes agences/marchands de luxe par ville (PRODIGIO), clique pour appeler, note le résultat. Tout depuis le téléphone ou l'ordinateur.

> **État actuel : mode démo activé.** Sans clés API : **PRODIGIO affiche déjà les 71 prospects RÉELS** du fichier maître (agences de luxe + marchands de biens), et **INDESCALE** tourne sur des exemples fictifs (signalés). Branche Supabase + Google Places pour rendre le tout persistant et enrichir INDESCALE.

---

## 1. Démarrage rapide (mode démo, sans clés)

```bash
npm install
npm run dev
```

Ouvre http://localhost:5173 → tu navigues, tu testes le CRM (statuts, notes, relances, clic-pour-appeler, ajout manuel, export). Les modifications sont volatiles tant que Supabase n'est pas branché.

## 2. Passer en données réelles

### a. Supabase (persistance)
1. Crée un projet sur [supabase.com](https://supabase.com).
2. SQL Editor → colle et exécute [`supabase/schema.sql`](supabase/schema.sql).
3. SQL Editor → exécute [`supabase/seed-prodigio.sql`](supabase/seed-prodigio.sql) pour **importer les 71 prospects PRODIGIO réels** (56 agences de luxe + 15 marchands de biens) issus du fichier maître. Idempotent : relançable sans doublon.
4. Settings → API → récupère `URL`, clé `anon`, clé `service_role`.
5. Renseigne `.env` (voir `.env.example`).

> Les 71 prospects PRODIGIO sont déjà visibles **en mode démo** (sans clé) via [`src/lib/prodigioData.js`](src/lib/prodigioData.js), généré depuis `PRODIGIO-prospection-master.xlsx`. Supabase ne sert qu'à les rendre **persistants et éditables**.

### b. Google Places API (New) — enrichissement INDESCALE
1. [Google Cloud Console](https://console.cloud.google.com) → nouveau projet.
2. Active **« Places API (New) »**.
3. Crée une clé API (restreins-la à Places API).
4. Mets-la dans `GOOGLE_PLACES_API_KEY` (variable **serveur**, jamais exposée).

### c. Stack le moins cher pour atteindre le dirigeant (démarrage à 0 €)
Par défaut, l'enrichissement utilise **uniquement des sources gratuites / quasi gratuites** :
- **Google Maps/Places** → entreprise (nom, adresse, tél standard, site, avis).
- **API Recherche d'entreprises (gouv)** → **nom du dirigeant** + SIREN — **gratuit**.
- **Email** → extraction de la page contact / mentions légales du **site officiel** (gratuit, best-effort).
- **LinkedIn** → lien de recherche Google pré-rempli (dirigeant + entreprise), gratuit.

**Optionnel — Pappers** (`PAPPERS_API_KEY`) : 100 crédits gratuits à l'inscription, enrichit le dirigeant (mandats, comptes, email/tél si publiés).

**Optionnel — connecteur B2B payant**, *uniquement pour le portable perso du dirigeant* (aucune source gratuite ne le donne) :
- **Kaspr** (mobile direct) : `B2B_CONNECTOR=kaspr` + `KASPR_API_KEY=…`
- **Dropcontact** (email pro vérifié, RGPD) : `B2B_CONNECTOR=dropcontact` + `DROPCONTACT_API_KEY=…`

Sans aucune de ces clés, l'app fonctionne et démarre à **0 €** ; les champs non trouvés restent vides. **Aucune donnée n'est jamais inventée.**

### Variables d'environnement
Copie `.env.example` → `.env` (local) et renseigne les mêmes variables côté **Vercel** (Project Settings → Environment Variables). Les `VITE_*` sont publiques (front) ; les autres sont **secrètes** (fonctions serverless).

## 3. Déploiement (GitHub → Vercel)
Connecte le repo à Vercel. Build Vite auto-détecté, fonctions `/api/*` déployées en serverless. Renseigne les variables d'environnement dans Vercel.

---

## 4. Architecture (résumé)
Détail complet : [`docs/01-ARCHITECTURE-ET-COUTS.md`](docs/01-ARCHITECTURE-ET-COUTS.md).

- **Front** : Vite + React, mobile-first. Navigation `Secteur → Catégorie → Ville → CRM` (INDESCALE), `Ville → CRM` (PRODIGIO).
- **Données** : Supabase (Postgres) pour statuts, notes datées, relances, cache d'enrichissement, import PRODIGIO.
- **Enrichissement** (serverless `/api/enrich-ville`) : Google Places → API Recherche d'entreprises (dirigeant, gratuit) → connecteur B2B. **Cache systématique**, appel API **uniquement** sur « Rafraîchir cette ville ».
- **Nomenclature** : `config/indescale_categories.json` (source de vérité éditable, rien en dur).

### Coûts d'API (résumé)
- **Google Places** : ~0 €/mois en usage normal grâce au cache + free tier. 1 requête Text Search ≈ 20 entreprises. Voir le détail chiffré dans le doc d'archi.
- **API Recherche d'entreprises** : gratuit.
- **Connecteur B2B** : payé via ton abonnement (ta clé), à la demande.

---

## 5. Conformité RGPD — prospection B2B en France

> Cadre informatif (à jour 2026), pas un avis juridique. La prospection B2B vers des professionnels est **licite sans consentement préalable**, sur la base de l'**intérêt légitime**, à conditions.

### 5.1 Base légale : l'intérêt légitime
La prospection commerciale B2B peut se fonder sur l'**intérêt légitime** du responsable de traitement (développer son activité), à condition que :
- le produit/service proposé soit **en lien avec la fonction** de la personne démarchée (un dirigeant d'entreprise de piscines pour une offre d'acquisition client : OK) ;
- l'**équilibre** soit respecté entre cet intérêt et les droits des personnes ;
- la personne soit **informée** et puisse **s'opposer** simplement.

L'email **professionnel nominatif** (`prenom.nom@entreprise.fr`) est une donnée personnelle, mais sa prospection reste autorisée en B2B sur cette base. La prospection **téléphonique** B2B sur ligne professionnelle n'est pas soumise à la liste d'opposition Bloctel (qui vise les particuliers).

### 5.2 Mention de la source des données (obligatoire)
Lors du démarchage, tu dois pouvoir indiquer **d'où viennent les données**. L'app stocke pour chaque fiche un champ **`source`** (`google_places`, `recherche_entreprises`, connecteur B2B, `import_xlsx`, `manuel`). Sources utilisées :
- **Google Places API** (données d'établissements publiques) ;
- **API Recherche d'entreprises** (données publiques officielles : dénomination, dirigeants, SIREN) ;
- **Connecteur B2B** : le fournisseur porte la conformité de sa propre base.

### 5.3 Information des personnes
Au premier contact (email notamment), informe de façon concise :
- ton **identité** et tes coordonnées (responsable de traitement) ;
- la **finalité** (prospection commerciale) et la **base légale** (intérêt légitime) ;
- la **source** des données ;
- les **droits** : accès, rectification, effacement, **opposition** ;
- un **moyen simple de s'opposer** (désinscription en 1 clic / réponse STOP).

### 5.4 Droit d'opposition → flag « Ne plus contacter »
Chaque fiche porte un flag **« Ne plus contacter / Opposition »**. Activé, le prospect **sort des vues d'appel** (filtre « masquer opposition » par défaut). C'est la matérialisation du droit d'opposition (art. 21 RGPD), exerçable immédiatement.

### 5.5 Données stockables & durées de conservation
- **Stockables** : coordonnées professionnelles (entreprise, dirigeant, tél, email pro, adresse, site, LinkedIn), statut commercial, notes d'appel.
- **Durée raisonnable** : conserver les données d'un prospect non converti **~3 ans** après le dernier contact (recommandation CNIL pour la prospection), puis suppression/anonymisation. Un prospect en opposition est conservé uniquement le temps nécessaire au respect de l'opposition (liste de non-sollicitation).
- **Sécurité** : accès protégé (auth Supabase + RLS), clés API en variables d'environnement, jamais committées.

### 5.6 Sources licites
Les API utilisées (**Google Places**, **API Recherche d'entreprises**) sont des sources de données **licites et officielles**. L'enrichissement email/LinkedIn passe par un **connecteur B2B** que tu actives avec ton propre abonnement, le fournisseur garantissant la conformité de sa base.

---

## 6. Structure du projet
```
config/indescale_categories.json   # nomenclature INDESCALE (source de vérité)
public/config/…                    # copie servie au runtime (éditable)
src/                               # front React (navigation + moteur CRM)
api/enrich-ville.js                # serverless : Places → dirigeant → B2B (cache)
supabase/schema.sql                # schéma Postgres
docs/01-ARCHITECTURE-ET-COUTS.md   # archi + chiffrage détaillé
```
