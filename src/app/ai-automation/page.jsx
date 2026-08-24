"use client";

import React from "react";
import Link from "next/link";

export default function AIAutomationPage() {
  return (
    <div className="w-full bg-[#1e1e1e] text-white">
      {/* 1. ORIGINAL TEMPLATE HERO (PARALLAX bg-dark.png) */}
      <section className="min-h-[700px] flex items-center justify-start px-[5%] md:px-[15%] w-full bg-[url('/templates/ai-automation/media/bg-dark.f420c6b8458af72de935.png')] bg-fixed bg-no-repeat bg-cover bg-center pt-[58px]">
        <div className="z-10 text-left text-white w-[90%] md:w-full">
          <h1 className="text-5xl md:text-[5em] font-bold m-0 leading-tight">AI Automation</h1>
          <p className="text-xl md:text-[1.5em] m-0 text-gray-300 mt-2">Intelligent Workflows & Agents</p>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mt-6">
            I don&apos;t just build chatbots. I design AI-powered systems that integrate with your business workflows, connect to your data, and automate repetitive tasks reliably.
          </p>
        </div>
      </section>

      {/* 2. ORIGINAL TEMPLATE TIMELINE (Career History / Architecture) */}
      <section className="py-20 px-[5%] md:px-[15%] bg-[#121212]">
        <h1 className="text-3xl font-bold text-white mb-10">Automation Architecture</h1>
        <div className="flex flex-col border-l-4 border-gray-600 pl-6 gap-8 ml-4">
          
          <div className="relative">
            <div className="absolute -left-[43px] bg-[#5000ca] text-white rounded-full p-1.5 w-8 h-8 flex items-center justify-center font-bold">1</div>
            <div className="bg-white text-[#272822] p-6 rounded-lg border border-[#ddd]">
              <h3 className="m-0 text-xl font-bold">Trigger / Input</h3>
              <h4 className="my-2 text-[#666] text-sm">Webhooks, APIs, Forms</h4>
              <p className="m-0 text-sm font-mono text-gray-600">The workflow initiates automatically from incoming data or schedules.</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[43px] bg-[#5000ca] text-white rounded-full p-1.5 w-8 h-8 flex items-center justify-center font-bold">2</div>
            <div className="bg-white text-[#272822] p-6 rounded-lg border border-[#ddd]">
              <h3 className="m-0 text-xl font-bold">AI Agent / LLM Processing</h3>
              <h4 className="my-2 text-[#666] text-sm">OpenAI, LangChain, Custom Prompts</h4>
              <p className="m-0 text-sm font-mono text-gray-600">AI analyzes intent, extracts information, or generates necessary content.</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[43px] bg-[#5000ca] text-white rounded-full p-1.5 w-8 h-8 flex items-center justify-center font-bold">3</div>
            <div className="bg-white text-[#272822] p-6 rounded-lg border border-[#ddd]">
              <h3 className="m-0 text-xl font-bold">Action / Output</h3>
              <h4 className="my-2 text-[#666] text-sm">CRM, Email, Database</h4>
              <p className="m-0 text-sm font-mono text-gray-600">The processed data is formatted and pushed securely to the final destination.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. ORIGINAL TEMPLATE PROJECTS GRID */}
      <section className="flex flex-col py-20 px-[5%] md:px-[10%] text-left bg-black text-white">
        <h1 className="text-4xl font-bold mb-12">Deployed Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="project">
                <div className="overflow-hidden rounded-[5px] mx-auto w-full mb-4">
                  <img src="/templates/ai-automation/media/mock10.2d05b02ba569a430a255.png" className="w-full transition-transform duration-200 hover:scale-105" alt="B2B Growth AI Bot" />
                </div>
                <h2 className="text-2xl font-bold hover:underline cursor-pointer mb-2">B2B Growth AI Bot</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Replaced traditional Contact Us forms with a conversational agent that qualifies leads, collects requirements contextually, and pushes data to the CRM automatically using VoiceFlow, Zapier, and Make.
                </p>
            </div>

            <div className="project">
                <div className="overflow-hidden rounded-[5px] mx-auto w-full mb-4">
                  <img src="/templates/ai-automation/media/mock09.e18677ccfc932e52d754.png" className="w-full transition-transform duration-200 hover:scale-105" alt="Instagram DM Automation" />
                </div>
                <h2 className="text-2xl font-bold hover:underline cursor-pointer mb-2">Instagram DM Automation</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Connected ManyChat to n8n to handle incoming DMs. The flow extracts intent, answers FAQs via OpenAI, and books calendar appointments directly from Instagram.
                </p>
            </div>

            <div className="project">
                <div className="overflow-hidden rounded-[5px] mx-auto w-full mb-4">
                  <img src="/templates/ai-automation/media/mock08.13f46873fdbd382f4b76.png" className="w-full transition-transform duration-200 hover:scale-105" alt="Social Content Production" />
                </div>
                <h2 className="text-2xl font-bold hover:underline cursor-pointer mb-2">Social Content Production</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Automated social media asset creation. The workflow reads Google Sheets, generates text/images, and schedules them via API without human intervention.
                </p>
            </div>

            <div className="project">
                <div className="overflow-hidden rounded-[5px] mx-auto w-full mb-4">
                  <img src="/templates/ai-automation/media/mock06.ea816617e0d0fa0f63ca.png" className="w-full transition-transform duration-200 hover:scale-105" alt="News-to-Content Pipeline" />
                </div>
                <h2 className="text-2xl font-bold hover:underline cursor-pointer mb-2">News-to-Content Pipeline</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Scrapes RSS feeds using n8n, passes raw news to an LLM to rewrite it in a specific brand tone, and publishes directly to a WordPress backend.
                </p>
            </div>
            
        </div>
      </section>
    </div>
  );
}
