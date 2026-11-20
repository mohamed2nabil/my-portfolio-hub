'use client';

import { useEffect, useState } from 'react';

export default function SkillsPage() {
  const [skills, setSkills] = useState([]);
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    fetch('/api/admin/skills')
      .then(async (response) => {
        if (!response.ok) throw new Error('Could not load skills.');
        return response.json();
      })
      .then(setSkills)
      .catch((error) => setMessage(error.message));
  }, []);

  const change = (id, field, value) => {
    setSkills((items) => items.map((skill) => skill.id === id ? { ...skill, [field]: value } : skill));
    setMessage('Unsaved changes.');
  };

  async function save(items = skills) {
    setBusy(true);
    setMessage('Saving changes to GitHub…');
    try {
      const response = await fetch('/api/admin/skills', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(items),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(body.error || 'Unable to save skills.');
      setSkills(body);
      setMessage('Skills committed to GitHub.');
    } catch (error) {
      setMessage(error.message);
    } finally {
      setBusy(false);
    }
  }

  async function add(event) {
    event.preventDefault();
    if (busy) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    const payload = {
      category: String(fields.get('category') || '').trim(),
      name: String(fields.get('name') || '').trim(),
      visible: true,
      sort_order: Number(fields.get('sort_order') || 0),
    };
    setBusy(true);
    try {
      const response = await fetch('/api/admin/skills', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || 'Unable to add skill.');
      setSkills((items) => [...items, data]);
      form.reset();
      setMessage('Skill committed to GitHub.');
    } catch (error) {
      setMessage(error.message);
    } finally {
      setBusy(false);
    }
  }

  function remove(id) {
    if (!window.confirm('Remove this skill from the public portfolio on next save?')) return;
    setSkills((items) => items.filter((skill) => skill.id !== id));
    setMessage('Unsaved changes. Click Save all skills to persist.');
  }

  return (
    <div>
      <h1 className="font-serif text-4xl">Skills</h1>
      <p className="mt-2 text-secondary-ink">Edit skills, grouping, visibility, and order. Published updates appear on the landing page.</p>

      <form onSubmit={add} className="surface mt-8 grid gap-3 p-5 md:grid-cols-4">
        <input required name="category" placeholder="Category" className="rounded-xl border border-hairline bg-ground p-3" />
        <input required name="name" placeholder="Skill" className="rounded-xl border border-hairline bg-ground p-3" />
        <input name="sort_order" type="number" min="0" defaultValue="0" className="rounded-xl border border-hairline bg-ground p-3" />
        <button disabled={busy} className="button-primary px-4 py-3 text-xs disabled:opacity-50">Add skill</button>
      </form>

      {message && <p role="status" className="mt-4 text-sm text-ink-blue">{message}</p>}
      <div className="mt-6 grid gap-3">
        {skills.map((skill) => (
          <div className="surface grid items-center gap-3 p-4 md:grid-cols-[1fr_1fr_100px_80px_auto]" key={skill.id}>
            <label className="text-xs">Skill
              <input value={skill.name} onChange={(e) => change(skill.id, 'name', e.target.value)} className="mt-1 w-full rounded-xl border border-hairline bg-ground p-2 text-sm" />
            </label>
            <label className="text-xs">Group
              <input value={skill.category} onChange={(e) => change(skill.id, 'category', e.target.value)} className="mt-1 w-full rounded-xl border border-hairline bg-ground p-2 text-sm" />
            </label>
            <label className="text-xs">Order
              <input type="number" min="0" value={skill.sort_order} onChange={(e) => change(skill.id, 'sort_order', Number(e.target.value))} className="mt-1 w-full rounded-xl border border-hairline bg-ground p-2 text-sm" />
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={skill.visible} onChange={(e) => change(skill.id, 'visible', e.target.checked)} />
              Visible
            </label>
            <button type="button" onClick={() => remove(skill.id)} className="rounded-xl border border-hairline p-2 text-xs">Remove</button>
          </div>
        ))}
      </div>
      <button type="button" disabled={busy} onClick={() => save()} className="button-primary mt-6 px-5 py-3 text-xs disabled:opacity-50">Save all skills</button>
    </div>
  );
}
