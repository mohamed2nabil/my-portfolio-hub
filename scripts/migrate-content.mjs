import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const load = async (file, name) => {
  const text = await (await import('node:fs/promises')).readFile(resolve(root, file), 'utf8');
  const declaration = `export const ${name} =`;
  const literal = text.slice(text.indexOf(declaration) + declaration.length).trim().replace(/;\s*$/, '');
  return Function(`return (${literal})`)();
};
const normalize = (project, category, index) => ({
  ...project, category, slug: project.slug || project.id, short_description: project.short_description || project.shortDesc,
  description: project.description || '', github_url: project.github || '', live_demo_url: project.liveDemo || '',
  technologies: project.technologies || project.techStack || [], images: (project.images || []).map((image, imageIndex) => ({ id: `${project.id}-${imageIndex}`, url: image.url, alt_text: image.label || project.title, sort_order: imageIndex })),
  status: 'published', featured: false, featured_order: null, sort_order: index,
});
const groups = [
  ['src/data/web-dev-projects.js', 'webDevProjects', 'web-development.json', 'web-dev'],
  ['src/data/data-analysis-projects.js', 'dataAnalysisProjects', 'data-analysis.json', 'data-analysis'],
  ['src/data/ai-projects.js', 'aiProjects', 'ai-automation.json', 'ai-automation'],
];
await mkdir(resolve(root, 'content/projects'), { recursive: true });
for (const [file, name, output, category] of groups) {
  const projects = await load(file, name);
  await writeFile(resolve(root, 'content/projects', output), `${JSON.stringify(projects.map((item, i) => normalize(item, category, i)), null, 2)}\n`);
}
await writeFile(resolve(root, 'content/projects/data-engineering.json'), '[]\n');
await writeFile(resolve(root, 'content/profile.json'), `${JSON.stringify({ name: 'Mohamed Nabil', title: 'Software, Data & AI Engineer', email: '', github_url: 'https://github.com/mohamed2nabil', linkedin_url: 'https://www.linkedin.com/in/mohamed-nabil-41047a223/', biography: '', profile_image_url: '/images/mohamed-nabil-main.jpeg' }, null, 2)}\n`);
const skills = ['Laravel','PHP','Composer','MySQL','PostgreSQL','Docker','AI Integration','Embeddings','Vector Databases','Semantic Search','Next.js','JavaScript','React','Python','APIs','n8n','Power BI'];
await writeFile(resolve(root, 'content/skills.json'), `${JSON.stringify(skills.map((name, sort_order) => ({ id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, ''), name, category: 'Professional skills', visible: true, sort_order })), null, 2)}\n`);
