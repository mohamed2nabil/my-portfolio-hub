import { NextResponse } from 'next/server';
import { getAdminUser } from '@/lib/auth';
import { createSupabaseServerClient } from '@/lib/supabase/server';

export async function getAdminRequestContext() {
  const admin = await getAdminUser();
  const supabase = await createSupabaseServerClient();
  if (!admin || !supabase) return { error: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) };
  return { admin, supabase };
}
