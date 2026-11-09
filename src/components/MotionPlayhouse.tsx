"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, RotateCcw, Sliders, Sparkles, Maximize2, X, Layers, Cpu } from "lucide-react";

interface VisualArtifact {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  src: string;
  ratio: string;
  takeaway: string;
}

const ARTIFACTS: VisualArtifact[] = [
  {
    id: "payroll",
    tag: "[ MACRO ECONOMICS • SWEDEN ]",
    title: "The Swedish Payroll Ceiling & Anti-LAS Capacity",
    subtitle: "Why 5–50 person Nordic SMBs hit a wall at 500 SEK/hr fully-loaded labor cost—and how deterministic workflows double output without hiring risk.",
    src: "/infographic-payroll.png",
    ratio: "4:5 Editorial",
    takeaway: "Every 10 hours of manual data entry costs a Swedish team ~250,000 SEK/year. Automate the handoff before adding headcount.",
  },
  {
    id: "tdd",
    tag: "[ ENGINEERING DISCIPLINE ]",
    title: "Vibecoding vs. Red-Green TDD Architecture",
    subtitle: "Why prompting blindly breaks production systems, and how setting deterministic test guardrails first turns AI into a reliable builder.",
    src: "/infographic-tdd.png",
    ratio: "4:5 Editorial",
    takeaway: "Never let an LLM guess business logic. Write the verification contract first, then let AI fill in the implementation.",
  },
  {
    id: "copilot",
    tag: "[ AI FLUENCY • WORKSHOPS ]",
    title: "Why Generic AI Rollouts Stall After Week Two",
    subtitle: "Buying licenses without teaching context architecture leaves teams writing two-sentence prompts and getting generic output.",
    src: "/infographic-copilot.png",
    ratio: "4:5 Editorial",
    takeaway: "Fluency isn't 'prompt tricks.' It's building reusable project brains inside the tools your team already opens at 08:00.",
  },
];

