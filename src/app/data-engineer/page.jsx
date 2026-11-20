import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Database, Layers3, Workflow, Server, GraduationCap, GitBranch } from 'lucide-react';
import { getPublishedProjects } from '@/lib/projects';
import { getProfile, getSkills } from '@/lib/content';

export const revalidate = 60;

const stages = [
  { label:'01 · Ingest', title:'Collect data', description:'SQL databases, APIs, files and event streams such as Kafka.', icon:Database },
  { label:'02 · Transform', title:'Clean & process', description:'Python, SQL, SSIS and Spark, chosen for data volume and complexity.', icon:Workflow },
  { label:'03 · Organize', title:'Model & store', description:'Warehouse concepts, dimensional modeling and relational or NoSQL storage.', icon:Layers3 },
  { label:'04 · Orchestrate', title:'Make it repeatable', description:'Scheduling, failure awareness, Airflow concepts and practical deployment choices.', icon:GitBranch },
  { label:'05 · Serve', title:'Deliver useful data', description:'Curated datasets that can support reporting, analytics and decisions.', icon:Server },
];

const trainingGroups = [
  { label:'Data foundations', items:['Python', 'SQL', 'SQL Server', 'MongoDB', 'Database design'] },
  { label:'Warehousing & ETL', items:['SSIS', 'ETL / ELT', 'Data Warehousing', 'Dimensional Modeling', 'Star / Snowflake Schema'] },
  { label:'Big data & orchestration', items:['Apache Hadoop', 'Apache Spark', 'Apache Kafka', 'Apache Airflow'] },
  { label:'Acquisition & delivery', items:['REST APIs', 'Selenium', 'Web Scraping', 'Docker', 'Azure fundamentals'] },
];

