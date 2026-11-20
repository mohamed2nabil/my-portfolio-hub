-- Core content model. Public reads are limited to published records; mutations occur only through an authenticated admin session.
create type public.portfolio_category as enum ('web-dev', 'data-analysis', 'data-engineer', 'ai-automation');
create type public.project_status as enum ('draft', 'published');

create table public.admin_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'editor' check (role in ('admin', 'editor')),
  display_name text, created_at timestamptz not null default now()
);
create table public.profile_settings (
  id boolean primary key default true check (id), name text not null default 'Mohamed Nabil', title text,
  biography text, email text, github_url text, linkedin_url text, profile_image_url text, updated_at timestamptz not null default now()
);
insert into public.profile_settings (id) values (true) on conflict (id) do nothing;
create table public.projects (
  id text primary key, slug text not null unique, title text not null, category public.portfolio_category not null,
  short_description text not null, description text, problem text, solution text, github_url text, live_demo_url text,
  status public.project_status not null default 'draft', featured boolean not null default false, featured_order integer,
  sort_order integer not null default 0, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.project_images (
  id uuid primary key default gen_random_uuid(), project_id text not null references public.projects(id) on delete cascade,
  url text not null, storage_path text, alt_text text, sort_order integer not null default 0, created_at timestamptz not null default now()
);
create unique index project_images_project_url_key on public.project_images(project_id, url);
create table public.technologies (id uuid primary key default gen_random_uuid(), name text not null unique);
create table public.project_technologies (project_id text references public.projects(id) on delete cascade, technology_id uuid references public.technologies(id) on delete cascade, primary key (project_id, technology_id));
create table public.skills (id uuid primary key default gen_random_uuid(), category text not null, name text not null, visible boolean not null default true, sort_order integer not null default 0, unique(category, name));

alter table public.admin_profiles enable row level security;
alter table public.profile_settings enable row level security;
alter table public.projects enable row level security;
alter table public.project_images enable row level security;
alter table public.technologies enable row level security;
alter table public.project_technologies enable row level security;
alter table public.skills enable row level security;
alter table public.contact_messages enable row level security;

create function public.is_admin() returns boolean language sql stable security definer set search_path = public as $$
  select exists(select 1 from public.admin_profiles where id = auth.uid() and role = 'admin');
$$;
create policy "public profile read" on public.profile_settings for select using (true);
create policy "public published projects read" on public.projects for select using (status = 'published' or public.is_admin());
create policy "public project images read" on public.project_images for select using (exists(select 1 from public.projects p where p.id = project_id and (p.status = 'published' or public.is_admin())));
create policy "public technologies read" on public.technologies for select using (true);
create policy "public project tech read" on public.project_technologies for select using (true);
create policy "public skills read" on public.skills for select using (visible or public.is_admin());
create policy "admins manage profiles" on public.admin_profiles for all using (public.is_admin()) with check (public.is_admin());
create policy "admins manage settings" on public.profile_settings for all using (public.is_admin()) with check (public.is_admin());
create policy "admins manage projects" on public.projects for all using (public.is_admin()) with check (public.is_admin());
create policy "admins manage images" on public.project_images for all using (public.is_admin()) with check (public.is_admin());
create policy "admins manage technologies" on public.technologies for all using (public.is_admin()) with check (public.is_admin());
create policy "admins manage project tech" on public.project_technologies for all using (public.is_admin()) with check (public.is_admin());
create policy "admins manage skills" on public.skills for all using (public.is_admin()) with check (public.is_admin());
create policy "admins manage messages" on public.contact_messages for all using (public.is_admin()) with check (public.is_admin());

insert into storage.buckets (id, name, public) values ('portfolio-media', 'portfolio-media', true) on conflict (id) do nothing;
create policy "public portfolio media read" on storage.objects for select using (bucket_id = 'portfolio-media');
create policy "admins upload portfolio media" on storage.objects for insert with check (bucket_id = 'portfolio-media' and public.is_admin());
create policy "admins update portfolio media" on storage.objects for update using (bucket_id = 'portfolio-media' and public.is_admin());
create policy "admins delete portfolio media" on storage.objects for delete using (bucket_id = 'portfolio-media' and public.is_admin());
