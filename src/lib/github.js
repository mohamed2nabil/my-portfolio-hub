const apiBase = 'https://api.github.com';

function config() {
  const owner = process.env.GITHUB_CONTENT_OWNER;
  const repo = process.env.GITHUB_CONTENT_REPO;
  const branch = process.env.GITHUB_CONTENT_BRANCH;
  const token = process.env.GITHUB_CONTENT_TOKEN;
  if (!owner || !repo || !branch || !token) throw new Error('GitHub content storage is not configured.');
  return { owner, repo, branch, token };
}

async function request(path, options = {}) {
  const { token } = config();
  const response = await fetch(`${apiBase}${path}`, {
    ...options,
    headers: { Accept: 'application/vnd.github+json', Authorization: `Bearer ${token}`, 'X-GitHub-Api-Version': '2022-11-28', ...options.headers },
    cache: 'no-store',
  });
  if (!response.ok) {
    const detail = await response.json().catch(() => ({}));
    const error = new Error(detail.message || `GitHub request failed (${response.status}).`);
    error.status = response.status;
    throw error;
  }
  return response.status === 204 ? null : response.json();
}

function repoPath(path) { const { owner, repo } = config(); return `/repos/${owner}/${repo}/contents/${path.split('/').map(encodeURIComponent).join('/')}`; }

export async function getGitHubFile(path) {
  const { branch } = config();
  const file = await request(`${repoPath(path)}?ref=${encodeURIComponent(branch)}`);
  return { sha: file.sha, text: Buffer.from(file.content, 'base64').toString('utf8') };
}

export async function putGitHubFile(path, text, message, expectedSha) {
  const { branch } = config();
  const current = expectedSha ? { sha: expectedSha } : await getGitHubFile(path).catch((error) => error.status === 404 ? {} : Promise.reject(error));
  return request(repoPath(path), { method: 'PUT', body: JSON.stringify({ message, content: Buffer.from(text).toString('base64'), branch, ...(current.sha ? { sha: current.sha } : {}) }) });
}

export async function putGitHubFiles(files, message) {
  // GitHub Contents API is atomic per file. Validate every source SHA before writing;
  // callers never write image metadata until the image write succeeds.
  const results = [];
  for (const file of files) results.push(await putGitHubFile(file.path, file.text, message, file.sha));
  return results;
}

export async function getDeploymentStatus(commitSha) {
  const { owner, repo } = config();
  const statuses = await request(`/repos/${owner}/${repo}/commits/${commitSha}/status`);
  return statuses.state;
}

export function githubContentEnabled() {
  return Boolean(process.env.GITHUB_CONTENT_OWNER && process.env.GITHUB_CONTENT_REPO && process.env.GITHUB_CONTENT_BRANCH && process.env.GITHUB_CONTENT_TOKEN);
}
