-- Run this in the Supabase SQL Editor to create the missing "media" bucket.
-- Safe to run more than once.

insert into storage.buckets (id, name, public)
  values ('media', 'media', true)
  on conflict (id) do nothing;

drop policy if exists "Public can read media bucket" on storage.objects;
create policy "Public can read media bucket"
  on storage.objects for select
  using (bucket_id = 'media');

drop policy if exists "Admins can upload to media bucket" on storage.objects;
create policy "Admins can upload to media bucket"
  on storage.objects for insert
  with check (bucket_id = 'media' and is_admin());

drop policy if exists "Admins can update media bucket" on storage.objects;
create policy "Admins can update media bucket"
  on storage.objects for update
  using (bucket_id = 'media' and is_admin());

drop policy if exists "Admins can delete from media bucket" on storage.objects;
create policy "Admins can delete from media bucket"
  on storage.objects for delete
  using (bucket_id = 'media' and is_admin());
