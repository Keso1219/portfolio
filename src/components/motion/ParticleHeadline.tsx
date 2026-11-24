"use client";

import React, { useEffect, useRef, useState } from "react";

interface TextSegment {
  text: string;
  color: string;
}

interface ParticleHeadlineProps {
  headline?: string;
  scatterRadius?: number;
  variant?: "sandbox" | "hero";
  lines?: TextSegment[][];
}

interface ParticleHeadingProps {
  as?: "h1" | "h2" | "h3";
  scatterRadius?: number;
  className?: string;
  children: React.ReactNode;
}

interface FastParticle {
  x: number;
  y: number;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
  colorIdx: number;
}

interface Particle {
  x: number;
  y: number;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

const BLEED_PAD = 24;

export function ParticleHeading({
  as = "h2",
  scatterRadius = 50,
  className = "",
  children,
}: ParticleHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef({ x: -9999, y: -9999, active: false });
  const radiusRef = useRef(scatterRadius);
  const particlesRef = useRef<FastParticle[]>([]);
  const paletteRef = useRef<string[]>([]);
  const runningRef = useRef(false);
  const animIdRef = useRef(0);
  const wakeRef = useRef<() => void>(() => {});
  const [interactiveEnabled, setInteractiveEnabled] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    radiusRef.current = scatterRadius;
  }, [scatterRadius]);

  useEffect(() => {
    const mqDesktop = window.matchMedia("(pointer: fine) and (min-width: 768px)");
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      const next = mqDesktop.matches && !mqReduced.matches;
      setInteractiveEnabled(next);
      if (!next) setCanvasReady(false);
    };

    sync();
    mqDesktop.addEventListener("change", sync);
    mqReduced.addEventListener("change", sync);
    return () => {
      mqDesktop.removeEventListener("change", sync);
      mqReduced.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!interactiveEnabled) return;
    const heading = headingRef.current;
    const canvas = canvasRef.current;
    if (!heading || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let canvasW = 0;
    let canvasH = 0;

    // Color-bucketed renderer: sets ctx.fillStyle only 2-3 times per frame (instead of 10,000x)
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvasW, canvasH);
      const pts = particlesRef.current;
      const palette = paletteRef.current;

      for (let c = 0; c < palette.length; c++) {
        ctx.fillStyle = palette[c];
        for (let i = 0; i < pts.length; i++) {
          const p = pts[i];
          if (p.colorIdx === c) {
            ctx.fillRect(p.x, p.y, 1.9, 1.9);
          }
        }
      }
    };

    const tick = () => {
      const pts = particlesRef.current;
      const px = pointerRef.current.x;
      const py = pointerRef.current.y;
      const active = pointerRef.current.active;
      const rad = radiusRef.current;
      const radSq = rad * rad;
      const forceScale = 5.4;
      const spring = 0.13;
      const damping = 0.78;

      let stillMoving = false;

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        if (active) {
          const dx = p.x - px;
          const dy = p.y - py;
          const distSq = dx * dx + dy * dy;
          if (distSq < radSq && distSq > 0.01) {
            const dist = Math.sqrt(distSq);
            const force = ((rad - dist) / rad) * forceScale;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        p.vx += (p.ox - p.x) * spring;
        p.vy += (p.oy - p.y) * spring;
        p.vx *= damping;
        p.vy *= damping;
        p.x += p.vx;
        p.y += p.vy;

        if (
          Math.abs(p.x - p.ox) > 0.15 ||
          Math.abs(p.y - p.oy) > 0.15 ||
          Math.abs(p.vx) > 0.06 ||
          Math.abs(p.vy) > 0.06
        ) {
          stillMoving = true;
        }
      }

      if (!active && !stillMoving) {
        for (let i = 0; i < pts.length; i++) {
          pts[i].x = pts[i].ox;
          pts[i].y = pts[i].oy;
          pts[i].vx = 0;
          pts[i].vy = 0;
        }
        drawParticles();
        runningRef.current = false;
        animIdRef.current = 0;
        return;
      }

      drawParticles();
      animIdRef.current = requestAnimationFrame(tick);
    };

    const wake = () => {
      if (!runningRef.current) {
        runningRef.current = true;
        animIdRef.current = requestAnimationFrame(tick);
      }
    };
    wakeRef.current = wake;

    const buildParticles = () => {
      const hRect = heading.getBoundingClientRect();
      const layoutW = heading.offsetWidth;
      const layoutH = heading.offsetHeight;
      if (layoutW < 10 || layoutH < 10 || hRect.width < 10) return;

      const scaleX = hRect.width / layoutW || 1;
      const scaleY = hRect.height / layoutH || 1;

      canvasW = Math.ceil(layoutW + BLEED_PAD * 2);
      canvasH = Math.ceil(layoutH + BLEED_PAD * 2);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(canvasW * dpr);
      canvas.height = Math.round(canvasH * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const off = document.createElement("canvas");
      off.width = canvasW;
      off.height = canvasH;
      const octx = off.getContext("2d", { willReadFrequently: true });
      if (!octx) return;

      const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
      const range = document.createRange();
      let node = walker.nextNode();

      while (node) {
        const text = node.textContent || "";
        const parentEl = node.parentElement || heading;
        const style = window.getComputedStyle(parentEl);
        octx.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
        if ("letterSpacing" in octx) {
          (
            octx as CanvasRenderingContext2D & { letterSpacing: string }
          ).letterSpacing =
            style.letterSpacing === "normal" ? "0px" : style.letterSpacing;
        }
        octx.fillStyle = style.color;
        octx.textAlign = "left";
        octx.textBaseline = "middle";

        const wordRegex = /\S+/g;
        let match: RegExpExecArray | null;
        while ((match = wordRegex.exec(text)) !== null) {
          range.setStart(node, match.index);
          range.setEnd(node, match.index + match[0].length);
          const wRect = range.getBoundingClientRect();
          if (wRect.width > 0 && wRect.height > 0) {
            const x = (wRect.left - hRect.left) / scaleX + BLEED_PAD;
            const y =
              (wRect.top - hRect.top + wRect.height * 0.52) / scaleY +
              BLEED_PAD;
            octx.fillText(match[0], x, y, wRect.width / scaleX + 0.5);
          }
        }
        node = walker.nextNode();
      }

      const img = octx.getImageData(0, 0, canvasW, canvasH).data;
      const step = 2;
      const palette: string[] = [];
      const colorLookup = new Map<string, number>();
      const next: FastParticle[] = [];

      for (let y = 0; y < canvasH; y += step) {
        for (let x = 0; x < canvasW; x += step) {
          const idx = (y * canvasW + x) * 4;
          const alpha = img[idx + 3];
          if (alpha > 115) {
            // Quantize RGB into coarse buckets so every heading stays at 2-3 solid colors
            const rq = Math.round(img[idx] / 16) * 16;
            const gq = Math.round(img[idx + 1] / 16) * 16;
            const bq = Math.round(img[idx + 2] / 16) * 16;
            const key = `rgb(${Math.min(255, rq)},${Math.min(255, gq)},${Math.min(255, bq)})`;
            let colorIdx = colorLookup.get(key);
            if (colorIdx === undefined) {
              colorIdx = palette.length;
              palette.push(key);
              colorLookup.set(key, colorIdx);
            }
            next.push({
              x,
              y,
              ox: x,
              oy: y,
              vx: 0,
              vy: 0,
              colorIdx,
            });
          }
        }
      }

      paletteRef.current = palette;
      particlesRef.current = next;
      drawParticles();
      if (next.length > 0) setCanvasReady(true);
    };

    let resizeTimer = 0;
    const scheduleRebuild = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(buildParticles, 120);
    };

    buildParticles();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => buildParticles());
    }

    const ro = new ResizeObserver(scheduleRebuild);
    ro.observe(heading);

    return () => {
      window.clearTimeout(resizeTimer);
      if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
      runningRef.current = false;
      ro.disconnect();
    };
  }, [interactiveEnabled, children]);

  const Tag = as;

  // Mobile/touch & reduced-motion: pure crisp native HTML heading (zero canvas allocation)
  if (!interactiveEnabled) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <div
      className="relative cursor-crosshair"
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const heading = headingRef.current;
        if (!heading) return;
        const rect = heading.getBoundingClientRect();
        const scaleX = rect.width / (heading.offsetWidth || rect.width) || 1;
        const scaleY = rect.height / (heading.offsetHeight || rect.height) || 1;
        pointerRef.current = {
          x: (e.clientX - rect.left) / scaleX + BLEED_PAD,
          y: (e.clientY - rect.top) / scaleY + BLEED_PAD,
          active: true,
        };
        wakeRef.current();
      }}
      onPointerLeave={() => {
        pointerRef.current.active = false;
        wakeRef.current();
      }}
    >
      <Tag
        ref={headingRef}
        className={`${className} transition-opacity duration-150 ${
          canvasReady ? "opacity-0 select-none pointer-events-none" : "opacity-100"
        }`}
      >
        {children}
      </Tag>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          left: `-${BLEED_PAD}px`,
          top: `-${BLEED_PAD}px`,
          width: `calc(100% + ${BLEED_PAD * 2}px)`,
          height: `calc(100% + ${BLEED_PAD * 2}px)`,
        }}
        className="pointer-events-none absolute block z-10"
      />
    </div>
  );
}

