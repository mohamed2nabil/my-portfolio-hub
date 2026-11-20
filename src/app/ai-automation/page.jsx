import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Bot, Code2, Workflow, ShieldCheck, Coins, GitBranch } from 'lucide-react';
import { getPublishedProjects } from '@/lib/projects';
import { getProfile } from '@/lib/content';

export const revalidate = 60;

const strengths = [
  {title:'Python + workflow automation', icon:Code2, description:'Python for data handling, API logic and custom steps; n8n and webhooks when visual orchestration makes maintenance simpler.'},
  {title:'Connected systems', icon:GitBranch, description:'Connect APIs, CRM systems, databases and external services with attention to authentication, data shape and error handling.'},
  {title:'Reliable infrastructure', icon:ShieldCheck, description:'Consider hosting, queues, retries, timeouts, logs, rate limits, access control and human-review steps before launch.'},
  {title:'Tool selection & cost', icon:Coins, description:'Choose between scripts, no-code flows, hosted LLM APIs and self-hosted options based on workload, budget and operational risk.'},
];
const flow = [
  ['01', 'Understand the task', 'Define the workflow, input quality, human exceptions and the real outcome the client needs.'],
  ['02', 'Choose the smallest useful stack', 'Compare Python, n8n, APIs and AI models against expected volume, maintenance and usage costs.'],
  ['03', 'Integrate & validate', 'Connect systems with secure credentials, validation, retries and sensible fallbacks.'],
  ['04', 'Measure & improve', 'Monitor failures and operating cost; refine only when usage data shows a real need.'],
];

export default async function AIAutomationPage() {
  const [projects, profile] = await Promise.all([getPublishedProjects('ai-automation'), getProfile()]);
  return (
    <main className="min-h-screen bg-ground pt-16 text-ink">
      <section className="relative isolate overflow-hidden border-b border-hairline px-5 py-20 sm:px-8 lg:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_20%,rgba(93,89,201,.12),transparent_28rem),radial-gradient(circle_at_10%_80%,rgba(78,112,228,.07),transparent_30rem)]"/>
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.85fr] lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-700/20 bg-indigo-700/5 px-4 py-2 text-xs font-semibold text-indigo-800"><Bot size={16}/> AI, Python & connected workflows</span>
            <h1 className="mt-7 font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Automation should solve the work, <em className="text-indigo-700">not add complexity.</em></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-secondary-ink">
              I design AI-assisted workflows using Python, n8n, APIs and integration patterns that connect the tools your business already uses.
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-secondary-ink">
              The best solution is not automatically the most advanced AI model. I consider infrastructure, model/API pricing, reliability and ongoing maintenance when selecting the right approach.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#workflows" className="inline-flex items-center gap-2 rounded-2xl bg-indigo-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-800">Explore automation work <ArrowRight size={17}/></a>
              <Link href="/#contact" className="rounded-2xl border border-hairline bg-white/80 px-6 py-3.5 text-sm font-semibold transition hover:border-indigo-500">Discuss a workflow</Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="absolute -inset-6 rounded-[3rem] bg-indigo-600/15 blur-2xl"/>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border border-indigo-700/25 bg-secondary-ground shadow-2xl shadow-indigo-900/10">
              <Image src={profile.profile_image_url || '/images/mohamed-nabil-main.jpeg'} alt="Mohamed Nabil" fill priority sizes="(max-width:1024px) 85vw, 38vw" className="object-cover object-top"/>
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-indigo-950/90 px-5 py-4 text-white backdrop-blur"><p className="text-xs font-semibold text-indigo-200">Engineering, not AI hype</p><p className="mt-1 font-serif text-xl">Useful workflows. Sensible choices.</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary-ground/65 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.16em] text-indigo-800">How I engineer automations</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">The integration is the product.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-secondary-ink">From a webhook to a Python service or an LLM-assisted decision, every choice should improve an actual business process.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {strengths.map(({title,description,icon:Icon})=>(
              <article key={title} className="rounded-[1.75rem] border border-indigo-700/10 bg-white/75 p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-700/10 text-indigo-700"><Icon size={23}/></span>
                <h3 className="mt-5 font-serif text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-secondary-ink">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-9 lg:grid-cols-[.75fr_1.25fr]">
            <div><p className="text-xs font-bold uppercase tracking-[.16em] text-indigo-800">Practical delivery</p><h2 className="mt-3 font-serif text-4xl">From repetitive task to maintainable system.</h2><p className="mt-5 max-w-md leading-7 text-secondary-ink">Some tasks need a simple script; others benefit from scheduled flows, APIs or an LLM. The goal is the right solution for the constraints — not a complicated demo.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">{flow.map(([number,title,description])=><div key={number} className="rounded-[1.5rem] border border-hairline bg-white/75 p-6"><p className="text-xs font-bold uppercase tracking-widest text-indigo-700">{number} / Delivery</p><h3 className="mt-4 font-serif text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-secondary-ink">{description}</p></div>)}</div>
          </div>
        </div>
      </section>
      <section id="workflows" className="bg-ink px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-indigo-300">Automation case studies</p><h2 className="mt-3 font-serif text-4xl sm:text-5xl">Workflows designed around real tasks.</h2><p className="mt-4 max-w-2xl leading-7 text-white/70">Explore how the problem maps to the workflow, integrations and underlying technology.</p></div><Link href="/#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 hover:text-white">Request a similar workflow <ArrowUpRight size={17}/></Link></div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project)=>(
              <Link key={project.id} href={`/ai-automation/${project.id}`} className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5 transition duration-200 hover:-translate-y-1 hover:border-indigo-300/50 hover:bg-white/10">
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-900"><Image src={project.poster} alt={project.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"/></div>
                <div className="flex flex-1 flex-col p-7"><p className="text-xs font-bold uppercase tracking-widest text-indigo-300">Integration / workflow</p><h3 className="mt-3 font-serif text-2xl font-semibold leading-snug">{project.title}</h3><p className="mt-3 line-clamp-3 flex-1 text-sm leading-7 text-white/70">{project.shortDesc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{(project.techStack||[]).slice(0,4).map(tech=><span key={tech} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">{tech}</span>)}</div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-200">Explore case study <ArrowRight size={17}/></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-20 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-[2rem] border border-indigo-600/20 bg-indigo-700/5 p-8 md:flex-row md:items-center md:p-12"><div><h2 className="font-serif text-3xl">What task is taking too much of your time?</h2><p className="mt-3 max-w-2xl leading-7 text-secondary-ink">Tell me the current steps, tools and constraints. We can choose a realistic automation design and estimate ongoing operating cost.</p></div><Link href="/#contact" className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-indigo-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-800">Let&apos;s discuss it <ArrowRight size={16}/></Link></div></section>
    </main>
  );
}
