"use client";

import { createContext, useContext } from "react";
import { MotionConfig } from "framer-motion";

const MotionContext = createContext({ enabled: true });

export function MotionPreferencesProvider({ children }) {
  return <MotionContext.Provider value={{ enabled: true }}>
    <MotionConfig reducedMotion="never">{children}</MotionConfig>
  </MotionContext.Provider>;
}
export function useSiteMotion() {
  return useContext(MotionContext);
}
