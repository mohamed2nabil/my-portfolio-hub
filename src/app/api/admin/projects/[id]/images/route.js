import crypto from 'node:crypto';
import { NextResponse } from 'next/server';
import { adminMutationError, getAdminRequestContext } from '@/lib/admin-api';
import { uploadImage } from '@/app/api/admin/media/route';
import { fileForCategory, getAllProjects, readContentWithVersion, writeContent } from '@/lib/content';

async function findProject(id) { return (await getAllProjects()).find((project) => project.id === id); }
async function saveImages(project, images, message) { const file = fileForCategory(project.category); const state = await readContentWithVersion(file); await writeContent(file, state.data.map((item) => item.id === project.id ? { ...item, images } : item), message, state.sha); }

export async function POST(request, { params }) {
  const context = await getAdminRequestContext(); if (context.error) return context.error;
  try { const { id } = await params; const project = await findProject(id); if (!project) return NextResponse.json({ error: 'Project not found.' }, { status: 404 }); const form = await request.formData(); const uploaded = await uploadImage(form.get('file'), `projects/${id}`); if (uploaded.error) return NextResponse.json(uploaded, { status: 400 }); const image = { id: crypto.randomUUID(), url: uploaded.path, alt_text: String(form.get('alt_text') || project.title).slice(0, 180), sort_order: Number(form.get('sort_order') || 0) }; await saveImages(project, [...(project.images || []), image], `content: attach image to ${id}`); return NextResponse.json({ ...image, commit: uploaded.commit }, { status: 201 }); } catch (error) { return adminMutationError(error); }
}

export async function PATCH(request, { params }) {
  const context = await getAdminRequestContext(); if (context.error) return context.error;
  try { const { id } = await params; const project = await findProject(id); const form = await request.formData(); const imageId = String(form.get('image_id') || ''); if (!project || !imageId) return NextResponse.json({ error: 'Project image not found.' }, { status: 404 }); const index = (project.images || []).findIndex((image) => image.id === imageId); if (index < 0) return NextResponse.json({ error: 'Project image not found.' }, { status: 404 }); const uploaded = await uploadImage(form.get('file'), `projects/${id}`); if (uploaded.error) return NextResponse.json(uploaded, { status: 400 }); const replacement = { ...project.images[index], url: uploaded.path, alt_text: String(form.get('alt_text') || project.images[index].alt_text).slice(0, 180) }; const images = project.images.map((image, itemIndex) => itemIndex === index ? replacement : image); await saveImages(project, images, `content: replace image on ${id}`); return NextResponse.json({ ...replacement, commit: uploaded.commit }, { status: 200 }); } catch (error) { return adminMutationError(error); }
}

export async function DELETE(request, { params }) {
  const context = await getAdminRequestContext(); if (context.error) return context.error;
  try { const { id } = await params; const project = await findProject(id); const imageId = new URL(request.url).searchParams.get('image_id'); if (!project || !imageId) return NextResponse.json({ error: 'Project image not found.' }, { status: 404 }); const images = (project.images || []).filter((image) => image.id !== imageId); if (images.length === (project.images || []).length) return NextResponse.json({ error: 'Project image not found.' }, { status: 404 }); await saveImages(project, images, `content: remove image from ${id}`); return new NextResponse(null, { status: 204 }); } catch (error) { return adminMutationError(error); }
}
