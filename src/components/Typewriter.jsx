"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

// Replays only while visible. No layout shift: the full line occupies its
// final width from the beginning. Optional loop is intentional for hero copy.
export default function Typewriter({ text, speed = 80, loop = true, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: .15, once: false });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState("");

  useEffect(() => {
    if (reduce) return;
    let timer;
    if (!inView) {
      timer = window.setTimeout(() => setShown(""), 0);
      return () => window.clearTimeout(timer);
    }

    let position = 0;
    let deleting = false;
    function step() {
      setShown(text.slice(0, position));
      if (!deleting && position < text.length) {
        position += 1;
        timer = window.setTimeout(step, speed);
      } else if (!deleting) {
        if (!loop) return;
        deleting = true;
        timer = window.setTimeout(step, 2100);
      } else if (position > 0) {
        position -= 1;
        timer = window.setTimeout(step, Math.max(32, speed / 2));
      } else {
        deleting = false;
        timer = window.setTimeout(step, 500);
      }
    }
    timer = window.setTimeout(step, 350);
    return () => window.clearTimeout(timer);
  }, [text, speed, loop, reduce, inView]);

  const visible = reduce ? text : shown;
  return <span ref={ref} className={`relative inline-block max-w-full align-top ${className}`} role="text" aria-label={text}>
    <span aria-hidden="true" className="invisible">{text}</span>
    <span aria-hidden="true" className="absolute inset-0">{visible}<span className="type-cursor">▋</span></span>
  </span>;
}
