-- ─────────────────────────────────────────────────────────────────────────────
-- INDESCALE Studio — maquettes de sites envoyées en prospection
-- À exécuter APRÈS schema.sql. Idempotent.
-- ─────────────────────────────────────────────────────────────────────────────

-- Une maquette = un site premium généré pour un prospect.
create table if not exists studio_sites (
  id               uuid primary key default gen_random_uuid(),
  prospect_id      uuid not null references prospects(id) on delete cascade,
  secteur          text not null,                 -- ex. dentaire-implants
  slug             text not null unique,          -- ex. cabinet-mertens-7k2p (impossible à deviner)
  url_maquette     text,                          -- https://apercu.indescale.fr/<slug>
  capture_avant    text,                          -- URL image du site actuel
  capture_apres    text,                          -- URL image de la maquette
  score_site       numeric,                       -- faiblesse du site actuel /10
  insights         jsonb not null default '[]',   -- [{texte, preuve}]
  email_objet      text,
  email_corps      text,
  whatsapp_texte   text,
  mobile_whatsapp  text,                          -- 06/07 uniquement, sinon null
  statut           text not null default 'Prêt'
                   check (statut in ('Brouillon','Prêt','Validé','Envoyé','Ouvert','Répondu','RDV','Vendu','Perdu','Expiré')),
  valide_at        timestamptz,                   -- Rayyân valide → Make envoie l'email
  email_envoye_at  timestamptz,
  whatsapp_envoye_at timestamptz,
  relance_at       timestamptz,
  expire_at        timestamptz default (now() + interval '14 days'),
  nb_vues          int not null default 0,
  derniere_vue_at  timestamptz,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);
create index if not exists studio_sites_statut_idx on studio_sites (statut);
create index if not exists studio_sites_prospect_idx on studio_sites (prospect_id);

-- Chaque ouverture de maquette (pour le badge 🔥 et l'alerte Make).
create table if not exists studio_vues (
  id         uuid primary key default gen_random_uuid(),
  site_id    uuid not null references studio_sites(id) on delete cascade,
  vu_at      timestamptz not null default now(),
  appareil   text
);

-- Compteur de vues tenu à jour automatiquement ; passe en « Ouvert » à la 1re vue.
create or replace function studio_on_vue() returns trigger as $$
begin
  update studio_sites
     set nb_vues = nb_vues + 1,
         derniere_vue_at = new.vu_at,
         statut = case when statut = 'Envoyé' then 'Ouvert' else statut end
   where id = new.site_id;
  return new;
end; $$ language plpgsql;
drop trigger if exists studio_vues_count on studio_vues;
create trigger studio_vues_count after insert on studio_vues
  for each row execute function studio_on_vue();

drop trigger if exists studio_sites_updated_at on studio_sites;
create trigger studio_sites_updated_at before update on studio_sites
  for each row execute function set_updated_at();
