import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
const types = { jpg: 'image/jpeg', png: 'image/png', webp: 'image/webp', avif: 'image/avif' };

export async function GET(_request, { params }) {
  const { path: segments } = await params;
  const filename = segments.at(-1);
  const validLocation = (segments.length === 2 && segments[0] === 'profile')
    || (segments.length === 3 && segments[0] === 'projects' && /^[a-z0-9-]+$/.test(segments[1]));
  const match = filename?.match(/^[a-f0-9-]{36}\.(jpg|png|webp|avif)$/i);
  if (!validLocation || !match) return new NextResponse(null, { status: 404 });

  const { GITHUB_CONTENT_OWNER: owner, GITHUB_CONTENT_REPO: repo, GITHUB_CONTENT_BRANCH: branch, GITHUB_CONTENT_TOKEN: token } = process.env;
  if (!owner || !repo || !branch || !token) {
    return NextResponse.json({ error: 'Media storage is unavailable.' }, { status: 503 });
  }

  const resource = ['public', 'uploads', ...segments].map(encodeURIComponent).join('/');
  const url = 'https://api.github.com/repos/' + encodeURIComponent(owner) + '/' + encodeURIComponent(repo)
    + '/contents/' + resource + '?ref=' + encodeURIComponent(branch);

  try {
    const remote = await fetch(url, {
      cache: 'no-store',
      headers: {
        Accept: 'application/vnd.github.raw+json',
        Authorization: 'Bearer ' + token,
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    if (!remote.ok) return new NextResponse(null, { status: remote.status === 404 ? 404 : 502 });
    return new NextResponse(remote.body, {
      headers: {
        'Content-Type': types[match[1].toLowerCase()],
        'Cache-Control': 'public, max-age=31536000, immutable',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch {
    return new NextResponse(null, { status: 502 });
  }
}
