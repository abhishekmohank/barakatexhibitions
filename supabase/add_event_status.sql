-- Run this once in the Supabase SQL Editor.
-- Lets the admin panel tag each event as Upcoming or Past for the
-- Events page filter pills (the date field is free text and too
-- inconsistently formatted to parse reliably, so this is explicit instead).

alter table events add column if not exists status text default 'upcoming';
