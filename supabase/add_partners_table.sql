-- Run this once in the Supabase SQL Editor.

create table if not exists partners (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  logo_url text not null,
  created_at timestamptz default now()
);

alter table partners enable row level security;

create policy "Public can read partners" on partners
  for select using (true);
create policy "Admins can insert partners" on partners
  for insert with check (is_admin());
create policy "Admins can delete partners" on partners
  for delete using (is_admin());
