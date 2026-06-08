# INDESCALE / PRODIGIO — Architecture & chiffrage des coûts d'API

> **Livrable n°1.** Document à valider **avant** d'écrire le moindre code de scraping (cf. brief §3, §10, §11).
> Objectif : choisir les sources de données, fixer le schéma Supabase, et chiffrer les coûts d'API avec une stratégie de cache.

---

## 0. Le fil conducteur : on vise le DIRIGEANT, pas le standard

Positionnement **agence premium**. Le produit n'est pas « une liste de numéros à appeler », c'est **« un dirigeant nommé, joignable en direct »**. Toute la chaîne d'enrichissement est conçue pour remonter du lieu (l'entreprise) à la **personne qui décide** :

```
Google Places            API Recherche d'entreprises          Connecteur B2B (clé client)
(l'établissement)   →    (le représentant légal, GRATUIT)  →  (portable direct + email pro + LinkedIn)
nom, adresse,            nom du dirigeant, SIREN/SIRET,        Kaspr (mobile décideur)
tél standard, site,      forme juridique, siège               Dropcontact (email pro RGPD)
note/avis                                                      → fallback : LinkedIn = lien pré-rempli
```

La fiche CRM met donc en avant **le portable du dirigeant en vert** comme action d'appel prioritaire (comme le fichier PRODIGIO actuel), avec repli sur le téléphone standard si vide.

---

## 1. Sources de données retenues

| Donnée | Source retenue | Coût | Pourquoi |
|---|---|---|---|
| Nom, adresse, **téléphone standard**, site web, note/avis | **Google Places API (New)** — Text Search | Payant (voir §4), **gros free tier mensuel** | Source officielle, couverture exhaustive des entreprises locales, requête = `requete_scraping` + ville. |
| **Nom du dirigeant** (représentant légal), SIREN/SIRET, forme juridique, siège | **API Recherche d'entreprises** (`recherche-entreprises.api.gouv.fr`) | **Gratuit** (7 req/s) | Source publique officielle qui **diffuse les dirigeants** (≠ API SIRENE INSEE qui ne les diffuse PAS en open data, art. R.123-232 c. com.). C'est elle qui nous donne « qui dirige ». |
| **Portable direct du dirigeant** | **Connecteur B2B configurable** — défaut conseillé : **Kaspr** | Abonnement client (sa clé) | Kaspr = lignes directes des décideurs sourcées via LinkedIn → cœur du besoin premium. |
| **Email pro du dirigeant** | **Connecteur B2B configurable** — défaut conseillé : **Dropcontact** | Abonnement client (sa clé) | Dropcontact = français, conforme RGPD, vérifie/trouve l'email pro. Porte sa propre conformité de base. |
| **Profil LinkedIn** | Connecteur si dispo, sinon **lien de recherche pré-rempli** | Gratuit (fallback) | Jamais inventé : à défaut de connecteur, on ouvre LinkedIn/Google sur `nom dirigeant + entreprise`. |
| Email (à défaut de connecteur) | Extraction page contact du **site officiel** si présente | Gratuit | Best-effort, regex sur la page contact. Sinon **champ vide**. |

### Règle d'or (brief §11)
**Aucune donnée inventée.** Un dirigeant, un email ou un portable non trouvé reste **vide**, jamais deviné. Chaque champ enrichi porte sa **source** (`google_places`, `recherche_entreprises`, `kaspr`, `dropcontact`, `site_officiel`, `import_xlsx`, `manuel`).

### Pourquoi PAS l'API SIRENE de l'INSEE pour le dirigeant
L'API SIRENE est gratuite mais **ne diffuse pas les représentants légaux** en open data (contrainte légale). L'**API Recherche d'entreprises** de la DINUM expose, elle, le champ `dirigeants` — c'est donc la bonne source officielle pour le nom du patron. On garde SIRENE en option seulement pour des données d'établissement complémentaires si besoin.

---

## 2. Architecture technique

### Vue d'ensemble
```
┌─────────────────────────────┐        ┌──────────────────────────────┐
│  FRONT — Vite + React        │        │  SUPABASE (Postgres)          │
│  responsive, mobile-first    │  ◀───▶ │  prospects, notes, runs       │
│  Vercel                      │  reads │  Auth + RLS (propriétaire)    │
│  clic-pour-appeler tel:      │        └──────────────────────────────┘
│  navigation Secteur→Cat→Ville│                     ▲
└──────────────┬──────────────┘                     │ upsert (cache)
               │ « Rafraîchir cette ville »          │
               ▼                                     │
┌─────────────────────────────────────────────────────────────────────┐
│  BACKEND — Fonctions serverless Vercel (/api/*) — clés secrètes ici   │
│  /api/enrich-ville : Places → Recherche d'entreprises → connecteur B2B│
│  Cache : n'appelle JAMAIS les API si la ville est déjà en base        │
└─────────────────────────────────────────────────────────────────────┘
```

