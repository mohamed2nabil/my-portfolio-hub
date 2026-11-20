"use client";

import { useEffect, useRef } from "react";

// Moving squares for the Web hero only. CSS supplies a static grid before
// hydration; this canvas adds motion when visible. No global RAF loop.
export default function SquaresBackground({
  speed = .8,
  squareSize = 44,
  borderColor = "rgba(22, 135, 105, .22)",
  hoverFillColor = "rgba(22, 135, 105, .13)",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { alpha: true });
    const host = canvas?.closest("section");
    if (!canvas || !ctx || !host) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let visible = false;
    let last = 0;
    let offset = 0;
    let width = 0;
    let height = 0;
    let pointer = null;

    function render() {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = .8;
      const shift = preference.matches ? 0 : offset % squareSize;
      for (let x = -squareSize + shift; x < width + squareSize; x += squareSize) {
        for (let y = -squareSize + shift * .5; y < height + squareSize; y += squareSize) {
          const hovering = pointer && pointer.x >= x && pointer.x < x + squareSize && pointer.y >= y && pointer.y < y + squareSize;
          if (hovering) {
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
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      render();
    }
    function frame(now) {
      if (!visible || preference.matches || document.hidden) {
        raf = 0;
        return;
      }
      // 24 fps is enough for slow, clear movement without 60fps canvas work.
      if (now - last >= 42) {
        offset += speed;
        render();
        last = now;
      }
      raf = window.requestAnimationFrame(frame);
    }
    function start() {
      if (visible && !raf && !preference.matches && !document.hidden)
        raf = window.requestAnimationFrame(frame);
    }
    function stop() {
      if (raf) window.cancelAnimationFrame(raf);
      raf = 0;
    }
    function onPointerMove(event) {
      const rect = canvas.getBoundingClientRect();
      pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      if (!raf) render();
    }
    function onPointerLeave() { pointer = null; if (!raf) render(); }
    function onVisibility() { document.hidden ? stop() : start(); }
    function onPreference() {
      if (preference.matches) { stop(); render(); }
      else start();
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      visible ? start() : stop();
    }, { threshold: .01 });
    const ro = new ResizeObserver(resize);
    io.observe(canvas);
    ro.observe(canvas);
    host.addEventListener("pointermove", onPointerMove, { passive: true });
    host.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);
    preference.addEventListener("change", onPreference);
    resize();

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      preference.removeEventListener("change", onPreference);
    };
  }, [speed, squareSize, borderColor, hoverFillColor]);

  return <canvas aria-hidden="true" ref={canvasRef} className="pointer-events-none absolute inset-0 block h-full w-full" />;
}
