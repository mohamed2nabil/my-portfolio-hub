import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Blocks, Database, Code2, BrainCircuit, ShieldCheck } from 'lucide-react';
import { getPublishedProjects } from '@/lib/projects';
import { getProfile, getSkills } from '@/lib/content';

export const revalidate = 60;

const capabilities = [
  {
    title: 'Backend systems & APIs',
    lead: 'Build the logic your product depends on.',
    detail: 'Laravel and PHP applications, business rules, authentication, secure API integrations and maintainable backend services.',
    category: 'Backend Engineering',
    icon: Blocks,
  },
  {
    title: 'Databases & application data',
    lead: 'Structure data for reliable day-to-day operations.',
    detail: 'MySQL and PostgreSQL, relationships, practical query design, data access and backend persistence.',
    category: 'Databases',
    icon: Database,
  },
  {
    title: 'Web products & interfaces',
    lead: 'Make the full product usable, not just functional.',
    detail: 'Responsive interfaces, React and Next.js delivery, integration with APIs, SEO foundations and deployment.',
    category: 'Web Development',
    icon: Code2,
  },
  {
    title: 'AI-ready integrations',
    lead: 'Connect existing software with useful intelligence.',
    detail: 'LLM APIs, embeddings, semantic search and vector database integration where the use case genuinely benefits.',
    category: 'AI Engineering',
    icon: BrainCircuit,
  },
];

export default async function WebDevPage() {
  const [projects, profile, allSkills] = await Promise.all([
    getPublishedProjects('web-dev'), getProfile(), getSkills(),
  ]);
  const skills = allSkills.filter((skill) => skill.visible !== false);
  const matching = (category) => skills
    .filter((skill) => skill.category === category)
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((skill) => skill.name);
  return (
    <main className="min-h-screen bg-ground pt-16 text-ink">
      <section className="relative isolate overflow-hidden border-b border-hairline px-5 py-20 sm:px-8 lg:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[.22]" style={{backgroundImage:'linear-gradient(#9aa3a7 1px, transparent 1px),linear-gradient(90deg,#9aa3a7 1px,transparent 1px)',backgroundSize:'34px 34px'}}/>
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.8fr] lg:gap-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-700/20 bg-emerald-50 px-4 py-2 text-xs font-semibold tracking-wide text-emerald-800"><span className="h-2 w-2 rounded-full bg-emerald-500"/> Web applications & backend engineering</span>
            <h1 className="mt-7 max-w-3xl font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Your product deserves a <em className="text-emerald-700">strong backend.</em></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-secondary-ink">
              I build business websites and web applications from the inside out: Laravel and PHP, APIs, MySQL and PostgreSQL, with modern interfaces when the project calls for them.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-secondary-ink">
              I start with the actual workflow, then choose a maintainable stack rather than pushing every client into the same technology.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-800">Explore projects <ArrowRight size={17}/></a>
              <Link href="/#contact" className="inline-flex items-center rounded-2xl border border-hairline bg-white/80 px-6 py-3.5 text-sm font-semibold transition hover:border-emerald-500">Discuss your project</Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="absolute -inset-5 rounded-[2.75rem] bg-emerald-600/10 blur-2xl"/>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border border-emerald-800/20 bg-secondary-ground shadow-2xl shadow-emerald-950/10">
              <Image src={profile.profile_image_url || '/images/mohamed-nabil-main.jpeg'} alt="Mohamed Nabil" fill priority sizes="(max-width:1024px) 85vw, 38vw" className="object-cover object-top"/>
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-ink/85 px-5 py-4 text-white backdrop-blur">
                <p className="text-xs font-medium text-emerald-200">Backend-first thinking</p>
                <p className="mt-1 font-serif text-xl">From business process to working software.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="bg-secondary-ground/60 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-emerald-800">Technical capabilities</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">More than a frontend tech stack.</h2>
            <p className="mt-4 text-base leading-7 text-secondary-ink">The stack is selected around your data, integrations, team and delivery requirements — not around one favorite framework.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {capabilities.map(({title,lead,detail,category,icon:Icon}) => (
              <article key={title} className="rounded-[1.75rem] border border-hairline bg-ground p-7 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-emerald-600/40 hover:shadow-lg">
                <div className="flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-700/10 text-emerald-700"><Icon size={23}/></span><h3 className="font-serif text-2xl font-semibold">{title}</h3></div>
                <p className="mt-5 text-base font-semibold text-ink">{lead}</p>
                <p className="mt-2 text-sm leading-7 text-secondary-ink">{detail}</p>
                <div className="mt-5 flex flex-wrap gap-2">{matching(category).map((tool) => <span key={tool} className="rounded-full border border-emerald-700/15 bg-emerald-700/5 px-3 py-1.5 text-xs font-medium text-emerald-900">{tool}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-3 rounded-2xl border border-hairline bg-white/70 p-5"><ShieldCheck className="shrink-0 text-emerald-700" size={22}/><p className="text-sm leading-6 text-secondary-ink"><strong className="text-ink">Delivery matters.</strong> Docker, Git and practical deployment workflows are part of building something that can be maintained after launch.</p></div>
        </div>
      </section>
      <section id="projects" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div><p className="text-xs font-bold uppercase tracking-[.16em] text-emerald-800">Selected work</p><h2 className="mt-3 font-serif text-4xl sm:text-5xl">Real products, clear context.</h2><p className="mt-4 max-w-2xl leading-7 text-secondary-ink">Explore the challenge, the technical approach and what each product was designed to deliver.</p></div>
            <Link href="/#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:underline">Have something similar? <ArrowUpRight size={17}/></Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article key={project.id} className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-hairline bg-white/75 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-emerald-600/40 hover:shadow-xl">
                <Link href={`/web-dev/${project.id}`} className="flex flex-1 flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary-ground"><Image src={project.poster} alt={project.title} fill sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"/></div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-800">Web product / case study</p>
                    <h3 className="mt-3 font-serif text-2xl font-semibold leading-snug group-hover:text-emerald-800">{project.title}</h3>
                    <p className="mt-3 line-clamp-3 flex-1 text-sm leading-7 text-secondary-ink">{project.shortDesc}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800">View case study <ArrowRight size={16}/></span>
                  </div>
                </Link>
                {project.liveDemo && <div className="border-t border-hairline px-6 py-3 text-right"><a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-secondary-ink hover:text-emerald-800">Visit live project <ArrowUpRight size={15}/></a></div>}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 pb-24 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-[2rem] border border-emerald-700/20 bg-emerald-950 p-8 text-white md:flex-row md:items-center md:p-12"><div><h2 className="font-serif text-3xl sm:text-4xl">Tell me what your product needs to do.</h2><p className="mt-3 max-w-2xl leading-7 text-white/75">We can discuss the workflow, integrations, useful features and a realistic technical scope before choosing the tools.</p></div><Link href="/#contact" className="shrink-0 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-100">Start a conversation</Link></div></section>
    </main>
  );
}