### Décisions
- **Front** : Vite + React, **mobile-first** sur les vues CRM (tu appelles depuis ton tél). Lien `tel:` / `mailto:` natifs.
- **Persistance** : **Supabase confirmé** — bon choix (tu l'utilises déjà, Postgres + RLS + Realtime + intégration Vercel native). C'est là que vivent statuts, notes datées, dates de relance, **cache des entreprises enrichies** et import PRODIGIO. **Pas de localStorage comme base.**
- **Enrichissement = côté backend** (fonctions serverless Vercel), **jamais dans le navigateur** : c'est la seule façon de garder les clés API secrètes. Déclenché **uniquement** par le bouton « Rafraîchir cette ville ».
- **Clés API** (Google Places, connecteur B2B) : **variables d'environnement** Vercel, jamais en dur ni commitées. L'API Recherche d'entreprises ne nécessite pas de clé.
- **Nomenclature** : `config/indescale_categories.json` = **source de vérité** de la navigation INDESCALE, chargé au runtime, éditable à la main. Rien en dur.
- **Déploiement** : GitHub → Vercel.

---

## 3. Schéma de base de données (Supabase / Postgres)

Moteur CRM **unifié** pour les deux entrées ; les champs spécifiques (PRODIGIO surtout) vont dans une colonne `data jsonb` pour rester flexible sans multiplier les tables.

### Table `prospects`
| Colonne | Type | Note |
|---|---|---|
| `id` | uuid PK | |
| `app` | text | `'indescale'` \| `'prodigio'` |
| `prodigio_type` | text null | `'agence_luxe'` \| `'marchand_biens'` |
| `secteur_id` | text null | INDESCALE (depuis le JSON) |
| `categorie` | text null | INDESCALE |
| `ville` | text | indexé |
| `zone` | text null | PRODIGIO |
| `entreprise` | text | nom commercial / raison sociale |
| `adresse` | text | |
| `telephone` | text | standard |
| `portable_dirigeant` | text | **action d'appel prioritaire (vert)** |
| `site_web` | text | |
| `email` | text | |
| `email_dirigeant` | text | |
| `dirigeant_principal` | text | **le décideur visé** |
| `linkedin_dirigeant` | text | URL profil ou lien de recherche |
| `siren` / `siret` | text null | |
| `forme_juridique` | text null | |
| `note_avis` | numeric null | note Google |
| `place_id` | text null | **clé de dédup Google** (unique) |
| `note_priorite` | text null | tri priorité |
| `statut` | text | défaut `'À contacter'` |
| `qualification` | text null | |
| `date_relance` | date null | vue « relances du jour » |
| `ne_plus_contacter` | bool | **opposition RGPD** → sort des vues d'appel |
| `email_suspect` | bool | **alerte** : domaine email ≠ domaine site_web |
| `source` | text | provenance de la donnée |
| `data` | jsonb | champs spécifiques (specialisation_percue, mandats_1m_plus, signaux_stagnation, zones_d_operation, taille_ca, reseau_franchise…) |
| `created_at` / `updated_at` | timestamptz | |

Contrainte d'unicité pour le cache : `unique(app, categorie, ville, place_id)`.

### Table `prospect_notes` (historique daté — on n'écrase jamais)
| Colonne | Type |
|---|---|
| `id` | uuid PK |
| `prospect_id` | uuid FK → prospects |
| `contenu` | text |
| `created_at` | timestamptz (horodatage de la note) |

### Table `enrichment_runs` (cache & « Rafraîchir cette ville »)
| Colonne | Type | Note |
|---|---|---|
| `id` | uuid PK | |
| `app` / `secteur_id` / `categorie` / `ville` | text | la combinaison enrichie |
| `last_refreshed_at` | timestamptz | si présent → on lit le cache, pas d'appel API |
| `nb_results` | int | |
| `status` | text | `ok` \| `running` \| `error` |
| `cost_estimate_eur` | numeric | coût estimé de la run (transparence) |

> Le statut/couleurs, les champs éditables (STATUT, QUALIFICATION, DATE RELANCE, NOTES), filtres/tri, barre de progression, export CSV/Excel, ajout manuel et flag « ne plus contacter » sont tous portés par ces tables.

---

## 4. Chiffrage des coûts d'API (le point à valider)

### 4.1 Google Places API (New) — la seule vraie source de coût

Tarifs 2026 (par tranche, **prix dégressifs au volume**) et **paliers gratuits mensuels par catégorie de SKU** :

| SKU | Free tier / mois | Prix indicatif /1 000 req |
|---|---|---|
| **Text Search** (champs Enterprise : tél, site, avis) | ~1 000 (Enterprise) à 5 000 (Pro) | ~**32–40 $** |
| Place Details (Pro) | 5 000 | ~17 $ |
| Place Details (Essentials) | 10 000 | ~5 $ |

**Optimisation clé** : avec la **nouvelle Places API**, une seule requête **Text Search** renvoie **jusqu'à 20 entreprises** avec, via `FieldMask`, directement le **téléphone + site + avis**. On évite ainsi un appel **Place Details par entreprise** (l'erreur coûteuse classique).

