"use client";

import { motion } from "framer-motion";
import { useSiteMotion } from "@/components/MotionPreferences";

// A single, inexpensive entrance animation for section content and cards.
// The card remains readable after entering: it never disappears on scroll-back.
// Animation uses transform/opacity only to keep scrolling responsive.
export default function ScrollReveal({ children, className = "", index = 0, as = "div" }) {
  const { enabled } = useSiteMotion();
  const Component = motion[as] || motion.div;
  return <Component
    data-testid="scroll-reveal"
    className={className}
    initial={enabled ? { opacity: 0, y: 26, scale: .985 } : false}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: .12, margin: "0px 0px -24px 0px" }}
    transition={{
      duration: .62,
      // Each card gets its own beat. This keeps a row from arriving as one
      // synchronized block and gives visitors time to read the hierarchy.
      delay: enabled ? Math.min(index * .12, .48) : 0,
      ease: [.22, 1, .36, 1],
    }}
  >{children}</Component>;
}
