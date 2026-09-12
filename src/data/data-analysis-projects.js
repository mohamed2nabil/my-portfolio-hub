export const dataAnalysisProjects = [
  {
    id: "retail-sales",
    title: "Retail Sales Performance & Customer Analytics",
    category: "SQL & Revenue Optimization",
    shortDesc: "Transforming millions of raw transaction records into actionable retail growth KPIs and customer segmentation models.",
    problem: "Retail enterprises accumulate massive transactional logs without a unified analytical view, leading to misaligned inventory distribution and missed revenue during peak shopping shifts.",
    solution: "Engineered advanced PostgreSQL data pipelines utilizing CTEs, subqueries, and window functions (RANK, PARTITION BY). Analyzed customer lifetime value (CLV), seasonal purchasing habits, and shift-based transaction velocities.",
    roi: [
      { label: "Peak Shift Optimization (+20% Sales)", desc: "Realigned retail staffing and flash promotions with identified peak purchasing time windows." },
      { label: "High-Value Customer Retention", desc: "Segmented the top 10% revenue-generating customer bracket to drive personalized VIP loyalty campaigns." },
      { label: "Dead Stock Reduction", desc: "Mapped seasonal category demand trends to prevent over-purchasing and reduce stale inventory write-downs." }
    ],
    github: "https://github.com/mohamed2nabil/sql_analysis",
    techStack: ["PostgreSQL", "Window Functions", "CTEs & Subqueries", "KPI Design", "Data Quality Validation"],
    images: [
      { url: "/images/data_analysis/Retail_sales_data_analysis_visual.jpeg", label: "Dashboard Architecture" }
    ],
    poster: "/images/data_analysis/Retail_sales_data_analysis_visual.jpeg"
  },
  {
    id: "uk-train",
    title: "UK Rail Network Operations & Revenue Dashboard",
    category: "Operational Efficiency & Power BI",
    shortDesc: "Interactive operational dashboard monitoring 742K GBP revenue, journey reliability, delay bottlenecks, and passenger behavior.",
    problem: "Transit operations suffered from cascading train delays without centralized visibility into core station bottlenecks, resulting in severe passenger compensation claims and lost brand trust.",
    solution: "Developed a production Power BI analytical dashboard leveraging custom DAX measures and Power Query ETL. Correlated route delays with weather and peak hours, tracking station profitability and passenger payment preferences.",
    roi: [
      { label: "Full Visibility over 742K GBP Revenue", desc: "Tracked station profitability in real time, identifying top-performing hubs such as London Kings Cross with 34% MoM growth." },
      { label: "87% On-Time Performance Benchmark", desc: "Pinpointed operational bottleneck stations, enabling proactive schedule revisions that cut delay compensation costs." },
      { label: "Payment Infrastructure Allocation (63% Card)", desc: "Quantified digital payment dominance to prioritize contactless ticketing gate upgrades." }
    ],
    github: "https://github.com/mohamed2nabil/UK-Train-Analytics-Dashboard",
    techStack: ["Power BI", "DAX Formulas", "Power Query (M)", "Operational Modeling", "Revenue Tracking"],
    images: [
      { url: "/images/data_analysis/UK Train Analytics Dashboard.png", label: "Executive Dashboard" }
    ],
    poster: "/images/data_analysis/UK Train Analytics Dashboard.png"
  },
  {
    id: "employee-survey",
    title: "Enterprise Employee Engagement & Retention Dashboard",
    category: "HR Analytics & Workforce Insights",
    shortDesc: "Translating 15K+ organizational survey responses into departmental retention KPIs and executive management scorecards.",
    problem: "Executive leadership lacked quantifiable metrics on employee sentiment and turnover risk, relying on subjective feedback that failed to highlight departmental friction before resignations occurred.",
    solution: "Structured a scalable HR analytics model across 15,000+ responses with a 99% completion rate. Benchmarked leadership vs operational staff sentiment across departments using multi-level Likert scale analytics in Power BI.",
    roi: [
      { label: "Proactive Turnover Risk Detection", desc: "Identified management-staff sentiment gaps in key departments before turnover escalated." },
      { label: "Reduced Replacement Hiring Costs", desc: "Empowered HR leadership with targeted retention data, significantly curbing costly talent attrition." },
      { label: "Data-Driven Culture Investments", desc: "Provided executive boards with objective evidence to direct training and wellness budgets where impact was greatest." }
    ],
    github: "https://github.com/mohamed2nabil/Employee-Survey-Analysis-Dashboard",
    techStack: ["Power BI", "Likert Scale Analytics", "HR Metric Design", "DAX Benchmarking", "Workforce Modeling"],
    images: [
      { url: "/images/data_analysis/Employee_survey_analysis_visuali.jpeg", label: "HR Survey Dashboard" }
    ],
    poster: "/images/data_analysis/Employee_survey_analysis_visuali.jpeg"
  },
  {
    id: "saudi-banking",
    title: "Saudi Banking Complaints & Service Quality Analytics",
    category: "Financial Quality & Customer Experience",
    shortDesc: "Regional analytics evaluating institutional complaint resolution rates, compliance benchmarks, and branch service standards across KSA.",
    problem: "Financial institutions operating across multiple provinces struggled to monitor customer complaint resolution velocity and meet rigorous central bank regulatory SLA standards.",
    solution: "Designed a specialized Arabic-compatible (RTL) Power BI dashboard analyzing hundreds of institutional complaint cases, isolating regional trends between Central and Eastern provinces, and tracking resolution turnaround.",
    roi: [
      { label: "80% Successful Complaint Resolution Rate", desc: "Enabled operational managers to identify pending bottlenecks and enforce regulatory compliance deadlines." },
      { label: "Mitigated Regulatory Fine Exposure", desc: "Root-cause tracking prevented chronic customer disputes from escalating to central banking authorities." },
      { label: "Targeted Regional Branch Support", desc: "Exposed complaint concentrations in high-traffic urban branches, driving immediate customer service re-allocations." }
    ],
    github: "https://github.com/mohamed2nabil/problem-analysis-in-suide-arabe-with-power-bi",
    techStack: ["Power BI RTL", "Text Standardization", "Financial Compliance KPIs", "Power Query", "M Language"],
    images: [
      { url: "/images/data_analysis/Saudi Banking Sector Analysis.png", label: "Banking KPI Dashboard" }
    ],
    poster: "/images/data_analysis/Saudi Banking Sector Analysis.png"
  },
  {
    id: "fdi-forecasting",
    title: "Foreign Direct Investment (FDI) Econometric Forecasting",
    category: "Econometric & Time-Series Modeling",
    shortDesc: "Advanced econometric time-series forecasting (ARIMA / Box-Jenkins) projecting investment trajectories to guide capital deployment.",
    problem: "Strategic capital allocators face heightened macroeconomic volatility in emerging markets when making long-term investment decisions without rigorous econometric forecast models.",
    solution: "Engineered a formal time-series econometric forecasting model (1999–2026) under statistical faculty supervision at Cairo University. Implemented stationarity tests, ARIMA(1,1,0) identification, and confidence interval projections in Python.",
    roi: [
      { label: "Reliable Multi-Year Macro Projections", desc: "Provided investors with scientifically bounded foreign direct investment trajectories to time strategic market entry." },
      { label: "Validated Econometric Accuracy (r = 0.833)", desc: "Demonstrated high predictive correlation with diagnostic p-values, outperforming subjective consensus estimates." },
      { label: "Capital Risk Mitigation in Emerging Markets", desc: "Delivered actionable scenario bounds that assist sovereign funds and banks in stress-testing venture portfolios." }
    ],
    github: "https://github.com/mohamed2nabil/Forecasting-Net-Foreign-Direct-Investment-FDI-in-Egypt-1999-2026-",
    techStack: ["Python", "ARIMA / Box-Jenkins", "ACF/PACF Diagnostics", "OLS Regression", "Econometric Modeling"],
    images: [
      { url: "/images/data_analysis/FDI_forecasting_visualization_data.jpeg", label: "Econometric Forecast" }
    ],
    poster: "/images/data_analysis/FDI_forecasting_visualization_data.jpeg"
  },
  {
    id: "cycling-performance",
    title: "Cycling Athletic Performance Biometric Analytics",
    category: "Statistical Research & Sports Science",
    shortDesc: "Hypothesis testing and ANOVA modeling analyzing the statistical interaction between athlete physiology and stage topography.",
    problem: "Professional sports organizations risk misallocating training budgets and race assignments without empirical proof of how athlete specialization affects performance on varying terrain.",
    solution: "Conducted an applied academic statistical investigation (One-Way and Two-Way ANOVA with interaction effects, Tukey HSD post-hoc testing) evaluating the interaction between rider profiles (Sprinters vs Climbers) and stage topography (Flat, Hilly, Mountain).",
    roi: [
      { label: "Empirical Tactical Race Strategy", desc: "Validated topography-athlete interaction at P < 0.01, guiding optimized race roster selection for professional directors." },
      { label: "Personalized Training Load Optimization", desc: "Identified fatigue thresholds across hill gradients, aiding sports scientists in customizing recovery regimens." },
      { label: "Framework for High-Performance Biometrics", desc: "Established a replicable statistical modeling pipeline adaptable to endurance sports and telemetry analytics." }
    ],
    github: "https://github.com/mohamed2nabil/Cycling-Performance-Analysis",
    techStack: ["Python", "Two-Way ANOVA", "Tukey HSD Post-hoc", "Biometric Analytics", "Statistical Visualization"],
    images: [
      { url: "/images/data_analysis/Cycling Performance Analysis.jpeg", label: "Statistical Study" }
    ],
    poster: "/images/data_analysis/Cycling Performance Analysis.jpeg"
  },
  {
    id: "people-insights",
    title: "Regional Operations Intelligence & Workforce Geocoding",
    category: "Automated Data Pipelines & Geo-Analytics",
    shortDesc: "Automated scraping, cleansing, geocoding, and metric tracking for regional workforce operations and territory planning.",
    problem: "Disjointed field location data and unstandardized municipal records prevent operations leadership from calculating true regional coverage and field density.",
    solution: "Created an automated Python scraping and data enrichment pipeline. Standardized regional addresses with regex, performed automated geocoding to extract precise coordinates, and generated structured datasets ready for operational analytics and n8n automations.",
    roi: [
      { label: "100% Automated Geospatial Enrichment", desc: "Transformed messy textual location records into geocoded coordinates without human intervention." },
      { label: "Optimized Field Route & Density Planning", desc: "Enabled visual clustering of regional demand, optimizing dispatch times and field staffing allocation." },
      { label: "Instant Automation & CRM Compatibility", desc: "Formatted clean, enriched JSON/Excel pipelines ready for direct ingestion into enterprise CRM systems." }
    ],
    github: "https://github.com/mohamed2nabil/Saudi-Districts-Scraper-Geocoder-",
    techStack: ["Python", "Geocoding / Geopy", "Regex Cleansing", "BeautifulSoup", "Data Automation Pipeline"],
    images: [
      { url: "/images/data_analysis/People Insights Workspace Dashboard.png", label: "Operations Dashboard" }
    ],
    poster: "/images/data_analysis/People Insights Workspace Dashboard.png"
  }
];
