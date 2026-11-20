"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

// Starts as the line enters view. Reserves text width to avoid layout shift;
// reduced-motion visitors receive the full line immediately.
export default function Typewriter({ text, speed = 48, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: .1, once: false });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState("");

  useEffect(() => {
    if (reduce) return;
    if (!inView) return;
    let position = 0;
    const id = window.setInterval(() => {
      position += 1;
      setShown(text.slice(0, position));
      if (position >= text.length) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [text, speed, inView, reduce]);

  const complete = reduce ? text : shown;
  return <span ref={ref} className={`relative inline-block max-w-full align-top ${className}`} role="text" aria-label={text}>
    <span aria-hidden="true" className="invisible">{text}</span>
    <span aria-hidden="true" className="absolute inset-0">{complete}<span className="type-cursor">▋</span></span>
  </span>;
}
