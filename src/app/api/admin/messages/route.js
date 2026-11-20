import { NextResponse } from 'next/server';
import { getAdminRequestContext } from '@/lib/admin-api';
export async function GET() { const context = await getAdminRequestContext(); if (context.error) return context.error; const { data, error } = await context.supabase.from('contact_messages').select('*').order('created_at', { ascending: false }); return error ? NextResponse.json({ error: error.message }, { status: 500 }) : NextResponse.json(data); }
