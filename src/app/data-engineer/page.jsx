import ProfilePortrait from "@/components/ProfilePortrait";
import HeroSquares from "@/components/HeroSquares";
import Link from "next/link";
import FlowDiagram from "@/components/FlowDiagram";
import ScrollReveal from "@/components/ScrollReveal";
import Typewriter from "@/components/Typewriter";
import { getPublishedProjects } from "@/lib/projects";
import { getProfile } from "@/lib/content";
export const revalidate = 60;
const toolkit = [
  "Python & SQL",
  "SQL Server",
  "Warehousing",
  "ETL / ELT",
  "SSIS",
  "Dimensional modeling",
  "Spark & Kafka",
  "Airflow",
  "MongoDB",
  "Docker & Azure",
];
export default async function DataEngineerPage() {
  const [projects, profile] = await Promise.all([
    getPublishedProjects("data-engineer", []),
    getProfile(),
  ]);
  return (
    <div className="page-shell">
      <section className="relative isolate overflow-hidden border-b border-amber-700/25">
        <HeroSquares lineColor="rgba(185, 106, 37, .10)" hoverFillColor="rgba(185, 106, 37, .08)" size={28} speed={0.4}/>
        <div className="content-frame relative z-10 grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="eyebrow text-amber-700">
              Data engineering / DEPI training track
            </p>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-[.94] tracking-tight sm:text-6xl">
              Data that arrives ready to{" "}
              <em className="text-amber-700">use.</em>
            </h1>
            <p className="mt-5 font-mono text-xs text-amber-800">
              <Typewriter
                text="Source → ingestion → reliable insight"
                loop={false}
                speed={50}
              />
            </p>
            <p className="mt-6 max-w-xl leading-7 text-secondary-ink">
              Completed DEPI coursework in the tools and patterns behind
              ingestion, transformation, warehousing, and analytics.
            </p>
            <a
              href="#pipeline"
              className="button-primary mt-7 bg-amber-700 px-5 py-3 text-xs hover:bg-amber-800"
            >
              Explore the pipeline
            </a>
          </div>
          <div className="mx-auto flex w-full justify-center"><ProfilePortrait src={profile.profile_image_url} priority className="w-[min(58vw,13.75rem)] rounded-[1.7rem] border border-amber-700/25 bg-secondary-ground lg:w-full lg:max-w-sm" /></div>
        </div>
      </section>
      <section id="pipeline" className="bg-secondary-ground">
        <div className="content-frame section-space">
          <p className="eyebrow text-amber-700">Pipeline identity</p>
          <h2 className="mt-3 font-serif text-4xl">
            Source to decision, with care between.
          </h2>
          <div className="mt-8">
            <FlowDiagram
              accent="#b96a25"
              label="Data pipeline"
              steps={[
                { title: "Source", detail: "APIs, databases and files" },
                { title: "Ingestion", detail: "Collect and structure" },
                { title: "Processing", detail: "Clean, transform, validate" },
                { title: "Storage", detail: "Warehouse-ready layers" },
                { title: "Analytics", detail: "Useful reporting" },
              ]}
            />
          </div>
        </div>
      </section>
      <section className="content-frame section-space grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="eyebrow text-amber-700">DEPI toolkit</p>
          <h2 className="mt-3 font-serif text-4xl">
            Training, accurately framed.
          </h2>
        </div>
        <div className="flex flex-wrap content-start gap-2">
          {toolkit.map((item, index) => (
            <ScrollReveal
              as="span"
              index={index}
              key={item}
              className="inline-flex rounded-full border border-amber-700/25 px-3 py-2 font-mono text-xs text-secondary-ink transition-colors hover:border-amber-700/55 hover:bg-amber-50"
            >
              {item}
            </ScrollReveal>
          ))}
        </div>
      </section>
      <section className="border-y border-hairline bg-secondary-ground">
        <div className="content-frame section-space">
          <p className="eyebrow text-amber-700">System design</p>
          <h2 className="mt-3 font-serif text-4xl">
            Smart agriculture pipeline.
          </h2>
          <ScrollReveal className="mt-7 grid gap-6 rounded-2xl border border-amber-700/20 bg-ground p-6 md:grid-cols-2">
            <div>
              <h3 className="font-serif text-2xl">
                AI-powered smart agriculture
              </h3>
              <p className="mt-3 text-sm leading-6 text-secondary-ink">
                A DEPI graduation project architecture for bringing greenhouse
                telemetry through cloud processing to data quality, warehouse
                models, dashboards, and alerts.
              </p>
            </div>
            <div className="border-l-0 border-amber-700/20 pl-0 md:border-l md:pl-6">
              <p className="eyebrow text-amber-700">Studied components</p>
              <p className="mt-3 text-sm leading-6 text-secondary-ink">
                Event Hubs · Databricks · PySpark · Delta Lake · star schema ·
                Streamlit · alerts
              </p>
            </div>
          </ScrollReveal>
          {projects.length > 0 && (
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {projects.map((project, index) => (
                <ScrollReveal key={project.id} index={index}>
                  <Link
                    href={`/data-engineer/${project.id}`}
                    className="surface block p-5 transition-transform hover:-translate-y-1"
                  >
                    <p className="eyebrow text-amber-700">{project.category}</p>
                    <h3 className="mt-2 font-serif text-xl">{project.title}</h3>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
