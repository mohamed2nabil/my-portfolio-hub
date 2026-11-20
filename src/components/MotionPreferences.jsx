"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { MotionConfig } from "framer-motion";

// The default honors the visitor's OS accessibility preference.
// An explicit click may opt in to animation even on a reduced-motion device.
const KEY = "mn-portfolio-motion";
const CHANGE_EVENT = "mn-portfolio-motion-change";
const MotionContext = createContext({ enabled: true, mode: "system", systemReduced: false });

function snapshot() {
  if (typeof window === "undefined") return "system|0";
  let mode = "system";
  try {
    const value = window.localStorage.getItem(KEY);
    if (value === "on" || value === "off") mode = value;
  } catch { /* Storage may be disabled. System settings still work. */ }
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "1" : "0";
  return mode + "|" + reduced;
}
function subscribe(notify) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", notify);
  window.addEventListener("storage", notify);
  window.addEventListener(CHANGE_EVENT, notify);
  return () => {
    media.removeEventListener("change", notify);
    window.removeEventListener("storage", notify);
    window.removeEventListener(CHANGE_EVENT, notify);
  };
}
function saveMode(mode) {
  try {
    if (mode === "system") window.localStorage.removeItem(KEY);
    else window.localStorage.setItem(KEY, mode);
  } catch { /* Still update this page when local storage is unavailable. */ }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}
export function MotionPreferencesProvider({ children }) {
  const value = useSyncExternalStore(subscribe, snapshot, () => "system|0");
  const [mode, reduced] = value.split("|");
  const systemReduced = reduced === "1";
  const enabled = mode === "on" || (mode !== "off" && !systemReduced);

  useEffect(() => {
    document.documentElement.dataset.siteMotion = mode;
  }, [mode]);

  return <MotionContext.Provider value={{ enabled, mode, systemReduced, setMode: saveMode }}>
    <MotionConfig reducedMotion={enabled ? "never" : "always"}>{children}</MotionConfig>
  </MotionContext.Provider>;
}
export function useSiteMotion() {
  return useContext(MotionContext);
}

export function MotionToggle({ mobile = false }) {
  const { enabled, systemReduced, mode, setMode } = useSiteMotion();
  return <button
    type="button"
    data-testid="motion-toggle"
    onClick={() => setMode(enabled ? "off" : "on")}
    aria-pressed={enabled}
    title={systemReduced && mode === "system"
      ? "Your device prefers reduced motion. Click to enable portfolio animations."
      : "Turn site animations " + (enabled ? "off" : "on")}
    className={"rounded-xl border border-hairline px-3 py-2 text-xs font-medium text-secondary-ink transition-colors hover:bg-white hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-blue " + (mobile ? "w-full text-left" : "")}
  >{enabled ? "Motion: On" : "Enable motion"}</button>;
}
