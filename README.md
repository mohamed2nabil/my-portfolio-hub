# Mohamed Nabil — Premium Multi-Portfolio Hub

A Next.js portfolio with four independent visual experiences:

- **Web Development** — web applications and backend systems.
- **Data Analysis** — dashboards, reporting, and analytical case studies.
- **Data Engineering** — data pipelines and infrastructure.
- **AI Automation** — agents, workflow automation, and AI integrations.

The landing page acts as a hub. Project data, skills, and the shared profile are stored in JSON under `content/`. No database or Supabase is required.

## Local development

Requires Node.js 22 and npm.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Without GitHub content credentials, public pages read the checked-in JSON files. Admin writes require a configured GitHub content branch and token; local JSON files are not modified through the deployed Admin UI.

Quality checks:

```bash
npm run lint
npm run build
```

## GitHub OAuth admin access

Create a GitHub **OAuth App** using the hostname on which the admin will sign in:

- Homepage URL: your portfolio URL.
- Authorization callback URL: `https://YOUR_HOST/api/auth/github/callback`.

Configure these server-side environment variables:

| Variable | Purpose |
| --- | --- |
| `GITHUB_OAUTH_CLIENT_ID` | GitHub OAuth App client ID |
| `GITHUB_OAUTH_CLIENT_SECRET` | GitHub OAuth App client secret |
| `ADMIN_GITHUB_USER_ID` | The owner's GitHub numeric account ID (`204620318`) |
| `ADMIN_SESSION_SECRET` | A cryptographically generated session-signing secret |
| `GITHUB_CONTENT_OWNER` | `mohamed2nabil` |
| `GITHUB_CONTENT_REPO` | `my-portfolio-hub` |
| `GITHUB_CONTENT_BRANCH` | Branch used for live JSON and media updates |
| `GITHUB_CONTENT_TOKEN` | Server-only GitHub credential scoped to this repository with Contents read/write |
| `NEXT_PUBLIC_SITE_URL` | Public site URL used for metadata/config where applicable |

Generate a strong signing secret using a cryptographic generator (for example: `openssl rand -base64 48`). Never commit secrets or paste them into issues or chat logs.

The OAuth App uses its own credentials; the separately configured repository content token is required to write project JSON and images. A ChatGPT/GitHub connector does **not** supply runtime credentials to Vercel.

For safe verification, choose a dedicated test content branch. Do **not** use the production branch for initial write tests. GitHub OAuth callback URLs are host-specific; configure a separate OAuth App for a separate preview host if needed.

## Project and image storage

- `content/projects/*.json` — project records grouped by portfolio.
- `content/skills.json` — categorized skills, visibility and ordering.
- `content/profile.json` — name, links, biography, and shared portrait.
- `public/uploads/profile/` — immutable profile images.
- `public/uploads/projects/<id>/` — immutable project images.

The Admin Dashboard writes through server-side GitHub Contents/Git Data APIs. Project images are stored as actual binary files (not base64 text). Uploaded images are served from the configured content branch through `/api/content-media/...`, so preview environments do not depend on the code-deployment branch containing the same media files.

The public landing page reads featured projects and skills from the managed JSON content. Draft projects do not appear publicly. Successful Admin saves are Git commits, not proof of a successful Vercel deployment.

## Contact

The public form uses the owner's existing EmailJS integration. Keep these values from the working setup:

```text
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

These keys are designed to be used by EmailJS in the browser. Configure EmailJS domain restrictions and abuse protection in the EmailJS dashboard. No inbox database is used.

## Production release checklist

1. Verify GitHub OAuth login and rejection of unauthorized accounts on a stable preview domain.
2. Confirm JSON project create/edit/move/delete commits to a **test** content branch.
3. Upload a project image and verify it renders as an actual image on the preview site.
4. Replace the formal portrait and verify all five public areas use the new reference.
5. Update skills and featured projects and confirm the landing page reflects these changes.
6. Check the existing EmailJS form using its actual configured service.
7. Review the GitHub Actions quality gate, Lighthouse/mobile behavior, and public project links.
8. Only then merge the feature branch and choose the real production content branch.

**Do not enable production writes until the host, OAuth callback, write token, and Vercel project ownership are verified.**

## Security

Administrative APIs verify the signed session and the owner account ID on the server. The GitHub write token must remain server-only and never use the `NEXT_PUBLIC_` prefix. A push to the content branch is a source-code commit and should be protected by narrowly scoped credentials and branch policy.
