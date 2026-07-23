-- Run this once in the Supabase SQL Editor.
-- Optional per-photo metadata for the Gallery page's premium redesign:
-- title/location/year show in the hover overlay and lightbox when present
-- (hidden gracefully when not), category drives the filter pills.

alter table gallery_images add column if not exists title text;
alter table gallery_images add column if not exists location text;
alter table gallery_images add column if not exists year text;
alter table gallery_images add column if not exists category text default 'events';
