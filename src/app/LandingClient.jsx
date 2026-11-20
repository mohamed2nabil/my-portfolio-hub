'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Database, Braces, Bot, Network, CheckCircle2, Layers3, MessageCircle, Search } from 'lucide-react';
import Contact from '@/components/Contact';

const options = [
  { href:'/web-dev', label:'Web development', tag:'Web apps / backend', question:'Need a platform that actually works?', description:'Laravel, PHP, databases and APIs behind polished customer-facing products.', deliverable:'Product architecture · Web delivery', accent:'emerald', icon:Braces },
  { href:'/data-analysis', label:'Data analysis', tag:'Reporting / insights', question:'Have data but need answers?', description:'Clean analysis, decision-ready metrics and dashboards that explain what matters.', deliverable:'SQL · Python · Power BI', accent:'sky', icon:Database },
  { href:'/data-engineer', label:'Data engineering', tag:'Pipelines / architecture', question:'Is your data scattered everywhere?', description:'Ingestion, ETL, warehousing and orchestration patterns for reliable data workflows.', deliverable:'DEPI training · ETL & big data', accent:'amber', icon:Network },
  { href:'/ai-automation', label:'AI automation', tag:'Python / integrations', question:'Still repeating the same manual tasks?', description:'Python, n8n, LLM APIs and cost-aware integrations built around a real process.', deliverable:'Workflow design · API integration', accent:'indigo', icon:Bot },
];

const colorClasses = {
 emerald:'border-emerald-700/15 bg-emerald-50/50 text-emerald-800',
 sky:'border-sky-700/15 bg-sky-50/55 text-sky-800',
 amber:'border-amber-700/15 bg-amber-50/60 text-amber-800',
 indigo:'border-indigo-700/15 bg-indigo-50/55 text-indigo-800',
};

