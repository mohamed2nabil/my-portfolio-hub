"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bot, Workflow, Zap, Database, GitBranch, ArrowRight } from 'lucide-react';

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen bg-ground text-ink font-mono pt-[58px]">
      
      {/* HERO SECTION */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--color-ink-blue)_0%,_transparent_70%)]"></div>
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
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-48 p-6 bg-ground border border-hairline rounded-xl text-center shadow-sm relative group hover:border-ink-blue transition-colors"
            >
              <Database size={32} className="mx-auto mb-4 text-ink-blue group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-sm mb-1">Trigger / Input</h3>
              <p className="text-[10px] text-secondary-ink uppercase tracking-widest">Webhooks, APIs</p>
            </motion.div>
            
            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-ink-blue hidden md:block"
            >
              <ArrowRight />
            </motion.div>
            <div className="text-ink-blue md:hidden rotate-90 animate-pulse"><ArrowRight /></div>
            
            {/* Node 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-48 p-6 bg-ground border-2 border-ink-blue rounded-xl text-center shadow-[0_0_20px_rgba(var(--color-ink-blue),0.3)] relative group"
            >
              <Bot size={32} className="mx-auto mb-4 text-ink-blue group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-sm mb-1">AI Agent</h3>
              <p className="text-[10px] text-secondary-ink uppercase tracking-widest">LLM Processing</p>
            </motion.div>
            
            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
              className="text-ink-blue hidden md:block"
            >
              <ArrowRight />
            </motion.div>
            <div className="text-ink-blue md:hidden rotate-90 animate-pulse"><ArrowRight /></div>
            
            {/* Node 3 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-48 p-6 bg-ground border border-hairline rounded-xl text-center shadow-sm relative group hover:border-ink-blue transition-colors"
            >
              <GitBranch size={32} className="mx-auto mb-4 text-ink-blue group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-sm mb-1">Action / Output</h3>
              <p className="text-[10px] text-secondary-ink uppercase tracking-widest">CRM, Email, DB</p>
            </motion.div>
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
            {/* Project 1 */}
            <div className="p-8 border border-hairline bg-secondary-ground hover:border-ink-blue transition-all duration-300 group rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 mb-6 border-b border-hairline pb-6">
                <div className="w-12 h-12 rounded-full bg-ink flex items-center justify-center text-ground">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-ink">B2B Growth AI Bot</h3>
                  <span className="text-[10px] uppercase tracking-widest text-ink-blue font-bold">Conversational AI</span>
                </div>
              </div>
              <p className="text-sm text-secondary-ink mb-6 leading-relaxed">
                Replaced traditional &quot;Contact Us&quot; forms with a conversational agent that qualifies leads, collects requirements contextually, and pushes data to the CRM automatically.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-ground border border-hairline text-[10px] rounded-full text-secondary-ink uppercase tracking-widest">VoiceFlow</span>
                <span className="px-3 py-1 bg-ground border border-hairline text-[10px] rounded-full text-secondary-ink uppercase tracking-widest">Zapier</span>
                <span className="px-3 py-1 bg-ground border border-hairline text-[10px] rounded-full text-secondary-ink uppercase tracking-widest">Make</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-8 border border-hairline bg-secondary-ground hover:border-ink-blue transition-all duration-300 group rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 mb-6 border-b border-hairline pb-6">
                <div className="w-12 h-12 rounded-full bg-ink flex items-center justify-center text-ground">
                  <Workflow size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-ink">Instagram DM Automation</h3>
                  <span className="text-[10px] uppercase tracking-widest text-ink-blue font-bold">Marketing Automation</span>
                </div>
              </div>
              <p className="text-sm text-secondary-ink mb-6 leading-relaxed">
                Connected ManyChat to n8n to handle incoming DMs. The flow extracts intent, answers FAQs via OpenAI, and books calendar appointments directly from Instagram.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-ground border border-hairline text-[10px] rounded-full text-secondary-ink uppercase tracking-widest">n8n</span>
                <span className="px-3 py-1 bg-ground border border-hairline text-[10px] rounded-full text-secondary-ink uppercase tracking-widest">ManyChat</span>
                <span className="px-3 py-1 bg-ground border border-hairline text-[10px] rounded-full text-secondary-ink uppercase tracking-widest">OpenAI</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="p-8 border border-hairline bg-secondary-ground hover:border-ink-blue transition-all duration-300 group rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 mb-6 border-b border-hairline pb-6">
                <div className="w-12 h-12 rounded-full bg-ink flex items-center justify-center text-ground">
                  <Zap size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-ink">Social Content Production</h3>
                  <span className="text-[10px] uppercase tracking-widest text-ink-blue font-bold">Data Pipeline</span>
                </div>
              </div>
              <p className="text-sm text-secondary-ink mb-6 leading-relaxed">
                Automated social media asset creation. The workflow reads Google Sheets, generates text/images, and schedules them via API without human intervention.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-ground border border-hairline text-[10px] rounded-full text-secondary-ink uppercase tracking-widest">APIs</span>
                <span className="px-3 py-1 bg-ground border border-hairline text-[10px] rounded-full text-secondary-ink uppercase tracking-widest">LLM Agents</span>
              </div>
            </div>

            {/* Project 4 */}
            <div className="p-8 border border-hairline bg-secondary-ground hover:border-ink-blue transition-all duration-300 group rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 mb-6 border-b border-hairline pb-6">
                <div className="w-12 h-12 rounded-full bg-ink flex items-center justify-center text-ground">
                  <Database size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-ink">News-to-Content Pipeline</h3>
                  <span className="text-[10px] uppercase tracking-widest text-ink-blue font-bold">Content Automation</span>
                </div>
              </div>
              <p className="text-sm text-secondary-ink mb-6 leading-relaxed">
                Scrapes RSS feeds using n8n, passes raw news to an LLM to rewrite it in a specific brand tone, and publishes directly to a WordPress backend.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-ground border border-hairline text-[10px] rounded-full text-secondary-ink uppercase tracking-widest">Scraping</span>
                <span className="px-3 py-1 bg-ground border border-hairline text-[10px] rounded-full text-secondary-ink uppercase tracking-widest">n8n</span>
                <span className="px-3 py-1 bg-ground border border-hairline text-[10px] rounded-full text-secondary-ink uppercase tracking-widest">WordPress</span>
              </div>
            </div>
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
