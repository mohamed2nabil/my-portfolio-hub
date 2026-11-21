import { getPortfolioProjects } from '@/lib/content';

const categories = ['web-dev', 'data-analysis', 'data-engineer', 'ai-automation'];

function normalize(project) {
  const images = [...(project.images || [])].sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
  return {
    ...project,
    shortDesc: project.short_description || project.shortDesc,
    techStack: project.technologies || project.techStack || [],
    poster: images[0]?.url || project.poster || '/professional-portrait.png',
    images: images.map((image) => ({ url: image.url, label: image.alt_text || image.label || project.title })),
    liveDemo: project.live_demo_url || project.liveDemo,
    github: project.github_url || project.github,
  };
}

export async function getPublishedProjects(category) {
  if (!categories.includes(category)) throw new Error('Unknown portfolio category');
  // Local content is read when GitHub storage is not configured; remote failures
  // must not be silently hidden behind stale static JavaScript project arrays.
  const projects = await getPortfolioProjects(category);
  return projects
    .filter((project) => project.status === 'published')
    .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
    .map(normalize);
}

export async function getPublishedProject(id, _legacyFallback = [], category) {
  const scopes = category ? [category] : categories;
  const projects = (await Promise.all(scopes.map(getPublishedProjects))).flat();
  return projects.find((project) => project.id === id || project.slug === id) || null;
}
