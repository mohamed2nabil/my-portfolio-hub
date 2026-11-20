import { notFound } from 'next/navigation';
import { requireAdmin } from '@/lib/auth';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import ProjectForm from '@/components/admin/ProjectForm';
export default async function EditProjectPage({ params }) { await requireAdmin(); const { id } = await params; const supabase = await createSupabaseServerClient(); const { data: project } = await supabase.from('projects').select('*').eq('id', id).single(); if (!project) notFound(); return <><h1 className="font-serif text-4xl">Edit project</h1><p className="mt-2 text-secondary-ink">Public URLs remain stable when the project ID is preserved.</p><div className="surface mt-8 p-6"><ProjectForm project={project}/></div></>; }
