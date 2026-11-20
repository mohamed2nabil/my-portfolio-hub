import LandingClient from './LandingClient';
import { getProfile, getSkills } from '@/lib/content';
import { getPublishedProjects } from '@/lib/projects';

export const dynamic = 'force-dynamic';

const domains = {
  'web-dev': 'Web Development',
  'data-analysis': 'Data Analysis',
  'data-engineer': 'Data Engineering',
  'ai-automation': 'AI Automation',
};

export default async function LandingPage() {
  const [projects, profile, skills] = await Promise.all([
    Promise.all(Object.keys(domains).map(getPublishedProjects)),
    getProfile(),
    getSkills(),
  ]);
  const featured = projects.flat()
    .filter((project) => project.featured)
    .sort((a, b) => (a.featured_order ?? 999) - (b.featured_order ?? 999))
    .map((project) => ({
      ...project,
      href: '/' + project.category + '/' + project.id,
      domain: domains[project.category],
    }));
  const grouped = new Map();
  skills.filter((skill) => skill.visible).sort((a, b) => a.sort_order - b.sort_order)
    .forEach((skill) => grouped.set(skill.category, [...(grouped.get(skill.category) || []), skill.name]));
  const skillGroups = [...grouped.entries()].map(([title, names]) => [title, names.join(' · ')]);
  return <LandingClient featured={featured} profile={profile} skillGroups={skillGroups} />;
}
