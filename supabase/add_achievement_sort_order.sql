-- Run this once in the Supabase SQL Editor.
-- Lets the admin panel drag-and-drop reorder achievements. Existing rows
-- are backfilled in their current (newest-first) order so nothing jumps
-- around the first time this loads.

alter table achievements add column if not exists sort_order integer;

update achievements a
set sort_order = sub.rn
from (
  select id, row_number() over (order by created_at desc) as rn
  from achievements
) sub
where a.id = sub.id and a.sort_order is null;
