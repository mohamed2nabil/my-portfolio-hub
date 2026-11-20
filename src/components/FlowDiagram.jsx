"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useSiteMotion } from "@/components/MotionPreferences";

// One shared viewport trigger synchronizes nodes and connectors.
// The connector finishes before the next stage appears; no independent
// animations competing for attention, and no perpetual CPU work.
export default function FlowDiagram({ steps, accent = "#3158a8", label = "Workflow" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: .22 });
  const { enabled } = useSiteMotion();
  const running = enabled && inView;

  return <div ref={ref} data-testid="flow-diagram" className="flow-diagram" role="group"
    aria-label={label} style={{ "--accent": accent }}>
    {steps.map((step, index) => <div className="flow-step-wrap" key={step.title}>
      <motion.div
        data-testid="flow-step"
        className="flow-step group"
        initial={false}
        animate={enabled ? (running
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: .7, y: 15, scale: .985 })
          : { opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: running ? index * .26 : 0, duration: .56, ease: [.22, 1, .36, 1] }}
      >
        <div className="flow-step-top">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <i aria-hidden="true" className="flow-step-status" />
        </div>
        <strong>{step.title}</strong>
        <small>{step.detail}</small>
      </motion.div>
      {index < steps.length - 1 && <div className="flow-link-track" aria-hidden="true">
        <motion.span
          data-testid="flow-connector"
          className="flow-link-progress"
          initial={false}
          animate={{ scaleX: !enabled || running ? 1 : 0 }}
          transition={{ duration: .27, delay: running ? index * .26 + .19 : 0, ease: "easeOut" }}
        />
        <motion.span
          className="flow-link-packet"
          initial={false}
          animate={running ? { x: ["0%", "240%"], opacity: [0, 1, 0] } : { x: "0%", opacity: 0 }}
          transition={{ delay: running ? index * .26 + .16 : 0, duration: .37, ease: "easeInOut" }}
        />
      </div>}
    </div>)}
  </div>;
}
