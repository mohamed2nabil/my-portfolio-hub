"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useSiteMotion } from "@/components/MotionPreferences";

// 50 ms between letters. The invisible full sentence reserves its final
// width and height, so typing cannot shift surrounding layout.
export default function Typewriter({ text, speed = 50, loop = true, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: .05, once: false });
  const { enabled } = useSiteMotion();
  const [shown, setShown] = useState("");

  useEffect(() => {
    if (!enabled || !inView) return;
    let timer;
    let position = 0;
    let deleting = false;
    const step = () => {
      setShown(text.slice(0, position));
      if (!deleting && position < text.length) {
        position += 1;
        timer = window.setTimeout(step, speed);
      } else if (!deleting && loop) {
        deleting = true;
        timer = window.setTimeout(step, 2600);
      } else if (deleting && position > 0) {
        position -= 1;
        timer = window.setTimeout(step, Math.max(32, speed * .65));
      } else if (deleting) {
        deleting = false;
        timer = window.setTimeout(step, 650);
      }
    };
    timer = window.setTimeout(step, 180);
    return () => window.clearTimeout(timer);
  }, [text, speed, loop, enabled, inView]);

  const visible = enabled ? shown : text;
  return <span ref={ref} className={`relative inline-block max-w-full align-top ${className}`} role="text" aria-label={text}>
    <span aria-hidden="true" className="invisible">{text}</span>
    <span aria-hidden="true" className="absolute inset-0">{visible}{enabled && <span className="type-cursor">▋</span>}</span>
  </span>;
}
