"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DataEngineerPage() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-ground text-ink font-mono pt-[58px] overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 relative border-b border-amber-500/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-amber-500)_0%,_transparent_50%)] opacity-5 pointer-events-none"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span> System Status: Online
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-ink tracking-tight">
                Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 italic">Engineering</span>
              </h1>
              <p className="text-secondary-ink text-sm md:text-base mb-8 leading-relaxed max-w-xl">
                I build end-to-end data platforms that connect sources, ingestion, processing, and data quality into reliable, decision-ready business intelligence. The goal is not simply to move data, but to make it useful.
              </p>
              <div className="flex gap-4">
                <a href="#architecture" className="px-6 py-3 bg-amber-600 text-ground font-bold uppercase tracking-widest text-xs hover:bg-amber-500 transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                  View Architecture
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/3 w-full bg-secondary-ground border border-hairline p-6 font-mono text-xs text-secondary-ink shadow-inner relative overflow-hidden group"
            >
               <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>
               <p className="text-amber-500 font-bold mb-2">{"// CORE.STACK.YML"}</p>
               <p>services:</p>
               <p className="pl-4">ingestion: Azure Event Hubs</p>
               <p className="pl-4">compute: Databricks / PySpark</p>
               <p className="pl-4">storage: Delta Lake</p>
               <p className="pl-4">serving: Power BI / Streamlit</p>
               <p className="pl-4">orchestration: Databricks Jobs</p>
               <motion.p 
                 animate={{ opacity: [1, 0, 1] }} 
                 transition={{ repeat: Infinity, duration: 1.5 }}
                 className="mt-4 text-amber-500 font-bold"
               >
                 {"// STATUS: READY"} _
               </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PIPELINE ARCHITECTURE (Horizontal flow with active state animation) */}
      <section id="architecture" className="py-24 bg-secondary-ground border-b border-hairline relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-serif text-3xl font-bold text-ink mb-2">The Data Lifecycle</h2>
            <p className="text-sm text-secondary-ink">Real-time telemetry and batch processing flows.</p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 relative">
             {/* Connecting Line */}
             <div className="hidden md:block absolute top-[40%] left-0 right-0 h-0.5 bg-hairline z-0 overflow-hidden">
               <motion.div 
                 className="h-full bg-amber-500 w-1/4"
                 animate={{ x: ['-100%', '400%'] }}
                 transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
               ></motion.div>
             </div>
             
             {[
               { id: "01", name: "Ingestion", title: "Sources", desc: "IoT Sensors, APIs, DBs pushed to Event Hubs & Kafka.", delay: 0 },
               { id: "02", name: "Processing", title: "ETL Pipeline", desc: "PySpark & Databricks for cleaning, transforming.", delay: 0.2 },
               { id: "03", name: "Storage", title: "Medallion", desc: "Bronze, Silver, Gold in Delta Lake.", delay: 0.4 },
               { id: "04", name: "Analytics", title: "Serving", desc: "Star Schema SQL connecting to Power BI.", delay: 0.6 }
             ].map((node, index) => (
               <motion.div 
                 key={index}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: node.delay, duration: 0.5 }}
                 className={`flex-1 bg-ground border-2 p-6 relative z-10 transition-colors shadow-sm ${activeNode === index ? 'border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]' : 'border-hairline hover:border-amber-500/50'}`}
               >
                 <div className={`text-sm font-bold mb-2 ${activeNode === index ? 'text-amber-500' : 'text-amber-600/50'}`}>
                   {node.id} / {node.name}
                 </div>
                 <h3 className="font-serif font-bold text-lg mb-2 text-ink">{node.title}</h3>
                 <p className="text-xs text-secondary-ink leading-relaxed">{node.desc}</p>
                 
                 {/* Active Indicator */}
                 {activeNode === index && (
                   <motion.div 
                     layoutId="activeIndicator"
                     className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full"
                   ></motion.div>
                 )}
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* CORE PROJECT */}
      <section className="py-24 bg-ground">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-serif text-3xl font-bold text-ink mb-2">Infrastructure Deployments</h2>
            <p className="text-sm text-secondary-ink">Transforming raw telemetry into operational decisions.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-hairline bg-secondary-ground overflow-hidden group hover:border-amber-500/50 transition-all shadow-md relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-colors"></div>
            
            <div className="bg-ink p-8 text-ground relative z-10">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">DEPI Graduation Project</span>
                <span className="text-[10px] bg-amber-500 text-ink px-2 py-1 font-bold uppercase tracking-widest">Microsoft Azure</span>
              </div>
              <h3 className="font-serif text-3xl font-bold mb-4">AI-Powered Smart Agriculture</h3>
              <p className="text-sm opacity-80 max-w-3xl leading-relaxed">
                A real-time data engineering platform built to monitor greenhouses. We designed an architecture that connects sensor ingestion, cloud processing, data quality, warehousing, analytics, and alerting into one end-to-end pipeline.
              </p>
            </div>
            
            {/* Visual Architecture Diagram Replacement (using CSS/HTML) */}
            <div className="w-full h-48 bg-ground border-y border-hairline flex items-center justify-center relative overflow-hidden group-hover:bg-amber-500/5 transition-colors">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-hairline)_1px,transparent_1px),linear-gradient(var(--color-hairline)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
              <div className="flex gap-4 items-center z-10">
                <div className="w-16 h-16 rounded border border-amber-500/50 bg-secondary-ground flex items-center justify-center font-mono text-[10px] text-amber-500 animate-pulse">Sensors</div>
                <div className="h-0.5 w-12 bg-amber-500/30"></div>
                <div className="w-16 h-16 rounded-full border border-amber-500 bg-secondary-ground flex items-center justify-center font-mono text-[10px] text-amber-500">EventHub</div>
                <div className="h-0.5 w-12 bg-amber-500/30"></div>
                <div className="px-4 h-16 rounded border border-amber-500/50 bg-secondary-ground flex flex-col items-center justify-center font-mono text-[10px] text-amber-500">
                  <span>Databricks</span>
                  <span className="opacity-50">PySpark</span>
                </div>
                <div className="h-0.5 w-12 bg-amber-500/30"></div>
                <div className="w-16 h-16 rounded border-b-4 border-amber-500 bg-secondary-ground flex flex-col items-center justify-center font-mono text-[10px] text-amber-500">
                  <span>Delta</span>
                  <span className="opacity-50">Lake</span>
                </div>
              </div>
            </div>

            <div className="p-8 grid md:grid-cols-2 gap-12 bg-ground">
              <div>
                <h4 className="font-serif text-xl font-bold text-ink mb-4 border-b border-hairline pb-2 text-amber-600">The Problem &rarr; Solution</h4>
                <p className="text-sm text-secondary-ink mb-4 leading-relaxed">
                  Traditional manual monitoring causes slow problem detection. This system replaces reactive checks with proactive intervention, detecting abnormal environmental conditions instantly.
                </p>
                <div className="p-4 bg-secondary-ground border-l-2 border-amber-500 text-xs text-secondary-ink font-mono italic">
                  &quot;The system is designed to reduce response time and support earlier intervention.&quot;
                </div>
              </div>
              
              <div>
                <h4 className="font-serif text-xl font-bold text-ink mb-4 border-b border-hairline pb-2 text-amber-600">Business Outcomes</h4>
                <ul className="space-y-3 text-sm text-secondary-ink">
                  <li className="flex gap-3"><span className="text-amber-500 font-bold">&rarr;</span> Faster detection of critical temperatures.</li>
                  <li className="flex gap-3"><span className="text-amber-500 font-bold">&rarr;</span> Real-time Streamlit operational visibility.</li>
                  <li className="flex gap-3"><span className="text-amber-500 font-bold">&rarr;</span> Proactive Telegram alerts sent to farm managers.</li>
                  <li className="flex gap-3"><span className="text-amber-500 font-bold">&rarr;</span> Foundation for predictive crop-risk forecasting.</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-secondary-ground p-6 border-t border-hairline flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-ground border border-hairline text-[10px] text-ink uppercase tracking-widest hover:border-amber-500 transition-colors cursor-default">Event Hubs</span>
              <span className="px-3 py-1 bg-ground border border-hairline text-[10px] text-ink uppercase tracking-widest hover:border-amber-500 transition-colors cursor-default">Databricks</span>
              <span className="px-3 py-1 bg-ground border border-hairline text-[10px] text-ink uppercase tracking-widest hover:border-amber-500 transition-colors cursor-default">PySpark</span>
              <span className="px-3 py-1 bg-ground border border-hairline text-[10px] text-ink uppercase tracking-widest hover:border-amber-500 transition-colors cursor-default">Delta Lake</span>
              <span className="px-3 py-1 bg-ground border border-hairline text-[10px] text-ink uppercase tracking-widest hover:border-amber-500 transition-colors cursor-default">Star Schema</span>
            </div>
          </motion.div>
          
          {/* CTA specific to Data Eng */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 flex flex-col md:flex-row gap-6 items-center justify-between p-8 border border-amber-500/30 bg-amber-500/5 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-amber-500/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700 pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold font-serif text-ink mb-2">Need a reliable data pipeline?</h3>
              <p className="text-sm text-secondary-ink">Let&apos;s move your data securely from source to decision.</p>
            </div>
            <Link href="/#contact" className="relative z-10 px-8 py-3 bg-amber-600 text-ground font-bold uppercase tracking-widest text-xs hover:bg-amber-500 transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] whitespace-nowrap">
                Initialize Pipeline
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
