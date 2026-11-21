"use client";

import SquaresBackground from "@/components/SquaresBackground";

// A shared, subtle version of the approved Web Development hero grid.
// The animated canvas starts only while its hero is visible and Motion is on.
// The static grid is rendered immediately, including with reduced motion.
export default function HeroSquares({
  lineColor = "rgba(49, 88, 168, .09)",
  hoverFillColor = "rgba(49, 88, 168, .08)",
  size = 28,
  speed = .5,
  direction = "diagonal",
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(${lineColor} 1px, transparent 1px), linear-gradient(90deg, ${lineColor} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    >
      <SquaresBackground
        direction={direction}
        speed={speed}
        squareSize={size}
        borderColor={lineColor}
        hoverFillColor={hoverFillColor}
      />
    </div>
  );
}
