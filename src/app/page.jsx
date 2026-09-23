"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function LandingPage() {
  const containerRef = useRef(null);
  const [status, setStatus] = useState('idle');
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

  // Traveling product transformations
  const productX = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], ["50vw", "75vw", "25vw", "50vw", "50vw"]);
  const productY = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], ["30vh", "50vh", "70vh", "85vh", "90vh"]);
  const productRotate = useTransform(smoothProgress, [0, 0.5, 1], [0, -6, 0]);
  const productScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.3, 0.8]);
  const productOpacity = useTransform(smoothProgress, [0, 0.8, 0.9, 1], [1, 1, 0, 0]);

  // Spread wordmark in Hero
  const wordmarkSpacing = useTransform(smoothProgress, [0, 0.1], ["-0.02em", "0.5em"]);
  const wordmarkY = useTransform(smoothProgress, [0, 0.1], ["0px", "50px"]);
  const wordmarkOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

  return (
    <div ref={containerRef} className="relative bg-ground text-ink min-h-[400vh] overflow-x-hidden">
      
      {/* 1. TRAVELING PROFILE (Hidden on Mobile to prevent overlap) */}
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          x: productX,
          y: productY,
          rotate: productRotate,
          scale: productScale,
          opacity: productOpacity,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 10,
          pointerEvents: "none"
        }}
        className="hidden md:block w-32 h-32 md:w-48 md:h-48"
      >
        <img 
          src="/images/mohamed-nabil-main.jpeg" 
          alt="Mohamed Nabil Profile"
          className="w-full h-full drop-shadow-2xl rounded-full object-cover border-[3px] border-ink" 
        />
      </motion.div>

      {/* 2. HERO SECTION */}
      <section className="min-h-[80vh] flex flex-col pt-[100px] pb-20 relative">
        <div className="flex-1 flex flex-col justify-center px-6 md:px-12 w-full lg:w-[70vw] max-w-6xl">
          <div className="flex items-center gap-4 mb-4">
            <img src="/images/mohamed-nabil-main.jpeg" alt="Mohamed Nabil" className="w-12 h-12 rounded-full border border-hairline object-cover md:hidden" />
            <div>
              <p className="font-mono text-sm uppercase tracking-widest text-muted">Mohamed Nabil</p>
              <p className="font-mono text-[11px] text-ink-blue tracking-wide">Systems, Data &amp; Automation Engineer</p>
            </div>
          </div>
          <h1 className="font-serif text-4xl md:text-[clamp(32px,4.6vw,68px)] leading-tight tracking-tight mb-6">
            Building reliable systems across <span className="text-ink-blue italic">Software, Data &amp; Automation</span>.
          </h1>
          <p className="font-mono text-sm text-secondary-ink mb-12 leading-relaxed max-w-2xl">
            I build web products and AI automations, supported by strong programming, data, and SQL foundations.
          </p>
        </div>

        {/* Spread Wordmark at foot */}
        <motion.div 
          style={{ letterSpacing: wordmarkSpacing, y: wordmarkY, opacity: wordmarkOpacity }}
          className="w-full flex justify-between px-6 font-serif text-[12vw] leading-none tracking-tighter text-ink/10 -mb-[2vw]"
        >
          <span>M</span><span>O</span><span>H</span><span>A</span><span>M</span><span>E</span><span>D</span>
        </motion.div>
      </section>

      {/* 3. DOMAINS PORTFOLIO */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-b border-hairline">
        <div className="mb-12">
          <h2 className="font-serif text-3xl mb-3">Portfolio Domains</h2>
          <p className="font-mono text-xs text-secondary-ink">
            Select a domain below to explore my specialized work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <Link href="/data-analysis" className="group relative overflow-hidden p-6 border border-hairline bg-white/5 backdrop-blur-sm hover:bg-ink hover:text-ground transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-xs text-muted group-hover:text-cyan-400">DOMAIN 01</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>
            <h3 className="font-serif text-2xl tracking-tight mb-2">Data Analysis</h3>
            <p className="font-mono text-xs opacity-70">Financial, operational &amp; workforce datasets &rarr; clean schemas &rarr; decision-ready dashboards</p>
          </Link>

          <Link href="/data-engineer" className="group relative overflow-hidden p-6 border border-hairline bg-white/5 backdrop-blur-sm hover:bg-ink hover:text-ground transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-xs text-muted group-hover:text-amber-400">DOMAIN 02</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>
            <h3 className="font-serif text-2xl tracking-tight mb-2">Data Engineering</h3>
            <p className="font-mono text-xs opacity-70">Multi-source ingestion &rarr; Python &amp; SQL pipelines &rarr; validation &amp; cleansing</p>
          </Link>

          <Link href="/web-dev" className="group relative overflow-hidden p-6 border border-hairline bg-white/5 backdrop-blur-sm hover:bg-ink hover:text-ground transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-xs text-muted group-hover:text-purple-400">DOMAIN 03</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>
            <h3 className="font-serif text-2xl tracking-tight mb-2">Web Systems</h3>
            <p className="font-mono text-xs opacity-70">Product architecture &rarr; Next.js &amp; PHP &rarr; RESTful APIs &amp; database design &rarr; production deployment</p>
          </Link>

          <Link href="/ai-automation" className="group relative overflow-hidden p-6 border border-hairline bg-white/5 backdrop-blur-sm hover:bg-ink hover:text-ground transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            <div className="flex justify-between items-center mb-4">
              <span className="font-mono text-xs text-muted group-hover:text-emerald-400">DOMAIN 04</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>
            <h3 className="font-serif text-2xl tracking-tight mb-2">AI Automation</h3>
            <p className="font-mono text-xs opacity-70">Business processes &rarr; n8n &amp; Meta/Telegram APIs &rarr; LLM agents &amp; RAG</p>
          </Link>
        </div>
      </section>

      {/* 4. TECHNICAL PROFILE */}
      <section className="px-6 md:px-12 py-24 flex flex-col lg:flex-row gap-12 bg-secondary-ground">
        <div className="flex-1 lg:max-w-md">
          <h2 className="font-serif text-4xl tracking-tight mb-8">Technical Profile</h2>
          <p className="font-mono text-sm text-secondary-ink leading-relaxed mb-12">
            Translating computational foundations into production systems — from low-level memory and algorithmic logic to high-level web architectures, analytical models, and autonomous pipelines.
          </p>
        </div>
        <div className="flex-1 flex flex-col">
          {[
            { label: "Web Development", desc: "Next.js · JavaScript · React · PHP · APIs · Databases", val: "PRIMARY" },
            { label: "AI Automation", desc: "n8n · APIs · LLM workflows · Telegram · Meta integrations · automation logic", val: "PRIMARY" },
            { label: "Python", desc: "Data Analysis · Automation · ETL · AI workflows", val: "SUPPORTING" },
            { label: "SQL / Data", desc: "SQL · PostgreSQL · MySQL · Power BI · analytical querying", val: "SUPPORTING" },
            { label: "Java · C · C++", desc: "Programming foundations · algorithms · problem solving", val: "FOUNDATIONS" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row justify-between py-6 border-b border-hairline font-mono text-sm gap-2">
              <div className="md:w-1/3 text-ink-blue uppercase tracking-widest text-xs font-bold">{item.label}</div>
              <div className="md:w-1/2 text-secondary-ink text-xs md:text-sm leading-relaxed">{item.desc}</div>
              <div className="md:w-auto text-left md:text-right text-ink text-xs uppercase tracking-wider">{item.val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. DEMONSTRATION */}
      <DemonstrationSection />

      {/* 6. PROJECT SCALE & EVIDENCE */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="font-serif text-3xl mb-3">Project Scale &amp; Evidence</h2>
          <p className="font-mono text-xs text-secondary-ink">
            Here is the scale and type of work I have handled across datasets and automations.
          </p>
        </div>
        {[
          { label: "Rail transaction dataset analyzed", val: "£742K+" },
          { label: "Traffic / safety records processed", val: "216K+" },
          { label: "Survey responses analyzed", val: "15K+" },
          { label: "AI automations built for real operational tasks", val: "Multiple" }
        ].map((item, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-hairline font-mono text-sm gap-2">
            <span className="text-secondary-ink font-bold uppercase tracking-wider text-xs sm:w-2/3">{item.label}</span>
            <span className="text-ink-blue font-serif font-bold text-left sm:text-right text-base sm:text-xl sm:w-1/3">{item.val}</span>
          </div>
        ))}
      </section>

      {/* 7. CLOSE */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-secondary-ground relative overflow-hidden border-t border-hairline">
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

                <div className="flex items-start">
                  <div className="w-10 text-ink-blue"><i className="fas fa-link text-xl"></i></div>
                  <div>
                    <h4 className="font-bold mb-1 uppercase tracking-widest">Profiles</h4>
                    <div className="flex gap-4 text-xs font-mono text-secondary-ink pt-1">
                      <a href="https://github.com/mohamed2nabil" target="_blank" rel="noopener noreferrer" className="hover:text-ink-blue transition-colors underline">GitHub &nearr;</a>
                      <a href="https://www.linkedin.com/in/mohamed-nabil-41047a223/" target="_blank" rel="noopener noreferrer" className="hover:text-ink-blue transition-colors underline">LinkedIn &nearr;</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl mb-6">Send Me a Message</h3>
              <form onSubmit={async (e) => {
                e.preventDefault();
                if (status === 'sending') return;
                setStatus('sending');
                
                try {
                  const emailjs = (await import('@emailjs/browser')).default;
                  await emailjs.sendForm(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                    e.target,
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
                  );
                  setStatus('success');
                  e.target.reset();
                  setTimeout(() => setStatus('idle'), 4000);
                } catch (error) {
                  setStatus('error');
                  console.error('EmailJS Error:', error);
                }
              }} className="space-y-6 font-mono text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-bold uppercase tracking-widest">Your Name</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-3 bg-ground border border-hairline focus:border-ink-blue focus:outline-none transition-colors" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-bold uppercase tracking-widest">Your Email</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-3 bg-ground border border-hairline focus:border-ink-blue focus:outline-none transition-colors" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="title" className="block mb-2 font-bold uppercase tracking-widest">Subject</label>
                  <input type="text" id="title" name="title" className="w-full px-4 py-3 bg-ground border border-hairline focus:border-ink-blue focus:outline-none transition-colors" required />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-bold uppercase tracking-widest">Message</label>
                  <textarea id="message" name="message" rows="5" className="w-full px-4 py-3 bg-ground border border-hairline focus:border-ink-blue focus:outline-none transition-colors" required></textarea>
                </div>
                <button type="submit" disabled={status === 'sending'} className={`px-8 py-4 uppercase tracking-widest w-full transition-colors disabled:opacity-50 ${status === 'success' ? 'bg-green-600 text-white' : status === 'error' ? 'bg-red-600 text-white' : 'bg-ink text-ground hover:bg-ink-blue'}`}>
                  {status === 'sending' ? 'SENDING...' : status === 'success' ? '✓ MESSAGE SENT' : status === 'error' ? 'ERROR - TRY AGAIN' : 'SEND MESSAGE'}
                </button>
                {status === 'error' && (
                  <p className="text-red-500 mt-2 text-xs text-center font-bold">Something went wrong. Please try again or check console.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DemonstrationSection() {
  const [activeModule, setActiveModule] = useState(0);
  const [activeNode, setActiveNode] = useState(0);

  const modules = [
    {
      id: "CONTENT",
      name: "Content Automation",
      nodes: [
        { name: "IDEA / INPUT", tech: "Telegram / Webhook" },
        { name: "AI PROCESSING", tech: "OpenAI GPT-4o" },
        { name: "GENERATION", tech: "ElevenLabs / FFmpeg" },
        { name: "PUBLISH", tech: "Social APIs" }
      ]
    },
    {
      id: "CUSTOMER",
      name: "Customer Response",
      nodes: [
        { name: "INCOMING MSG", tech: "Meta Graph API" },
        { name: "VALIDATION", tech: "Logic / n8n" },
        { name: "CONTEXT", tech: "Vector Database" },
        { name: "DECISION & REPLY", tech: "LLM Agent" }
      ]
    },
    {
      id: "RESEARCH",
      name: "Lead Research",
      nodes: [
        { name: "SEARCH", tech: "Google Places API" },
        { name: "FILTER", tech: "Regex / Logic" },
        { name: "QUALIFY", tech: "Data Sanitization" },
        { name: "STRUCTURE", tech: "PostgreSQL / CRM" }
      ]
    },
    {
      id: "SOCIAL",
      name: "Social Publishing",
      nodes: [
        { name: "CONTENT", tech: "Database / Sheet" },
        { name: "TRANSFORM", tech: "Format Engine" },
        { name: "SCHEDULE", tech: "Cron / Delay logic" },
        { name: "MULTI-CHANNEL", tech: "Platform APIs" }
      ]
    }
  ];

  // Auto-animate nodes
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode(prev => (prev + 1) % modules[activeModule].nodes.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [activeModule]);

  return (
    <section className="py-24 px-6 md:px-12 bg-ground border-y border-hairline overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl mb-4">Automation Workbench</h2>
        <p className="font-mono text-sm text-secondary-ink mb-12 max-w-2xl">
          A view into the workflow architectures I build to eliminate manual processes. Select a module to see its execution path.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <div className="w-full lg:w-1/4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 [&::-webkit-scrollbar]:hidden shrink-0">
            {modules.map((m, i) => (
              <button
                key={i}
                onClick={() => { setActiveModule(i); setActiveNode(0); }}
                className={`p-4 border font-mono text-[10px] sm:text-xs text-left transition-colors whitespace-nowrap lg:whitespace-normal ${
                  activeModule === i 
                    ? "border-ink-blue text-ink-blue bg-ink-blue/5 font-bold" 
                    : "border-hairline text-secondary-ink hover:border-ink"
                }`}
              >
                MODULE 0{i + 1}: {m.id}
              </button>
            ))}
          </div>
          
          <div className="w-full lg:w-3/4 border border-hairline p-6 md:p-12 relative bg-white/30 backdrop-blur-sm min-h-[250px] flex flex-col justify-center">
            <div className="absolute top-4 left-4 font-mono text-[10px] text-muted uppercase tracking-widest">
              ACTIVE: {modules[activeModule].name}
            </div>
            
            <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 mt-8 md:mt-0 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-2 left-4 right-4 h-[1px] bg-hairline z-0"></div>
              
              {modules[activeModule].nodes.map((node, i) => (
                <div key={i} className="flex-1 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3 z-10">
                  <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 bg-ground transition-colors duration-500 flex-shrink-0 ${activeNode >= i ? 'border-ink-blue bg-ink-blue/10' : 'border-hairline'}`}></div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-mono text-xs md:text-[11px] font-bold mb-1 transition-colors duration-300 truncate ${activeNode === i ? 'text-ink-blue' : 'text-ink'}`}>
                      {node.name}
                    </div>
                    <div className="font-mono text-[10px] text-secondary-ink uppercase tracking-wider truncate">
                      {node.tech}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-4 border-t border-hairline flex justify-between font-mono text-[10px] text-muted uppercase tracking-widest">
              <span>PIPELINE: RUNNING</span>
              <span>NODE {activeNode + 1} / {modules[activeModule].nodes.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
