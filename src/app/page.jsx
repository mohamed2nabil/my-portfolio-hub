"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Interactive3DScene from "../components/Interactive3DScene";

export default function LandingPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Spread wordmark in Hero
  const wordmarkSpacing = useTransform(smoothProgress, [0, 0.1], ["-0.02em", "0.5em"]);
  const wordmarkY = useTransform(smoothProgress, [0, 0.1], ["0px", "50px"]);
  const wordmarkOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

  // Parallax for 3D Scene
  const sceneY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const sceneRotate = useTransform(smoothProgress, [0, 1], [0, 10]);

  return (
    <div ref={containerRef} className="relative bg-ground text-ink min-h-[500vh]">
      
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col lg:flex-row pt-[100px] pb-20 relative overflow-hidden">
        
        {/* REAL 3D INTERACTIVE EXPERIENCE */}
        <div className="absolute inset-0 lg:relative lg:w-1/2 h-full min-h-[60vh] flex items-center justify-center z-0 lg:order-2">
          <motion.div 
            style={{ opacity: useTransform(smoothProgress, [0, 0.5], [1, 0]) }}
            className="w-full h-full flex items-center justify-center"
          >
            <Interactive3DScene />
          </motion.div>
        </div>

        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 w-full lg:w-1/2 max-w-6xl relative z-10 lg:order-1">
          <div className="flex items-center gap-4 mb-4">
            <img src="/images/mohamed-nabil-main.jpeg" alt="Mohamed Nabil" className="w-12 h-12 rounded-full border border-hairline object-cover" />
            <p className="font-mono text-sm uppercase tracking-widest text-muted">Mohamed Nabil</p>
          </div>
          <h1 className="font-serif text-4xl md:text-[clamp(32px,4.6vw,68px)] leading-tight tracking-tight mb-6">
            Building reliable systems across <span className="text-ink-blue italic">Data, Web & Automation</span>.
          </h1>
          <p className="font-mono text-sm text-secondary-ink mb-12 leading-relaxed max-w-xl">
            IT Engineer bridging the gap between raw data and working digital products. Select a protocol to explore my specialized domains: Data Analysis, Data Engineering, Web Development, and AI Automation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <a href="/data-analysis" className="group relative overflow-hidden p-6 border border-hairline bg-white/5 backdrop-blur-sm hover:bg-ink hover:text-ground transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-xs text-muted group-hover:text-cyan-400">DOMAIN 01</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
              <h3 className="font-serif text-2xl tracking-tight mb-2">Data Analysis</h3>
              <p className="font-mono text-xs opacity-70">Business questions &rarr; clean data &rarr; KPIs &rarr; insights</p>
            </a>

            <a href="/data-engineer" className="group relative overflow-hidden p-6 border border-hairline bg-white/5 backdrop-blur-sm hover:bg-ink hover:text-ground transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-xs text-muted group-hover:text-amber-400">DOMAIN 02</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
              <h3 className="font-serif text-2xl tracking-tight mb-2">Data Engineering</h3>
              <p className="font-mono text-xs opacity-70">Sources &rarr; pipelines &rarr; processing &rarr; reliable data</p>
            </a>

            <a href="/web-dev" className="group relative overflow-hidden p-6 border border-hairline bg-white/5 backdrop-blur-sm hover:bg-ink hover:text-ground transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-xs text-muted group-hover:text-purple-400">DOMAIN 03</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
              <h3 className="font-serif text-2xl tracking-tight mb-2">Web Development</h3>
              <p className="font-mono text-xs opacity-70">Ideas &rarr; UX/UI &rarr; products &rarr; deployment &rarr; SEO</p>
            </a>

            <a href="/ai-automation" className="group relative overflow-hidden p-6 border border-hairline bg-white/5 backdrop-blur-sm hover:bg-ink hover:text-ground transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-xs text-muted group-hover:text-emerald-400">DOMAIN 04</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
              <h3 className="font-serif text-2xl tracking-tight mb-2">AI Automation</h3>
              <p className="font-mono text-xs opacity-70">Business processes &rarr; AI agents &rarr; workflows &rarr; automation</p>
            </a>
          </div>
        </div>

        <div className="mt-auto w-full border-t border-hairline p-4 flex justify-between font-mono text-xs text-muted">
          <span>DATA: VALIDATED</span>
          <span>PIPELINES: ACTIVE</span>
          <span>KPI: OPTIMAL</span>
        </div>

        {/* Spread Wordmark at foot */}
        <motion.div 
          style={{ letterSpacing: wordmarkSpacing, y: wordmarkY, opacity: wordmarkOpacity }}
          className="w-full flex justify-between px-6 font-serif text-[12vw] leading-none tracking-tighter text-ink/10 -mb-[2vw]"
        >
          <span>M</span><span>O</span><span>H</span><span>A</span><span>M</span><span>E</span><span>D</span>
        </motion.div>
      </section>

      {/* 3. ARGUMENT & MATERIAL */}
      <section className="min-h-screen px-6 md:px-12 py-32 flex flex-col md:flex-row gap-12 bg-secondary-ground">
        <div className="flex-1">
          <h2 className="font-serif text-4xl tracking-tight mb-8">Technical Profile</h2>
          <p className="font-mono text-sm text-secondary-ink leading-relaxed mb-12">
            Built on robust foundations in Data Analysis, Engineering, and AI, designed to scale from raw datasets to decision-ready dashboards.
          </p>
        </div>
        <div className="flex-1 flex flex-col">
          {[
            { label: "LANGUAGES", desc: "Python, SQL, DAX, M Language", val: "ADVANCED" },
            { label: "VISUALIZATION", desc: "Power BI, Excel, matplotlib", val: "EXPERT" },
            { label: "AUTOMATION", desc: "n8n, Web Scraping, APIs", val: "PROFICIENT" },
            { label: "ANALYSIS", desc: "Statistical Analysis, EDA", val: "ADVANCED" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row justify-between py-6 border-b border-hairline font-mono text-sm">
              <div className="w-1/3 text-ink-blue uppercase tracking-widest text-xs mb-2 md:mb-0">{item.label}</div>
              <div className="w-1/3 text-secondary-ink">{item.desc}</div>
              <div className="w-1/3 text-right text-ink">{item.val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DEMONSTRATION */}
      <DemonstrationSection />

      {/* 5. MEASUREMENTS */}
      <section className="py-32 px-6 md:px-12 max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl mb-12">Professional Impact</h2>
        {[
          { label: "Total Projects", desc: "Data & AI Solutions", val: "11+" },
          { label: "Survey Responses", desc: "Analyzed in HR Analytics", val: "15K+" },
          { label: "Records Processed", desc: "Traffic & Safety Analytics", val: "216K+" }
        ].map((item, i) => (
          <div key={i} className="flex justify-between py-4 border-b border-hairline font-mono text-sm">
            <span className="text-secondary-ink w-1/3">{item.label}</span>
            <span className="text-muted w-1/3">{item.desc}</span>
            <span className="text-ink font-bold text-right w-1/3">{item.val}</span>
          </div>
        ))}
      </section>

      {/* 6. CLOSE */}
      <section id="contact" className="py-32 px-6 md:px-12 bg-secondary-ground relative overflow-hidden border-t border-hairline">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl tracking-tight mb-4">
              Get In <span className="text-ink-blue italic">Touch</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="font-serif text-2xl mb-6">Contact Information</h3>
              <p className="font-mono text-sm text-secondary-ink mb-8 leading-relaxed">
                Feel free to reach out to me for any questions or opportunities. 
                I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6 font-mono text-sm">
                <div className="flex items-start">
                  <div className="w-10 text-ink-blue"><i className="fas fa-map-marker-alt text-xl"></i></div>
                  <div>
                    <h4 className="font-bold mb-1 uppercase tracking-widest">Location</h4>
                    <p className="text-secondary-ink">Egypt</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 text-ink-blue"><i className="fas fa-envelope text-xl"></i></div>
                  <div>
                    <h4 className="font-bold mb-1 uppercase tracking-widest">Email</h4>
                    <p className="text-secondary-ink">mohamed2nabil5@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 text-ink-blue"><i className="fas fa-phone-alt text-xl"></i></div>
                  <div>
                    <h4 className="font-bold mb-1 uppercase tracking-widest">Phone</h4>
                    <p className="text-secondary-ink">+20 1145252173</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl mb-6">Send Me a Message</h3>
              <form className="space-y-6 font-mono text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-bold uppercase tracking-widest">Your Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 bg-ground border border-hairline focus:border-ink-blue focus:outline-none transition-colors" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-bold uppercase tracking-widest">Your Email</label>
                    <input type="email" id="email" className="w-full px-4 py-3 bg-ground border border-hairline focus:border-ink-blue focus:outline-none transition-colors" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 font-bold uppercase tracking-widest">Subject</label>
                  <input type="text" id="subject" className="w-full px-4 py-3 bg-ground border border-hairline focus:border-ink-blue focus:outline-none transition-colors" required />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-bold uppercase tracking-widest">Message</label>
                  <textarea id="message" rows="5" className="w-full px-4 py-3 bg-ground border border-hairline focus:border-ink-blue focus:outline-none transition-colors" required></textarea>
                </div>
                <button type="button" className="px-8 py-4 bg-ink text-ground uppercase tracking-widest w-full hover:bg-ink-blue transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DemonstrationSection() {
  const [variant, setVariant] = useState(0);
  const [pathLength, setPathLength] = useState(1000);
  const pathRef = useRef(null);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [variant]);

  const variants = [
    { name: "ANALYSIS", d: "M10 50 Q50 10 90 50 T10 50", info: "Statistical distribution pattern" },
    { name: "PIPELINE", d: "M10 10 L90 90 M10 90 L90 10", info: "Direct data transformation" },
    { name: "TREND", d: "M10 50 C30 10, 70 90, 90 50", info: "Time-series fluctuation" }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-ground border-y border-hairline">
      <h2 className="font-serif text-3xl mb-12">Live Demonstration</h2>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/3 flex flex-row md:flex-col gap-2">
          {variants.map((v, i) => (
            <button
              key={i}
              onClick={() => setVariant(i)}
              aria-pressed={variant === i}
              className={`p-4 border font-mono text-xs text-left transition-colors ${
                variant === i 
                  ? "border-ink-blue text-ink-blue bg-ink-blue/5" 
                  : "border-hairline text-secondary-ink hover:border-ink"
              }`}
            >
              MODULE {i + 1}: {v.name}
            </button>
          ))}
        </div>
        
        <div className="w-full md:w-2/3 border border-hairline p-12 flex flex-col items-center justify-center min-h-[400px] relative bg-white/30 backdrop-blur-sm">
          <svg viewBox="0 0 100 100" className="w-64 h-64 overflow-visible">
            {/* Background grid */}
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="var(--color-hairline)" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
            
            <path
              key={variant} // forces re-render/re-animation
              ref={pathRef}
              d={variants[variant].d}
              fill="none"
              stroke="var(--color-ink-blue)"
              strokeWidth="2"
              className="draw-path"
              style={{
                strokeDasharray: pathLength,
                strokeDashoffset: pathLength,
              }}
            />
          </svg>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] text-muted border-t border-hairline pt-4 mt-8">
            <span>STATUS: RENDERED</span>
            <span>{variants[variant].info}</span>
            <span>PATH: {variants[variant].name}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
