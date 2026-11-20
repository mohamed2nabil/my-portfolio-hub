import crypto from 'node:crypto';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const sessionName = 'portfolio_admin_session';
const stateName = 'portfolio_oauth_state';
const maxAge = 60 * 60 * 8;
const secret = () => process.env.ADMIN_SESSION_SECRET;
const b64 = (value) => Buffer.from(value).toString('base64url');
function sign(value) { return crypto.createHmac('sha256', secret()).update(value).digest('base64url'); }
function encode(payload) { const value = b64(JSON.stringify(payload)); return `${value}.${sign(value)}`; }
function decode(value) { if (!secret() || !value) return null; const [body, signature] = value.split('.'); const expected = body ? sign(body) : ''; if (!body || !signature || signature.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null; try { const result = JSON.parse(Buffer.from(body, 'base64url').toString()); return result.exp > Date.now() ? result : null; } catch { return null; } }
export function authorizedUserId() { return process.env.ADMIN_GITHUB_USER_ID; }
export async function getAdminUser() { const store = await cookies(); const session = decode(store.get(sessionName)?.value); return session?.id && session.id === authorizedUserId() ? session : null; }
export async function requireAdmin() { const user = await getAdminUser(); if (!user) redirect('/admin/login'); return user; }
export function makeSession(user) { return encode({ id: String(user.id), login: user.login, email: user.email || '', exp: Date.now() + maxAge * 1000 }); }
export function makeOAuthState() { return encode({ nonce: crypto.randomBytes(24).toString('base64url'), exp: Date.now() + 10 * 60 * 1000 }); }
export function validateOAuthState(state, expected) { return Boolean(state && expected && state.length === expected.length && crypto.timingSafeEqual(Buffer.from(state), Buffer.from(expected)) && decode(state)); }
export const sessionCookie = { name: sessionName, options: { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', maxAge, path: '/' } };
export const stateCookie = { name: stateName, options: { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', maxAge: 600, path: '/' } };
