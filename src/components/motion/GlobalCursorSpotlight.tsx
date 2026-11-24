"use client";

import React, { useEffect, useRef, useState } from "react";

interface GlobalCursorSpotlightProps {
  radius?: number;
}

export function GlobalCursorSpotlight({
  radius = 420,
}: GlobalCursorSpotlightProps) {
  const [enabled, setEnabled] = useState(false);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!finePointer || reducedMotion) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let rafId = 0;
    let clientX = -radius * 2;
    let clientY = -radius * 2;
    let visible = false;

    const flush = () => {
      rafId = 0;
      const orb = orbRef.current;
      if (!orb) return;
      orb.style.transform = `translate3d(${clientX - radius}px, ${clientY - radius}px, 0)`;
      orb.style.opacity = visible ? "1" : "0";
    };

    const schedule = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(flush);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      clientX = e.clientX;
      clientY = e.clientY;
      visible = true;
      schedule();
    };

    const onLeave = () => {
      visible = false;
      schedule();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, radius]);

  if (!enabled) return null;

  const diameter = radius * 2;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
    >
      <div
        ref={orbRef}
        className="will-change-transform transition-opacity duration-300"
        style={{
          width: `${diameter}px`,
          height: `${diameter}px`,
          opacity: 0,
          transform: `translate3d(${-diameter}px, ${-diameter}px, 0)`,
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.11) 0%, rgba(147, 197, 253, 0.05) 38%, transparent 70%)",
        }}
      />
    </div>
  );
}
