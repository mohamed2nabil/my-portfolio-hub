import { createClient } from '@supabase/supabase-js';
import { webDevProjects } from '../src/data/web-dev-projects.js';
import { dataAnalysisProjects } from '../src/data/data-analysis-projects.js';
import { aiProjects } from '../src/data/ai-projects.js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL; const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) throw new Error('Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY before seeding.');
const db = createClient(url, key, { auth: { persistSession: false } });
const groups = [['web-dev', webDevProjects], ['data-analysis', dataAnalysisProjects], ['ai-automation', aiProjects]];
for (const [category, projects] of groups) for (const [index, project] of projects.entries()) {
  const row = { id: project.id, slug: project.id, title: project.title, category, short_description: project.shortDesc, description: project.description || null, problem: project.problem || null, solution: project.solution || null, github_url: project.github || null, live_demo_url: project.liveDemo || null, status: 'published', sort_order: index };
  const { error } = await db.from('projects').upsert(row, { onConflict: 'id' }); if (error) throw error;
  const images = (project.images || [{ url: project.poster, label: project.title }]).map((image, sort_order) => ({ project_id: project.id, url: image.url, alt_text: image.label || project.title, sort_order }));
  if (images.length) { const { error: imagesError } = await db.from('project_images').upsert(images, { onConflict: 'project_id,url' }); if (imagesError) console.warn(`Images for ${project.id} need a unique (project_id,url) index or manual import: ${imagesError.message}`); }
  for (const name of project.techStack || []) { const { data: technology, error: technologyError } = await db.from('technologies').upsert({ name }, { onConflict: 'name' }).select('id').single(); if (technologyError) throw technologyError; const { error: relationError } = await db.from('project_technologies').upsert({ project_id: project.id, technology_id: technology.id }); if (relationError) throw relationError; }
}
console.log('Seed completed without deleting existing records.');
