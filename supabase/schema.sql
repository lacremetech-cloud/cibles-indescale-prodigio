-- ─────────────────────────────────────────────────────────────────────────────
-- INDESCALE / PRODIGIO — Schéma Supabase (Postgres)
-- À exécuter dans Supabase → SQL Editor. Moteur CRM unifié pour les deux entrées.
-- ─────────────────────────────────────────────────────────────────────────────

create extension if not exists "pgcrypto";

-- Table principale : un prospect = une ligne (entreprise + dirigeant + CRM).
create table if not exists prospects (
  id                  uuid primary key default gen_random_uuid(),
  app                 text not null check (app in ('indescale','prodigio')),
  prodigio_type       text check (prodigio_type in ('agence_luxe','marchand_biens')),
  secteur_id          text,
  categorie           text,
  ville               text,
  zone                text,
  entreprise          text not null,
  adresse             text,
  telephone           text,
  portable_dirigeant  text,          -- action d'appel prioritaire (vert)
  site_web            text,
  email               text,
  email_dirigeant     text,
  dirigeant_principal text,          -- le décideur visé
  linkedin_dirigeant  text,
  siren               text,
  siret               text,
  forme_juridique     text,
  note_avis           numeric,
  place_id            text,          -- clé de dédup Google
  note_priorite       text,
  statut              text not null default 'À contacter',
  qualification       text,
  date_relance        date,
  ne_plus_contacter   boolean not null default false,  -- opposition RGPD
  source              text,
  data                jsonb not null default '{}'::jsonb, -- champs spécifiques PRODIGIO
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

-- Dédup du cache d'enrichissement : une entreprise (place_id) par catégorie × ville.
create unique index if not exists prospects_dedup
  on prospects (app, categorie, ville, place_id)
  where place_id is not null;

create index if not exists prospects_app_idx       on prospects (app);
create index if not exists prospects_ville_idx      on prospects (ville);
create index if not exists prospects_cat_idx        on prospects (secteur_id, categorie);
create index if not exists prospects_relance_idx    on prospects (date_relance);

-- Historique des notes (daté, jamais écrasé).
create table if not exists prospect_notes (
  id          uuid primary key default gen_random_uuid(),
  prospect_id uuid not null references prospects(id) on delete cascade,
  contenu     text not null,
  created_at  timestamptz not null default now()
);
create index if not exists prospect_notes_idx on prospect_notes (prospect_id, created_at desc);

-- Journal d'enrichissement (cache & coûts).
create table if not exists enrichment_runs (
  id                uuid primary key default gen_random_uuid(),
  app               text,
  secteur_id        text,
  categorie         text,
  ville             text,
  last_refreshed_at timestamptz,
  nb_results        int default 0,
  status            text default 'ok',
  cost_estimate_eur numeric default 0,
  created_at        timestamptz not null default now()
);

-- updated_at auto.
create or replace function set_updated_at() returns trigger as $$
begin new.updated_at = now(); return new; end;
$$ language plpgsql;
drop trigger if exists prospects_updated_at on prospects;
create trigger prospects_updated_at before update on prospects
  for each row execute function set_updated_at();

-- ─── Row Level Security ───────────────────────────────────────────────────────
-- Outil mono-utilisateur (le propriétaire). Adapter selon ton mode d'auth.
alter table prospects       enable row level security;
alter table prospect_notes  enable row level security;
alter table enrichment_runs enable row level security;

-- Lecture/écriture pour utilisateur authentifié (à restreindre si multi-comptes).
create policy "auth read prospects"  on prospects       for select using (auth.role() = 'authenticated');
create policy "auth write prospects" on prospects       for all    using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "auth read notes"      on prospect_notes  for select using (auth.role() = 'authenticated');
create policy "auth write notes"     on prospect_notes  for all    using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "auth read runs"       on enrichment_runs for select using (auth.role() = 'authenticated');
-- Les écritures de cache passent par la clé service_role (fonction serverless), qui bypass RLS.
