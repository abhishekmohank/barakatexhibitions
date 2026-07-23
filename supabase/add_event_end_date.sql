-- Run this once in the Supabase SQL Editor.
-- Lets an event auto-flip from "Upcoming" to "Past" once this date has
-- passed, instead of relying on someone remembering to change the Status
-- dropdown. Leave null for events whose date range isn't precise enough
-- (e.g. only a year is known) - those keep using the manual status field.

alter table events add column if not exists end_date date;
