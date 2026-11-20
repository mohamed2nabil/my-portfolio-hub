import { NextResponse } from 'next/server';

const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export async function POST(request) {
  let body;
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }); }
  const { name, email: senderEmail, title, message, company_website: honeypot } = body;
  if (honeypot) return NextResponse.json({ ok: true });
  if (![name, senderEmail, title, message].every((value) => typeof value === 'string' && value.trim()) || !email.test(senderEmail) || name.length > 120 || title.length > 180 || message.length > 5000) return NextResponse.json({ error: 'Invalid message' }, { status: 400 });
  const url = process.env.SUPABASE_URL; const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return NextResponse.json({ error: 'Contact storage is not configured' }, { status: 503 });
  const saved = await fetch(`${url}/rest/v1/contact_messages`, { method: 'POST', headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', Prefer: 'return=minimal' }, body: JSON.stringify({ name: name.trim(), email: senderEmail.trim().toLowerCase(), subject: title.trim(), message: message.trim(), source_page: '/' }) });
  if (!saved.ok) return NextResponse.json({ error: 'Unable to save message' }, { status: 502 });
  return NextResponse.json({ ok: true }, { status: 201 });
}
