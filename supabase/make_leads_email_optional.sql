-- Run this once in the Supabase SQL Editor.
-- The floating contact popup now accepts a phone-only submission (no email
-- required if a mobile number is given), so `leads.email` can no longer be
-- NOT NULL.

alter table leads alter column email drop not null;
