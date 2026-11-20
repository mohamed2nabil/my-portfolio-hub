import { requireAdmin } from '@/lib/auth';
export default async function MediaPage(){await requireAdmin();return <><h1 className="font-serif text-4xl">Media library</h1><p className="mt-2 max-w-xl text-secondary-ink">Upload project images through the project editor or replace the shared formal portrait from Profile. File validation and Storage policies are enforced server-side.</p></>;}
