import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabase/server';

export async function getAdminUser() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return null;
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data: profile } = await supabase.from('admin_profiles').select('id, role, display_name').eq('id', user.id).single();
  return profile?.role === 'admin' ? { ...profile, email: user.email } : null;
}

export async function requireAdmin() {
  const admin = await getAdminUser();
  if (!admin) redirect('/admin/login');
  return admin;
}
