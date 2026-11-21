import Image from "next/image";
import Link from "next/link";
import FlowDiagram from "@/components/FlowDiagram";
import Typewriter from "@/components/Typewriter";
import LetterReveal from "@/components/LetterReveal";
import ResultCardSwap from "@/components/ResultCardSwap";
import { aiProjects } from "@/data/ai-projects";
import { getPublishedProjects } from "@/lib/projects";
import { getProfile } from "@/lib/content";
export const revalidate = 60;
export default async function AIAutomationPage() {
  const [projects, profile] = await Promise.all([
    getPublishedProjects("ai-automation", aiProjects),
    getProfile(),
  ]);
  return (
    <div className="page-shell">
      <section className="border-b border-indigo-700/20 bg-[radial-gradient(circle_at_80%_20%,rgba(91,80,181,.13),transparent_24rem)]">
        <div className="content-frame grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="eyebrow text-indigo-700">
              AI automation / workflow architecture
            </p>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-[.94] tracking-tight sm:text-6xl">
              AI that works inside the{" "}
              <em className="text-indigo-700">
                <LetterReveal text="workflow." interval={0.05} />
              </em>
            </h1>
            <p className="mt-6 min-h-6 font-mono text-sm text-indigo-800">
              <Typewriter text="Trigger → context → decision → action" />
            </p>
            <p className="mt-4 max-w-xl leading-7 text-secondary-ink">
              Python automations, reliable integrations and retrieval-aware AI
              systems—built for operational work, not chatbot theater.
            </p>
            <a
              href="#workflows"
              className="button-primary mt-7 bg-indigo-700 px-5 py-3 text-xs hover:bg-indigo-800"
            >
              Explore workflows
            </a>
          </div>
          <div className="relative mx-auto aspect-[5/4] w-full max-w-sm overflow-hidden rounded-[1.7rem] border border-indigo-700/20">
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
          <p className="eyebrow text-indigo-700">Automation sequence</p>
          <h2 className="mt-3 font-serif text-4xl">
            A visible path to a useful result.
          </h2>
          <div className="mt-8">
            <FlowDiagram
              accent="#5b50b5"
              label="Automation workflow"
              steps={[
                { title: "Trigger", detail: "Webhooks, messages, schedules" },
                { title: "Integration", detail: "APIs and structured context" },
                { title: "Processing", detail: "Logic, retrieval, LLMs" },
                { title: "Result", detail: "A routed action or response" },
              ]}
            />
          </div>
        </div>
      </section>
      <section id="workflows" className="content-frame section-space">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-indigo-700">Workflow case studies</p>
            <h2 className="mt-3 font-serif text-4xl">
              Practical, inspectable automations.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-secondary-ink">
            Integrations, reliability considerations, model choices, and
            cost-aware architecture.
          </p>
        </div>
        <div className="mt-8">
          <ResultCardSwap projects={projects} />
        </div>
      </section>
    </div>
  );
}
