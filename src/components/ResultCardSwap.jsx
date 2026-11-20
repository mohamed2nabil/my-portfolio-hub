"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useSiteMotion } from "@/components/MotionPreferences";
import { ArrowRight } from "lucide-react";

// Projects change with the visitor's page scroll, not with a timer or dots.
// A sticky viewport gives each featured project real reading time. Scrolling
// back reverses the order naturally. No wheel hijacking or scroll trap.
export default function ResultCardSwap({ projects = [], basePath = "/ai-automation" }) {
  const sectionRef = useRef(null);
  const [index, setIndex] = useState(0);
  const { enabled } = useSiteMotion();
  const reduce = !enabled;
  const items = projects; // Show EVERY published workflow, including future Admin additions.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (reduce || items.length < 2) return;
    const next = Math.min(items.length - 1, Math.max(0, Math.floor(progress * items.length)));
    setIndex((previous) => previous === next ? previous : next);
  });

  if (!items.length) return null;

  // Do not hide featured projects behind a scroll animation for visitors who
  // explicitly prefer reduced motion. Each card stays a normal, readable link.
  if (reduce) {
    return <div data-testid="ai-showcase" data-project-count={items.length} ref={sectionRef} className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
      {items.map((project) => <ProjectCard key={project.id} project={project} basePath={basePath} />)}
    </div>;
  }

  const active = items[Math.min(index, items.length - 1)];
  return <div
    data-testid="ai-showcase"
    data-project-count={items.length}
    ref={sectionRef}
    className="relative"
    style={{ height: `${Math.round((0.66 * Math.max(items.length - 1, 0) + 1.18) * 100)}svh` }}
    aria-label="Scroll through featured automation projects"
  >
    <div className="sticky top-[5.25rem] mx-auto flex h-[calc(100svh-6rem)] max-w-3xl flex-col justify-center gap-3 py-3">
      <div className="flex shrink-0 items-center justify-between px-1 text-xs font-semibold tracking-wide text-indigo-700">
        <span>Scroll to explore all {items.length} workflows</span>
        <span className="font-mono tabular-nums">{String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
      </div>
      <div className="relative min-h-0 w-full">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-5 inset-y-0 translate-x-3 translate-y-3 rounded-[1.65rem] border border-indigo-700/15 bg-indigo-100/45" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-2 inset-y-0 translate-x-1 translate-y-1 rounded-[1.65rem] border border-indigo-700/15 bg-indigo-50" />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={active.id}
            initial={{ opacity: 0, y: 28, scale: .965, rotate: -1.25, filter: "blur(3px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -28, scale: .965, rotate: 1.25, filter: "blur(3px)" }}
            transition={{ duration: .42, ease: [.22, 1, .36, 1] }}
            className="relative w-full"
          >
            <ProjectCard project={active} basePath={basePath} />
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="shrink-0 text-center text-xs text-secondary-ink">Scroll naturally to reveal the next solution · scroll up to revisit</p>
    </div>
  </div>;
}

function ProjectCard({ project, basePath }) {
  return <article className="group w-full overflow-hidden rounded-[1.65rem] border border-indigo-700/20 bg-ground shadow-lg shadow-indigo-950/5 transition-shadow duration-300 hover:shadow-xl">
    <Link href={basePath + "/" + project.id} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700">
      <div className="relative aspect-[16/9] max-h-[45svh] overflow-hidden bg-secondary-ground">
        <Image src={project.poster} alt={project.title} fill sizes="(max-width:900px) 100vw, 760px" className="object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
      </div>
      <div className="grid gap-2 p-4 sm:p-5">
        <h3 className="font-serif text-xl font-medium sm:text-2xl">{project.title}</h3>
        <p className="line-clamp-2 text-sm leading-6 text-secondary-ink">{project.outcome || project.shortDesc}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-800">Explore solution <ArrowRight size={16} /></span>
      </div>
    </Link>
  </article>;
}