export function ParticleHeadline({
  headline = "Work with AI.",
  scatterRadius = 95,
}: ParticleHeadlineProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef({ x: -9999, y: -9999, active: false });
  const radiusRef = useRef(scatterRadius);

  useEffect(() => {
    radiusRef.current = scatterRadius;
  }, [scatterRadius]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    let particles: Particle[] = [];

    const buildParticles = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(320, Math.floor(rect.width));
      const height = Math.max(260, Math.floor(rect.height));

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const off = document.createElement("canvas");
      off.width = width;
      off.height = height;
      const octx = off.getContext("2d");
      if (!octx) return;

      const fontSize = Math.min(width * 0.145, 112);
      octx.fillStyle = "#F4F0EA";
      octx.font = `700 ${fontSize}px "Times New Roman", Times, serif`;
      octx.textAlign = "center";
      octx.textBaseline = "middle";

      const rawLines = headline.split("\n");
      const lineHeight = fontSize * 1.08;
      const startY = height / 2 - ((rawLines.length - 1) * lineHeight) / 2;

      rawLines.forEach((line, idx) => {
        octx.fillText(line, width / 2, startY + idx * lineHeight);
      });

      const img = octx.getImageData(0, 0, width, height).data;
      const step = width < 520 ? 4 : 5;
      const palette = ["#F4F0EA", "#F4F0EA", "#93C5FD", "#34D399"];
      const next: Particle[] = [];

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const alpha = img[(y * width + x) * 4 + 3];
          if (alpha > 140) {
            next.push({
              x: x + (Math.random() - 0.5) * 30,
              y: y + (Math.random() - 0.5) * 30,
              ox: x,
              oy: y,
              vx: 0,
              vy: 0,
              size: Math.random() * 1.4 + 1.2,
              color: palette[Math.floor(Math.random() * palette.length)],
            });
          }
        }
      }
      particles = next;
    };

    buildParticles();
    const ro = new ResizeObserver(() => buildParticles());
    ro.observe(canvas);

    const tick = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const px = pointerRef.current.x;
      const py = pointerRef.current.y;
      const rad = radiusRef.current;
      const radSq = rad * rad;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (pointerRef.current.active) {
          const dx = p.x - px;
          const dy = p.y - py;
          const distSq = dx * dx + dy * dy;
          if (distSq < radSq && distSq > 0.01) {
            const dist = Math.sqrt(distSq);
            const force = ((rad - dist) / rad) * 9.5;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        p.vx += (p.ox - p.x) * 0.085;
        p.vy += (p.oy - p.y) * 0.085;
        p.vx *= 0.82;
        p.vy *= 0.82;
        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, [headline]);

  return (
    <div className="relative w-full h-[320px] sm:h-[360px] rounded-md bg-[#111114] border border-[#2A2A2E] overflow-hidden">
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[11px] uppercase tracking-widest text-[#8A8882] pointer-events-none z-10">
        <span>[ CANVAS 2D SPRING PARTICLES ]</span>
        <span>SWEEP CURSOR THROUGH TEXT</span>
      </div>
      <canvas
        ref={canvasRef}
        onPointerMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          pointerRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            active: true,
          };
        }}
        onPointerLeave={() => {
          pointerRef.current.active = false;
        }}
        className="w-full h-full block cursor-crosshair"
      />
      <div className="absolute bottom-3 left-0 right-0 text-center text-xs text-[#A09C94] pointer-events-none">
        Move across the headline to scatter particles, then watch them snap back into alignment.
      </div>
    </div>
  );
}
