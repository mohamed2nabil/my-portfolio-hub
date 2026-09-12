import Link from 'next/link';
import { Bot, Workflow, Zap, Database, GitBranch, ArrowRight } from 'lucide-react';
import { aiProjects } from '../../data/ai-projects';

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen bg-ground text-ink font-mono pt-[58px]">
      
      {/* HERO SECTION */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/ai_automation/background_hero.jpeg')" }}></div>
        <div className="container mx-auto relative z-10 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-ground border border-hairline rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-sm text-ink-blue">
            <Zap size={14} className="text-ink-blue animate-pulse" /> Intelligent Automation
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-ink tracking-tight">
            AI <span className="italic text-ink-blue">Automation</span>
          </h1>
          <p className="text-secondary-ink text-sm md:text-base mb-12 max-w-2xl mx-auto leading-relaxed">
            I don&apos;t just build chatbots. I design AI-powered systems that integrate with your business workflows, connect to your data, and automate repetitive tasks reliably.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#workflows" className="px-8 py-4 bg-ink text-ground font-bold uppercase tracking-widest text-xs hover:bg-ink-blue transition-colors shadow-sm rounded-full flex items-center gap-2">
              Explore Workflows <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* WORKFLOW ARCHITECTURE */}
      <section className="py-20 bg-secondary-ground/50 border-y border-hairline">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-center mb-16 text-ink">Automation Architecture</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Node 1 */}
            <div className="w-48 p-6 bg-ground border border-hairline rounded-xl text-center shadow-sm relative group hover:border-ink-blue transition-colors">
              <Database size={32} className="mx-auto mb-4 text-ink-blue group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-sm mb-1">Trigger / Input</h3>
              <p className="text-[10px] text-secondary-ink uppercase tracking-widest">Webhooks, APIs</p>
            </div>
            
            <div className="text-ink-blue hidden md:block animate-pulse"><ArrowRight /></div>
            <div className="text-ink-blue md:hidden rotate-90 animate-pulse"><ArrowRight /></div>
            
            {/* Node 2 */}
            <div className="w-48 p-6 bg-ground border-2 border-ink-blue rounded-xl text-center shadow-md relative group">
              <Bot size={32} className="mx-auto mb-4 text-ink-blue group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-sm mb-1">AI Agent</h3>
              <p className="text-[10px] text-secondary-ink uppercase tracking-widest">LLM Processing</p>
            </div>
            
            <div className="text-ink-blue hidden md:block animate-pulse"><ArrowRight /></div>
            <div className="text-ink-blue md:hidden rotate-90 animate-pulse"><ArrowRight /></div>
            
            {/* Node 3 */}
            <div className="w-48 p-6 bg-ground border border-hairline rounded-xl text-center shadow-sm relative group hover:border-ink-blue transition-colors">
              <GitBranch size={32} className="mx-auto mb-4 text-ink-blue group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-sm mb-1">Action / Output</h3>
              <p className="text-[10px] text-secondary-ink uppercase tracking-widest">CRM, Email, DB</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section id="workflows" className="py-24 bg-ground">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl font-bold text-ink mb-4">Deployed Solutions</h2>
            <p className="text-sm text-secondary-ink max-w-2xl mx-auto">Replacing manual effort with reliable, 24/7 intelligent systems.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiProjects.map((project) => (
              <Link href={`/ai-automation/${project.id}`} key={project.id} className="p-8 border border-hairline bg-secondary-ground hover:border-ink-blue transition-all duration-300 group rounded-2xl shadow-sm block cursor-pointer flex flex-col">
                <div className="flex items-center gap-4 mb-6 border-b border-hairline pb-6">
                  <div className="w-12 h-12 rounded-full bg-ink flex items-center justify-center text-ground shrink-0">
                    <Bot size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-ink group-hover:text-ink-blue transition-colors">{project.title}</h3>
                    <span className="text-[10px] uppercase tracking-widest text-ink-blue font-bold">{project.category}</span>
                  </div>
                </div>
                <p className="text-sm text-secondary-ink mb-6 leading-relaxed flex-grow">
                  {project.shortDesc}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-hairline border-opacity-50">
                  <span className="text-xs font-bold uppercase tracking-widest text-ink flex items-center gap-2 group-hover:text-ink-blue">View Project <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" /></span>
                </div>
              </Link>
            ))}
          </div>
          
          {/* CTA specific to AI Automation */}
          <div className="mt-20 p-8 text-center bg-secondary-ground border border-hairline rounded-2xl">
            <h3 className="text-2xl font-bold font-serif text-ink mb-4">Have a process worth automating?</h3>
            <p className="text-sm text-secondary-ink mb-8 max-w-lg mx-auto">Stop doing manual data entry. Let&apos;s build an intelligent agent that works while you sleep.</p>
            <Link href="/#contact" className="inline-block px-8 py-4 bg-ink-blue text-ground font-bold uppercase tracking-widest text-xs hover:bg-ink transition-colors rounded-full shadow-sm">
                Discuss Your Workflow
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