export default function MotionPlayhouse() {
  const [stiffness, setStiffness] = useState<number>(220);
  const [damping, setDamping] = useState<number>(18);
  const [frame, setFrame] = useState<number>(95);
  const [replayKey, setReplayKey] = useState<number>(0);
  const [activeLightbox, setActiveLightbox] = useState<VisualArtifact | null>(null);

  // Compute progress percentage from 0..150 frames
  const progress = Math.min(1, Math.max(0, frame / 150));

  return (
    <section id="motion-lab" className="py-20 border-b border-[#D8D0C2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#C85A32] bg-[#C85A32]/10 border border-[#C85A32]/30 px-3 py-1 rounded-sm mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>[ SECTION 03 // VISUAL ARCHITECTURE & MOTION LAB ]</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#161618] tracking-tight leading-[1.08]">
              Clear thinking deserves{" "}
              <span className="italic font-normal text-[#C85A32]">tactile visual craft.</span>
            </h2>
          </div>
          <p className="text-[#52504C] max-w-md text-sm sm:text-base leading-relaxed">
            Most AI websites look like they were generated in 30 seconds from the same purple neon template. I build programmatic motion graphics and Nordic Charcoal infographics from code—so complex systems feel intuitive at a glance.
          </p>
        </div>

        {/* Top Row: Interactive Programmatic Motion Sandbox + Simpsons Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Left 7 Cols: Interactive Spring & Frame Scrubber */}
          <div className="lg:col-span-7 charcoal-slab rounded-md p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-5 mb-6 border-b border-[#2A2A2E]">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#C85A32]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#F4F0EA]">
                  [ REMOTION / HYPERFRAMES SPRING SANDBOX ]
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#3D7A5A] bg-[#3D7A5A]/15 border border-[#3D7A5A]/40 px-2.5 py-0.5 rounded-sm">
                60 FPS • DETERMINISTIC TIMELINE
              </span>
            </div>

            {/* Live Stage */}
            <div className="bg-[#0F0F11] border border-[#2A2A2E] rounded-sm p-6 mb-6 relative min-h-[230px] flex flex-col justify-center">
              <div className="absolute top-3 left-3 font-mono text-[11px] text-[#A09C94]">
                FRAME: <span className="text-[#D4A359]">{String(frame).padStart(3, "0")}f</span> / 150f ({(frame / 30).toFixed(2)}s @ 30fps)
              </div>
              <button
                onClick={() => setReplayKey((k) => k + 1)}
                className="absolute top-3 right-3 inline-flex items-center gap-1.5 font-mono text-[11px] text-[#F4F0EA] bg-[#222226] hover:bg-[#C85A32] border border-[#3A3A40] px-2.5 py-1 rounded-sm transition-colors"
                title="Trigger Spring Physics"
              >
                <RotateCcw className="w-3 h-3" />
                Trigger Spring
              </button>

              {/* Animated Pipeline Nodes inside Sandbox */}
              <div key={replayKey} className="mt-6 grid grid-cols-3 gap-3 items-center">
                {[
                  { step: "01. INGEST", label: "Messy Inbox & PDFs", color: "#C85A32", threshold: 0.15 },
                  { step: "02. REASON", label: "Claude / Gemini Schema", color: "#D4A359", threshold: 0.45 },
                  { step: "03. SHIP", label: "Zero-Admin Output", color: "#3D7A5A", threshold: 0.75 },
                ].map((node, idx) => {
                  const isActive = progress >= node.threshold;
                  return (
                    <motion.div
                      key={node.step}
                      initial={{ opacity: 0, y: 28, scale: 0.88 }}
                      animate={{
                        opacity: isActive ? 1 : 0.25,
                        y: isActive ? 0 : 12,
                        scale: isActive ? 1 : 0.94,
                      }}
                      transition={{
                        type: "spring",
                        stiffness,
                        damping,
                        delay: idx * 0.08,
                      }}
                      className="p-3.5 rounded-sm border bg-[#161618] flex flex-col justify-between"
                      style={{
                        borderColor: isActive ? node.color : "#2A2A2E",
                      }}
                    >
                      <span
                        className="font-mono text-[10px] tracking-widest uppercase mb-1"
                        style={{ color: node.color }}
                      >
                        {node.step}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-[#F4F0EA]">
                        {node.label}
                      </span>
                      <div className="mt-3 h-1 w-full bg-[#2A2A2E] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full"
                          style={{ backgroundColor: node.color }}
                          initial={{ width: "0%" }}
                          animate={{
                            width: isActive
                              ? `${Math.min(100, Math.round(((progress - node.threshold) / 0.35) * 100))}%`
                              : "0%",
                          }}
                          transition={{ type: "spring", stiffness, damping }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Interactive Controls: Timeline Scrubber + Spring Sliders */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#1E1E22] border border-[#2A2A2E] p-3 rounded-sm">
                <div className="flex justify-between font-mono text-[11px] mb-1.5">
                  <span className="text-[#A09C94]">TIMELINE SCRUB</span>
                  <span className="text-[#D4A359]">{frame}f</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={150}
                  value={frame}
                  onChange={(e) => setFrame(Number(e.target.value))}
                  className="w-full accent-[#C85A32] cursor-pointer"
                />
              </div>

              <div className="bg-[#1E1E22] border border-[#2A2A2E] p-3 rounded-sm">
                <div className="flex justify-between font-mono text-[11px] mb-1.5">
                  <span className="text-[#A09C94]">STIFFNESS</span>
                  <span className="text-[#F4F0EA]">{stiffness}</span>
                </div>
                <input
                  type="range"
                  min={60}
                  max={400}
                  value={stiffness}
                  onChange={(e) => {
                    setStiffness(Number(e.target.value));
                    setReplayKey((k) => k + 1);
                  }}
                  className="w-full accent-[#C85A32] cursor-pointer"
                />
              </div>

              <div className="bg-[#1E1E22] border border-[#2A2A2E] p-3 rounded-sm">
                <div className="flex justify-between font-mono text-[11px] mb-1.5">
                  <span className="text-[#A09C94]">DAMPING</span>
                  <span className="text-[#F4F0EA]">{damping}</span>
                </div>
                <input
                  type="range"
                  min={6}
                  max={40}
                  value={damping}
                  onChange={(e) => {
                    setDamping(Number(e.target.value));
                    setReplayKey((k) => k + 1);
                  }}
                  className="w-full accent-[#C85A32] cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Right 5 Cols: The Chalkboard Rule Card */}
          <div className="lg:col-span-5 paper-card rounded-md p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#C85A32]">
                  [ THE CORE RULE // PERSONAL MANIFESTO ]
                </span>
                <span className="font-mono text-[11px] text-[#52504C]">RULE #01</span>
              </div>
              <h3 className="font-serif text-2xl text-[#161618] mb-3 leading-snug">
                &ldquo;I will not use AI to replace my thinking.&rdquo;
              </h3>
              <p className="text-sm text-[#52504C] leading-relaxed mb-5">
                If you use AI to skip thinking, your output sounds like everyone else. If you use AI as a lever to test your thinking faster and strip out repetitive computer chores, you become unstoppable.
              </p>
            </div>

            <div className="rounded-sm overflow-hidden border border-[#161618] bg-[#161618] group relative">
              <img
                src="/simpsons-chalkboard.png"
                alt="I will not use AI to replace my thinking chalkboard"
                className="w-full h-48 sm:h-52 object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="p-3 bg-[#161618] text-[#F4F0EA] flex items-center justify-between font-mono text-[11px]">
                <span>GOTHENBURG WORKSHOP • 2026</span>
                <span className="text-[#D4A359]">HUMAN-IN-THE-LOOP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Nordic Charcoal Editorial Infographics Shelf */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#C85A32]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#161618] font-semibold">
                [ NORDIC CHARCOAL FIELD DIAGRAMS • CLICK ANY SHEET TO INSPECT ]
              </span>
            </div>
            <span className="hidden sm:inline font-mono text-xs text-[#52504C]">
              1080×1350 • HIGH-CONTRAST EDITORIAL SPEC
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTIFACTS.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightbox(item)}
                className="paper-card rounded-md overflow-hidden cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative bg-[#161618] aspect-[4/4.4] overflow-hidden border-b border-[#D8D0C2]">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-[#161618]/90 text-[#F4F0EA] border border-[#3A3A40] px-2.5 py-1 rounded-sm font-mono text-[10px] inline-flex items-center gap-1.5 opacity-90 group-hover:bg-[#C85A32] group-hover:border-[#C85A32] transition-colors">
                      <Maximize2 className="w-3 h-3" />
                      INSPECT
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="font-mono text-[11px] text-[#C85A32] mb-1.5">
                      {item.tag}
                    </div>
                    <h4 className="font-serif text-xl text-[#161618] mb-2 leading-snug group-hover:text-[#C85A32] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#52504C] leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <div className="px-5 py-3 bg-[#EAE3D5]/60 border-t border-[#D8D0C2] font-mono text-[11px] text-[#161618]">
                  <span className="text-[#C85A32] font-bold">KEY LESSON:</span> {item.takeaway}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full-Resolution Inspection */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 bg-[#161618]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="bg-[#161618] border border-[#3A3A40] rounded-md max-w-4xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-6 text-[#F4F0EA]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#2A2A2E]">
              <div>
                <span className="font-mono text-xs text-[#D4A359] block">
                  {activeLightbox.tag}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#F4F0EA]">
                  {activeLightbox.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveLightbox(null)}
                className="p-2 rounded-sm bg-[#222226] hover:bg-[#C85A32] text-[#F4F0EA] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-7 bg-[#0F0F11] border border-[#2A2A2E] rounded-sm overflow-hidden">
                <img
                  src={activeLightbox.src}
                  alt={activeLightbox.title}
                  className="w-full h-auto object-contain max-h-[70vh]"
                />
              </div>
              <div className="md:col-span-5 flex flex-col justify-between gap-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#A09C94] block mb-2">
                    [ ARCHITECTURAL CONTEXT ]
                  </span>
                  <p className="text-sm text-[#D8D0C2] leading-relaxed mb-4">
                    {activeLightbox.subtitle}
                  </p>
                  <div className="p-4 bg-[#222226] border-l-2 border-[#C85A32] rounded-r-sm">
                    <span className="font-mono text-[11px] text-[#D4A359] block mb-1">
                      OPERATOR TAKEAWAY
                    </span>
                    <p className="text-xs sm:text-sm text-[#F4F0EA] leading-relaxed">
                      {activeLightbox.takeaway}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveLightbox(null)}
                  className="w-full py-2.5 px-4 bg-[#C85A32] hover:bg-[#b04b25] text-[#F4F0EA] font-mono text-xs uppercase tracking-wider rounded-sm transition-colors"
                >
                  Close Sheet Inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
