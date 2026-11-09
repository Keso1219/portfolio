"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Terminal,
} from "lucide-react";

interface CaseStudy {
  id: string;
  number: string;
  clientLabel: string;
  location: string;
  headlineMetric: string;
  timeframe: string;
  deliveryMode: string;
  beforeState: {
    title: string;
    points: string[];
    costDrag: string;
  };
  afterState: {
    title: string;
    points: string[];
    outcomeReceipt: string;
  };
  pipelineNodes: {
    node: string;
    role: string;
    latency: string;
    sampleOutput: string;
  }[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "real-estate",
    number: "CASE 01",
    clientLabel: "15-Person Real Estate Brokerage",
    location: "GOTHENBURG (ANONYMIZED)",
    headlineMetric: "+20% Revenue & 2× Capacity",
    timeframe: "Within 90 Days",
    deliveryMode: "Team AI Fluency Workshops + Slack Workflows",
    beforeState: {
      title: "7+ hrs/week lost per broker to listing & follow-up admin",
      points: [
        "Property descriptions written from scratch late at night",
        "Viewing follow-ups delayed 24–48 hrs by manual data entry",
      ],
      costDrag: "~315,000 SEK/quarter in lost selling hours",
    },
    afterState: {
      title: "90-second listing & follow-up pipeline inside Slack",
      points: [
        "Voice notes structure automatically into house-style Hemnet copy",
        "Each broker handles 2× active listings without working nights",
      ],
      outcomeReceipt: "+20% revenue lift & 2× client capacity in 90 days",
    },
    pipelineNodes: [
      {
        node: "01. Slack Voice / Notes Drop",
        role: "Broker drops raw inspection bullets from phone",
        latency: "0.4s",
        sampleOutput: "Ingested: 3.5 rok Linnéstaden, south balcony...",
      },
      {
        node: "02. House-Style Engine",
        role: "Structures room-by-room copy & 3 viewing SMS templates",
        latency: "2.1s",
        sampleOutput: "Generated: Full Hemnet Copy + Follow-Up Queue",
      },
      {
        node: "03. Broker Approval Gate",
        role: "1-tap review in Slack before publishing",
        latency: "90s check",
        sampleOutput: "STATUS: Approved & pushed live",
      },
    ],
  },
  {
    id: "ecommerce-ops",
    number: "CASE 02",
    clientLabel: "Swedish E-Commerce Ops Team",
    location: "WESTERN SWEDEN (ANONYMIZED)",
    headlineMetric: "6 Hours / Day Saved",
    timeframe: "Built in 1 Afternoon",
    deliveryMode: "Custom Reconciliation Automation",
    beforeState: {
      title: "6 hours/day trapped in CSV & spreadsheet purgatory",
      points: [
        "Manual daily downloads across store, warehouse & payout portals",
        "Copy-paste errors causing stockouts and support tickets",
      ],
      costDrag: "~660,000 SEK/year in senior ops time",
    },
    afterState: {
      title: "Automated daily reconciliation & exception alerts",
      points: [
        "Every SKU normalized before the workday starts at 08:00",
        "Ops manager only steps in when a real discrepancy is flagged",
      ],
      outcomeReceipt: "6 hours/day reclaimed permanently from Day 1",
    },
    pipelineNodes: [
      {
        node: "01. Multi-Source Ingest",
        role: "Pulls daily storefront orders, payouts & stock levels",
        latency: "1.2s",
        sampleOutput: "Fetched 1,420 orders + 890 SKU lines",
      },
      {
        node: "02. SKU Reconciler",
        role: "Matches payouts to orders & isolates anomalies",
        latency: "0.8s",
        sampleOutput: "1,418 matched • 2 mismatches flagged",
      },
      {
        node: "03. Exception Digest",
        role: "Updates master sheet & pings ops desk in Slack",
        latency: "0.3s",
        sampleOutput: "Done: 6 hrs of work finished in 2.3s",
      },
    ],
  },
  {
    id: "gym-crm",
    number: "CASE 03",
    clientLabel: "Local Fitness & Gym Enterprise",
    location: "SWEDEN (ANONYMIZED)",
    headlineMetric: "130,000 SEK / Year Saved",
    timeframe: "0 SEK License Fee",
    deliveryMode: "Zero-License AI Lead & Inbox Router",
    beforeState: {
      title: "130,000 SEK/yr enterprise CRM quote + cold leads",
      points: [
        "Bloated CRM charging per-seat fees for unused features",
        "Weekend trial & PT inquiries going cold in the inbox",
      ],
      costDrag: "130,000 SEK/year in recurring software bloat",
    },
    afterState: {
      title: "Owned, zero-license AI lead & inbox router",
      points: [
        "Instant classification + warm replies for trial & PT leads",
        "100% owned inside existing sheets with 0 SEK seat fees",
      ],
      outcomeReceipt: "130,000 SEK/year saved directly on the bottom line",
    },
    pipelineNodes: [
      {
        node: "01. Inquiry Webhook",
        role: "Captures web form, email & trial requests live",
        latency: "0.2s",
        sampleOutput: "Inbound: 'Looking for PT + corporate pass...'",
      },
      {
        node: "02. AI Lead Classifier",
        role: "Scores lead value & drafts warm reply",
        latency: "1.4s",
        sampleOutput: "Tagged: [CORPORATE PT] • Reply drafted",
      },
      {
        node: "03. Zero-License Tracker",
        role: "Logs lead to owned sheet & pings owner's phone",
        latency: "0.3s",
        sampleOutput: "Logged & notified • License cost: 0 SEK",
      },
    ],
  },
];

