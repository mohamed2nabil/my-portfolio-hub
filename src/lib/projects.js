import { createSupabaseAdminClient } from '@/lib/supabase/admin';

export async function getPublishedProjects(category, fallback) {
  const supabase = createSupabaseAdminClient();
  if (!supabase) return fallback;
  const { data, error } = await supabase.from('projects').select('id, slug, title, category, short_description, description, problem, solution, github_url, live_demo_url, status, featured, featured_order, project_images(url, alt_text, sort_order), project_technologies(technologies(name))').eq('category', category).eq('status', 'published').order('sort_order');
  if (error || !data?.length) return fallback;
  return data.map((project) => ({ ...project, shortDesc: project.short_description, techStack: project.project_technologies?.map((item) => item.technologies?.name).filter(Boolean) ?? [], poster: project.project_images?.sort((a, b) => a.sort_order - b.sort_order)[0]?.url || '/images/mohamed-nabil-main.jpeg', images: project.project_images?.map((image) => ({ url: image.url, label: image.alt_text || project.title })) ?? [], liveDemo: project.live_demo_url, github: project.github_url }));
}

export async function getPublishedProject(id, fallback) {
  const supabase = createSupabaseAdminClient();
  const existing = fallback.find((project) => project.id === id);
  if (!supabase) return existing;
  const { data, error } = await supabase.from('projects').select('id, slug, title, category, short_description, description, problem, solution, github_url, live_demo_url, project_images(url, alt_text, sort_order), project_technologies(technologies(name))').eq('id', id).eq('status', 'published').single();
  if (error || !data) return existing;
  const images = data.project_images?.sort((a,b) => a.sort_order - b.sort_order).map((image) => ({ url: image.url, label: image.alt_text || data.title })) ?? [];
  return { ...data, shortDesc: data.short_description, techStack: data.project_technologies?.map((item) => item.technologies?.name).filter(Boolean) ?? [], images, poster: images[0]?.url || '/images/mohamed-nabil-main.jpeg', liveDemo: data.live_demo_url, github: data.github_url };
}
