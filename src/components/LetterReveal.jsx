"use client";

import { motion, useReducedMotion } from "framer-motion";

// Apply to short headline fragments only. Full text remains accessible.
export default function LetterReveal({ text, className = "" }) {
  const reduce = useReducedMotion();
  return <span className={className} role="text" aria-label={text}>
    {Array.from(text).map((character, index) => (
      <motion.span
        aria-hidden="true"
        key={index}
        className="inline-block whitespace-pre"
        initial={reduce ? false : { opacity: 0, y: 13, filter: "blur(5px)" }}
        whileInView={reduce ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ delay: Math.min(index * 0.028, 0.7), duration: 0.38, ease: "easeOut" }}
      >{character}</motion.span>
    ))}
  </span>;
}