export default function InteractiveWorkbench() {
  const [activeCaseId, setActiveCaseId] = useState<string>(CASE_STUDIES[0].id);
  const [viewMode, setViewMode] = useState<"both" | "before" | "after">("both");
  const [simStep, setSimStep] = useState<number | null>(null);

  const activeCase = CASE_STUDIES.find((c) => c.id === activeCaseId) || CASE_STUDIES[0];

  const triggerSimulation = () => {
    setSimStep(0);
    setTimeout(() => setSimStep(1), 650);
    setTimeout(() => setSimStep(2), 1400);
    setTimeout(() => setSimStep(3), 2200);
  };

  return (
    <section id="workbench" className="py-16 sm:py-20 px-4 sm:px-8 max-w-6xl mx-auto border-b border-[#D8D0C2]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper-sunken border border-ink/15 text-ink font-mono text-[11px] tracking-widest uppercase mb-3">
            <Layers className="w-3.5 h-3.5 text-flow-deep" />
            <span>[ SECTION 01 • VERIFIED CASE STUDIES ]</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-ink tracking-tight leading-[1.08]">
            Real systems shipped for{" "}
            <span className="italic font-normal text-flow-deep">Swedish teams.</span>
          </h2>
        </div>
        <p className="text-ink-muted text-sm sm:text-base max-w-sm leading-relaxed">
          Click any case file below to compare the before/after math and test-run the live workflow trace.
        </p>
      </div>

      {/* Case Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {CASE_STUDIES.map((cs) => {
          const isSelected = cs.id === activeCaseId;
          return (
            <button
              key={cs.id}
              onClick={() => {
                setActiveCaseId(cs.id);
                setSimStep(null);
              }}
              className={`text-left p-5 rounded-2xl border transition-all duration-200 ${
                isSelected
                  ? "bg-ink text-paper border-ink shadow-lg -translate-y-0.5"
                  : "bg-paper-card text-ink border-ink/15 hover:border-ink/40"
              }`}
            >
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider mb-2">
                <span className={isSelected ? "text-flow-blue" : "text-ink-subtle"}>
                  [{cs.number}]
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] ${
                    isSelected
                      ? "bg-white/10 text-emerald-300"
                      : "bg-paper-sunken text-ink-muted"
                  }`}
                >
                  {cs.timeframe}
                </span>
              </div>
              <div className="font-serif text-2xl sm:text-3xl font-semibold mb-1">
                {cs.headlineMetric}
              </div>
              <div
                className={`text-xs font-medium ${
                  isSelected ? "text-paper/80" : "text-ink-muted"
                }`}
              >
                {cs.clientLabel}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Case Study Detail Bench */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCase.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22 }}
          className="workshop-card p-6 sm:p-8 shadow-sm"
        >
          {/* Top metadata bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-ink/10">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-ink-subtle mb-1">
                {activeCase.number} • {activeCase.location}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink">
                {activeCase.clientLabel}
              </h3>
            </div>

            <div className="flex items-center gap-1.5 bg-paper-sunken p-1 rounded-full border border-ink/10 font-mono text-[11px]">
              {(["both", "before", "after"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-3 py-1 rounded-full uppercase transition-colors ${
                    viewMode === mode
                      ? "bg-ink text-paper font-semibold"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {mode === "both" ? "Side-by-Side" : mode === "before" ? "Before" : "After"}
                </button>
              ))}
            </div>
          </div>

          {/* High Drag vs Zero Drag Comparison Columns */}
          <div
            className={`grid grid-cols-1 ${
              viewMode === "both" ? "lg:grid-cols-2" : "lg:grid-cols-1"
            } gap-5 mb-6`}
          >
            {(viewMode === "both" || viewMode === "before") && (
              <div className="rounded-2xl p-5 bg-drag-wash border border-drag-red/35 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-drag-red/15 text-drag-deep font-mono text-[10px] tracking-widest uppercase mb-3">
                    <AlertTriangle className="w-3 h-3" /> [ BEFORE: HIGH DRAG ]
                  </div>
                  <h4 className="font-serif text-lg sm:text-xl text-ink mb-3">
                    {activeCase.beforeState.title}
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {activeCase.beforeState.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-ink-muted">
                        <span className="font-mono text-drag-deep font-bold">×</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-2.5 border-t border-drag-red/20 font-mono text-xs text-drag-deep">
                  DRAG: {activeCase.beforeState.costDrag}
                </div>
              </div>
            )}

            {(viewMode === "both" || viewMode === "after") && (
              <div className="rounded-2xl p-5 bg-flow-wash border border-flow-deep/25 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-flow-deep/10 text-flow-deep font-mono text-[10px] tracking-widest uppercase mb-3">
                    <CheckCircle2 className="w-3 h-3" /> [ AFTER: DETERMINISTIC FLOW ]
                  </div>
                  <h4 className="font-serif text-lg sm:text-xl text-ink mb-3">
                    {activeCase.afterState.title}
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {activeCase.afterState.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-ink-muted">
                        <span className="font-mono text-flow-emerald font-bold">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-2.5 border-t border-flow-deep/20 font-mono text-xs font-semibold text-flow-emerald">
                  RESULT: {activeCase.afterState.outcomeReceipt}
                </div>
              </div>
            )}
          </div>

          {/* Interactive Architecture Pipeline Simulator */}
          <div className="bg-charcoal-grid text-[#F4F0EA] rounded-2xl p-5 sm:p-6 border border-ink/15">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#93C5FD]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#F4F0EA]">
                  [ LIVE WORKFLOW TRACE • {activeCase.deliveryMode.toUpperCase()} ]
                </span>
              </div>

              <button
                onClick={triggerSimulation}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#93C5FD] text-[#161618] font-mono text-xs font-semibold hover:bg-white transition-colors self-start sm:self-auto"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{simStep === null ? "Test-Run Workflow Trace" : "Re-Run Trace"}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {activeCase.pipelineNodes.map((node, idx) => {
                const isActive = simStep !== null && simStep >= idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-xl p-4 border transition-all duration-300 ${
                      isActive
                        ? "bg-[#25252A] border-[#93C5FD]/60 shadow-md"
                        : "bg-[#212125]/70 border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] text-[#A1A1AA] mb-1.5">
                      <span className="text-[#93C5FD] font-semibold">{node.node}</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-[#D4D4D8]">
                        {node.latency}
                      </span>
                    </div>
                    <p className="text-xs text-[#D4D4D8] leading-snug mb-3">{node.role}</p>
                    <div
                      className={`font-mono text-[11px] p-2 rounded-lg border transition-colors ${
                        isActive
                          ? "bg-[#181E27] border-emerald-400/30 text-emerald-300"
                          : "bg-black/30 border-white/5 text-[#71717A]"
                      }`}
                    >
                      {isActive ? `✓ ${node.sampleOutput}` : `Click 'Test-Run' above...`}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
