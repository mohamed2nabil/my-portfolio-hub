'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DeleteProjectButton({ id, title }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function remove() {
    if (!window.confirm('Delete "' + title + '" from the portfolio? This creates a Git commit.')) return;
    setBusy(true);
    setError('');
    try {
      const response = await fetch('/api/admin/projects/' + encodeURIComponent(id), { method: 'DELETE' });
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || 'Unable to delete the project.');
      }
      router.refresh();
    } catch (cause) {
      setError(cause.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <span className="inline-flex flex-col items-end gap-1">
      <button type="button" onClick={remove} disabled={busy} className="text-red-700 disabled:opacity-50">
        {busy ? 'Deleting…' : 'Delete'}
      </button>
      {error && <span role="alert" className="max-w-40 text-xs text-red-700">{error}</span>}
    </span>
  );
}
