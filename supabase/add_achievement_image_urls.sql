-- Run this once in the Supabase SQL Editor.
-- Adds a column to store multiple images per achievement (the card shows
-- the cover thumbnail; clicking it opens a lightbox with all images).

alter table achievements add column if not exists image_urls text[];
