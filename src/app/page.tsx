"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Mail,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Terminal,
  Wrench,
  Award,
  MapPin,
} from "lucide-react";
import BottleneckMachine from "@/components/BottleneckMachine";
import InteractiveWorkbench from "@/components/InteractiveWorkbench";
import MotionPlayhouse from "@/components/MotionPlayhouse";

export default function HomePage() {
  const [choreDraft, setChoreDraft] = useState<string>("");
  const [copiedNote, setCopiedNote] = useState<boolean>(false);

  const handleSelectBottleneck = (summary: string) => {
    setChoreDraft(summary);
    const el = document.getElementById("contact-bench");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const defaultMessage =
    choreDraft ||
    "Hey Kevin! Here is the most annoying recurring computer chore on my desk right now:\n\n[Describe the chore in 1–2 sentences]\n\nCurious how you would automate or simplify this inside our existing tools.";

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(defaultMessage);
    setCopiedNote(true);
    setTimeout(() => setCopiedNote(false), 2500);
  };

  const mailtoHref = `mailto:kevin.sorani00@gmail.com?subject=${encodeURIComponent(
    "15-Min AI Bottleneck Audit // Computer Chore"
  )}&body=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#C85A32] selection:text-[#F4F0EA]">
      {/* Sticky Top Architectural Bar */}
      <header className="sticky top-0 z-40 bg-[#F4F0EA]/90 backdrop-blur-md border-b border-[#D8D0C2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3D7A5A] ring-4 ring-[#3D7A5A]/20" />
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-[#161618]">
              [ KEVIN SORANI • GOTHENBURG ]
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-[#52504C]">
            <a href="#workbench" className="hover:text-[#C85A32] transition-colors">
              01. Case Studies
            </a>
            <a href="#bottleneck-machine" className="hover:text-[#C85A32] transition-colors">
              02. Bottleneck Machine
            </a>
            <a href="#motion-lab" className="hover:text-[#C85A32] transition-colors">
              03. Motion Lab
            </a>
            <a href="#origin" className="hover:text-[#C85A32] transition-colors">
              04. Why an Educator
            </a>
          </nav>

          <a
            href="#contact-bench"
            className="inline-flex items-center gap-1.5 bg-[#161618] hover:bg-[#C85A32] text-[#F4F0EA] font-mono text-xs uppercase tracking-wider px-3.5 py-2 rounded-sm transition-colors"
          >
            <span>Tell me your chore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* 5-SECOND HERO SECTION */}
        <section className="pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-[#D8D0C2]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left 7 Cols: Editorial Hook & Inviting Subheadline */}
              <div className="lg:col-span-7">
                <div className="inline-flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#161618] bg-[#EAE3D5] border border-[#161618]/20 px-3 py-1.5 rounded-sm mb-6">
                  <Wrench className="w-3.5 h-3.5 text-[#C85A32]" />
                  <span>AI WORKSHOPS & WORKFLOW ARCHITECT • VÄSTRA GÖTALAND</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-[64px] text-[#161618] tracking-tight leading-[1.03] mb-6">
                  Teaching humans what to{" "}
                  <span className="italic font-normal text-[#C85A32]">
                    actually do
                  </span>{" "}
                  with AI.
                </h1>

                <p className="text-base sm:text-xl text-[#52504C] leading-relaxed mb-8 max-w-2xl">
                  Most teams already pay for ChatGPT, Claude, or Copilot—and still spend 10 hours a week copy-pasting between tabs. I run hands-on{" "}
                  <span className="text-[#161618] font-medium underline decoration-[#C85A32]/60 decoration-2 underline-offset-4">
                    AI Fluency Workshops
                  </span>{" "}
                  and build custom workflows that give your team 4–6 hours of their day back. Zero jargon, zero bloated software licenses.
                </p>

                {/* Primary & Secondary Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
                  <a
                    href="#bottleneck-machine"
                    className="inline-flex items-center justify-center gap-2 bg-[#C85A32] hover:bg-[#b04b25] text-[#F4F0EA] font-mono text-xs sm:text-sm uppercase tracking-wider px-6 py-4 rounded-sm shadow-[3px_3px_0px_#161618] hover:translate-y-[-1px] transition-all"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Test the Bottleneck Machine</span>
                  </a>
                  <a
                    href="#contact-bench"
                    className="inline-flex items-center justify-center gap-2 bg-[#FBF9F5] hover:bg-[#EAE3D5] text-[#161618] border border-[#161618] font-mono text-xs sm:text-sm uppercase tracking-wider px-6 py-4 rounded-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#C85A32]" />
                    <span>Send me an annoying chore</span>
                  </a>
                </div>

                {/* Quick Human Trust Line */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#52504C]">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3D7A5A]" />
                    Anthropic Certified (Claude Code & Fluency)
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3D7A5A]" />
                    Built inside tools you already own
                  </span>
                </div>
              </div>

              {/* Right 5 Cols: Warm Studio Portrait Card */}
              <div className="lg:col-span-5">
                <div className="paper-card rounded-md p-4 sm:p-5 relative">
                  {/* Top Card Telemetry Header */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#D8D0C2] font-mono text-[11px] text-[#52504C]">
                    <span>[ OPERATOR ID // KEVIN SORANI ]</span>
                    <span className="inline-flex items-center gap-1 text-[#3D7A5A] font-semibold">
                      <MapPin className="w-3 h-3" /> GOTHENBURG, SE
                    </span>
                  </div>

                  {/* Portrait Image Container (Matches #F4F0EA Warm Paper Backdrop) */}
                  <div className="relative rounded-sm overflow-hidden border border-[#161618] bg-[#EAE3D5] aspect-square">
                    <img
                      src="/kevin-portrait.jpg"
                      alt="Kevin Sorani — AI Workshop Facilitator & Automation Specialist in Gothenburg"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute bottom-3 left-3 right-3 bg-[#161618]/92 backdrop-blur-sm text-[#F4F0EA] p-3.5 rounded-sm border border-[#3A3A40]">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-[#D4A359] mb-0.5">
                        [ THE 5-SECOND PROMISE ]
                      </div>
                      <p className="text-xs sm:text-sm text-[#F4F0EA] leading-snug">
                        &ldquo;If a workflow takes a PhD to maintain, I won&apos;t build it. You get simple systems your team actually enjoys using.&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Bottom Card Credentials Strip */}
                  <div className="mt-3 pt-3 border-t border-[#D8D0C2] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#52504C]">BACKGROUND: EDUCATOR &rarr; AI OPS</span>
                    <a
                      href="https://www.linkedin.com/in/kevin-sorani-b70248312/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#C85A32] hover:underline font-semibold"
                    >
                      LinkedIn Profile <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 3-PILLAR VERIFIED PROOF STRIP */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  badge: "[ CASE 01 // REAL ESTATE BROKERAGE ]",
                  metric: "+20% Revenue & 2× Capacity",
                  detail:
                    "15-person Gothenburg firm doubled client capacity in 90 days by automating contract prep & follow-ups.",
                },
                {
                  badge: "[ CASE 02 // E-COMMERCE OPERATIONS ]",
                  metric: "6 Hours / Day Reclaimed",
                  detail:
                    "Eliminated manual order, returns, and supplier status triage for a Swedish operations manager in one afternoon.",
                },
                {
                  badge: "[ CASE 03 // LOCAL GYM ENTERPRISE ]",
                  metric: "130,000 SEK / Year Saved",
                  detail:
                    "Replaced a bloated enterprise CRM quote with a 0 SEK-license AI lead & inbox router inside existing sheets.",
                },
              ].map((item) => (
                <a
                  key={item.badge}
                  href="#workbench"
                  className="paper-card rounded-md p-5 flex flex-col justify-between group"
                >
                  <div>
                    <span className="font-mono text-[11px] text-[#C85A32] block mb-2">
                      {item.badge}
                    </span>
                    <div className="font-serif text-2xl sm:text-3xl text-[#161618] mb-2 group-hover:text-[#C85A32] transition-colors">
                      {item.metric}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#52504C] leading-relaxed">
                    {item.detail}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 01: INTERACTIVE WORKBENCH (3 ANONYMIZED CASE STUDIES) */}
        <InteractiveWorkbench />

        {/* SECTION 02: THE BOTTLENECK MACHINE (INTERACTIVE CHORE CALCULATOR) */}
        <BottleneckMachine onSelectChoreForContact={handleSelectBottleneck} />

        {/* SECTION 03: VISUAL ARCHITECTURE & MOTION LAB */}
        <MotionPlayhouse />

        {/* SECTION 04: ORIGIN & VERIFIED CREDENTIALS */}
        <section id="origin" className="py-20 border-b border-[#D8D0C2]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left 7 Cols: Why an Educator Builds Better Systems */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#C85A32] bg-[#C85A32]/10 border border-[#C85A32]/30 px-3 py-1 rounded-sm mb-3">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>[ SECTION 04 // WHY AN EDUCATOR BUILDS BETTER AI SYSTEMS ]</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-5xl text-[#161618] tracking-tight leading-[1.08] mb-6">
                  Software engineers love complexity.{" "}
                  <span className="italic font-normal text-[#C85A32]">
                    Teachers love clarity.
                  </span>
                </h2>

                <div className="space-y-4 text-[#52504C] text-sm sm:text-base leading-relaxed">
                  <p>
                    Before I started building AI workflows and running workshops for Swedish businesses, I worked in Gothenburg classrooms supporting students who struggled with traditional instruction, and coached youth boxing and football.
                  </p>
                  <p>
                    When you teach a room of restless 14-year-olds or coach someone in the ring, you learn one rule very quickly:{" "}
                    <strong className="text-[#161618] font-semibold">
                      if someone doesn&apos;t understand you, that is your fault—not theirs.
                    </strong>
                  </p>
                  <p>
                    Today, I bring that exact standard to business teams. Most AI consultants show up with 60-slide decks full of buzzwords, or lock you into fragile third-party platforms that break the moment they leave. I sit next to your team, translate what Claude, ChatGPT, and Gemini are actually good at in plain English, and wire up clean workflows that hand people their afternoons back.
                  </p>
                </div>

                {/* Two Core Ways We Can Work Together */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="paper-card rounded-md p-5">
                    <div className="font-mono text-xs text-[#C85A32] mb-1">
                      [ TRACK A // HANDS-ON TRAINING ]
                    </div>
                    <h3 className="font-serif text-xl text-[#161618] mb-2">
                      Half-Day AI Fluency Workshop
                    </h3>
                    <p className="text-xs sm:text-sm text-[#52504C] leading-relaxed">
                      We ditch generic slides. Your team brings their actual weekly admin bottlenecks, and everyone leaves with 3 working AI workflows built inside their own accounts.
                    </p>
                  </div>

                  <div className="paper-card rounded-md p-5">
                    <div className="font-mono text-xs text-[#3D7A5A] mb-1">
                      [ TRACK B // DONE-FOR-YOU BUILD ]
                    </div>
                    <h3 className="font-serif text-xl text-[#161618] mb-2">
                      Custom Workflow Sprint
                    </h3>
                    <p className="text-xs sm:text-sm text-[#52504C] leading-relaxed">
                      I audit your highest-drag computer chore—inbox triage, contract extraction, CRM routing, or reporting—and build a deterministic automation with zero recurring license bloat.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right 5 Cols: Verified Credentials & Live Cert Ledger */}
              <div className="lg:col-span-5 charcoal-slab rounded-md p-6 sm:p-7">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#2A2A2E]">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#D4A359]" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#F4F0EA]">
                      [ VERIFIED CREDENTIALS LEDGER ]
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#3D7A5A] bg-[#3D7A5A]/15 border border-[#3D7A5A]/40 px-2 py-0.5 rounded-sm">
                    SKILLJAR VERIFIED
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-[#1E1E22] border border-[#2A2A2E] rounded-sm">
                    <div className="flex items-center justify-between font-mono text-[11px] text-[#D4A359] mb-1">
                      <span>ANTHROPIC • MAR 2026</span>
                      <span>ID: 9q8igvwetrn8</span>
                    </div>
                    <h4 className="font-serif text-lg text-[#F4F0EA] mb-1">
                      Claude Code in Action
                    </h4>
                    <p className="text-xs text-[#A09C94] mb-3 leading-relaxed">
                      Agentic coding architecture, deterministic tool execution, and production context management.
                    </p>
                    <a
                      href="https://verify.skilljar.com/c/9q8igvwetrn8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#C85A32] hover:text-[#F4F0EA] transition-colors"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verify Credential on Skilljar <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="p-4 bg-[#1E1E22] border border-[#2A2A2E] rounded-sm">
                    <div className="flex items-center justify-between font-mono text-[11px] text-[#D4A359] mb-1">
                      <span>ANTHROPIC • MAR 2026</span>
                      <span>ID: c8wftw996muk</span>
                    </div>
                    <h4 className="font-serif text-lg text-[#F4F0EA] mb-1">
                      AI Fluency: Framework & Foundations
                    </h4>
                    <p className="text-xs text-[#A09C94] mb-3 leading-relaxed">
                      Structured delegation, human-in-the-loop verification, and organizational AI literacy frameworks.
                    </p>
                    <a
                      href="https://verify.skilljar.com/c/c8wftw996muk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#C85A32] hover:text-[#F4F0EA] transition-colors"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verify Credential on Skilljar <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="p-4 bg-[#1E1E22] border border-[#2A2A2E] rounded-sm">
                    <div className="flex items-center justify-between font-mono text-[11px] text-[#A09C94] mb-1">
                      <span>ENTERPRISE & SMB OPERATIONS</span>
                      <span>GOTHENBURG, SE</span>
                    </div>
                    <h4 className="font-serif text-lg text-[#F4F0EA] mb-1">
                      Production & AI Workflow Track Record
                    </h4>
                    <p className="text-xs text-[#A09C94] leading-relaxed">
                      Combining daily industrial operations discipline in Gothenburg with custom AI workflow consulting for Nordic SMBs since September 2024.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 05: FRICTION-FREE CONTACT BENCH */}
        <section id="contact-bench" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="paper-card rounded-md p-6 sm:p-10 border-2 border-[#161618]">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#3D7A5A] bg-[#3D7A5A]/10 border border-[#3D7A5A]/30 px-3 py-1 rounded-sm mb-4">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>[ THE OPEN WORKBENCH // ZERO SALES PITCH ]</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-[#161618] tracking-tight leading-[1.08] mb-3">
                What is the most annoying computer chore on your desk right now?
              </h2>
              <p className="text-sm sm:text-base text-[#52504C] leading-relaxed mb-6">
                No 12-field enterprise intake forms. Write 1–2 sentences below (or load one from the Bottleneck Machine above). If it&apos;s something you can fix yourself in 10 minutes inside Claude or ChatGPT, I&apos;ll send you the exact setup for free. If it needs a custom build or a team workshop, we&apos;ll map out a 15-minute bottleneck audit.
              </p>

              <div className="mb-5">
                <label
                  htmlFor="chore-textarea"
                  className="block font-mono text-xs uppercase tracking-wider text-[#161618] mb-2"
                >
                  [ YOUR BOTTLENECK NOTE ]
                </label>
                <textarea
                  id="chore-textarea"
                  rows={5}
                  value={defaultMessage}
                  onChange={(e) => setChoreDraft(e.target.value)}
                  className="w-full p-4 rounded-sm bg-[#F4F0EA] border border-[#161618] font-mono text-xs sm:text-sm text-[#161618] focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={mailtoHref}
                  className="inline-flex items-center justify-center gap-2 bg-[#C85A32] hover:bg-[#b04b25] text-[#F4F0EA] font-mono text-xs uppercase tracking-wider py-3.5 px-4 rounded-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email</span>
                </a>

                <button
                  onClick={handleCopyMessage}
                  className="inline-flex items-center justify-center gap-2 bg-[#161618] hover:bg-[#2A2A2E] text-[#F4F0EA] font-mono text-xs uppercase tracking-wider py-3.5 px-4 rounded-sm transition-colors"
                >
                  {copiedNote ? (
                    <>
                      <Check className="w-4 h-4 text-[#3D7A5A]" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Note for LinkedIn</span>
                    </>
                  )}
                </button>

                <a
                  href="https://www.linkedin.com/in/kevin-sorani-b70248312/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#FBF9F5] hover:bg-[#EAE3D5] text-[#161618] border border-[#161618] font-mono text-xs uppercase tracking-wider py-3.5 px-4 rounded-sm transition-colors"
                >
                  <span>Open LinkedIn DM</span>
                  <ExternalLink className="w-4 h-4 text-[#C85A32]" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* STANDARD NORDIC CHARCOAL EDITORIAL FOOTER */}
      <footer className="bg-[#161618] text-[#F4F0EA] border-t border-[#2A2A2E] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#A09C94]">
          <div>
            KEVIN SORANI &bull; AI WORKSHOPS &amp; AUTOMATION SPECIALIST
          </div>
          <div className="text-[#D4A359]">
            GOTHENBURG, SWEDEN &bull; 2026
          </div>
        </div>
      </footer>
    </div>
  );
}
