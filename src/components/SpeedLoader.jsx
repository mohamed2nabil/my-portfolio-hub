"use client";

// Adapted from the supplied hyper-speed spinner. Only displayed while EmailJS
// has an actual in-flight request; never an artificial full-page loading screen.
export default function SpeedLoader() {
  return <div role="status" aria-live="polite" className="speed-sending-panel">
    <div aria-hidden="true" className="speed-stage">
      <div className="speed-fazers"><i /><i /><i /><i /></div>
      <div className="speed-figure">
        <span className="speed-tail"><i /><i /><i /><i /></span>
        <span className="speed-body" />
        <span className="speed-head" />
      </div>
    </div>
    <p className="font-serif text-xl text-ink">Sending your message…</p>
    <p className="mt-1 text-sm text-secondary-ink">Connecting to the email service</p>
  </div>;
}
