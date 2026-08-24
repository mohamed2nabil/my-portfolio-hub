"use client";
import React from 'react';
import Link from 'next/link';

export default function DataAnalysisPage() {
  return (
    <div className="bg-ground text-ink min-h-screen font-sans pt-[58px]">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-10 pb-20">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between max-w-6xl">
              <div className="md:w-1/2 mb-12 md:mb-0">
                  <span className="font-mono text-xs text-muted uppercase tracking-widest mb-4 block">Domain 01: Data Analysis</span>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif text-ink tracking-tight">Turning data into <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 italic">Insights</span></h1>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-secondary-ink">Data Analyst | Business Intelligence</h2>
                  <p className="text-lg mb-8 text-secondary-ink max-w-lg leading-relaxed font-mono text-sm">
                      Before the dashboard or statistical model, I make the data trustworthy. I build the pipelines, clean the datasets, analyze the patterns, and create decision-ready analytics.
                  </p>
                  <div className="flex space-x-4">
                      <Link href="/#contact" className="px-6 py-3 bg-ink text-ground font-mono uppercase tracking-widest text-xs hover:bg-ink-blue transition-colors">Hire Me</Link>
                      <a href="#projects" className="px-6 py-3 border border-hairline bg-secondary-ground text-ink font-mono uppercase tracking-widest text-xs hover:border-ink-blue transition-colors">View Work</a>
                  </div>
                  <div className="flex mt-8 space-x-4">
                      <a href="https://github.com/mohamed2nabil" className="w-10 h-10 flex items-center justify-center border border-hairline rounded-full text-ink hover:text-ink-blue hover:border-ink-blue transition-colors">
                          <i className="fab fa-github"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/mohamed-nabil-41047a223/" className="w-10 h-10 flex items-center justify-center border border-hairline rounded-full text-ink hover:text-ink-blue hover:border-ink-blue transition-colors">
                          <i className="fab fa-linkedin-in"></i>
                      </a>
                  </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 blur-2xl opacity-20 animate-pulse"></div>
                      <img src="/images/mohamed-nabil-main.jpeg"
                           alt="Profile"
                           className="relative w-full h-full object-cover rounded-full border-4 border-hairline shadow-2xl" 
                           style={{ animation: 'float 6s ease-in-out infinite' }} />
                  </div>
              </div>
          </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-secondary-ground border-y border-hairline">
          <div className="container mx-auto px-6 max-w-6xl">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">About <span className="text-ink-blue italic">Me</span></h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="md:w-1/3 flex justify-center">
                      <div className="relative w-64 h-64">
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 blur-xl opacity-20"></div>
                          <img src="/images/mohamed-nabil-main.jpeg"
                               alt="About"
                               className="relative w-full h-full object-cover rounded-2xl border border-hairline shadow-lg" />
                      </div>
                  </div>
                  
                  <div className="md:w-2/3">
                      <h3 className="text-2xl font-bold mb-6 font-serif">Who am I?</h3>
                      <p className="text-secondary-ink mb-6 leading-relaxed font-mono text-sm">
                          I am a detail-oriented Data Analyst focused on turning complex datasets into actionable insights through statistical methods and interactive dashboards. My workflow starts with the research question, moves through data cleaning and validation, and ends with actionable business interpretation.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 font-mono text-xs">
                          <div>
                              <h4 className="font-bold mb-2 uppercase tracking-widest text-muted">Name: <span className="text-ink font-normal">Mohamed Nabil</span></h4>
                              <h4 className="font-bold mb-2 uppercase tracking-widest text-muted">Email: <span className="text-ink font-normal">mohamed2nabil5@gmail.com</span></h4>
                              <h4 className="font-bold mb-2 uppercase tracking-widest text-muted">Phone: <span className="text-ink font-normal">+20 1145252173</span></h4>
                          </div>
                          <div>
                              <h4 className="font-bold mb-2 uppercase tracking-widest text-muted">Education: <span className="text-ink font-normal">Information Technology</span></h4>
                              <h4 className="font-bold mb-2 uppercase tracking-widest text-muted">Location: <span className="text-ink font-normal">Egypt</span></h4>
                              <h4 className="font-bold mb-2 uppercase tracking-widest text-muted">University: <span className="text-ink font-normal">6 October Tech</span></h4>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div className="mt-24">
                  <h3 className="text-2xl font-bold mb-12 text-center font-serif">My <span className="text-ink-blue italic">Experience</span></h3>
                  
                  <div className="relative max-w-4xl mx-auto">
                      <div className="absolute left-4 md:left-1/2 h-full w-px bg-hairline transform md:-translate-x-1/2"></div>
                      
                      <div className="mb-12 flex flex-col md:flex-row justify-between items-center w-full relative">
                          <div className="md:w-5/12 px-6 py-6 bg-ground rounded-xl border border-hairline shadow-sm z-10 w-full ml-12 md:ml-0 md:text-right">
                              <h4 className="text-lg font-bold mb-2 font-serif">Information Technology Student</h4>
                              <p className="text-xs font-mono text-ink-blue uppercase tracking-widest mb-3">6 October Technological University • 2023 - 2027</p>
                              <p className="text-secondary-ink text-sm leading-relaxed">
                                  Studying core computer science principles with a strong focus on Databases, Data Structures, Algorithms, and Analytics to build solid foundations.
                              </p>
                          </div>
                          <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-ground transform -translate-x-1/2 z-20"></div>
                          <div className="hidden md:block md:w-5/12"></div>
                      </div>

                      <div className="mb-12 flex flex-col md:flex-row justify-between items-center w-full relative">
                          <div className="hidden md:block md:w-5/12"></div>
                          <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-ground transform -translate-x-1/2 z-20"></div>
                          <div className="md:w-5/12 px-6 py-6 bg-ground rounded-xl border border-hairline shadow-sm z-10 w-full ml-12 md:ml-0">
                              <h4 className="text-lg font-bold mb-2 font-serif">Data Analyst</h4>
                              <p className="text-xs font-mono text-ink-blue uppercase tracking-widest mb-3">Freelance • 2023 - Present</p>
                              <p className="text-secondary-ink text-sm leading-relaxed">
                                  Helping Master's students and businesses turn research requirements into analyzable data, clean datasets, select KPIs, and translate results into clear findings.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-ground">
          <div className="container mx-auto px-6 max-w-6xl">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Analytical <span className="text-ink-blue italic">Capabilities</span></h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-secondary-ground p-8 border border-hairline text-center hover:border-ink-blue transition duration-300 group">
                      <div className="mb-6 transform group-hover:scale-110 transition-transform">
                          <i className="fas fa-filter text-4xl text-cyan-600"></i>
                      </div>
                      <h3 className="text-xl font-bold mb-3 font-serif">Data Preparation</h3>
                      <p className="text-secondary-ink text-sm leading-relaxed">Handling missing values, duplicate removal, standardizing formats, and ensuring data integrity before analysis.</p>
                  </div>

                  <div className="bg-secondary-ground p-8 border border-hairline text-center hover:border-ink-blue transition duration-300 group">
                      <div className="mb-6 transform group-hover:scale-110 transition-transform">
                          <i className="fas fa-chart-line text-4xl text-blue-600"></i>
                      </div>
                      <h3 className="text-xl font-bold mb-3 font-serif">Statistical Analysis</h3>
                      <p className="text-secondary-ink text-sm leading-relaxed">Descriptive statistics, OLS Regression, ANOVA, ARIMA forecasting, and Psychometric reliability testing.</p>
                  </div>

                  <div className="bg-secondary-ground p-8 border border-hairline text-center hover:border-ink-blue transition duration-300 group">
                      <div className="mb-6 transform group-hover:scale-110 transition-transform">
                          <i className="fas fa-chart-pie text-4xl text-cyan-600"></i>
                      </div>
                      <h3 className="text-xl font-bold mb-3 font-serif">Business Intelligence</h3>
                      <p className="text-secondary-ink text-sm leading-relaxed">Designing interactive dashboards in Power BI and Excel to track KPIs and support organizational decisions.</p>
                  </div>
              </div>

              {/* Tools & Technologies */}
              <div className="mt-20">
                  <h3 className="text-2xl font-bold mb-10 text-center font-serif">Tools & <span className="text-ink-blue italic">Technologies</span></h3>
                  <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                      {["Python", "SQL", "PostgreSQL", "Power BI", "DAX", "Power Query", "Excel", "pandas", "NumPy", "matplotlib", "Scrapy", "n8n"].map(tool => (
                        <span key={tool} className="px-4 py-2 border border-hairline bg-secondary-ground text-sm font-mono hover:bg-ink hover:text-ground transition-colors cursor-default">
                          {tool}
                        </span>
                      ))}
                  </div>
              </div>
          </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-24 bg-secondary-ground border-t border-hairline">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Analytical <span className="text-ink-blue italic">Portfolio</span></h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-6"></div>
                <p className="font-mono text-sm text-secondary-ink max-w-2xl mx-auto">Research questions translated into data models, KPIs, and actionable insights.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* UK Train Analytics */}
                <div className="bg-ground border border-hairline overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
                    <div className="h-48 w-full overflow-hidden relative bg-ink/5">
                        <div className="absolute inset-0 bg-gradient-to-t from-ground to-transparent z-10"></div>
                        <i className="fas fa-train absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-hairline group-hover:scale-110 transition-transform duration-500"></i>
                    </div>
                    <div className="p-6 flex-1 flex flex-col relative z-20 -mt-10">
                        <h3 className="text-xl font-bold mb-2 font-serif">UK Train Analytics Dashboard</h3>
                        <p className="text-secondary-ink text-sm mb-4 leading-relaxed flex-1">A complete workflow from raw operational data to business interpretation. Analyzed journey reliability, pricing, and revenue across UK train stations.</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-2 py-1 border border-hairline bg-secondary-ground text-[10px] font-mono uppercase">Power BI</span>
                            <span className="px-2 py-1 border border-hairline bg-secondary-ground text-[10px] font-mono uppercase">DAX</span>
                        </div>
                        <a href="https://github.com/mohamed2nabil/UK-Train-Analytics-Dashboard" className="text-ink-blue font-mono text-xs uppercase tracking-widest hover:text-ink transition-colors border-t border-hairline pt-4">
                            <i className="fab fa-github mr-2"></i> View Project
                        </a>
                    </div>
                </div>

                {/* Retail Sales Analysis */}
                <div className="bg-ground border border-hairline overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
                    <div className="h-48 w-full overflow-hidden relative bg-ink/5">
                        <div className="absolute inset-0 bg-gradient-to-t from-ground to-transparent z-10"></div>
                        <i className="fas fa-shopping-cart absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-hairline group-hover:scale-110 transition-transform duration-500"></i>
                    </div>
                    <div className="p-6 flex-1 flex flex-col relative z-20 -mt-10">
                        <h3 className="text-xl font-bold mb-2 font-serif">Retail Sales Data Analysis</h3>
                        <p className="text-secondary-ink text-sm mb-4 leading-relaxed flex-1">Extensive analytical querying using SQL to understand retail sales behavior, customer segmentation, seasonality, and high-value transactions.</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-2 py-1 border border-hairline bg-secondary-ground text-[10px] font-mono uppercase">PostgreSQL</span>
                            <span className="px-2 py-1 border border-hairline bg-secondary-ground text-[10px] font-mono uppercase">CTEs</span>
                        </div>
                        <a href="https://github.com/mohamed2nabil/sql_analysis" className="text-ink-blue font-mono text-xs uppercase tracking-widest hover:text-ink transition-colors border-t border-hairline pt-4">
                            <i className="fab fa-github mr-2"></i> View Project
                        </a>
                    </div>
                </div>

                {/* Employee Survey Analysis */}
                <div className="bg-ground border border-hairline overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
                    <div className="h-48 w-full overflow-hidden relative bg-ink/5">
                        <div className="absolute inset-0 bg-gradient-to-t from-ground to-transparent z-10"></div>
                        <i className="fas fa-users absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-hairline group-hover:scale-110 transition-transform duration-500"></i>
                    </div>
                    <div className="p-6 flex-1 flex flex-col relative z-20 -mt-10">
                        <h3 className="text-xl font-bold mb-2 font-serif">Employee Survey Analysis</h3>
                        <p className="text-secondary-ink text-sm mb-4 leading-relaxed flex-1">Translated 15K+ survey responses into organizational KPIs and management-facing insights comparing departments and seniority via Power BI.</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-2 py-1 border border-hairline bg-secondary-ground text-[10px] font-mono uppercase">HR Analytics</span>
                            <span className="px-2 py-1 border border-hairline bg-secondary-ground text-[10px] font-mono uppercase">Likert Scale</span>
                        </div>
                        <a href="https://github.com/mohamed2nabil/Employee-Survey-Analysis-Dashboard" className="text-ink-blue font-mono text-xs uppercase tracking-widest hover:text-ink transition-colors border-t border-hairline pt-4">
                            <i className="fab fa-github mr-2"></i> View Project
                        </a>
                    </div>
                </div>

                {/* Saudi Banking Analysis */}
                <div className="bg-ground border border-hairline overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
                    <div className="h-48 w-full overflow-hidden relative bg-ink/5">
                        <div className="absolute inset-0 bg-gradient-to-t from-ground to-transparent z-10"></div>
                        <i className="fas fa-university absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-hairline group-hover:scale-110 transition-transform duration-500"></i>
                    </div>
                    <div className="p-6 flex-1 flex flex-col relative z-20 -mt-10">
                        <h3 className="text-xl font-bold mb-2 font-serif">Saudi Banking Sector Analysis</h3>
                        <p className="text-secondary-ink text-sm mb-4 leading-relaxed flex-1">Comprehensive analysis of banking complaints, service quality, and regional differences across Saudi Arabia. Created Arabic RTL dashboards.</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-2 py-1 border border-hairline bg-secondary-ground text-[10px] font-mono uppercase">Power Query</span>
                            <span className="px-2 py-1 border border-hairline bg-secondary-ground text-[10px] font-mono uppercase">RTL</span>
                        </div>
                        <a href="https://github.com/mohamed2nabil/problem-analysis-in-suide-arabe-with-power-bi" className="text-ink-blue font-mono text-xs uppercase tracking-widest hover:text-ink transition-colors border-t border-hairline pt-4">
                            <i className="fab fa-github mr-2"></i> View Project
                        </a>
                    </div>
                </div>

                {/* FDI Forecasting */}
                <div className="bg-ground border border-hairline overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
                    <div className="h-48 w-full overflow-hidden relative bg-ink/5">
                        <div className="absolute inset-0 bg-gradient-to-t from-ground to-transparent z-10"></div>
                        <i className="fas fa-chart-area absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-hairline group-hover:scale-110 transition-transform duration-500"></i>
                    </div>
                    <div className="p-6 flex-1 flex flex-col relative z-20 -mt-10">
                        <h3 className="text-xl font-bold mb-2 font-serif">FDI Forecasting in Egypt</h3>
                        <p className="text-secondary-ink text-sm mb-4 leading-relaxed flex-1">Academic time-series forecasting of Net Foreign Direct Investment using statistical modeling (ARIMA / Box-Jenkins) via Python.</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-2 py-1 border border-hairline bg-secondary-ground text-[10px] font-mono uppercase">Python</span>
                            <span className="px-2 py-1 border border-hairline bg-secondary-ground text-[10px] font-mono uppercase">ARIMA</span>
                        </div>
                        <a href="https://github.com/mohamed2nabil/Forecasting-Net-Foreign-Direct-Investment-FDI-in-Egypt-1999-2026-" className="text-ink-blue font-mono text-xs uppercase tracking-widest hover:text-ink transition-colors border-t border-hairline pt-4">
                            <i className="fab fa-github mr-2"></i> View Project
                        </a>
                    </div>
                </div>

                {/* Cycling Performance */}
                <div className="bg-ground border border-hairline overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
                    <div className="h-48 w-full overflow-hidden relative bg-ink/5">
                        <div className="absolute inset-0 bg-gradient-to-t from-ground to-transparent z-10"></div>
                        <i className="fas fa-bicycle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-hairline group-hover:scale-110 transition-transform duration-500"></i>
                    </div>
                    <div className="p-6 flex-1 flex flex-col relative z-20 -mt-10">
                        <h3 className="text-xl font-bold mb-2 font-serif">Cycling Performance Analysis</h3>
                        <p className="text-secondary-ink text-sm mb-4 leading-relaxed flex-1">Statistical investigation using One-Way/Two-Way ANOVA and Tukey HSD to study rider specialization versus stage topography.</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="px-2 py-1 border border-hairline bg-secondary-ground text-[10px] font-mono uppercase">Statistics</span>
                            <span className="px-2 py-1 border border-hairline bg-secondary-ground text-[10px] font-mono uppercase">ANOVA</span>
                        </div>
                        <a href="https://github.com/mohamed2nabil/Cycling-Performance-Analysis" className="text-ink-blue font-mono text-xs uppercase tracking-widest hover:text-ink transition-colors border-t border-hairline pt-4">
                            <i className="fab fa-github mr-2"></i> View Project
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}} />
    </div>
  );
}
