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
  const { publicRead = false, ...fetchOptions } = options;
  const response = await fetch(`${apiBase}${path}`, {
    ...fetchOptions,
    headers: { Accept: 'application/vnd.github+json', Authorization: `Bearer ${token}`, 'X-GitHub-Api-Version': '2022-11-28', ...fetchOptions.headers },
    ...(publicRead ? { next: { revalidate: 60 } } : { cache: 'no-store' }),
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

export async function getGitHubFile(path, { publicRead = false } = {}) {
  const { branch } = config();
  const file = await request(`${repoPath(path)}?ref=${encodeURIComponent(branch)}`, { publicRead });
  return { sha: file.sha, text: Buffer.from(file.content, 'base64').toString('utf8') };
}

export async function putGitHubFile(path, text, message, expectedSha) {
  const { branch } = config();
  const current = expectedSha ? { sha: expectedSha } : await getGitHubFile(path).catch((error) => error.status === 404 ? {} : Promise.reject(error));
  return request(repoPath(path), { method: 'PUT', body: JSON.stringify({ message, content: (Buffer.isBuffer(text) ? text : Buffer.from(text, 'utf8')).toString('base64'), branch, ...(current.sha ? { sha: current.sha } : {}) }) });
}

export async function putGitHubFiles(files, message) {
  // One Git commit updates every JSON file atomically when moving a project
  // between portfolios; partial Contents API commits could lose projects.
  const { owner, repo, branch } = config();
  const base = '/repos/' + owner + '/' + repo;
  const refPath = 'heads/' + branch.split('/').map(encodeURIComponent).join('/');
  const ref = await request(base + '/git/ref/' + refPath);
  const currentHead = ref.object.sha;
  const currentCommit = await request(base + '/git/commits/' + currentHead);

  for (const file of files) {
    const current = await getGitHubFile(file.path);
    if (file.sha && current.sha !== file.sha) {
      const error = new Error('The content was changed in GitHub. Refresh and try again.');
      error.status = 409;
      throw error;
    }
  }

  const entries = [];
  for (const file of files) {
    const blob = await request(base + '/git/blobs', {
      method: 'POST',
      body: JSON.stringify({ content: file.text, encoding: 'utf-8' }),
    });
    entries.push({ path: file.path, mode: '100644', type: 'blob', sha: blob.sha });
  }

  const tree = await request(base + '/git/trees', {
    method: 'POST',
    body: JSON.stringify({ base_tree: currentCommit.tree.sha, tree: entries }),
  });
  const commit = await request(base + '/git/commits', {
    method: 'POST',
    body: JSON.stringify({ message, tree: tree.sha, parents: [currentHead] }),
  });
  await request(base + '/git/refs/' + refPath, {
    method: 'PATCH',
    body: JSON.stringify({ sha: commit.sha, force: false }),
  });
  return { commit: { sha: commit.sha } };
}

export async function getDeploymentStatus(commitSha) {
  const { owner, repo } = config();
  const statuses = await request(`/repos/${owner}/${repo}/commits/${commitSha}/status`);
  return statuses.state;
}

export function githubContentEnabled() {
  return Boolean(process.env.GITHUB_CONTENT_OWNER && process.env.GITHUB_CONTENT_REPO && process.env.GITHUB_CONTENT_BRANCH && process.env.GITHUB_CONTENT_TOKEN);
}
