export const aiProjects = [
  {
    id: "content-creator",
    title: "Telegram AI Video Production Pipeline",
    category: "Content Production Pipeline",
    shortDesc: "Autonomous media workflow that transforms raw creative briefs and product photos into fully rendered video ads via Telegram.",
    problem: "Manual video ad production is slow and expensive. Scriptwriting, voice acting, scene rendering, and editing require multiple specialized tools and days of turnaround time, severely limiting publishing velocity.",
    solution: "An automated n8n pipeline triggered via Telegram. An operator submits a product photo and key talking points; the engine autonomously generates scene prompts, synthesizes neural voiceover, stitches transitions, and renders production-ready short-form video in under 3 minutes.",
    roi: [
      { label: "90% Reduction in Production Turnaround", desc: "Compresses end-to-end video production cycle from 4+ hours of manual editing to under 3 minutes." },
      { label: "85% Cost Reduction per Creative Asset", desc: "Eliminates reliance on costly external editing agencies for routine promotional and social media content." },
      { label: "10x Content Scalability", desc: "Enables brand teams to publish dozens of localized TikTok and Instagram Reels daily with zero creative burnout." }
    ],
    techStack: ["n8n", "OpenAI GPT-4o", "ElevenLabs Neural Audio", "Telegram Bot API", "FFmpeg Video Engine"],
    images: [
      { url: "/images/ai_automation/content-creator/poster.png", label: "Project Poster" },
      { url: "/images/ai_automation/content-creator/workflow.png", label: "Architecture Workflow" }
    ],
    poster: "/images/ai_automation/content-creator/poster.png",
    workflow: "/images/ai_automation/content-creator/workflow.png"
  },
  {
    id: "google-map",
    title: "Automated B2B Lead Extraction Engine",
    category: "Sales & Lead Generation",
    shortDesc: "Autonomous regional scraper and lead qualification pipeline turning raw Maps listings into CRM-ready prospects.",
    problem: "Sales teams spend over 60% of their working hours manually searching Google Maps, copying contact numbers, and cleaning spreadsheets, leading to duplicate outreach and stale pipelines.",
    solution: "An autonomous extraction engine that queries Maps by targeted region and industry keywords, validates phone numbers, extracts verified business metadata, eliminates duplicates, and automatically streams qualified leads directly into the CRM.",
    roi: [
      { label: "15+ Hours Saved Weekly per Sales Rep", desc: "Redirects commercial reps from tedious manual data entry to high-value closing calls and customer negotiations." },
      { label: "100% Verified Lead Flow", desc: "Automated phone number validation and deduplication eliminate wasted dials and dead prospect lists." },
      { label: "Zero Third-Party Data Acquisition Costs", desc: "Builds an exclusive, self-updating proprietary B2B contact database at near-zero incremental cost." }
    ],
    techStack: ["n8n", "Google Places API", "Data Sanitization Engine", "PostgreSQL / CRM Sync", "Regex Validation"],
    images: [
      { url: "/images/ai_automation/google-map/poster.png", label: "Project Poster" },
      { url: "/images/ai_automation/google-map/workflow.png", label: "Architecture Workflow" }
    ],
    poster: "/images/ai_automation/google-map/poster.png",
    workflow: "/images/ai_automation/google-map/workflow.png"
  },
  {
    id: "insta-automation",
    title: "Instagram DM Conversational Sales Agent",
    category: "Conversational Commerce",
    shortDesc: "24/7 intelligent sales representative that handles inquiries, qualifies prospects, and captures CRM orders directly inside Instagram DMs.",
    problem: "Brands lose high-intent inbound buyers due to slow response times outside business hours. Human moderators get overwhelmed answering repetitive pricing and size questions instead of closing qualified deals.",
    solution: "An autonomous conversational AI integrated with the Instagram Graph API and a customized product Knowledge Base. It responds instantly to comments and direct messages, recommends matching catalog items, handles common objections, and logs order details directly into the store database.",
    roi: [
      { label: "Instant 30-Second Response (24/7)", desc: "Captures impulsive buyers at peak interest window, preventing drop-off to competing brands." },
      { label: "35% Higher Lead-to-Order Conversion", desc: "Personalized contextual product recommendations guide casual DM inquiries into completed checkout links." },
      { label: "Automated Lead Qualification", desc: "Filters out casual browsers and routes only sales-ready, high-ticket prospects to human account executives." }
    ],
    techStack: ["n8n", "Instagram Graph API", "OpenAI GPT-4o", "Vector Knowledge Base (RAG)", "Supabase"],
    images: [
      { url: "/images/ai_automation/insta-automation/poster.png", label: "Project Poster" },
      { url: "/images/ai_automation/insta-automation/workflow.png", label: "Architecture Workflow" }
    ],
    poster: "/images/ai_automation/insta-automation/poster.png",
    workflow: "/images/ai_automation/insta-automation/workflow.png"
  },
  {
    id: "whatsapp-sender",
    title: "Smart WhatsApp API Campaign Engine",
    category: "Outreach & Retention",
    shortDesc: "Enterprise bulk messaging orchestration engine featuring real-time number verification, anti-ban scheduling, and delivery tracking.",
    problem: "Bulk promotional campaigns suffer from high failure rates, wasted message credits on inactive numbers, and risk of account bans when messages are sent inconsistently.",
    solution: "An intelligent dispatch pipeline built on the official WhatsApp Cloud API. It verifies number activity prior to dispatch, personalizes dynamic message templates, schedules staggered sends to protect account health, and syncs delivery and read receipts in real time.",
    roi: [
      { label: "40% Reduction in Wasted API Costs", desc: "Pre-validates recipient phone numbers before initiating paid API requests, eliminating failed message charges." },
      { label: "Over 90% Verified Open Rate", desc: "Highly personalized message copy and dynamic customer variables drive superior engagement over generic bulk SMS." },
      { label: "Enterprise Account Ban Protection", desc: "Smart rate-limiting and staggered queue distribution ensure strict compliance with Meta communication policies." }
    ],
    techStack: ["n8n", "WhatsApp Cloud API", "Number Cleansing Engine", "Google Sheets Sync", "Webhook Architecture"],
    images: [
      { url: "/images/ai_automation/whatsapp-sender/poster.png", label: "Project Poster" },
      { url: "/images/ai_automation/whatsapp-sender/workflow.png", label: "Architecture Workflow" }
    ],
    poster: "/images/ai_automation/whatsapp-sender/poster.png",
    workflow: "/images/ai_automation/whatsapp-sender/workflow.png"
  },
  {
    id: "whatsapp",
    title: "Autonomous WhatsApp Customer Success Agent",
    category: "AI Support & Operations",
    shortDesc: "Full-featured AI representative with persistent session memory and RAG architecture for multi-turn customer support and order management.",
    problem: "Maintaining 24/7 multilingual customer support shifts is financially prohibitive for growing businesses, and human agents frequently lose past customer context during shift handovers.",
    solution: "An intelligent virtual support agent empowered with persistent memory and Retrieval-Augmented Generation (RAG). It interprets customer intent, supports multi-language queries, analyzes attached invoices and PDFs, and resolves tier-1 support tickets autonomously.",
    roi: [
      { label: "80% Autonomous Resolution Rate", desc: "Handles high-volume FAQ inquiries, shipment tracking, and catalog questions without requiring human intervention." },
      { label: "70% Lower Support Overhead", desc: "Eliminates the need for night shifts and weekend support staffing while maintaining instantaneous service levels." },
      { label: "Continuous Customer Memory (Zero Context Loss)", desc: "Remembers past customer tickets and preferences across weeks, creating a seamless and tailored experience." }
    ],
    techStack: ["n8n", "RAG / Vector Embeddings", "Session Memory", "WhatsApp Business API", "ERP Integration"],
    images: [
      { url: "/images/ai_automation/whatsapp/poster.png", label: "Project Poster" },
      { url: "/images/ai_automation/whatsapp/workflow.png", label: "Architecture Workflow" }
    ],
    poster: "/images/ai_automation/whatsapp/poster.png",
    workflow: "/images/ai_automation/whatsapp/workflow.png"
  }
];
