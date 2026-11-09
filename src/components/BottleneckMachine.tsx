"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flame,
  Sparkles,
  ArrowRight,
  Clock,
  Coins,
  CheckCircle2,
  Sliders,
  Zap,
} from "lucide-react";

export interface ChorePreset {
  id: string;
  label: string;
  tag: string;
  defaultTeamSize: number;
  defaultHoursPerDay: number;
  beforePain: string;
  deliveryType: "AI Fluency Workshop" | "Zero-License Custom Build";
  steps: [string, string, string];
}

const CHORE_PRESETS: ChorePreset[] = [
  {
    id: "reconcile",
    label: "Daily order & spreadsheet reconciliation",
    tag: "E-COMMERCE & OPS",
    defaultTeamSize: 3,
    defaultHoursPerDay: 2.0,
    beforePain:
      "Downloading CSVs from 3 portals every morning and fixing broken SKU columns by hand.",
    deliveryType: "Zero-License Custom Build",
    steps: [
      "Scheduled webhook ingests raw store & warehouse exports at 06:30",
      "Validation script reconciles SKUs & isolates mismatches automatically",
      "1-click Slack summary lands on your desk in 14 seconds",
    ],
  },
  {
    id: "inbox",
    label: "Triaging 60+ morning leads & emails by hand",
    tag: "SALES & SERVICE",
    defaultTeamSize: 4,
    defaultHoursPerDay: 1.5,
    beforePain:
      "High-intent buyer inquiries sit buried underneath invoices and routine FAQs until Friday.",
    deliveryType: "Zero-License Custom Build",
    steps: [
      "Inbound email or web form triggers structured urgency classification",
      "System checks client history and pre-drafts a peer-level reply",
      "You review & approve in 1 click—zero manual typing",
    ],
  },
  {
    id: "listings",
    label: "Writing client proposals, listings & follow-ups",
    tag: "BROKERAGE & B2B",
    defaultTeamSize: 8,
    defaultHoursPerDay: 1.5,
    beforePain:
      "Every team member prompts ChatGPT differently—producing robotic copy that takes longer to fix than write.",
    deliveryType: "AI Fluency Workshop",
    steps: [
      "Hands-on workshop: train your team on shared Claude/Workspace context brains",
      "Lock in your exact company voice and verification checklists",
      "Turn 45-minute document drafting into a 4-minute human review",
    ],
  },
  {
    id: "crm",
    label: "Paying 130,000 SEK/yr for bloated CRM seats",
    tag: "SAAS REPLACEMENT",
    defaultTeamSize: 5,
    defaultHoursPerDay: 1.0,
    beforePain:
      "Paying enterprise per-seat licenses when your team only uses 10% of the platform to track leads.",
    deliveryType: "Zero-License Custom Build",
    steps: [
      "Web inquiries & trial signups flow into a clean, owned database",
      "Automated follow-up sequences & reminder pings fire via Slack/Email",
      "Zero per-seat SaaS tax—100% owned by your business",
    ],
  },
];

interface Props {
  onSelectChoreForContact?: (summary: string) => void;
}