> 1 requête Text Search ≈ 20 entreprises. Avec pagination (3 pages max = 60 résultats), **2 à 3 requêtes suffisent pour peupler une catégorie × ville complète.**

### 4.2 Scénarios de coût

**Hypothèse de volume** : ~100 catégories (toutes confondues) × 11 villes ≈ **1 100 combinaisons** possibles, mais peuplées **à la demande** et **mises en cache à vie** (re-appel uniquement sur « Rafraîchir cette ville »).

| Scénario | Requêtes Text Search | Coût Places |
|---|---|---|
| **Usage réel mensuel** : ~20 nouvelles combinaisons/mois × 2,5 req | ~50 / mois | **0 €** (sous le free tier) |
| **Démo / amorçage ciblé** : 1 catégorie × 1 ville (livrable) | ~3 | **0 €** |
| **Amorçage massif** : les 1 100 combinaisons d'un coup × 2,5 req | ~2 750 | ~**0 à 90 €** *one-time* (selon part au-delà du free tier), puis caché à vie |

**Conclusion chiffrage** : en usage normal avec cache, le coût Google est **proche de 0 €/mois**. Le seul risque de facture est un amorçage massif en une fois — d'où le cache systématique + le bouton de rafraîchissement manuel (jamais d'appel automatique à l'ouverture d'une ville).

### 4.3 API Recherche d'entreprises (dirigeants) — **gratuit**
0 €. Limite 7 req/s → on enrichit en lot avec throttling et respect du `Retry-After` (429).

### 4.4 Connecteur B2B (portable + email du dirigeant) — **abonnement client, à la demande**
Payé directement par toi via ta propre clé, hors app. Ordres de grandeur 2026 :
- **Dropcontact** : ~16 €/1 000 crédits (email pro vérifié).
- **Kaspr** : crédits pour portables directs des décideurs.
- **Societeinfo** : à partir de ~29 €/mois ; **Pharow** : à partir de ~99 €/mois.

L'app n'engage **aucun** de ces coûts tant que tu n'as pas mis ta clé. Sans clé → email/portable vides, LinkedIn = lien de recherche.

---

## 5. Conformité RGPD (sera détaillée dans le README — livrable n°2)
Prospection B2B en France = licite sur la base de l'**intérêt légitime**, à 4 conditions : finalité en lien avec la fonction du prospect, information des personnes, **mention de la source** des données au démarchage, et **droit d'opposition** simple. Sources Places + Recherche d'entreprises = licites. Le flag **« Ne plus contacter / Opposition »** sort le prospect des vues d'appel. Durées de conservation raisonnables. → README complet à livrer avant l'app.

---

## 6. Ce dont j'ai besoin de toi pour avancer

1. **Validation du chiffrage et de l'architecture ci-dessus** (le brief gate le code dessus).
2. **Le fichier `PRODIGIO-prospection-master.xlsx`** : il est cité dans le brief mais **n'a pas été fourni** dans les pièces jointes (je n'ai reçu que le JSON). Sans lui, je ne peux pas faire l'import des 71 lignes PRODIGIO (livrable 3). → à m'envoyer.
3. **Choix du / des connecteur(s) B2B par défaut** à câbler (recommandation : **Kaspr pour le portable + Dropcontact pour l'email**, en cascade configurable).
4. Le périmètre de la **démo INDESCALE** : confirmer « 1 catégorie × 1 ville réellement peuplée » (proposition : **Piscines × Montpellier**, comme ton test de réussite).

---

## 7. Ordre de livraison (rappel brief §10)
1. ✅ **Ce document** (architecture + chiffrage) — **en attente de ta validation**.
2. ⏳ README RGPD.
3. ⏳ Application fonctionnelle (INDESCALE navigable sur les 11 secteurs + 1 cat×ville peuplée ; PRODIGIO importé 71 lignes filtrables + alerte emails ; moteur CRM complet mobile/desktop).

**On code après ton « go ».**
