-- Run this once in the Supabase SQL Editor.
-- Extends the existing `leads` table so the Contact page's fuller form
-- (name/company/phone/subject/message) and the floating popup's simple
-- email capture share one unified inbox.

alter table leads add column if not exists name text;
alter table leads add column if not exists company text;
alter table leads add column if not exists phone text;
alter table leads add column if not exists subject text;
alter table leads add column if not exists message text;
