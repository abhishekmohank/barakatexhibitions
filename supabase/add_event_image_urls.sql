-- Run this once in the Supabase SQL Editor.
-- Adds a column to store multiple images per event (the event detail page
-- shows all of them; the events grid keeps using image_url as the cover).

alter table events add column if not exists image_urls text[];
