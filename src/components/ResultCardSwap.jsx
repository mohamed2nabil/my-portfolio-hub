"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Light adaptation of the user's GSAP CardSwap reference: Framer Motion is
// already installed, so there is no new runtime/dependency cost.
export default function ResultCardSwap({ projects = [], basePath = "/ai-automation" }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const items = projects.slice(0, 3);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: .2 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!inView || paused || reduced || items.length < 2) return;
    const id = window.setInterval(() => setIndex((value) => (value + 1) % items.length), 7500);
    return () => window.clearInterval(id);
  }, [inView, paused, reduced, items.length]);

  if (!items.length) return null;
  const active = items[index % items.length];
  return <div ref={ref} className="mx-auto w-full max-w-3xl" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}>
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-5 top-5 h-full rounded-[1.65rem] border border-indigo-700/15 bg-indigo-100/45 sm:translate-x-4 sm:translate-y-4" />
      <div className="pointer-events-none absolute inset-x-2 top-2 h-full rounded-[1.65rem] border border-indigo-700/15 bg-indigo-50 sm:translate-x-2 sm:translate-y-2" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.article key={active.id} initial={reduced ? false : { opacity: 0, y: 14, rotate: -.8, scale: .985 }} animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }} exit={reduced ? { opacity: 1 } : { opacity: 0, y: -12, rotate: .8, scale: .985 }} transition={{ duration: .35, ease: "easeInOut" }} className="relative overflow-hidden rounded-[1.65rem] border border-indigo-700/15 bg-ground shadow-lg shadow-indigo-950/5">
          <Link href={basePath + "/" + active.id} className="group block">
            <div className="relative aspect-[16/9] overflow-hidden bg-secondary-ground">
              <Image src={active.poster} alt={active.title} fill sizes="(max-width: 900px) 100vw, 750px" className="object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
            </div>
            <div className="grid gap-2 p-5 sm:p-6">
              <h3 className="font-serif text-xl font-medium sm:text-2xl">{active.title}</h3>
              <p className="line-clamp-2 text-sm leading-6 text-secondary-ink">{active.outcome || active.shortDesc}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-800">Explore solution <ArrowRight size={16}/></span>
            </div>
          </Link>
        </motion.article>
      </AnimatePresence>
    </div>
    {items.length > 1 && <div className="mt-6 flex items-center justify-between gap-3">
      <div className="flex gap-2" role="group" aria-label="Choose featured workflow">
        {items.map((item, i) => <button type="button" key={item.id} onClick={() => setIndex(i)} aria-label={item.title} aria-pressed={i === index} className={`h-2.5 rounded-full transition-all ${i === index ? "w-8 bg-indigo-700" : "w-2.5 bg-indigo-300 hover:bg-indigo-500"}`} />)}
      </div>
      <div className="flex gap-2">
        <button type="button" aria-label="Previous workflow" onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)} className="grid h-11 w-11 place-items-center rounded-full border border-hairline bg-ground transition hover:border-indigo-500 hover:bg-indigo-50"><ChevronLeft size={20}/></button>
        <button type="button" aria-label="Next workflow" onClick={() => setIndex((i) => (i + 1) % items.length)} className="grid h-11 w-11 place-items-center rounded-full border border-hairline bg-ground transition hover:border-indigo-500 hover:bg-indigo-50"><ChevronRight size={20}/></button>
      </div>
    </div>}
  </div>;
}
