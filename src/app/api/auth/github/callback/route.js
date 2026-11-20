import { NextResponse } from 'next/server';
import { makeSession, sessionCookie, stateCookie, validateOAuthState } from '@/lib/auth';
export async function GET(request) {
  const url = new URL(request.url); const code = url.searchParams.get('code'); const state = url.searchParams.get('state'); const saved = request.cookies.get(stateCookie.name)?.value;
  if (!code || !validateOAuthState(state, saved)) return NextResponse.redirect(new URL('/admin/login?error=invalid_state', request.url));
  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ client_id: process.env.GITHUB_OAUTH_CLIENT_ID, client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET, code }) });
  const token = (await tokenResponse.json()).access_token; if (!token) return NextResponse.redirect(new URL('/admin/login?error=oauth_failed', request.url));
  const userResponse = await fetch('https://api.github.com/user', { headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' }, cache: 'no-store' }); const user = await userResponse.json();
  if (!userResponse.ok || String(user.id) !== process.env.ADMIN_GITHUB_USER_ID) return NextResponse.redirect(new URL('/admin/login?error=unauthorized', request.url));
  const response = NextResponse.redirect(new URL('/admin', request.url)); response.cookies.set(sessionCookie.name, makeSession(user), sessionCookie.options); response.cookies.set(stateCookie.name, '', { ...stateCookie.options, maxAge: 0 }); return response;
}
