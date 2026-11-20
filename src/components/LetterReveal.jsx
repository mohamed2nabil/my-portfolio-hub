"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

// One IntersectionObserver controls the entire phrase. Letters reveal by
// word, so typography can wrap naturally on narrow screens.
export default function LetterReveal({ text, className = "" }) {
  const ref = useRef(null);
  const active = useInView(ref, { amount: .15, once: false });
  const reduce = useReducedMotion();
  const words = text.split(" ");
  let number = 0;

  if (reduce) return <span className={className}>{text}</span>;

  return <span ref={ref} className={className} role="text" aria-label={text}>
    {words.map((word, wi) => <span key={wi} className="inline-block whitespace-nowrap">
      {Array.from(word).map((character, ci) => {
        const delay = Math.min(number++ * .065, 1.15);
        return <motion.span aria-hidden="true" key={ci}
          className="inline-block"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={active ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 20, filter: "blur(8px)" }}
          transition={{ delay: active ? delay : 0, duration: .65, ease: [.22, 1, .36, 1] }}>
          {character}
        </motion.span>;
      })}
      {wi < words.length - 1 && <span aria-hidden="true">&nbsp;</span>}
    </span>)}
  </span>;
}
