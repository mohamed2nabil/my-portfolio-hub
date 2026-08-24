"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function WebDevPage() {
  const [terminalText, setTerminalText] = useState("");
  const fullText = "> system.init({ role: 'Web Developer', focus: ['Frontend', 'Backend', 'Deployment'] });\\n> STATUS: ONLINE\\n> Awaiting input...";

  useEffect(() => {
    let currentText = "";
    let i = 0;
    const interval = setInterval(() => {
      currentText += fullText[i];
      setTerminalText(currentText);
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-ground text-ink font-mono pt-[58px] overflow-hidden selection:bg-emerald-500 selection:text-ground">
      
      {/* BACKGROUND GRID */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20"
           style={{ backgroundImage: 'linear-gradient(var(--color-emerald-500) 1px, transparent 1px), linear-gradient(90deg, var(--color-emerald-500) 1px, transparent 1px)', backgroundSize: '40px 40px', backgroundPosition: 'center center' }}>
      </div>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 relative z-10 border-b border-emerald-500/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
               PROTOCOL_WEB_DEV_ENGAGED
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-ink tracking-tight">
                Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-700 italic">Engineering</span>
            </h1>
            
            <div className="bg-ink p-6 rounded-md mb-8 max-w-2xl border border-hairline shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
              <pre className="text-emerald-400 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                {terminalText}
                <span className="animate-pulse">_</span>
              </pre>
            </div>

            <p className="text-secondary-ink text-sm md:text-base mb-10 max-w-xl leading-relaxed">
                I don&apos;t approach web development as &quot;building pages&quot;. I turn business ideas into production-ready digital products — from early discovery, UX/UI, frontend, backend, SEO, to live production.
            </p>
            <div className="flex gap-4">
                <a href="#projects" className="px-8 py-4 bg-emerald-600 text-ground font-bold uppercase tracking-widest text-xs hover:bg-emerald-500 transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    Execute Projects
                </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section className="py-24 bg-secondary-ground relative z-10 border-b border-hairline">
        <div className="container mx-auto px-6 max-w-5xl">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
                <h2 className="font-serif text-3xl font-bold text-ink mb-4">Technical Stack</h2>
                <p className="text-sm text-secondary-ink">Modern deployment, scalable architecture, and full-stack implementation.</p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "React", "Next.js", "JavaScript", "PHP", 
                  "Git / GitHub", "Docker", "CI/CD", "SEO Optimization",
                  "Tailwind CSS", "REST APIs", "SQL / NoSQL", "Vercel / Hosting"
                ].map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 border border-hairline bg-ground hover:bg-emerald-500/10 hover:border-emerald-500 transition-all duration-300 group shadow-sm flex items-center justify-between"
                  >
                      <span className="text-xs font-bold text-ink group-hover:text-emerald-600 font-mono tracking-widest uppercase">{skill}</span>
                      <span className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">&lt;/&gt;</span>
                  </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-ground relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
            <div className="mb-20">
                <h2 className="font-serif text-3xl font-bold text-ink mb-4 text-center md:text-left">Deployed Solutions</h2>
            </div>
            
            <div className="space-y-32">
                {/* PROJECT 1 */}
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col lg:flex-row gap-12 items-center"
                >
                    <div className="lg:w-1/2 relative group w-full aspect-video border border-hairline overflow-hidden bg-secondary-ground">
                        <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                        <img 
                          src="/images/yessicart.webp" 
                          alt="YessicArt Art Gallery E-commerce" 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                          onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23111'/%3E%3Ctext x='50%25' y='50%25' font-family='monospace' font-size='14' fill='%2310b981' text-anchor='middle'%3E[IMAGE PLACEHOLDER: /images/yessicart.webp]%3C/text%3E%3C/svg%3E";
                          }}
                        />
                    </div>
                    
                    <div className="lg:w-1/2">
                        <div className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-2 border border-emerald-500/30 inline-block px-2 py-1">E-Commerce Architecture</div>
                        <h3 className="font-serif text-3xl font-bold text-ink mb-4">YessicArt Platform</h3>
                        <p className="text-sm text-secondary-ink mb-6 leading-relaxed">
                            A comprehensive art gallery e-commerce system bridging frontend presentation with robust backend management. Developed user-facing shop flows alongside an administrative dashboard.
                        </p>
                        <ul className="space-y-2 mb-8 font-mono text-xs text-secondary-ink">
                            <li className="flex gap-2 items-center"><span className="text-emerald-500">→</span> Role: Frontend &amp; Backend Developer</li>
                            <li className="flex gap-2 items-center"><span className="text-emerald-500">→</span> Stack: PHP, JavaScript, Custom UI</li>
                            <li className="flex gap-2 items-center"><span className="text-emerald-500">→</span> Status: Production</li>
                        </ul>
                        <div className="flex gap-4">
                            <a href="https://github.com/m-nabil-5/YessicArt" target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-ink text-ink font-bold uppercase tracking-widest text-[10px] hover:bg-ink hover:text-ground transition-colors">
                                Source Code
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* PROJECT 2 */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col lg:flex-row-reverse gap-12 items-center"
                >
                    <div className="lg:w-1/2 relative group w-full aspect-video border border-hairline overflow-hidden bg-secondary-ground">
                        <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                        <img 
                          src="/images/one-tire.webp" 
                          alt="ONE TIRE Corporate Site" 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                          onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23111'/%3E%3Ctext x='50%25' y='50%25' font-family='monospace' font-size='14' fill='%2310b981' text-anchor='middle'%3E[IMAGE PLACEHOLDER: /images/one-tire.webp]%3C/text%3E%3C/svg%3E";
                          }}
                        />
                    </div>
                    
                    <div className="lg:w-1/2">
                        <div className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-2 border border-emerald-500/30 inline-block px-2 py-1">Corporate Platform</div>
                        <h3 className="font-serif text-3xl font-bold text-ink mb-4">ONE TIRE (KSA)</h3>
                        <p className="text-sm text-secondary-ink mb-6 leading-relaxed">
                            Corporate web presence for a major automotive supplier. Focused on extreme performance, SEO architecture, and content management scalability.
                        </p>
                        <ul className="space-y-2 mb-8 font-mono text-xs text-secondary-ink">
                            <li className="flex gap-2 items-center"><span className="text-emerald-500">→</span> Focus: Performance &amp; SEO</li>
                            <li className="flex gap-2 items-center"><span className="text-emerald-500">→</span> Role: Web Developer</li>
                        </ul>
                        <div className="flex gap-4">
                            <a href="https://onetire-sa.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-ink text-ground font-bold uppercase tracking-widest text-[10px] hover:bg-emerald-600 transition-colors">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* PROJECT 3 */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col lg:flex-row gap-12 items-center"
                >
                    <div className="lg:w-1/2 relative group w-full aspect-video border border-hairline overflow-hidden bg-secondary-ground">
                        <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                        <img 
                          src="/images/green-light.webp" 
                          alt="Green Light Construction Site" 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                          onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23111'/%3E%3Ctext x='50%25' y='50%25' font-family='monospace' font-size='14' fill='%2310b981' text-anchor='middle'%3E[IMAGE PLACEHOLDER: /images/green-light.webp]%3C/text%3E%3C/svg%3E";
                          }}
                        />
                    </div>
                    
                    <div className="lg:w-1/2">
                        <div className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-2 border border-emerald-500/30 inline-block px-2 py-1">Construction Portfolio</div>
                        <h3 className="font-serif text-3xl font-bold text-ink mb-4">Green Light Website</h3>
                        <p className="text-sm text-secondary-ink mb-6 leading-relaxed">
                            A dynamic portfolio platform for a construction firm showcasing project timelines, structural services, and lead generation funnels.
                        </p>
                        <ul className="space-y-2 mb-8 font-mono text-xs text-secondary-ink">
                            <li className="flex gap-2 items-center"><span className="text-emerald-500">→</span> Focus: Lead Generation</li>
                        </ul>
                        <div className="flex gap-4">
                            <a href="https://greenlight-sa.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-ink text-ground font-bold uppercase tracking-widest text-[10px] hover:bg-emerald-600 transition-colors">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-secondary-ground relative z-10 border-t border-hairline overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--color-emerald-500)_0%,_transparent_50%)] opacity-10"></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-20">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
                <h3 className="text-3xl font-bold font-serif text-ink mb-4">Initialize New Project</h3>
                <p className="text-sm text-secondary-ink mb-8 max-w-xl mx-auto leading-relaxed">
                    Let&apos;s build a functional, search-optimized platform that turns your business requirement into a working application.
                </p>
                <Link href="/#contact" className="inline-block px-10 py-4 bg-emerald-600 text-ground font-bold uppercase tracking-widest text-xs hover:bg-emerald-500 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]">
                    Initiate Contact
                </Link>
            </motion.div>
        </div>
      </section>

    </div>
  );
}