export default function BottleneckMachine({ onSelectChoreForContact }: Props) {
  const [selectedPreset, setSelectedPreset] = useState<ChorePreset>(CHORE_PRESETS[0]);
  const [teamSize, setTeamSize] = useState<number>(CHORE_PRESETS[0].defaultTeamSize);
  const [hoursPerDay, setHoursPerDay] = useState<number>(CHORE_PRESETS[0].defaultHoursPerDay);
  const [hourlyRateSEK, setHourlyRateSEK] = useState<number>(500);

  const handleSelectPreset = (preset: ChorePreset) => {
    setSelectedPreset(preset);
    setTeamSize(preset.defaultTeamSize);
    setHoursPerDay(preset.defaultHoursPerDay);
  };

  // Math (220 working days/year, 82% reclaimable via deterministic workflow)
  const workingDaysPerYear = 220;
  const reclaimEfficiency = 0.82;
  const totalHoursWastedYear = Math.round(teamSize * hoursPerDay * workingDaysPerYear);
  const hoursReclaimedYear = Math.round(totalHoursWastedYear * reclaimEfficiency);
  const annualSEKReclaimed = Math.round((hoursReclaimedYear * hourlyRateSEK) / 1000) * 1000;
  const annualEURReclaimed = Math.round(annualSEKReclaimed / 11.4);

  return (
    <section id="bottleneck-machine" className="py-16 sm:py-20 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ink text-paper font-mono text-[11px] tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-flow-blue" />
            <span>[ INTERACTIVE TOY 01 • THE BOTTLENECK MACHINE ]</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-ink tracking-tight leading-[1.08]">
            Drop a boring computer chore{" "}
            <span className="italic font-normal text-drag-deep">into the grinder.</span>
          </h2>
        </div>
        <p className="text-ink-muted text-sm sm:text-base max-w-sm leading-relaxed">
          Pick one of the 4 common bottlenecks below and slide your team size to see the real annual drag (SCB 500 SEK/hr benchmark).
        </p>
      </div>

      {/* 4 Curated Preset Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
        {CHORE_PRESETS.map((preset) => {
          const isSelected = selectedPreset.id === preset.id;
          return (
            <button
              key={preset.id}
              onClick={() => handleSelectPreset(preset)}
              className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? "bg-ink text-paper border-ink shadow-md -translate-y-0.5"
                  : "bg-paper-card text-ink border-ink/15 hover:border-ink/40"
              }`}
            >
              <span
                className={`font-mono text-[10px] tracking-widest uppercase mb-2 inline-block ${
                  isSelected ? "text-flow-blue" : "text-ink-subtle"
                }`}
              >
                [{preset.tag}]
              </span>
              <span className="text-sm sm:text-base font-semibold leading-snug">
                {preset.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Machine Workbench (Dark Nordic Charcoal Slab) */}
      <div className="bg-charcoal-grid text-[#F4F0EA] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Sliders & High-Drag Input */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#1F1B1E] border border-[#F87171]/25 rounded-2xl p-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F87171]/15 border border-[#F87171]/30 font-mono text-[10px] tracking-widest uppercase text-[#F87171]">
                  <Flame className="w-3 h-3" /> [ INPUT: HIGH DRAG ]
                </span>
                <span className="font-mono text-xs text-[#A1A1AA]">
                  {totalHoursWastedYear.toLocaleString()} hrs/yr load
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-[#F4F0EA] mb-2 leading-snug">
                {selectedPreset.label}
              </h3>

              <p className="text-xs sm:text-sm text-[#D4D4D8]/80 leading-relaxed mb-5">
                {selectedPreset.beforePain}
              </p>

              {/* Sliders */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-[#A1A1AA] flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-[#F87171]" /> TEAM SIZE:
                    </span>
                    <span className="text-[#F4F0EA] font-semibold">
                      {teamSize} {teamSize === 1 ? "person" : "people"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={30}
                    step={1}
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full accent-[#F87171] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-[#A1A1AA]">HOURS PER DAY (EACH):</span>
                    <span className="text-[#F4F0EA] font-semibold">{hoursPerDay} hrs/day</span>
                  </div>
                  <input
                    type="range"
                    min={0.5}
                    max={6}
                    step={0.5}
                    value={hoursPerDay}
                    onChange={(e) => setHoursPerDay(Number(e.target.value))}
                    className="w-full accent-[#F87171] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-[#A1A1AA]">HOURLY COST (SCB):</span>
                    <span className="text-[#F4F0EA] font-semibold">{hourlyRateSEK} SEK/hr</span>
                  </div>
                  <input
                    type="range"
                    min={300}
                    max={1000}
                    step={50}
                    value={hourlyRateSEK}
                    onChange={(e) => setHourlyRateSEK(Number(e.target.value))}
                    className="w-full accent-[#F87171] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#F87171]/20 flex items-center justify-between text-[11px] font-mono text-[#FCA5A5]">
              <span>MANUAL BOTTLENECK</span>
              <span>220 WORKDAYS/YR</span>
            </div>
          </div>

          {/* Right Column: Deterministic Gate & Zero-Drag Output */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#181E27] border border-[#93C5FD]/30 rounded-2xl p-6">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#93C5FD]/15 border border-[#93C5FD]/30 font-mono text-[10px] tracking-widest uppercase text-[#93C5FD]">
                  <Zap className="w-3 h-3" /> [ OUTPUT: DETERMINISTIC FLOW ]
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 font-mono text-[10px] tracking-widest uppercase text-emerald-300">
                  {selectedPreset.deliveryType.toUpperCase()}
                </span>
              </div>

              {/* Big Animated Metric Receipts */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${teamSize}-${hoursPerDay}-${hourlyRateSEK}-${selectedPreset.id}`}
                  initial={{ opacity: 0.5, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5"
                >
                  <div className="bg-[#212125] border border-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-2 font-mono text-[11px] text-[#A1A1AA] uppercase mb-1">
                      <Clock className="w-3.5 h-3.5 text-[#93C5FD]" /> Hours Returned / Year
                    </div>
                    <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#F4F0EA]">
                      {hoursReclaimedYear.toLocaleString()}{" "}
                      <span className="text-lg font-normal italic text-[#93C5FD]">hrs/yr</span>
                    </div>
                    <div className="text-[11px] font-mono text-[#71717A] mt-1">
                      ≈ {Math.round(hoursReclaimedYear / 8)} full workdays back
                    </div>
                  </div>

                  <div className="bg-[#212125] border border-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-2 font-mono text-[11px] text-[#A1A1AA] uppercase mb-1">
                      <Coins className="w-3.5 h-3.5 text-emerald-400" /> Annual Drag Eliminated
                    </div>
                    <div className="font-serif text-3xl sm:text-4xl font-semibold text-emerald-300">
                      {annualSEKReclaimed.toLocaleString()}{" "}
                      <span className="text-lg font-normal italic">SEK</span>
                    </div>
                    <div className="text-[11px] font-mono text-[#71717A] mt-1">
                      ≈ €{annualEURReclaimed.toLocaleString()} / yr in freed capacity
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* 3-Step Deterministic Architecture */}
              <div className="mb-5">
                <div className="font-mono text-[10px] tracking-widest uppercase text-[#93C5FD] mb-2">
                  3-STEP FIX:
                </div>
                <div className="space-y-2">
                  {selectedPreset.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-[#25252A] border border-white/5 rounded-xl px-3.5 py-2.5"
                    >
                      <span className="font-mono text-xs font-semibold text-[#93C5FD] mt-0.5">
                        0{idx + 1}.
                      </span>
                      <span className="text-xs sm:text-sm text-[#F4F0EA] leading-snug">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action bar */}
            <div className="pt-4 border-t border-[#93C5FD]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-[#BFDBFE]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero new software licenses required.</span>
              </div>
              <a
                href="#contact-bench"
                onClick={() => {
                  if (onSelectChoreForContact) {
                    onSelectChoreForContact(
                      `Hi Kevin! We have ${teamSize} people spending ~${hoursPerDay} hrs/day on "${selectedPreset.label}" (~${annualSEKReclaimed.toLocaleString()} SEK/yr drag). Let's look at eliminating it.`
                    );
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#F4F0EA] text-[#161618] font-sans font-semibold text-xs hover:bg-[#93C5FD] transition-colors shrink-0"
              >
                <span>Kill this bottleneck</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
