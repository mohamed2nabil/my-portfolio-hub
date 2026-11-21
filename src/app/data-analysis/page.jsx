import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Database,
  ChartNoAxesCombined,
} from "lucide-react";
import FlowDiagram from "@/components/FlowDiagram";
import ScrollReveal from "@/components/ScrollReveal";
import Typewriter from "@/components/Typewriter";
import { getPublishedProjects } from "@/lib/projects";
import { getProfile, getSkills } from "@/lib/content";

export const revalidate = 60;

const toolkitSections = [
  {
    title: "Python",
    role: "Analysis & modeling",
    Icon: Code2,
    categories: ["Python Libraries"],
    ids: [],
  },
  {
    title: "BI & Excel",
    role: "Dashboards & decisions",
    Icon: ChartNoAxesCombined,
    categories: ["Business Intelligence"],
    ids: ["power-bi"],
  },
  {
    title: "Data & SQL",
    role: "Querying & preparation",
    Icon: Database,
    categories: ["Analytics Databases", "Databases"],
    ids: [],
  },
];

export default async function DataAnalysisPage() {
  const [projects, profile, allSkills] = await Promise.all([
    getPublishedProjects("data-analysis"),
    getProfile(),
    getSkills(),
  ]);
  const toolkit = toolkitSections.map((section) => ({
    ...section,
    items: allSkills
      .filter(
        (skill) =>
          skill.visible !== false &&
          (section.categories.includes(skill.category) ||
            section.ids.includes(skill.id)),
      )
      .sort((a, b) => a.sort_order - b.sort_order)
      .map((skill) => skill.name),
  }));
  return (
    <div className="page-shell">
      <section className="border-b border-blue-700/20">
        <div className="content-frame grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="eyebrow text-ink-blue">
              Data analysis / business intelligence
            </p>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-[.98] tracking-tight sm:text-6xl">
              Less raw data.{" "}
              <em className="text-ink-blue">Clearer decisions.</em>
            </h1>
            <p className="mt-5 font-mono text-xs text-blue-800">
              <Typewriter
                text="Prepare → analyze → explain → decide"
                speed={50}
                loop={false}
              />
            </p>
            <p className="mt-4 max-w-xl leading-7 text-secondary-ink">
              I turn scattered data into answers you can act on — from Excel and
              Python to Power BI dashboards.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#projects" className="button-primary px-5 py-3 text-xs">
                See the results
              </a>
              <Link
                href="/#contact"
                className="rounded-xl border border-hairline px-5 py-3 font-mono text-xs font-bold uppercase tracking-wide transition hover:border-blue-600"
              >
                Discuss your data
              </Link>
            </div>
          </div>
          <div className="relative mx-auto aspect-[5/4] w-full max-w-sm overflow-hidden rounded-[1.7rem] border border-blue-700/20 shadow-sm">
            <Image
              src={
                profile.profile_image_url || "/professional-portrait.png"
              }
              alt="Mohamed Nabil"
              fill
              priority
              sizes="(max-width:1024px) 80vw,30vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>
      <section className="bg-secondary-ground">
        <div className="content-frame section-space">
          <p className="eyebrow text-ink-blue">From question to answer</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Make every chart earn its place.
          </h2>
          <div className="mt-8">
            <FlowDiagram
              accent="#3158a8"
              label="Analysis workflow"
              steps={[
                { title: "Question", detail: "What decision matters?" },
                { title: "Prepare", detail: "Clean & validate" },
                { title: "Analyze", detail: "Find the signal" },
                { title: "Explain", detail: "Show an actionable result" },
              ]}
            />
          </div>
        </div>
      </section>
      <section className="content-frame section-space" id="skills">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-ink-blue">How I work</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Tools with a purpose.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-secondary-ink">
            Libraries belong to Python. Tools belong to the outcome they enable.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {toolkit.map(({ title, role, Icon, items }, index) => (
            <ScrollReveal
              as="article"
              index={index}
              key={title}
              className="group rounded-[1.4rem] border border-hairline bg-ground p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500/45 hover:bg-white hover:shadow-lg focus-within:border-blue-500"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-700/10 text-blue-800">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="font-serif text-xl font-semibold">{title}</h3>
                  <p className="text-xs text-secondary-ink">{role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-secondary-ink">
                {items.join(" · ")}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <section
        id="projects"
        className="border-y border-hairline bg-secondary-ground"
      >
        <div className="content-frame section-space">
          <p className="eyebrow text-ink-blue">Selected analysis</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
            Results you can explore.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ScrollReveal index={index} key={project.id} className="h-full">
                <Link
                  href={`/data-analysis/${project.id}`}
                  className="group block h-full overflow-hidden rounded-[1.4rem] border border-hairline bg-ground transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-blue"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.poster}
                      alt={project.title}
                      fill
                      sizes="(max-width:768px) 100vw,33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-xl leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-xs font-bold uppercase tracking-widest text-blue-800">
                      Delivered insight
                    </p>
                    <p className="mt-1 line-clamp-2 text-sm leading-6 text-secondary-ink">
                      {project.outcome || project.shortDesc}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-800">
                      Explore case study <ArrowUpRight size={16} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
