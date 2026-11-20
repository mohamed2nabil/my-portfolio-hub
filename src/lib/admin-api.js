import { NextResponse } from 'next/server'; import { getAdminUser } from '@/lib/auth';
export async function getAdminRequestContext() { const admin = await getAdminUser(); return admin ? { admin } : { error: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) }; }
