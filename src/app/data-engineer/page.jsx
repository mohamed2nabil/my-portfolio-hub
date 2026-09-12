import React from 'react';
import Link from 'next/link';

export default function DataEngineerPage() {
  return (
    <div className="min-h-screen bg-ground text-ink font-mono pt-[58px]">
      
      {/* HERO SECTION */}
      <section className="pt-24 pb-16 px-6 relative border-b-4 border-amber-600/30">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-600 text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span> System Status: Online
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-ink tracking-tight">
                Data <span className="text-amber-600 italic">Engineering</span>
              </h1>
              <p className="text-secondary-ink text-sm md:text-base mb-8 leading-relaxed max-w-xl">
                I build end-to-end data platforms that connect sources, ingestion, processing, and data quality into reliable, decision-ready business intelligence. The goal is not simply to move data, but to make it useful.
              </p>
              <div className="flex gap-4">
                <a href="#architecture" className="px-6 py-3 bg-ink text-ground font-bold uppercase tracking-widest text-xs hover:bg-amber-600 transition-colors shadow-sm">
                  View Architecture
                </a>
              </div>
            </div>
            
            <div className="md:w-1/3 w-full bg-secondary-ground border border-hairline p-6 font-mono text-xs text-secondary-ink shadow-inner">
               <p className="text-amber-600 font-bold mb-2">{"// CORE.STACK.YML"}</p>
               <p>services:</p>
               <p className="pl-4">ingestion: Azure Event Hubs</p>
               <p className="pl-4">compute: Databricks / PySpark</p>
               <p className="pl-4">storage: Delta Lake</p>
               <p className="pl-4">serving: Power BI / Streamlit</p>
               <p className="pl-4">orchestration: Databricks Jobs</p>
               <p className="mt-2 text-amber-600 font-bold">{"// STATUS: READY"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PIPELINE ARCHITECTURE (Horizontal layout instead of grid) */}
      <section id="architecture" className="py-20 bg-secondary-ground border-b border-hairline">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-serif text-3xl font-bold text-ink mb-12">The Data Lifecycle</h2>
          
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 relative">
             {/* Connecting Line */}
             <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-hairline -translate-y-1/2 z-0"></div>
             
             <div className="flex-1 bg-ground border-2 border-hairline p-6 relative z-10 hover:border-amber-500 transition-colors shadow-sm">
               <div className="text-amber-600 text-sm font-bold mb-2">01 / Ingestion</div>
               <h3 className="font-serif font-bold text-lg mb-2 text-ink">Sources</h3>
               <p className="text-xs text-secondary-ink leading-relaxed">IoT Sensors, APIs, Databases pushed to Event Hubs &amp; Kafka.</p>
             </div>
             
             <div className="flex-1 bg-ground border-2 border-hairline p-6 relative z-10 hover:border-amber-500 transition-colors shadow-sm">
               <div className="text-amber-600 text-sm font-bold mb-2">02 / Processing</div>
               <h3 className="font-serif font-bold text-lg mb-2 text-ink">ETL Pipeline</h3>
               <p className="text-xs text-secondary-ink leading-relaxed">PySpark &amp; Databricks for cleaning, transforming, and validation.</p>
             </div>
             
             <div className="flex-1 bg-ground border-2 border-hairline p-6 relative z-10 hover:border-amber-500 transition-colors shadow-sm">
               <div className="text-amber-600 text-sm font-bold mb-2">03 / Storage</div>
               <h3 className="font-serif font-bold text-lg mb-2 text-ink">Medallion</h3>
               <p className="text-xs text-secondary-ink leading-relaxed">Bronze (Raw), Silver (Clean), Gold (Business-Ready) in Delta Lake.</p>
             </div>
             
             <div className="flex-1 bg-ground border-2 border-hairline p-6 relative z-10 hover:border-amber-500 transition-colors shadow-sm">
               <div className="text-amber-600 text-sm font-bold mb-2">04 / Analytics</div>
               <h3 className="font-serif font-bold text-lg mb-2 text-ink">Serving</h3>
               <p className="text-xs text-secondary-ink leading-relaxed">Star Schema SQL Warehouse connecting to Power BI &amp; Streamlit.</p>
             </div>
          </div>
        </div>
      </section>

      {/* CORE PROJECT */}
      <section className="py-24 bg-ground">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-ink mb-2">Infrastructure Deployments</h2>
            <p className="text-sm text-secondary-ink">Transforming raw, high-frequency agricultural telemetry into timely operational decisions.</p>
          </div>
          
          <div className="border border-hairline bg-secondary-ground overflow-hidden group hover:border-amber-500 transition-all shadow-md">
            <div className="bg-ink p-8 text-ground">
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">DEPI Graduation Project</span>
                <span className="text-[10px] bg-amber-500 text-ink px-2 py-1 font-bold uppercase tracking-widest">Microsoft Azure</span>
              </div>
              <h3 className="font-serif text-3xl font-bold mb-4">AI-Powered Smart Agriculture</h3>
              <p className="text-sm opacity-80 max-w-3xl leading-relaxed">
                A real-time data engineering platform built to monitor greenhouses. We designed an architecture that connects sensor ingestion, cloud processing, data quality, warehousing, analytics, and alerting into one end-to-end pipeline.
              </p>
            </div>
            
            <div className="p-8 grid md:grid-cols-2 gap-12 bg-ground">
              <div>
                <h4 className="font-serif text-xl font-bold text-ink mb-4 border-b border-hairline pb-2 text-amber-600">The Problem &rarr; Solution</h4>
                <p className="text-sm text-secondary-ink mb-4 leading-relaxed">
                  Traditional manual monitoring causes slow problem detection. This system replaces reactive checks with proactive intervention, detecting abnormal environmental conditions instantly.
                </p>
                <div className="p-4 bg-secondary-ground border-l-2 border-amber-500 text-xs text-secondary-ink font-mono">
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
              <span className="px-3 py-1 bg-ground border border-hairline text-[10px] text-ink uppercase tracking-widest">Event Hubs</span>
              <span className="px-3 py-1 bg-ground border border-hairline text-[10px] text-ink uppercase tracking-widest">Databricks</span>
              <span className="px-3 py-1 bg-ground border border-hairline text-[10px] text-ink uppercase tracking-widest">PySpark</span>
              <span className="px-3 py-1 bg-ground border border-hairline text-[10px] text-ink uppercase tracking-widest">Delta Lake</span>
              <span className="px-3 py-1 bg-ground border border-hairline text-[10px] text-ink uppercase tracking-widest">Star Schema</span>
            </div>
          </div>
          
          {/* CTA specific to Data Eng */}
          <div className="mt-20 flex flex-col md:flex-row gap-6 items-center justify-between p-8 border-2 border-amber-500/20 bg-amber-500/5">
            <div>
              <h3 className="text-xl font-bold font-serif text-ink mb-2">Need a reliable data pipeline?</h3>
              <p className="text-sm text-secondary-ink">Let&apos;s move your data securely from source to decision.</p>
            </div>
            <Link href="/#contact" className="px-8 py-3 bg-amber-600 text-ground font-bold uppercase tracking-widest text-xs hover:bg-amber-500 transition-colors shadow-sm whitespace-nowrap">
                Initialize Pipeline
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