export default function LandingClient({ featured, profile, skillGroups }) {
  const portrait = profile?.profile_image_url || '/images/mohamed-nabil-main.jpeg';
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 800], [0, reducedMotion ? 0 : 55]);

  return (
    <div className="overflow-x-clip pt-16 text-ink">
      <section className="relative isolate overflow-hidden border-b border-hairline px-5 py-16 sm:px-8 lg:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_90%_10%,rgba(49,88,168,.12),transparent_28rem),radial-gradient(circle_at_12%_90%,rgba(22,135,105,.09),transparent_30rem)]"/>
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.8fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.15em] text-ink-blue">Mohamed Nabil · {profile?.title || 'Software, Data & AI Engineer'}</p>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Web, data and AI systems built around <em className="text-ink-blue">your actual problem.</em></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-secondary-ink">{profile?.biography || 'I work across backend engineering, web products, Python automation and data systems. I scope the problem first, then choose the technology, integrations and infrastructure that fit the work and budget.'}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#portfolios" className="button-primary px-6 py-3.5 text-sm">Find the right portfolio <ArrowRight size={17}/></a>
              <a href="#contact" className="inline-flex items-center rounded-2xl border border-hairline bg-white/75 px-6 py-3.5 text-sm font-semibold transition hover:border-ink-blue">Tell me about your project</a>
            </div>
            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                ['01','Understand the workflow'],
                ['02','Choose a sensible stack'],
                ['03','Build for real use'],
              ].map(([n,t])=><div key={n} className="rounded-2xl border border-hairline bg-white/65 p-4"><span className="text-xs font-bold text-ink-blue">{n}</span><p className="mt-2 text-sm font-semibold leading-6">{t}</p></div>)}
            </div>
          </div>
          <motion.div style={{ y: portraitY }} className="mx-auto w-full max-w-sm lg:max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border border-hairline bg-secondary-ground shadow-2xl shadow-ink/10">
              <Image src={portrait} alt="Mohamed Nabil" fill priority sizes="(max-width:1024px) 85vw, 38vw" className="object-cover object-top"/>
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-ink/85 p-5 text-white backdrop-blur">
                <p className="text-xs font-semibold text-blue-200">One engineer · Connected disciplines</p>
                <p className="mt-1 font-serif text-xl">From the brief to a useful system.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="portfolios" className="scroll-mt-20 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.16em] text-ink-blue">Choose what you need</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6"><h2 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">Four ways to solve a problem. <em>Pick yours.</em></h2><p className="max-w-sm text-sm leading-7 text-secondary-ink">Each portfolio has its own projects and technical approach. Start with the challenge closest to your business.</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {options.map(({href,label,tag,question,description,deliverable,accent,icon:Icon})=>(
              <Link key={href} href={href} className="group relative flex min-h-[315px] flex-col overflow-hidden rounded-[1.85rem] border border-hairline bg-white/75 p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                <div className="flex items-start justify-between gap-5">
                  <span className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${colorClasses[accent]}`}>{tag}</span>
                  <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl border ${colorClasses[accent]}`}><Icon size={27}/></span>
                </div>
                <h3 className="mt-7 font-serif text-3xl font-semibold sm:text-4xl">{question}</h3>
                <p className="mt-3 max-w-lg text-base leading-7 text-secondary-ink">{description}</p>
                <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-7">
                  <span className="text-xs font-medium text-muted">{deliverable}</span>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink-blue">{label} <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.16em] text-blue-200">Examples of the work</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6"><h2 className="max-w-3xl font-serif text-4xl sm:text-5xl">Look at the projects, not just the promises.</h2><a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white">Discuss something similar <ArrowUpRight size={16}/></a></div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featured.map(project=>(
              <Link key={project.href} href={project.href} className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5 transition duration-200 hover:-translate-y-1 hover:bg-white/10">
                <div className="relative aspect-[16/10] overflow-hidden bg-white/10"><Image src={project.poster} alt={project.title} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"/></div>
                <div className="flex flex-1 flex-col p-6"><p className="text-xs font-bold uppercase tracking-widest text-blue-200">{project.domain}</p><h3 className="mt-3 font-serif text-2xl leading-tight">{project.title}</h3><p className="mt-3 line-clamp-3 flex-1 text-sm leading-7 text-white/70">{project.shortDesc}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-200">Explore the case study <ArrowRight size={17}/></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div><p className="text-xs font-bold uppercase tracking-[.16em] text-ink-blue">What I work with</p><h2 className="mt-3 font-serif text-4xl sm:text-5xl">Tools selected for the job.</h2><p className="mt-5 leading-7 text-secondary-ink">Backend and integration skills come first. My DEPI data engineering coursework adds depth in ETL, streaming and warehousing. The project pages show where the tools fit.</p><a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-blue hover:underline">Have a technical question? <ArrowRight size={16}/></a></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map(([title,skills])=>(
              <div key={title} className="rounded-[1.6rem] border border-hairline bg-white/75 p-6 shadow-sm">
                <div className="flex items-center gap-2"><CheckCircle2 size={17} className="text-ink-blue"/><h3 className="font-serif text-xl font-semibold">{title}</h3></div>
                <p className="mt-3 text-sm leading-7 text-secondary-ink">{skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-hairline bg-secondary-ground/60 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.16em] text-ink-blue">A straightforward process</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">No stack-first sales pitch.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              [Search,'Start with your problem','We define the actual workflow, success criteria, constraints and what the first useful release looks like.'],
              [Layers3,'Make the tradeoffs clear','We compare tooling, integration complexity, infrastructure and ongoing API costs before implementation.'],
              [MessageCircle,'Keep delivery transparent','We agree on scope and milestones, then communicate what is working and what needs a decision.'],
            ].map(([Icon,title,description])=><article key={title} className="rounded-[1.6rem] border border-hairline bg-white/80 p-7"><Icon className="text-ink-blue" size={24}/><h3 className="mt-5 font-serif text-2xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-secondary-ink">{description}</p></article>)}
          </div>
        </div>
      </section>
      <Contact/>
      <footer className="border-t border-hairline px-5 py-8 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-secondary-ink sm:flex-row"><span>© {new Date().getFullYear()} Mohamed Nabil</span><div className="flex gap-5"><a href="https://github.com/mohamed2nabil" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/mohamed-nabil-41047a223/" target="_blank" rel="noreferrer">LinkedIn</a></div></div></footer>
    </div>
  );
}
