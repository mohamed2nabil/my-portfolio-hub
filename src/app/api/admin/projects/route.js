import { NextResponse } from 'next/server';
import { adminMutationError, getAdminRequestContext } from '@/lib/admin-api';
import { projectSchema } from '@/lib/project-validation';
import { fileForCategory, getAllProjects, readContentWithVersion, writeContent } from '@/lib/content';

export async function GET() {
  const context = await getAdminRequestContext();
  if (context.error) return context.error;
  try {
    return NextResponse.json(await getAllProjects());
  } catch (error) {
    return adminMutationError(error);
  }
}

export async function POST(request) {
  const context = await getAdminRequestContext();
  if (context.error) return context.error;
  const body = await request.json().catch(() => null);
  const parsed = projectSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid project data.', details: parsed.error.flatten() }, { status: 400 });
  }

  try {
    const existing = await getAllProjects();
    if (existing.some((project) => project.id === parsed.data.id || project.slug === parsed.data.slug)) {
      return NextResponse.json({ error: 'Project ID and slug must be unique.' }, { status: 409 });
    }
    const file = fileForCategory(parsed.data.category);
    const state = await readContentWithVersion(file);
    const project = {
      ...parsed.data,
      images: [],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    const commit = await writeContent(file, [...state.data, project], 'content: add ' + project.id, state.sha);
    return NextResponse.json({ ...project, commit: commit.commit?.sha }, { status: 201 });
  } catch (error) {
    return adminMutationError(error);
  }
}
