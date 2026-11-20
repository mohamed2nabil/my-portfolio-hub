"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function FlowDiagram({ steps, accent = "#3158a8", label = "Workflow" }) {
  const reduceMotion = useReducedMotion();
  return <div className="flow-diagram" aria-label={label}>
    {steps.map((step, index) => <div className="flow-step-wrap" key={step.title}>
      <motion.div
        className="flow-step"
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: index * .1, duration: .35 }}
        style={{ "--accent": accent }}
      ><span>{String(index + 1).padStart(2, "0")}</span><strong>{step.title}</strong><small>{step.detail}</small></motion.div>
      {index < steps.length - 1 && <motion.i aria-hidden="true" className="flow-link" style={{ "--accent": accent }} initial={reduceMotion ? false : { scaleX: 0 }} whileInView={reduceMotion ? {} : { scaleX: 1 }} viewport={{ once: true }} transition={{ delay: .2 + index * .1, duration: .35 }} />}
    </div>)}
  </div>;
}