export default async function DataEngineerPage() {
  const [projects, profile, skills] = await Promise.all([
    getPublishedProjects('data-engineer'), getProfile(), getSkills(),
  ]);
  const studied = skills.filter(s=>s.visible!==false && s.category.includes('DEPI Training'))
    .sort((a,b)=>a.sort_order-b.sort_order).map(s=>s.name);
  return (
    <main className="min-h-screen bg-ground pt-16 text-ink">
      <section className="relative overflow-hidden border-b border-amber-600/25 px-5 py-20 sm:px-8 lg:py-24">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-600 via-orange-300 to-transparent"/>
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-600/25 bg-amber-600/10 px-4 py-2 text-xs font-semibold text-amber-800"><GraduationCap size={16}/> DEPI · Data Engineering training</span>
            <h1 className="mt-7 font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Make your data <em className="text-amber-700">ready to use.</em></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-secondary-ink">
              Data engineering is what happens before a useful dashboard: collecting data from different sources, validating it, designing the right storage and creating repeatable pipelines.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-secondary-ink">
              I completed the Data Engineering training track through the Digital Egypt Pioneers Initiative (DEPI), studying SQL, Python, warehousing, ETL, big-data processing and orchestration. I approach each design with maintainability and infrastructure cost in mind.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#training" className="inline-flex items-center gap-2 rounded-2xl bg-amber-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-amber-800">Explore my toolkit <ArrowRight size={17}/></a>
              <Link href="/#contact" className="inline-flex items-center rounded-2xl border border-hairline bg-white/80 px-6 py-3.5 text-sm font-semibold hover:border-amber-500">Discuss a data pipeline</Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="absolute -inset-5 rounded-[3rem] bg-amber-600/10 blur-2xl"/>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border border-amber-700/25 bg-secondary-ground shadow-2xl shadow-amber-950/10">
              <Image src={profile.profile_image_url || '/images/mohamed-nabil-main.jpeg'} alt="Mohamed Nabil" fill priority sizes="(max-width:1024px) 85vw, 37vw" className="object-cover object-top"/>
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-ink/90 p-4 text-white backdrop-blur"><p className="text-xs font-semibold text-amber-200">From source to decision</p><p className="mt-1 font-serif text-lg">Thoughtful pipelines. Clear outcomes.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="architecture" className="bg-secondary-ground/60 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.16em] text-amber-800">The engineering approach</p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl sm:text-5xl">A pipeline is a system, not a list of tools.</h2>
          <p className="mt-5 max-w-3xl leading-7 text-secondary-ink">The right implementation depends on the source, volume, refresh frequency and the decision the data needs to support. Here is the lifecycle I use to reason about an architecture.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {stages.map(({label,title,description,icon:Icon}) => (
              <article key={title} className="rounded-[1.5rem] border border-amber-700/15 bg-ground p-5 shadow-sm">
                <span className="flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-widest text-amber-800">{label}<Icon size={20}/></span>
                <h3 className="mt-7 font-serif text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-secondary-ink">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="training" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.16em] text-amber-800">What I studied</p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">DEPI · Data Engineering</h2>
              <p className="mt-5 leading-7 text-secondary-ink">
                The course covered hands-on topics across databases, distributed data processing, orchestration and cloud fundamentals. These are training subjects; real client delivery is described separately in the case studies.
              </p>
              <p className="mt-4 text-sm leading-7 text-secondary-ink">That background helps me evaluate whether a lightweight Python/SQL job is enough, or a more structured workflow and processing engine is justified.</p>
              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-amber-700/20 bg-amber-700/5 px-4 py-2 text-xs font-medium text-amber-900"><GraduationCap size={16}/> Digital Egypt Pioneers Initiative</div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {trainingGroups.map((group) => (
                <article key={group.label} className="rounded-[1.75rem] border border-hairline bg-white/75 p-6 shadow-sm">
                  <h3 className="font-serif text-2xl font-semibold">{group.label}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">{group.items.map(item=><span key={item} className="rounded-full border border-amber-700/15 bg-amber-700/5 px-3 py-1.5 text-xs font-medium text-amber-900">{item}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
          {studied.length > 0 && <p className="mt-6 text-xs leading-6 text-muted">Curriculum topics also tracked in the editable portfolio skills catalog: {studied.join(' · ')}.</p>}
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.16em] text-amber-300">Architecture case study</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Smart Agriculture Data Platform</h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/75">An end-to-end greenhouse monitoring concept: collect sensor readings, process and validate the events, prepare useful datasets and support operational dashboards and alerts.</p>
            <p className="mt-4 text-sm leading-7 text-white/65">Presented as a system design case study, not as a claim of a verified production deployment or measured business impact.</p>
            <Link href="/#contact" className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-6 py-3.5 text-sm font-semibold text-ink hover:bg-amber-400">Discuss a similar system <ArrowUpRight size={17}/></Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ['Sources','Sensors, API feeds and database records'],
              ['Streaming / ingestion','Event-oriented data flow where appropriate'],
              ['Processing','Validation, transformation and data-quality checks'],
              ['Output','Useful operational datasets, dashboards and alerts'],
            ].map(([name,copy])=><div key={name} className="rounded-[1.5rem] border border-white/15 bg-white/5 p-6"><p className="text-xs font-bold uppercase tracking-widest text-amber-300">{name}</p><p className="mt-3 text-sm leading-7 text-white/75">{copy}</p></div>)}
          </div>
        </div>
      </section>

      {projects.length > 0 && <section className="px-5 py-20 sm:px-8"><div className="mx-auto max-w-7xl"><h2 className="font-serif text-4xl">More data engineering work</h2><div className="mt-9 grid gap-5 md:grid-cols-2">{projects.map(p=><Link href={`/data-engineer/${p.id}`} key={p.id} className="group rounded-[1.75rem] border border-hairline bg-white/75 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><p className="text-xs font-semibold uppercase tracking-widest text-amber-800">Data engineering project</p><h3 className="mt-3 font-serif text-2xl">{p.title}</h3><p className="mt-3 text-sm leading-7 text-secondary-ink">{p.shortDesc}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-800">View case study <ArrowRight size={16}/></span></Link>)}</div></div></section>}
      <section className="px-5 py-20 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-[2rem] border border-amber-600/20 bg-amber-100/50 p-8 md:flex-row md:items-center md:p-12"><div><h2 className="font-serif text-3xl">Have data spread across systems?</h2><p className="mt-3 max-w-2xl leading-7 text-secondary-ink">Tell me where it lives, how often it changes, and what you need from it. We can discuss a sensible pipeline before committing to infrastructure.</p></div><Link href="/#contact" className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-amber-800 px-6 py-3.5 text-sm font-semibold text-white">Let&apos;s talk <ArrowRight size={16}/></Link></div></section>
    </main>
  );
}
