-- Roofing Lexicon: Field Campaign — schema
-- Run via: npx zeabur@latest service exec --project-id 69c87cdba972bb88a7633301 --service-id 69c87cdca972bb88a7633302 -- psql -U postgres -d postgres -f rlfc-schema.sql

create extension if not exists "pgcrypto";

-- ============================================================
-- rlfc_profiles  (1:1 with auth.users)
-- ============================================================
create table if not exists public.rlfc_profiles (
  user_id              uuid primary key references auth.users(id) on delete cascade,
  display_name         text not null check (char_length(display_name) between 1 and 60),
  role                 text not null check (role in (
    'estimator','supplement_writer','inspector',
    'claims_adjuster','public_adjuster','other'
  )),
  streak_days          int not null default 0 check (streak_days >= 0),
  last_played_at       date,
  study_cred           int not null default 0 check (study_cred >= 0),
  mastery_passed_zones text[] not null default '{}',
  created_at           timestamptz not null default now(),
  updated_at           timestamptz not null default now()
);

create or replace function public.set_updated_at() returns trigger language plpgsql as $$
begin new.updated_at := now(); return new; end;
$$;

drop trigger if exists trg_rlfc_profiles_updated_at on public.rlfc_profiles;
create trigger trg_rlfc_profiles_updated_at
  before update on public.rlfc_profiles
  for each row execute function public.set_updated_at();

-- ============================================================
-- rlfc_earned_cards  (one row per (user, card))
-- ============================================================
create table if not exists public.rlfc_earned_cards (
  user_id         uuid not null references auth.users(id) on delete cascade,
  card_id         text not null,
  perfect_ever    boolean not null default false,
  holo_ever       boolean not null default false,
  legend_ever     boolean not null default false,
  first_earned_at timestamptz not null default now(),
  last_earned_at  timestamptz not null default now(),
  primary key (user_id, card_id)
);

create index if not exists idx_rlfc_earned_cards_user on public.rlfc_earned_cards(user_id);

-- ============================================================
-- rlfc_attempts  (immutable log)
-- ============================================================
create table if not exists public.rlfc_attempts (
  id                     uuid primary key default gen_random_uuid(),
  user_id                uuid not null references auth.users(id) on delete cascade,
  boss_id                text not null,
  is_mastery_exam        boolean not null default false,
  score                  int not null check (score between 0 and 100),
  passed                 boolean not null,
  was_perfect            boolean not null,
  streak_days_at_attempt int not null default 0,
  missed_term_keys       text[] not null default '{}',
  attempted_at           timestamptz not null default now()
);

create index if not exists idx_rlfc_attempts_user_time on public.rlfc_attempts(user_id, attempted_at desc);
create index if not exists idx_rlfc_attempts_user_boss on public.rlfc_attempts(user_id, boss_id);

-- ============================================================
-- RLS
-- ============================================================
alter table public.rlfc_profiles      enable row level security;
alter table public.rlfc_earned_cards  enable row level security;
alter table public.rlfc_attempts      enable row level security;

-- profiles: SELECT/INSERT/UPDATE own row
drop policy if exists rlfc_profiles_select_own on public.rlfc_profiles;
drop policy if exists rlfc_profiles_insert_own on public.rlfc_profiles;
drop policy if exists rlfc_profiles_update_own on public.rlfc_profiles;
create policy rlfc_profiles_select_own on public.rlfc_profiles
  for select using (auth.uid() = user_id);
create policy rlfc_profiles_insert_own on public.rlfc_profiles
  for insert with check (auth.uid() = user_id);
create policy rlfc_profiles_update_own on public.rlfc_profiles
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- earned_cards: SELECT/INSERT/UPDATE own rows
drop policy if exists rlfc_earned_select_own on public.rlfc_earned_cards;
drop policy if exists rlfc_earned_insert_own on public.rlfc_earned_cards;
drop policy if exists rlfc_earned_update_own on public.rlfc_earned_cards;
create policy rlfc_earned_select_own on public.rlfc_earned_cards
  for select using (auth.uid() = user_id);
create policy rlfc_earned_insert_own on public.rlfc_earned_cards
  for insert with check (auth.uid() = user_id);
create policy rlfc_earned_update_own on public.rlfc_earned_cards
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- attempts: SELECT/INSERT own rows; no UPDATE/DELETE
drop policy if exists rlfc_attempts_select_own on public.rlfc_attempts;
drop policy if exists rlfc_attempts_insert_own on public.rlfc_attempts;
create policy rlfc_attempts_select_own on public.rlfc_attempts
  for select using (auth.uid() = user_id);
create policy rlfc_attempts_insert_own on public.rlfc_attempts
  for insert with check (auth.uid() = user_id);
