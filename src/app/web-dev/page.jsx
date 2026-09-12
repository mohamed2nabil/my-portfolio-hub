import React from 'react';
import Link from 'next/link';
import { webDevProjects } from '../../data/web-dev-projects';

export default function WebDevPage() {
  return (
    <div className="min-h-screen bg-ground text-ink font-mono selection:bg-emerald-500 selection:text-ground pt-[58px]">
      
      {/* HERO SECTION */}
      <section className="pt-20 pb-20 md:pt-32 md:pb-32 px-6 relative overflow-hidden border-b border-hairline">
        {/* Decorative Grid Background adapted for light/dark global theme */}
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center max-w-6xl">
            <div className="md:w-3/5">
                <p className="text-emerald-600 font-bold mb-4 animate-pulse uppercase tracking-widest text-xs">Initializing Web Development Protocol...</p>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-ink tracking-tight leading-none font-serif">
                    Full Stack <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-700 italic">Web Developer</span>
                </h1>
                <p className="text-secondary-ink text-sm md:text-base mb-8 max-w-xl leading-relaxed">
                    I don&apos;t approach web development as &quot;building pages&quot;. I turn business ideas into production-ready digital products — from early discovery, UX/UI, frontend, backend, SEO, to live production.
                </p>
                <div className="flex gap-4">
                    <a href="#projects" className="px-6 py-3 bg-emerald-600 text-ground font-bold uppercase tracking-widest text-xs hover:bg-emerald-500 transition-colors shadow-sm">
                        EXECUTE ./projects.sh
                    </a>
                </div>
            </div>
            
            <div className="md:w-2/5 mt-16 md:mt-0 flex justify-center">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-30 blur-lg group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-secondary-ground border-2 border-emerald-500 p-8 flex items-center justify-center shadow-xl">
                        <svg className="w-32 h-32 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="skills" className="py-24 bg-secondary-ground border-b border-hairline relative">
        <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 text-center text-ink font-serif">
                <span className="text-emerald-600 font-mono">const</span> techStack = [
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 border border-hairline bg-ground hover:bg-emerald-500/10 hover:border-emerald-500 transition-all duration-300 group shadow-sm">
                    <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-emerald-600 font-serif">&quot;Next.js&quot;</h3>
                    <p className="text-sm text-secondary-ink leading-relaxed">React framework for production. Server-side rendering, API routes, and optimized performance.</p>
                </div>
                
                <div className="p-6 border border-hairline bg-ground hover:bg-emerald-500/10 hover:border-emerald-500 transition-all duration-300 group shadow-sm">
                    <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-emerald-600 font-serif">&quot;JavaScript&quot;</h3>
                    <p className="text-sm text-secondary-ink leading-relaxed">Core language for interactive front-ends and robust Node.js backend logic.</p>
                </div>

                <div className="p-6 border border-hairline bg-ground hover:bg-emerald-500/10 hover:border-emerald-500 transition-all duration-300 group shadow-sm">
                    <h3 className="text-xl font-bold text-ink mb-3 group-hover:text-emerald-600 font-serif">&quot;PHP&quot;</h3>
                    <p className="text-sm text-secondary-ink leading-relaxed">Server-side scripting, database integrations, and legacy system modernization.</p>
                </div>
            </div>
            
            <h2 className="text-3xl font-bold mt-12 text-center text-ink font-serif">];</h2>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32 bg-ground relative">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="mb-16">
                <h2 className="text-4xl font-bold text-ink mb-2 font-serif">Deployed Modules</h2>
                <div className="w-24 h-1 bg-emerald-500"></div>
                <p className="mt-4 text-sm text-secondary-ink max-w-2xl">Digital products built iteratively: Discovery &rarr; UX/UI &rarr; Implementation &rarr; SEO &rarr; Live Product.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {webDevProjects.map((project) => (
                    <div key={project.id} className="border border-hairline bg-secondary-ground overflow-hidden group hover:border-emerald-500 transition-all duration-500 hover:-translate-y-2 shadow-md flex flex-col">
                        <Link href={`/web-dev/${project.id}`} className="block flex-1 flex flex-col">
                            <div className="h-60 border-b border-hairline flex items-center justify-center relative overflow-hidden bg-ground">
                                <img src={project.poster} alt={project.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold text-ink mb-2 group-hover:text-emerald-600 transition-colors font-serif">{project.title}</h3>
                                <p className="text-sm text-secondary-ink mb-6 leading-relaxed line-clamp-3 flex-1">{project.shortDesc}</p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    <span className="px-2 py-1 text-[10px] uppercase tracking-widest border border-hairline text-emerald-600 bg-ground">{project.category}</span>
                                </div>
                            </div>
                        </Link>
                        <div className="border-t border-hairline px-8 py-4 flex items-center justify-between text-xs font-mono bg-ground/50">
                            <Link href={`/web-dev/${project.id}`} className="text-ink hover:text-emerald-600 uppercase tracking-widest font-bold flex items-center gap-1.5 transition-colors">
                                Details <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </Link>
                            {project.liveDemo && (
                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-500 uppercase tracking-widest font-bold transition-colors"
                                >
                                    Live Demo <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            
            {/* CTA specific to Web Dev */}
            <div className="mt-24 p-8 border border-emerald-500/30 bg-emerald-500/5 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-emerald-500/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
                <h3 className="text-2xl font-bold font-serif text-ink mb-4 relative z-10">Have a digital product idea?</h3>
                <p className="text-sm text-secondary-ink mb-8 relative z-10 max-w-lg mx-auto">Let&apos;s build a functional, search-optimized platform that turns your business requirement into a working application.</p>
                <Link href="/#contact" className="inline-block px-8 py-3 bg-emerald-600 text-ground font-bold uppercase tracking-widest text-xs hover:bg-emerald-500 transition-colors relative z-10 shadow-sm">
                    Initiate Contact
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
}
