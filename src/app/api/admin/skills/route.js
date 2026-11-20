import crypto from 'node:crypto';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { adminMutationError, getAdminRequestContext } from '@/lib/admin-api';
import { getSkills, readContentWithVersion, writeContent } from '@/lib/content';

const schema = z.object({
  id: z.string().max(90),
  category: z.string().trim().min(2).max(80),
  name: z.string().trim().min(2).max(80),
  visible: z.boolean(),
  sort_order: z.number().int().min(0),
});

export async function GET() {
  const context = await getAdminRequestContext();
  if (context.error) return context.error;
  try { return NextResponse.json(await getSkills()); }
  catch (error) { return adminMutationError(error); }
}

export async function POST(request) {
  const context = await getAdminRequestContext();
  if (context.error) return context.error;
  const input = await request.json().catch(() => null);
  const result = schema.omit({ id: true }).safeParse(input);
  if (!result.success) return NextResponse.json({ error: 'Invalid skill.' }, { status: 400 });
  try {
    const state = await readContentWithVersion('skills.json');
    const skill = { ...result.data, id: crypto.randomUUID() };
    await writeContent('skills.json', [...state.data, skill], 'content: add skill ' + skill.name, state.sha);
    return NextResponse.json(skill, { status: 201 });
  } catch (error) {
    return adminMutationError(error);
  }
}

export async function PUT(request) {
  const context = await getAdminRequestContext();
  if (context.error) return context.error;
  const input = await request.json().catch(() => null);
  const result = z.array(schema).max(150).safeParse(input);
  if (!result.success || new Set(result.data.map((skill) => skill.id)).size !== result.data.length) {
    return NextResponse.json({ error: 'Invalid skills list.' }, { status: 400 });
  }
  try {
    const state = await readContentWithVersion('skills.json');
    await writeContent('skills.json', result.data, 'content: update skills', state.sha);
    return NextResponse.json(result.data);
  } catch (error) {
    return adminMutationError(error);
  }
}
