import LandingClient from "./LandingClient";
import { getProfile, getSkills } from "@/lib/content";
import { getPublishedProjects } from "@/lib/projects";

export const revalidate = 60;

const labels = {
  "web-dev": "Web development",
  "data-analysis": "Data analysis",
  "data-engineer": "Data engineering",
  "ai-automation": "AI automation",
};

export default async function LandingPage() {
  const categories = Object.keys(labels);
  const [groups, allSkills, profile] = await Promise.all([
    Promise.all(categories.map(getPublishedProjects)),
    getSkills(),
    getProfile(),
  ]);
  const featured = groups.flat()
    .filter((project) => project.featured)
    .sort((a, b) => (a.featured_order ?? 99) - (b.featured_order ?? 99))
    .slice(0, 3)
    .map((project) => ({
      ...project,
      href: "/" + project.category + "/" + project.id,
      domain: labels[project.category],
    }));
  const order = ["Backend Engineering", "AI Engineering", "Data & Analytics", "Databases", "Infrastructure", "Web Development", "Automation"];
  const grouped = new Map();
  allSkills.filter((skill) => skill.visible !== false)
    .sort((a, b) => a.sort_order - b.sort_order)
    .forEach((skill) => {
      if (!order.includes(skill.category)) return;
      grouped.set(skill.category, [...(grouped.get(skill.category) || []), skill.name]);
    });
  const skillGroups = order.filter((name) => grouped.has(name)).slice(0, 4)
    .map((name) => [name, grouped.get(name).slice(0, 5).join(" · ")]);
  return <LandingClient featured={featured} skillGroups={skillGroups} profileImage={profile.profile_image_url} />;
}
