"use client";

import React, { useState } from "react";
import { Layers, Maximize2, X } from "lucide-react";
import { trackEngagement } from "@/lib/analytics";

interface VisualArtifact {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  src: string;
  takeaway: string;
}

const ARTIFACTS: VisualArtifact[] = [
  {
    id: "payroll",
    tag: "[ MACRO ECONOMICS • SWEDEN ]",
    title: "The Swedish Payroll Ceiling",
    subtitle:
      "How 5–50 person Nordic SMBs double capacity at 500 SEK/hr without adding hiring risk.",
    src: "/infographic-payroll.png",
    takeaway: "Automate the handoff before adding headcount.",
  },
  {
    id: "tdd",
    tag: "[ ENGINEERING DISCIPLINE ]",
    title: "Vibecoding vs. Red-Green TDD",
    subtitle:
      "Why setting deterministic test guardrails first turns AI into a reliable builder.",
    src: "/infographic-tdd.png",
    takeaway: "Write the verification contract first; let AI fill in the code.",
  },
  {
    id: "copilot",
    tag: "[ AI FLUENCY • WORKSHOPS ]",
    title: "Why Generic AI Rollouts Stall",
    subtitle:
      "Buying licenses without teaching shared context brains leaves teams stuck on two-line prompts.",
    src: "/infographic-copilot.png",
    takeaway: "Fluency is building reusable project brains inside tools you already own.",
  },
];

export function FieldDiagramsShelf() {
  const [activeLightbox, setActiveLightbox] = useState<VisualArtifact | null>(null);

  const openDiagram = (item: VisualArtifact) => {
    setActiveLightbox(item);
    trackEngagement("field_diagram_opened", { diagramId: item.id });
  };

  return (
    <section className="py-14 sm:py-16 px-4 sm:px-8 max-w-6xl mx-auto border-b border-[#D8D0C2]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/10 border border-[#2563EB]/30 px-3 py-1 rounded-sm mb-3 font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>[ FIELD DIAGRAMS • NORDIC SMB ECONOMICS ]</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#161618] tracking-tight leading-[1.1]">
            The math behind <span className="text-[#2563EB]">every system we build.</span>
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#52504C] max-w-sm leading-relaxed">
          Click any diagram to inspect the unit economics, verification architecture, and rollout lessons behind our client engagements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {ARTIFACTS.map((item) => (
          <button
            type="button"
            key={item.id}
            onClick={() => openDiagram(item)}
            className="text-left paper-card rounded-md overflow-hidden cursor-pointer group flex flex-col justify-between"
          >
            <div className="w-full">
              <div className="relative bg-[#161618] aspect-[4/4.4] overflow-hidden border-b border-[#D8D0C2]">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-[#161618]/90 text-[#F4F0EA] border border-[#3A3A40] px-2.5 py-1 rounded-sm text-[10px] inline-flex items-center gap-1.5 opacity-90 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-colors">
                  <Maximize2 className="w-3 h-3" />
                  INSPECT
                </div>
              </div>
              <div className="p-4">
                <div className="text-[10px] text-[#2563EB] font-semibold mb-1">
                  {item.tag}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#161618] mb-1 leading-snug group-hover:text-[#2563EB] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#52504C] leading-relaxed">{item.subtitle}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

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
                <span className="text-xs text-[#93C5FD] block">{activeLightbox.tag}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F4F0EA]">
                  {activeLightbox.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveLightbox(null)}
                className="p-2 rounded-sm bg-[#222226] hover:bg-[#2563EB] text-[#F4F0EA] transition-colors"
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
                  <p className="text-sm text-[#D8D0C2] leading-relaxed mb-4">
                    {activeLightbox.subtitle}
                  </p>
                  <div className="p-4 bg-[#222226] border-l-2 border-[#2563EB] rounded-r-sm">
                    <span className="text-[11px] text-[#93C5FD] block mb-1">
                      KEY LESSON
                    </span>
                    <p className="text-xs sm:text-sm text-[#F4F0EA] leading-relaxed">
                      {activeLightbox.takeaway}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveLightbox(null)}
                  className="w-full py-2.5 px-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-[#F4F0EA] text-xs uppercase tracking-wider rounded-sm transition-colors font-semibold"
                >
                  Close Diagram
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
