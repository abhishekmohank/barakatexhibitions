-- Run this once in the Supabase SQL Editor.

create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  quote text not null,
  name text not null,
  company text,
  country text,
  created_at timestamptz default now()
);

alter table testimonials enable row level security;

create policy "Public can read testimonials" on testimonials
  for select using (true);
create policy "Admins can insert testimonials" on testimonials
  for insert with check (is_admin());
create policy "Admins can update testimonials" on testimonials
  for update using (is_admin());
create policy "Admins can delete testimonials" on testimonials
  for delete using (is_admin());
