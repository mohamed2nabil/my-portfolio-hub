import Image from 'next/image';
import Link from 'next/link';
import { requireAdmin } from '@/lib/auth';
import { getAllProjects, getProfile } from '@/lib/content';

export default async function MediaPage() {
  await requireAdmin();
  const [projects, profile] = await Promise.all([getAllProjects(), getProfile()]);
  const assets = projects.flatMap((project) =>
    (project.images || []).map((asset) => ({ ...asset, projectId: project.id, projectTitle: project.title }))
  );

  return (
    <div>
      <h1 className="font-serif text-4xl">Media library</h1>
      <p className="mt-2 max-w-2xl text-secondary-ink">
        Project images and the shared formal portrait. Upload, replace, or remove image
        references from the relevant project editor.
      </p>
      <section className="surface mt-8 p-5">
        <h2 className="font-serif text-2xl">Shared portrait</h2>
        <div className="mt-4 flex flex-wrap items-center gap-5">
          <div className="relative h-32 w-32 overflow-hidden rounded-2xl bg-secondary-ground">
            <Image src={profile.profile_image_url || '/professional-portrait.png'} alt="Shared formal profile" fill sizes="128px" className="object-cover object-top" />
          </div>
          <Link className="button-primary px-4 py-3 text-xs" href="/admin/profile">Manage portrait</Link>
        </div>
      </section>
      <section className="mt-8">
        <h2 className="font-serif text-2xl">Project images ({assets.length})</h2>
        {assets.length === 0 ? (
          <p className="mt-4 text-sm text-secondary-ink">No project images have been uploaded.</p>
        ) : (
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {assets.map((image) => (
              <div key={image.projectId + ':' + (image.id || image.url)} className="surface overflow-hidden">
                <div className="relative aspect-video overflow-hidden bg-secondary-ground">
                  <Image src={image.url} alt={image.alt_text || image.projectTitle} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-contain" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium">{image.projectTitle}</p>
                  <Link className="mt-2 inline-block text-xs font-semibold text-ink-blue" href={'/admin/projects/' + encodeURIComponent(image.projectId) + '/edit'}>Edit images</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
