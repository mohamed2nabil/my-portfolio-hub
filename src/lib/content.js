import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { getGitHubFile, githubContentEnabled, putGitHubFile, putGitHubFiles } from '@/lib/github';

const root = path.join(process.cwd(), 'content');
const projectFiles = { 'web-dev': 'web-development.json', 'data-analysis': 'data-analysis.json', 'data-engineer': 'data-engineering.json', 'ai-automation': 'ai-automation.json' };
const json = (text) => JSON.parse(text);
const pretty = (value) => `${JSON.stringify(value, null, 2)}\n`;

async function readLocal(relative) { return json(await readFile(path.join(root, relative), 'utf8')); }
export async function readContent(relative) {
  if (githubContentEnabled()) return json((await getGitHubFile(`content/${relative}`)).text);
  return readLocal(relative);
}
export async function readContentWithVersion(relative) {
  if (githubContentEnabled()) { const item = await getGitHubFile(`content/${relative}`); return { data: json(item.text), sha: item.sha }; }
  return { data: await readLocal(relative), sha: undefined };
}
export async function writeContent(relative, data, message, sha) {
  if (!githubContentEnabled()) throw new Error('GitHub content storage is not configured; content cannot be safely edited in production.');
  return putGitHubFile(`content/${relative}`, pretty(data), message, sha);
}
export async function writeMultipleContent(changes, message) {
  if (!githubContentEnabled()) throw new Error('GitHub content storage is not configured.');
  return putGitHubFiles(changes.map(({ relative, data, sha }) => ({
    path: 'content/' + relative,
    text: pretty(data),
    sha,
  })), message);
}
export async function getPortfolioProjects(category) { return readContent(`projects/${projectFiles[category]}`); }
export async function getAllProjects() { return (await Promise.all(Object.keys(projectFiles).map(getPortfolioProjects))).flat(); }
export function fileForCategory(category) { return `projects/${projectFiles[category]}`; }
export async function getProfile() { return readContent('profile.json'); }
export async function getSkills() { return readContent('skills.json'); }
