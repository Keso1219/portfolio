"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCard3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareColor?: string;
}

export function TiltCard3D({
  children,
  className = "",
  maxTilt = 10,
  glareColor = "rgba(147, 197, 253, 0.22)",
}: TiltCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tiltEnabled, setTiltEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setTiltEnabled(finePointer && !reducedMotion);
  }, []);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [maxTilt, -maxTilt]), {
    stiffness: 260,
    damping: 22,
    mass: 0.6,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-maxTilt, maxTilt]), {
    stiffness: 260,
    damping: 22,
    mass: 0.6,
  });

  const glareBg = useTransform(
    [glareX, glareY],
    ([x, y]) =>
      `radial-gradient(280px circle at ${x}% ${y}%, ${glareColor}, transparent 65%)`
  );

  // Mobile/touch & reduced-motion: zero 3D compositor layer overhead
  if (!tiltEnabled) {
    return (
      <div className={`h-full active:scale-[0.99] transition-transform ${className}`}>
        {children}
      </div>
    );
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    rawX.set(px - 0.5);
    rawY.set(py - 0.5);
    glareX.set(px * 100);
    glareY.set(py * 100);
  };

  const handlePointerEnter = () => setIsHovered(true);

  const handlePointerLeave = () => {
    setIsHovered(false);
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="h-full">
      <motion.div
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.015 }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
        className={`relative h-full will-change-transform ${className}`}
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-20"
          style={{
            opacity: isHovered ? 1 : 0,
            background: glareBg,
          }}
        />
        <div
          style={{ transform: "translateZ(18px)" }}
          className="relative z-10 h-full"
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
