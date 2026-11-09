"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  Layers,
  Terminal,
  Sparkles,
} from "lucide-react";

interface CaseStudy {
  id: string;
  number: string;
  clientLabel: string;
  location: string;
  headlineMetric: string;
  secondaryMetric: string;
  timeframe: string;
  deliveryMode: string;
  summary: string;
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
    clientLabel: "15-Person Residential Real Estate Brokerage",
    location: "GOTHENBURG, SWEDEN (ANONYMIZED)",
    headlineMetric: "+20% Revenue Lift",
    secondaryMetric: "2× Client Capacity",
    timeframe: "Within 90 Days",
    deliveryMode: "Team AI Fluency Workshops + Slack Workflows",
    summary:
      "Brokers were drowning in listing copywriting, prospectus formatting, and manual follow-ups after viewings. Instead of buying another SaaS tool, we trained the entire 15-person brokerage to operate shared Claude & Workspace workflows tied to Slack.",
    beforeState: {
      title: "7+ hrs/week lost per broker to listing & admin friction",
      points: [
        "Every broker wrote property descriptions from scratch late in the evening",
        "Inconsistent brand voice across senior and junior brokers",
        "Viewing follow-ups delayed by 24–48 hours due to manual data entry",
      ],
      costDrag: "~315,000 SEK/quarter in lost selling hours across 15 brokers",
    },
    afterState: {
      title: "Standardized 90-second listing & follow-up pipeline",
      points: [
        "Raw inspection voice notes automatically structure into house-style object copy",
        "Automated Slack triggers prep viewing follow-ups ready for 1-tap broker approval",
        "Each broker handles 2× active listings without working nights",
      ],
      outcomeReceipt: "+20% verified revenue increase & 2× client capacity in 90 days",
    },
    pipelineNodes: [
      {
        node: "01. Slack Voice / Notes Drop",
        role: "Broker drops raw property bullets from phone right after inspection",
        latency: "0.4s",
        sampleOutput: "Ingested: 3.5 rok Linnéstaden, balcony south, renovated 2023...",
      },
      {
        node: "02. Structured House-Style Engine",
        role: "Applies brokerage editorial rules, room-by-room structure & buyer hooks",
        latency: "2.1s",
        sampleOutput: "Generated: Headline + Full Hemnet Copy + 3 Viewing SMS Templates",
      },
      {
        node: "03. Human Broker Verification Gate",
        role: "Broker reviews in Slack, tweaks 1 line, and approves for publication",
        latency: "90s human check",
        sampleOutput: "STATUS: Approved & pushed to listing system",
      },
    ],
  },
  {
    id: "ecommerce-ops",
    number: "CASE 02",
    clientLabel: "Swedish E-Commerce Operations Team",
    location: "WESTERN SWEDEN (ANONYMIZED)",
    headlineMetric: "6 Hours / Day Saved",
    secondaryMetric: "Built in 1 Afternoon",
    timeframe: "Immediate Day-1 ROI",
    deliveryMode: "Custom Reconciliation Automation",
    summary:
      "An operations manager was spending 6 hours every single day manually reconciling daily inventory counts, supplier feeds, and storefront sales exports across disconnected spreadsheets.",
    beforeState: {
      title: "6 hours/day trapped in CSV & VLOOKUP purgatory",
      points: [
        "Manual downloads across storefront, warehouse, and payment portals",
        "Human copy-paste errors causing stockout surprises and support tickets",
        "Zero time left for supplier negotiation or growth initiatives",
      ],
      costDrag: "~660,000 SEK/year in senior operations time spent on data entry",
    },
    afterState: {
      title: "Automated daily reconciliation & exception-only alerts",
      points: [
        "Direct API & export ingestion normalizes every SKU automatically",
        "Clean reconciled ledger delivered before the workday starts",
        "Human operator only steps in when a real discrepancy is flagged",
      ],
      outcomeReceipt: "6 hours/day reclaimed permanently after a single afternoon build",
    },
    pipelineNodes: [
      {
        node: "01. Multi-Source Export Ingest",
        role: "Pulls daily storefront orders, payouts & warehouse stock levels",
        latency: "1.2s",
        sampleOutput: "Fetched 1,420 order rows + 890 SKU stock lines",
      },
      {
        node: "02. Deterministic SKU Reconciler",
        role: "Matches payouts to orders, updates stock deltas & isolates anomalies",
        latency: "0.8s",
        sampleOutput: "1,418 matched cleanly • 2 quantity mismatches flagged",
      },
      {
        node: "03. Exception Digest Delivery",
        role: "Writes clean master sheet & sends 2-line exception alert to ops manager",
        latency: "0.3s",
        sampleOutput: "Delivered: 6 hours of manual work completed in 2.3 seconds",
      },
    ],
  },
  {
    id: "gym-crm",
    number: "CASE 03",
    clientLabel: "Local Fitness & Gym Enterprise",
    location: "SWEDEN (ANONYMIZED)",
    headlineMetric: "130,000 SEK / Year Saved",
    secondaryMetric: "0 SEK License Fee",
    timeframe: "Permanent SaaS Replacement",
    deliveryMode: "Zero-License Custom AI Lead & Inbox Router",
    summary:
      "The owner was quoted 130,000 SEK/year for a bloated enterprise CRM & lead-routing suite where the staff only needed fast inquiry triage, trial booking follow-ups, and clean member tracking.",
    beforeState: {
      title: "130,000 SEK/year SaaS quote + scattered inbox leads",
      points: [
        "Membership inquiries arriving across email, web forms, and social DMs",
        "Bloated enterprise CRM charging per-seat fees for unused features",
        "Warm trial prospects going cold over weekends",
      ],
      costDrag: "130,000 SEK/year in recurring software licensing tax",
    },
    afterState: {
      title: "Owned, zero-license AI lead & inbox routing system",
      points: [
        "Instant classification of trial requests, billing questions, and PT leads",
        "Automated personalized responses + staff notification cards",
        "100% owned infrastructure with zero recurring SaaS seat fees",
      ],
      outcomeReceipt: "130,000 SEK/year saved directly on the bottom line",
    },
    pipelineNodes: [
      {
        node: "01. Unified Inquiry Webhook",
        role: "Captures web form, email & trial requests in real time",
        latency: "0.2s",
        sampleOutput: "Inbound: 'Hi, looking for personal training + corporate pass...'",
      },
      {
        node: "02. AI Lead Classifier & Draft Engine",
        role: "Scores lead value, tags category & drafts warm Swedish reply",
        latency: "1.4s",
        sampleOutput: "Tagged: [HIGH-VALUE CORPORATE PT] • Reply drafted",
      },
      {
        node: "03. Zero-License Tracker & Instant Ping",
        role: "Logs lead to owned sheet & pings owner's phone with 1-tap send",
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
    <section id="workbench" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper-sunken border border-ink/15 text-ink font-mono text-[11px] tracking-widest uppercase mb-4">
            <Layers className="w-3.5 h-3.5 text-flow-deep" />
            <span>[ VERIFIED TRACK 2 RECEIPTS • ANONYMIZED CASE STUDIES ]</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-ink tracking-tight leading-[1.08]">
            Real systems shipped for{" "}
            <span className="italic font-normal text-flow-deep">Swedish teams.</span>
          </h2>
        </div>
        <p className="text-ink-muted text-sm sm:text-base max-w-md leading-relaxed">
          No theoretical AI hype. Click any bench folder below to inspect the before/after
          economics and run a live simulation of the architecture.
        </p>
      </div>

      {/* Case Selector Tabs (Bench Folders) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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
          className="workshop-card p-6 sm:p-10 shadow-sm"
        >
          {/* Top metadata bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-ink/10">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-ink-subtle mb-1">
                {activeCase.number} • {activeCase.location}
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl text-ink">
                {activeCase.clientLabel}
              </h3>
            </div>

            <div className="flex items-center gap-2 bg-paper-sunken p-1 rounded-full border border-ink/10 font-mono text-[11px]">
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
                  {mode === "both" ? "Side-by-Side" : mode === "before" ? "High Drag" : "Zero Drag"}
                </button>
              ))}
            </div>
          </div>

          <p className="text-ink-muted text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
            {activeCase.summary}
          </p>

          {/* High Drag vs Zero Drag Comparison Columns (Nordic Editorial Duality) */}
          <div
            className={`grid grid-cols-1 ${
              viewMode === "both" ? "lg:grid-cols-2" : "lg:grid-cols-1"
            } gap-6 mb-10`}
          >
            {(viewMode === "both" || viewMode === "before") && (
              <div className="rounded-2xl p-6 bg-drag-wash border border-drag-red/35 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-drag-red/15 text-drag-deep font-mono text-[10px] tracking-widest uppercase mb-4">
                    <AlertTriangle className="w-3.5 h-3.5" /> [ BEFORE: HIGH DRAG ]
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl text-ink mb-4">
                    {activeCase.beforeState.title}
                  </h4>
                  <ul className="space-y-2.5 mb-6">
                    {activeCase.beforeState.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-ink-muted">
                        <span className="font-mono text-drag-deep font-bold mt-0.5">×</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3 border-t border-drag-red/20 font-mono text-xs text-drag-deep">
                  DRAG COST: {activeCase.beforeState.costDrag}
                </div>
              </div>
            )}

            {(viewMode === "both" || viewMode === "after") && (
              <div className="rounded-2xl p-6 bg-flow-wash border border-flow-deep/25 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-flow-deep/10 text-flow-deep font-mono text-[10px] tracking-widest uppercase mb-4">
                    <CheckCircle2 className="w-3.5 h-3.5" /> [ AFTER: DETERMINISTIC FLOW ]
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl text-ink mb-4">
                    {activeCase.afterState.title}
                  </h4>
                  <ul className="space-y-2.5 mb-6">
                    {activeCase.afterState.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-ink-muted">
                        <span className="font-mono text-flow-emerald font-bold mt-0.5">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3 border-t border-flow-deep/20 font-mono text-xs font-semibold text-flow-emerald">
                  VERIFIED OUTCOME: {activeCase.afterState.outcomeReceipt}
                </div>
              </div>
            )}
          </div>

          {/* Interactive Architecture Pipeline Simulator */}
          <div className="bg-charcoal-grid text-[#F4F0EA] rounded-2xl p-6 border border-ink/15">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2.5">
                <Terminal className="w-4 h-4 text-[#93C5FD]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#F4F0EA]">
                  [ ARCHITECTURE TRACE • {activeCase.deliveryMode.toUpperCase()} ]
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeCase.pipelineNodes.map((node, idx) => {
                const isActive = simStep !== null && simStep >= idx;
                const isJustCompleted = simStep !== null && simStep > idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-xl p-4 border transition-all duration-300 ${
                      isActive
                        ? "bg-[#25252A] border-[#93C5FD]/60 shadow-md"
                        : "bg-[#212125]/70 border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] text-[#A1A1AA] mb-2">
                      <span className="text-[#93C5FD] font-semibold">{node.node}</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-[#D4D4D8]">
                        {node.latency}
                      </span>
                    </div>
                    <p className="text-xs text-[#D4D4D8] leading-relaxed mb-3">{node.role}</p>
                    <div
                      className={`font-mono text-[11px] p-2.5 rounded-lg border transition-colors ${
                        isActive
                          ? "bg-[#181E27] border-emerald-400/30 text-emerald-300"
                          : "bg-black/30 border-white/5 text-[#71717A]"
                      }`}
                    >
                      {isActive ? `✓ ${node.sampleOutput}` : `Waiting for trigger...`}
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
