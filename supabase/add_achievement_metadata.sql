-- Run this once in the Supabase SQL Editor.
-- Optional per-achievement metadata for the premium redesign: shown when
-- present, hidden gracefully when not (no fabricated data for existing rows).

alter table achievements add column if not exists location text;
alter table achievements add column if not exists year text;
