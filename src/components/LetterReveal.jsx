"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useSiteMotion } from "@/components/MotionPreferences";

// Per-character: blur -> crisp, up -> still, transparent -> visible.
// Runs as the phrase appears; preserve wrapping between words and accessibility.
export default function LetterReveal({ text, className = "", interval = .05 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: .05, once: false });
  const { enabled } = useSiteMotion();
  if (!enabled) return <span ref={ref} className={className}>{text}</span>;

  let characterIndex = 0;
  return <span data-testid="letter-reveal" ref={ref} className={className} role="text" aria-label={text}>
    {text.split(" ").map((word, wi) => {
      return <span key={wi} className="inline-block whitespace-nowrap">
        {Array.from(word).map((character, ci) => {
          const delay = characterIndex++ * interval;
          return <motion.span key={ci} aria-hidden="true" className="inline-block"
            initial={false}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 15, filter: "blur(6px)" }}
            transition={{ delay: inView ? delay : 0, duration: .45, ease: [.22, 1, .36, 1] }}>
            {character}
          </motion.span>;
        })}
        {wi < text.split(" ").length - 1 && <span aria-hidden="true">&nbsp;</span>}
      </span>;
    })}
  </span>;
}
