"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export default function Typewriter({ text, speed = 28, className = "" }) {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState("");

  useEffect(() => {
    if (reduceMotion) return;
    let index = 0;
    const reveal = () => {
      index += 1;
      setVisible(text.slice(0, index));
      if (index < text.length) timer = window.setTimeout(reveal, speed);
    };
    let timer = window.setTimeout(reveal, speed);
    return () => window.clearTimeout(timer);
  }, [reduceMotion, speed, text]);

  return <span className={className} aria-label={text}>{reduceMotion ? text : visible}<span aria-hidden="true" className="type-cursor">▋</span></span>;
}
