'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const categories = ['web-dev', 'data-analysis', 'data-engineer', 'ai-automation'];

function Field({ label, name, defaultValue = '', type = 'text', textarea = false, required = false, disabled = false, hint }) {
  const inputProps = {
    name, defaultValue: defaultValue ?? '', required, disabled,
    className: 'mt-2 w-full rounded-xl border border-hairline bg-ground p-3 disabled:opacity-60',
  };
  return (
    <label className="block text-sm font-medium">
      {label}
      {textarea ? <textarea {...inputProps} rows={4} /> : <input {...inputProps} type={type} />}
      {hint && <span className="mt-1 block text-xs font-normal text-muted">{hint}</span>}
    </label>
  );
}

export default function ProjectForm({ project }) {
  const router = useRouter();
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const value = (key, fallback = '') => project?.[key] ?? fallback;
  const techStack = project?.technologies || project?.techStack || [];

  async function submit(event) {
    event.preventDefault();
    if (saving) return;
    setSaving(true);
    setError('');
    const form = Object.fromEntries(new FormData(event.currentTarget));
    const id = project?.id || String(form.id || '').trim();
    const payload = {
      id,
      slug: String(form.slug || '').trim() || id,
      title: String(form.title || '').trim(),
      category: form.category,
      short_description: String(form.short_description || '').trim(),
      outcome: String(form.outcome || '').trim() || null,
      description: String(form.description || '') || null,
      problem: String(form.problem || '') || null,
      solution: String(form.solution || '') || null,
      github_url: String(form.github_url || ''),
      live_demo_url: String(form.live_demo_url || ''),
      technologies: String(form.technologies || '').split(/[\n,]+/).map((item) => item.trim()).filter(Boolean),
      status: form.status,
      featured: form.featured === 'on',
      featured_order: form.featured_order === '' ? null : Number(form.featured_order),
      sort_order: Number(form.sort_order || 0),
    };
    if (project) delete payload.id;

    try {
      const endpoint = project ? '/api/admin/projects/' + encodeURIComponent(project.id) : '/api/admin/projects';
      const response = await fetch(endpoint, {
        method: project ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || 'Unable to save the project.');
      router.push(project ? '/admin/projects' : '/admin/projects/' + encodeURIComponent(id) + '/edit');
      router.refresh();
    } catch (cause) {
      setError(cause.message || 'Unable to save the project.');
      setSaving(false);
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Internal ID / URL path" name="id" defaultValue={value('id')} disabled={Boolean(project)} required={!project} hint="Use lowercase letters, numbers and hyphens. Cannot be changed later." />
        <Field label="Public slug" name="slug" defaultValue={value('slug')} hint="Optional; defaults to the ID." />
        <Field label="Title" name="title" defaultValue={value('title')} required />
        <label className="text-sm font-medium">
          Portfolio
          <select name="category" defaultValue={value('category', categories[0])} className="mt-2 w-full rounded-xl border border-hairline bg-ground p-3">
            {categories.map((category) => <option key={category} value={category}>{category}</option>)}
          </select>
        </label>
      </div>
      <Field label="Short description" name="short_description" defaultValue={value('short_description', value('shortDesc'))} required textarea />
      <Field label="Project result / deliverable" name="outcome" defaultValue={value('outcome')} hint="One clear sentence: what the solution delivers. Avoid invented ROI statistics." />
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Business problem" name="problem" defaultValue={value('problem')} textarea />
        <Field label="Solution and contribution" name="solution" defaultValue={value('solution')} textarea />
      </div>
      <Field label="Detailed case study" name="description" defaultValue={value('description')} textarea />
      <Field label="Technologies" name="technologies" defaultValue={techStack.join(', ')} textarea hint="Separate technologies with commas or line breaks." />
      <div className="grid gap-5 md:grid-cols-3">
        <Field label="GitHub URL" name="github_url" type="url" defaultValue={value('github_url', value('github'))} />
        <Field label="Live demo URL" name="live_demo_url" type="url" defaultValue={value('live_demo_url', value('liveDemo'))} />
        <label className="text-sm font-medium">
          Status
          <select name="status" defaultValue={value('status', 'draft')} className="mt-2 w-full rounded-xl border border-hairline bg-ground p-3">
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </label>
      </div>
      <div className="flex flex-wrap items-end gap-5">
        <label className="flex items-center gap-2 text-sm">
          <input name="featured" type="checkbox" defaultChecked={Boolean(project?.featured)} />
          Featured on landing page
        </label>
        <Field label="Featured order" name="featured_order" type="number" defaultValue={value('featured_order')} />
        <Field label="Portfolio order" name="sort_order" type="number" defaultValue={value('sort_order', 0)} />
      </div>
      {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
      <div className="flex flex-wrap gap-3">
        <button disabled={saving} className="button-primary px-5 py-3 text-xs disabled:opacity-60">
          {saving ? 'Saving…' : project ? 'Save changes' : 'Create project'}
        </button>
        <button type="button" onClick={() => router.back()} className="rounded-xl border border-hairline px-5 py-3 text-xs font-bold uppercase tracking-wide">
          Cancel
        </button>
      </div>
    </form>
  );
}
