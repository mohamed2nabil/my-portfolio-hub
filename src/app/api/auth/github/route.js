import { NextResponse } from 'next/server';
import { makeOAuthState, stateCookie } from '@/lib/auth';
export async function GET(request) {
  if (!process.env.GITHUB_OAUTH_CLIENT_ID || !process.env.ADMIN_GITHUB_USER_ID || !process.env.ADMIN_SESSION_SECRET) return NextResponse.json({ error: 'GitHub OAuth is not configured.' }, { status: 503 });
  const state = makeOAuthState();
  const url = new URL('https://github.com/login/oauth/authorize');
  url.searchParams.set('client_id', process.env.GITHUB_OAUTH_CLIENT_ID);
  url.searchParams.set('redirect_uri', new URL('/api/auth/github/callback', request.url).toString());
  url.searchParams.set('scope', 'read:user user:email'); url.searchParams.set('state', state);
  const response = NextResponse.redirect(url); response.cookies.set(stateCookie.name, state, stateCookie.options); return response;
}
