import { requireAdmin } from '@/lib/auth';
import ProjectForm from '@/components/admin/ProjectForm';
export default async function NewProjectPage() { await requireAdmin(); return <><h1 className="font-serif text-4xl">New project</h1><p className="mt-2 text-secondary-ink">Save as a draft until the case study is ready for public review.</p><div className="surface mt-8 p-6"><ProjectForm /></div></>; }
