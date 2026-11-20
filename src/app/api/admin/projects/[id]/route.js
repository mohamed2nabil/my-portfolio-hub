import { NextResponse } from 'next/server';
import { adminMutationError, getAdminRequestContext } from '@/lib/admin-api';
import { projectUpdateSchema } from '@/lib/project-validation';
import {
  fileForCategory, getAllProjects, readContentWithVersion,
  writeContent, writeMultipleContent,
} from '@/lib/content';

export async function GET(_request, { params }) {
  const context = await getAdminRequestContext();
  if (context.error) return context.error;
  try {
    const { id } = await params;
    const project = (await getAllProjects()).find((item) => item.id === id);
    return project ? NextResponse.json(project) : NextResponse.json({ error: 'Not found.' }, { status: 404 });
  } catch (error) {
    return adminMutationError(error);
  }
}

export async function PATCH(request, { params }) {
  const context = await getAdminRequestContext();
  if (context.error) return context.error;
  const input = await request.json().catch(() => null);
  const parsed = projectUpdateSchema.safeParse(input);
  if (!parsed.success) return NextResponse.json({ error: 'Invalid project data.', details: parsed.error.flatten() }, { status: 400 });

  try {
    const { id } = await params;
    const all = await getAllProjects();
    const previous = all.find((item) => item.id === id);
    if (!previous) return NextResponse.json({ error: 'Not found.' }, { status: 404 });

    const project = {
      ...previous,
      ...parsed.data,
      id: previous.id,
      images: previous.images || [],
      updated_at: new Date().toISOString(),
    };
    if (all.some((item) => item.id !== id && item.slug === project.slug)) {
      return NextResponse.json({ error: 'Project slug is already used.' }, { status: 409 });
    }

    const sourcePath = fileForCategory(previous.category);
    const targetPath = fileForCategory(project.category);
    const source = await readContentWithVersion(sourcePath);
    if (sourcePath !== targetPath) {
      const target = await readContentWithVersion(targetPath);
      await writeMultipleContent([
        { relative: sourcePath, data: source.data.filter((item) => item.id !== id), sha: source.sha },
        { relative: targetPath, data: [...target.data, project], sha: target.sha },
      ], 'content: move ' + id);
    } else {
      await writeContent(sourcePath, source.data.map((item) => item.id === id ? project : item), 'content: update ' + id, source.sha);
    }
    return NextResponse.json(project);
  } catch (error) {
    return adminMutationError(error);
  }
}

export async function DELETE(_request, { params }) {
  const context = await getAdminRequestContext();
  if (context.error) return context.error;
  try {
    const { id } = await params;
    const previous = (await getAllProjects()).find((item) => item.id === id);
    if (!previous) return NextResponse.json({ error: 'Not found.' }, { status: 404 });
    const file = fileForCategory(previous.category);
    const state = await readContentWithVersion(file);
    await writeContent(file, state.data.filter((item) => item.id !== id), 'content: delete ' + id, state.sha);
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return adminMutationError(error);
  }
}
