-- Run this once in the Supabase SQL Editor.
-- Stores a small thumbnail alongside the full image so the gallery grid
-- doesn't have to load full-resolution photos just to show tiny squares.

alter table gallery_images add column if not exists thumb_url text;
