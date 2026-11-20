create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(), name text not null, email text not null, subject text not null,
  message text not null, source_page text, is_read boolean not null default false, archived_at timestamptz, created_at timestamptz not null default now()
);
alter table public.contact_messages enable row level security;
create policy "service role only" on public.contact_messages for all using (false) with check (false);
