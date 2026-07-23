-- Run this once in the Supabase SQL Editor.

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  created_at timestamptz default now()
);

alter table leads enable row level security;

-- Anyone can submit a lead (the popup form itself), but only admins can read them.
create policy "Public can insert leads" on leads
  for insert with check (true);
create policy "Admins can read leads" on leads
  for select using (is_admin());
