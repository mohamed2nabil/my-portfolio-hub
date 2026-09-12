import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, TrendingUp, Globe, AlertCircle, ExternalLink } from "lucide-react";
import { webDevProjects } from "../../../data/web-dev-projects";
import ProjectHeroCarousel from "../../../components/ProjectHeroCarousel";

export function generateStaticParams() {
  return webDevProjects.map((p) => ({
    id: p.id,
  }));
}

export default async function WebDevProjectPage({ params }) {
  const { id } = await params;
  const project = webDevProjects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const images = project.images || [{ url: project.poster, label: "Live Preview" }];

  return (
    <div className="min-h-screen bg-ground text-ink font-mono pt-[58px] relative">
      {/* Floating Back Button */}
      <div className="absolute top-[75px] left-4 md:left-8 z-40">
        <Link
          href="/web-dev"
          className="inline-flex items-center gap-2 text-ink hover:text-emerald-600 transition-all text-xs uppercase tracking-widest font-bold bg-ground/90 backdrop-blur-md px-4 py-2.5 rounded-full border border-hairline shadow-md hover:scale-105 active:scale-95"
        >
          <ArrowLeft size={14} /> Back to Web Development
        </Link>
      </div>

      {/* Hero with Carousel */}
      <ProjectHeroCarousel images={images} title={project.title} />

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl relative z-10 space-y-16">
          
          {/* Header */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="px-4 py-1.5 bg-secondary-ground border border-hairline rounded-full text-[10px] font-bold tracking-widest uppercase text-emerald-600">
                {project.category}
              </span>
              <div className="flex items-center gap-3">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-600 text-ground rounded-full text-xs font-bold uppercase tracking-wider hover:bg-emerald-500 transition-colors shadow-sm"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-1.5 bg-ground border border-hairline text-ink rounded-full text-xs font-bold uppercase tracking-wider hover:text-emerald-600 transition-colors shadow-sm"
                  >
                    <i className="fab fa-github text-sm"></i> Code
                  </a>
                )}
              </div>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-ink leading-tight">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-secondary-ink leading-relaxed">
              {project.shortDesc}
            </p>
          </div>

          {/* Business Problem */}
          {project.problem && (
            <div className="p-8 border border-hairline bg-secondary-ground/40 rounded-2xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4 text-ink font-serif font-bold text-xl">
                <AlertCircle size={22} className="text-amber-600 shrink-0" />
                <h2>Commercial Challenge & Market Context</h2>
              </div>
              <p className="text-secondary-ink text-base md:text-lg leading-relaxed">
                {project.problem}
              </p>
            </div>
          )}

          {/* Solution */}
          {project.solution && (
            <div className="p-8 border border-hairline bg-ground rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-4 text-ink font-serif font-bold text-xl">
                <Globe size={22} className="text-emerald-600 shrink-0" />
                <h2>Product Architecture & Engineering</h2>
              </div>
              <p className="text-secondary-ink text-base md:text-lg leading-relaxed">
                {project.solution}
              </p>
            </div>
          )}

          {/* Measurable ROI */}
          {project.roi && project.roi.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8 text-ink font-serif font-bold text-2xl">
                <TrendingUp size={26} className="text-emerald-600 shrink-0" />
                <h2>Commercial ROI & Conversion Impact</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.roi.map((item, idx) => (
                  <div key={idx} className="p-6 border border-hairline bg-secondary-ground/30 rounded-xl flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
                    <div className="flex items-start gap-2 mb-3">
                      <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                      <h3 className="font-bold text-sm text-ink leading-snug">{item.label}</h3>
                    </div>
                    <p className="text-xs text-secondary-ink leading-relaxed mt-auto pt-2 border-t border-hairline">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          {project.techStack && (
            <div className="pt-8 border-t border-hairline flex flex-wrap items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-secondary-ink font-bold mr-2">Tech Stack:</span>
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-ground border border-hairline text-xs font-mono rounded-md text-ink">
                  {tech}
                </span>
              ))}
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
