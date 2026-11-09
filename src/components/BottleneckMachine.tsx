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
  RotateCcw,
} from "lucide-react";

export interface ChorePreset {
  id: string;
  label: string;
  tag: string;
  defaultTeamSize: number;
  defaultHoursPerDay: number;
  beforePain: string;
  afterFlow: string;
  deliveryType: "AI Fluency Workshop" | "Zero-License Custom Build";
  steps: [string, string, string];
}

const CHORE_PRESETS: ChorePreset[] = [
  {
    id: "reconcile",
    label: "Copy-pasting daily order & inventory rows across spreadsheets",
    tag: "E-COMMERCE & OPS",
    defaultTeamSize: 3,
    defaultHoursPerDay: 2.0,
    beforePain:
      "Ops manager spends every morning downloading CSVs from 3 platforms, fixing broken SKU columns by hand, and pasting totals into the master sheet.",
    afterFlow:
      "Automated daily ingestion pipeline pulls raw exports, normalizes SKUs deterministically, flags only true anomalies in Slack, and updates the ledger in 14 seconds.",
    deliveryType: "Zero-License Custom Build",
    steps: [
      "Scheduled webhook ingests raw store & warehouse exports at 06:30 CET",
      "Deterministic validation script reconciles SKUs & isolates mismatches",
      "1-click Slack summary lands on the ops desk with zero manual spreadsheet work",
    ],
  },
  {
    id: "inbox",
    label: "Triaging 60+ morning leads & customer emails by hand",
    tag: "SALES & SERVICE",
    defaultTeamSize: 4,
    defaultHoursPerDay: 1.5,
    beforePain:
      "High-intent buyer inquiries sit buried underneath invoices, spam, and routine FAQ questions until 4:00 PM on Friday.",
    afterFlow:
      "AI classifier scores intent and urgency on arrival, drafts context-aware replies inside your existing inbox, and routes VIP leads straight to your phone.",
    deliveryType: "Zero-License Custom Build",
    steps: [
      "Inbound email or web form triggers structured intent & urgency classification",
      "System cross-checks client history and pre-drafts a peer-level response",
      "Team reviews and approves in 1 tap instead of typing from a blank screen",
    ],
  },
  {
    id: "brokers",
    label: "Chasing property docs & rewriting listing descriptions",
    tag: "REAL ESTATE & BROKERAGES",
    defaultTeamSize: 15,
    defaultHoursPerDay: 1.5,
    beforePain:
      "Brokers lose 7+ hours a week rewriting identical object descriptions, formatting prospectuses, and manually following up on missing seller paperwork.",
    afterFlow:
      "Shared Claude/Gemini workspace templates + automated Slack triggers turn raw property notes into house-style listings and track missing docs automatically.",
    deliveryType: "AI Fluency Workshop",
    steps: [
      "Voice note or raw inspection checklist drops into the shared team channel",
      "Custom-trained workspace prompt structures the listing in the firm's exact tone",
      "Human broker performs final 90-second review before publishing",
    ],
  },
  {
    id: "crm",
    label: "Paying 10,000+ SEK/mo for bloated CRM licenses nobody opens",
    tag: "SMB & GYM ENTERPRISE",
    defaultTeamSize: 5,
    defaultHoursPerDay: 1.0,
    beforePain:
      "Locked into an expensive multi-seat SaaS contract where the team only uses 8% of the features and still forgets to follow up with warm leads.",
    afterFlow:
      "Lean, zero-license custom lead & member router built on tools you already own—saving 130,000 SEK/year in software bloat.",
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
  const [customChoreText, setCustomChoreText] = useState("");
  const [teamSize, setTeamSize] = useState<number>(CHORE_PRESETS[0].defaultTeamSize);
  const [hoursPerDay, setHoursPerDay] = useState<number>(CHORE_PRESETS[0].defaultHoursPerDay);
  const [hourlyRateSEK, setHourlyRateSEK] = useState<number>(500); // SCB Swedish benchmark
  const [isCrushing, setIsCrushing] = useState<boolean>(false);

  const handleSelectPreset = (preset: ChorePreset) => {
    setIsCrushing(true);
    setSelectedPreset(preset);
    setCustomChoreText("");
    setTeamSize(preset.defaultTeamSize);
    setHoursPerDay(preset.defaultHoursPerDay);
    setTimeout(() => setIsCrushing(false), 380);
  };

  // Math (220 working days/year, 80% reclaimable via deterministic workflow)
  const workingDaysPerYear = 220;
  const reclaimEfficiency = 0.82;
  const totalHoursWastedYear = Math.round(teamSize * hoursPerDay * workingDaysPerYear);
  const hoursReclaimedYear = Math.round(totalHoursWastedYear * reclaimEfficiency);
  const annualSEKReclaimed = Math.round((hoursReclaimedYear * hourlyRateSEK) / 1000) * 1000;
  const annualEURReclaimed = Math.round(annualSEKReclaimed / 11.4);

  const activeTitle = customChoreText.trim()
    ? customChoreText.trim()
    : selectedPreset.label;

  return (
    <section id="bottleneck-machine" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ink text-paper font-mono text-[11px] tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-flow-blue" />
            <span>[ INTERACTIVE TOY 01 • THE BOTTLENECK MACHINE ]</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-ink tracking-tight leading-[1.08]">
            Drop a boring computer chore{" "}
            <span className="italic font-normal text-drag-deep">into the grinder.</span>
          </h2>
        </div>
        <p className="text-ink-muted text-sm sm:text-base max-w-md leading-relaxed">
          Every playful element on this site runs on real operational math. Pick a common
          bottleneck below—or type your own—and adjust the sliders to see the exact payroll drag
          (benchmarked on SCB&apos;s 500 SEK/hr Swedish labor cost).
        </p>
      </div>

      {/* Preset Chore Chips */}
      <div className="mb-8">
        <div className="font-mono text-[11px] uppercase tracking-wider text-ink-subtle mb-3">
          1. Pick a real bottleneck from the bench (or type your own):
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          {CHORE_PRESETS.map((preset) => {
            const isSelected = selectedPreset.id === preset.id && !customChoreText.trim();
            return (
              <button
                key={preset.id}
                onClick={() => handleSelectPreset(preset)}
                className={`text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
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
                <span className="text-sm font-semibold leading-snug">{preset.label}</span>
              </button>
            );
          })}
        </div>

        {/* Custom input bar */}
        <div className="relative">
          <input
            type="text"
            value={customChoreText}
            onChange={(e) => setCustomChoreText(e.target.value)}
            placeholder="Or type your own annoying computer chore here (e.g., 'Manually formatting weekly PDF quotes from Excel')..."
            className="w-full px-4 py-3.5 rounded-xl bg-paper-card border border-ink/20 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-ink font-sans pr-28"
          />
          {customChoreText && (
            <button
              onClick={() => setCustomChoreText("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 text-xs font-mono text-ink-muted hover:text-ink px-2 py-1 rounded bg-paper-sunken"
            >
              <RotateCcw className="w-3 h-3" /> Reset
            </button>
          )}
        </div>
      </div>

      {/* Main Machine Workbench (Dark Nordic Charcoal Slab for High Contrast) */}
      <div className="bg-charcoal-grid text-[#F4F0EA] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Sliders & High-Drag Input */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#1F1B1E] border border-[#F87171]/25 rounded-2xl p-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F87171]/15 border border-[#F87171]/30 font-mono text-[10px] tracking-widest uppercase text-[#F87171]">
                  <Flame className="w-3 h-3" /> [ INPUT: HIGH DRAG ]
                </span>
                <span className="font-mono text-xs text-[#A1A1AA]">
                  {totalHoursWastedYear.toLocaleString()} hrs/yr raw load
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-[#F4F0EA] mb-3 leading-snug">
                &ldquo;{activeTitle}&rdquo;
              </h3>

              <p className="text-xs sm:text-sm text-[#D4D4D8]/80 leading-relaxed mb-6">
                {customChoreText.trim()
                  ? "Every hour spent manually moving, formatting, or babysitting repetitive data is an hour stolen from high-judgment client and product work."
                  : selectedPreset.beforePain}
              </p>

              {/* Sliders */}
              <div className="space-y-5 pt-4 border-t border-white/10">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-[#A1A1AA] flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-[#F87171]" /> PEOPLE DOING THIS CHORE:
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
                    <span className="text-[#A1A1AA]">HOURS SPENT PER DAY (EACH):</span>
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
                    <span className="text-[#A1A1AA]">HOURLY COST (SCB BENCHMARK):</span>
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

            <div className="mt-6 pt-4 border-t border-[#F87171]/20 flex items-center justify-between text-xs font-mono text-[#FCA5A5]">
              <span>STATUS: MANUAL BOTTLENECK</span>
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
                  RECOMMENDED: {selectedPreset.deliveryType.toUpperCase()}
                </span>
              </div>

              {/* Big Animated Metric Receipts */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${teamSize}-${hoursPerDay}-${hourlyRateSEK}-${selectedPreset.id}`}
                  initial={{ opacity: 0.5, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
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
                      ≈ {Math.round(hoursReclaimedYear / 8)} full 8-hour workdays back
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
                      ≈ €{annualEURReclaimed.toLocaleString()} / year in freed capacity
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* 3-Step Deterministic Architecture */}
              <div className="mb-6">
                <div className="font-mono text-[10px] tracking-widest uppercase text-[#93C5FD] mb-2.5">
                  HOW WE ELIMINATE IT (3-STEP ARCHITECTURE):
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
                <span>Built inside tools you already trust or as a zero-license workflow.</span>
              </div>
              <a
                href="#contact-bench"
                onClick={() => {
                  if (onSelectChoreForContact) {
                    onSelectChoreForContact(
                      `Hi Kevin! We have ${teamSize} people spending ~${hoursPerDay} hrs/day on "${activeTitle}" (~${annualSEKReclaimed.toLocaleString()} SEK/yr drag). Let's look at eliminating it.`
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
