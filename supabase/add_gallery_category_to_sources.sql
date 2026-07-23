-- Run this once in the Supabase SQL Editor.
-- Lets the admin choose which Gallery page category (Events, Pavilions,
-- Awards, Behind the Scenes) an event's or achievement's photos should be
-- filed under, so uploading images anywhere automatically surfaces them on
-- the public Gallery page too - properly categorized, not just dumped in
-- one bucket.

alter table events add column if not exists gallery_category text;
alter table achievements add column if not exists gallery_category text;
