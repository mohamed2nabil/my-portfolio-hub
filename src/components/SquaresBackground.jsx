"use client";

import { useEffect, useRef } from "react";

// A small, visibility-aware adaptation of the supplied moving squares component.
// No extra canvas libraries and no animation when offscreen or reduced motion.
export default function SquaresBackground({ speed = 0.35, squareSize = 36, borderColor = "rgba(22,135,105,.13)", hoverFillColor = "rgba(22,135,105,.08)" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !ctx) return;
    const host = canvas.parentElement;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: -1, y: -1 };
    let raf = 0, visible = false, last = 0, phase = 0, width = 1, height = 1;

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 0.75;
      const shift = motion.matches ? 0 : phase % squareSize;
      for (let x = -squareSize + shift; x < width + squareSize; x += squareSize) {
        for (let y = -squareSize + shift * 0.45; y < height + squareSize; y += squareSize) {
          if (pointer.x >= x && pointer.x < x + squareSize && pointer.y >= y && pointer.y < y + squareSize) {
            ctx.fillStyle = hoverFillColor;
            ctx.fillRect(x, y, squareSize, squareSize);
          }
          ctx.strokeRect(x, y, squareSize, squareSize);
        }
      }
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    }

    function frame(now) {
      if (!visible || motion.matches || document.hidden) { raf = 0; return; }
      if (now - last >= 40) { phase += speed; draw(); last = now; }
      raf = window.requestAnimationFrame(frame);
    }
    function start() { if (raf || !visible || motion.matches || document.hidden) return; raf = requestAnimationFrame(frame); }
    function stop() { if (raf) cancelAnimationFrame(raf); raf = 0; draw(); }
    function position(event) {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      if (!raf) draw();
    }
    function leave() { pointer.x = pointer.y = -1; if (!raf) draw(); }
    function visibility() { document.hidden ? stop() : start(); }
    function preference() { motion.matches ? stop() : start(); }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      visible ? start() : stop();
    }, { threshold: 0.02 });
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    observer.observe(canvas);
    canvas.addEventListener("pointermove", position, { passive: true });
    canvas.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", visibility);
    motion.addEventListener("change", preference);
    resize();
    return () => {
      stop(); observer.disconnect(); resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", position);
      canvas.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", visibility);
      motion.removeEventListener("change", preference);
    };
  }, [speed, squareSize, borderColor, hoverFillColor]);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full pointer-events-none lg:pointer-events-auto" />;
}
