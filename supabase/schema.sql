-- Run this once in the Supabase SQL Editor (Project -> SQL Editor -> New query).

-- ── Tables ──────────────────────────────────────────────────────────────

create table if not exists admins (
  email text primary key
);

create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  location text,
  date text,
  description text,
  link text,
  image_url text,
  created_at timestamptz default now()
);

create table if not exists achievements (
  id uuid primary key default gen_random_uuid(),
  exhibition text not null,
  title text not null,
  description text,
  image_url text,
  created_at timestamptz default now()
);

create table if not exists gallery_images (
  id uuid primary key default gen_random_uuid(),
  image_url text not null,
  created_at timestamptz default now()
);

-- Seed the admin allowlist - replace with your real admin email(s).
insert into admins (email) values ('admin@barakatexhibitions.com')
  on conflict (email) do nothing;

-- ── Admin check helper (SECURITY DEFINER so it can read `admins` even
--    though `admins` itself has no public read policy below) ─────────────

create or replace function is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from admins where email = auth.jwt() ->> 'email'
  );
$$;

-- ── Row Level Security ─────────────────────────────────────────────────
-- `admins` gets RLS with zero policies: nobody can read it over the API,
-- it's only ever consulted through the is_admin() function above.

alter table admins enable row level security;
alter table events enable row level security;
alter table achievements enable row level security;
alter table gallery_images enable row level security;

create policy "Public can read events" on events
  for select using (true);
create policy "Admins can insert events" on events
  for insert with check (is_admin());
create policy "Admins can update events" on events
  for update using (is_admin());
create policy "Admins can delete events" on events
  for delete using (is_admin());

create policy "Public can read achievements" on achievements
  for select using (true);
create policy "Admins can insert achievements" on achievements
  for insert with check (is_admin());
create policy "Admins can update achievements" on achievements
  for update using (is_admin());
create policy "Admins can delete achievements" on achievements
  for delete using (is_admin());

create policy "Public can read gallery_images" on gallery_images
  for select using (true);
create policy "Admins can insert gallery_images" on gallery_images
  for insert with check (is_admin());
create policy "Admins can delete gallery_images" on gallery_images
  for delete using (is_admin());

-- ── Storage bucket for uploaded images ─────────────────────────────────

insert into storage.buckets (id, name, public)
  values ('media', 'media', true)
  on conflict (id) do nothing;

create policy "Public can read media bucket"
  on storage.objects for select
  using (bucket_id = 'media');

create policy "Admins can upload to media bucket"
  on storage.objects for insert
  with check (bucket_id = 'media' and is_admin());

create policy "Admins can update media bucket"
  on storage.objects for update
  using (bucket_id = 'media' and is_admin());

create policy "Admins can delete from media bucket"
  on storage.objects for delete
  using (bucket_id = 'media' and is_admin());
