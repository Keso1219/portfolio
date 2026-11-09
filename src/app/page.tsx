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
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import BottleneckMachine from "@/components/BottleneckMachine";
import InteractiveWorkbench from "@/components/InteractiveWorkbench";
import MotionPlayhouse from "@/components/MotionPlayhouse";

export default function HomePage() {
  const [choreDraft, setChoreDraft] = useState<string>("");
  const [emailSubject, setEmailSubject] = useState<string>(
    "15-Min AI Bottleneck Audit // Computer Chore"
  );
  const [showEmailDrawer, setShowEmailDrawer] = useState<boolean>(false);
  const [copiedNote, setCopiedNote] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleSelectBottleneck = (summary: string, subject: string) => {
    setChoreDraft(summary);
    setEmailSubject(subject);
    const el = document.getElementById("contact-bench");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const defaultMessage =
    choreDraft ||
    "Hey Kevin! Here is the most annoying recurring computer chore on my desk right now:\n\n[Describe it in 1–2 sentences]";

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(defaultMessage);
    setCopiedNote(true);
    setTimeout(() => setCopiedNote(false), 2500);
  };

  const handleCopyEmailAddress = () => {
    navigator.clipboard.writeText("kevin.sorani00@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=kevin.sorani00@gmail.com&su=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(defaultMessage)}`;

  const outlookComposeUrl = `https://outlook.office.com/mail/deeplink/compose?to=kevin.sorani00@gmail.com&subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#161618] selection:text-[#F4F0EA]">
      {/* Sticky Top Architectural Bar */}
      <header className="sticky top-0 z-40 bg-[#F4F0EA]/90 backdrop-blur-md border-b border-[#D8D0C2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3D7A5A] ring-4 ring-[#3D7A5A]/20" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#161618]">
              [ KEVIN SORANI • GOTHENBURG ]
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider text-[#52504C]">
            <a href="#workbench" className="hover:text-[#2563EB] transition-colors">
              01. Case Studies
            </a>
            <a href="#bottleneck-machine" className="hover:text-[#2563EB] transition-colors">
              02. Bottleneck Machine
            </a>
            <a href="#motion-lab" className="hover:text-[#2563EB] transition-colors">
              03. Motion Lab
            </a>
            <a href="#origin" className="hover:text-[#2563EB] transition-colors">
              04. About
            </a>
          </nav>

          <a
            href="#contact-bench"
            className="inline-flex items-center gap-1.5 bg-[#161618] hover:bg-[#2563EB] text-[#F4F0EA] text-xs uppercase tracking-wider px-3.5 py-2 rounded-sm transition-colors"
          >
            <span>Tell me your chore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* 5-SECOND HERO SECTION */}
        <section className="pt-10 pb-14 sm:pt-14 sm:pb-20 border-b border-[#D8D0C2]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left 7 Cols: Editorial Hook & Crisp Subheadline */}
              <div className="lg:col-span-7">
                <div className="inline-flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-[#161618] bg-[#EAE3D5] border border-[#161618]/20 px-3 py-1.5 rounded-sm mb-5">
                  <Wrench className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>AI WORKSHOPS & WORKFLOW ARCHITECT • GOTHENBURG</span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-[64px] text-[#161618] tracking-tight leading-[1.03] mb-5 font-bold">
                  Teaching humans what to{" "}
                  <span className="text-[#2563EB]">
                    actually do
                  </span>{" "}
                  with AI.
                </h1>

                <p className="text-base sm:text-xl text-[#52504C] leading-relaxed mb-7 max-w-xl">
                  I run hands-on{" "}
                  <span className="text-[#161618] font-semibold underline decoration-[#2563EB]/60 decoration-2 underline-offset-4">
                    AI Fluency Workshops
                  </span>{" "}
                  and build custom workflows that give your team 4–6 hours of their day back—inside the tools you already own.
                </p>

                {/* Primary & Secondary Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7">
                  <a
                    href="#bottleneck-machine"
                    className="inline-flex items-center justify-center gap-2 bg-[#161618] hover:bg-[#2563EB] text-[#F4F0EA] text-xs sm:text-sm uppercase tracking-wider px-6 py-4 rounded-sm shadow-[3px_3px_0px_#2563EB] hover:translate-y-[-1px] transition-all font-semibold"
                  >
                    <Sparkles className="w-4 h-4 text-[#93C5FD]" />
                    <span>Test the Bottleneck Machine</span>
                  </a>
                  <a
                    href="#contact-bench"
                    className="inline-flex items-center justify-center gap-2 bg-[#FBF9F5] hover:bg-[#EAE3D5] text-[#161618] border border-[#161618] text-xs sm:text-sm uppercase tracking-wider px-6 py-4 rounded-sm transition-colors font-semibold"
                  >
                    <MessageSquare className="w-4 h-4 text-[#3D7A5A]" />
                    <span>Send me an annoying chore</span>
                  </a>
                </div>

                {/* Quick Human Trust Line */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#52504C]">
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3D7A5A]" />
                    Anthropic Certified (Claude Code & Fluency)
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3D7A5A]" />
                    Zero new SaaS licenses required
                  </span>
                </div>
              </div>

              {/* Right 5 Cols: Warm Studio Portrait Card */}
              <div className="lg:col-span-5">
                <div className="paper-card rounded-md p-4 sm:p-5 relative">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#D8D0C2] text-[11px] text-[#52504C]">
                    <span>[ KEVIN SORANI ]</span>
                    <span className="inline-flex items-center gap-1 text-[#3D7A5A] font-semibold">
                      <MapPin className="w-3 h-3" /> GOTHENBURG, SE
                    </span>
                  </div>

                  <div className="relative rounded-sm overflow-hidden border border-[#161618] bg-[#EAE3D5] aspect-square">
                    <img
                      src="/kevin-portrait.jpg"
                      alt="Kevin Sorani — AI Workshop Facilitator & Automation Specialist in Gothenburg"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute bottom-3 left-3 right-3 bg-[#161618]/92 backdrop-blur-sm text-[#F4F0EA] p-3.5 rounded-sm border border-[#3A3A40]">
                      <p className="text-xs sm:text-sm text-[#F4F0EA] leading-snug">
                        &ldquo;If a system takes a PhD to maintain, I won&apos;t build it. You get simple workflows your team actually enjoys using.&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-[#D8D0C2] flex items-center justify-between text-xs">
                    <span className="text-[#52504C]">EDUCATOR &rarr; AI ARCHITECT</span>
                    <a
                      href="https://www.linkedin.com/in/kevin-sorani-b70248312/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#2563EB] hover:underline font-semibold"
                    >
                      LinkedIn <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 3-PILLAR VERIFIED PROOF STRIP */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  badge: "[ CASE 01 // 15-PERSON BROKERAGE ]",
                  metric: "+20% Revenue & 2× Capacity",
                  detail: "Doubled listing capacity in 90 days inside Slack & Claude.",
                },
                {
                  badge: "[ CASE 02 // E-COMMERCE OPS ]",
                  metric: "6 Hours / Day Reclaimed",
                  detail: "Automated daily order & stock reconciliation in one afternoon.",
                },
                {
                  badge: "[ CASE 03 // LOCAL GYM ENTERPRISE ]",
                  metric: "130,000 SEK / Year Saved",
                  detail: "Replaced a bloated CRM quote with a 0 SEK-license AI router.",
                },
              ].map((item) => (
                <a
                  key={item.badge}
                  href="#workbench"
                  className="paper-card rounded-md p-5 flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[11px] text-[#2563EB] font-semibold block mb-1.5">
                      {item.badge}
                    </span>
                    <div className="text-2xl sm:text-3xl font-bold text-[#161618] mb-1.5 group-hover:text-[#2563EB] transition-colors">
                      {item.metric}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#52504C]">
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
        <section id="origin" className="py-16 sm:py-20 border-b border-[#D8D0C2]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left 7 Cols: Why an Educator Builds Better Systems */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/10 border border-[#2563EB]/30 px-3 py-1 rounded-sm mb-3 font-semibold">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>[ SECTION 04 // WHY AN EDUCATOR ]</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-bold text-[#161618] tracking-tight leading-[1.08] mb-5">
                  Software engineers love complexity.{" "}
                  <span className="text-[#3D7A5A]">
                    Teachers love clarity.
                  </span>
                </h2>

                <p className="text-[#52504C] text-base sm:text-lg leading-relaxed mb-6">
                  Before building AI workflows for Swedish businesses, I worked in Gothenburg classrooms and coached youth boxing and football. You learn one rule fast:{" "}
                  <strong className="text-[#161618] font-semibold">
                    if someone doesn&apos;t understand the system, the system is broken.
                  </strong>{" "}
                  I sit next to your team, skip the buzzwords, and wire up workflows that hand people their afternoons back.
                </p>

                {/* Two Core Ways We Work Together */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="paper-card rounded-md p-5">
                    <div className="text-xs text-[#2563EB] font-semibold mb-1">
                      [ TRACK A // HANDS-ON TRAINING ]
                    </div>
                    <h3 className="text-xl font-bold text-[#161618] mb-1.5">
                      Half-Day AI Fluency Workshop
                    </h3>
                    <p className="text-xs sm:text-sm text-[#52504C] leading-relaxed">
                      Zero slides. Your team brings their real weekly bottlenecks and leaves with 3 working AI workflows inside their own accounts.
                    </p>
                  </div>

                  <div className="paper-card rounded-md p-5">
                    <div className="text-xs text-[#3D7A5A] font-semibold mb-1">
                      [ TRACK B // DONE-FOR-YOU BUILD ]
                    </div>
                    <h3 className="text-xl font-bold text-[#161618] mb-1.5">
                      Custom Workflow Sprint
                    </h3>
                    <p className="text-xs sm:text-sm text-[#52504C] leading-relaxed">
                      I take your highest-drag chore—inbox triage, data reconciliation, or CRM routing—and build an owned automation with 0 SEK license bloat.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right 5 Cols: Verified Credentials Ledger */}
              <div className="lg:col-span-5 charcoal-slab rounded-md p-6">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#2A2A2E]">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#93C5FD]" />
                    <span className="text-xs uppercase tracking-widest text-[#F4F0EA]">
                      [ VERIFIED CREDENTIALS ]
                    </span>
                  </div>
                  <span className="text-[10px] text-[#3D7A5A] bg-[#3D7A5A]/15 border border-[#3D7A5A]/40 px-2 py-0.5 rounded-sm">
                    LIVE VERIFICATION
                  </span>
                </div>

                <div className="space-y-3.5">
                  <div className="p-4 bg-[#1E1E22] border border-[#2A2A2E] rounded-sm">
                    <div className="flex items-center justify-between text-[11px] text-[#93C5FD] mb-1">
                      <span>ANTHROPIC • MAR 2026</span>
                      <span>ID: 9q8igvwetrn8</span>
                    </div>
                    <h4 className="text-lg font-bold text-[#F4F0EA] mb-2">
                      Claude Code in Action
                    </h4>
                    <a
                      href="https://verify.skilljar.com/c/9q8igvwetrn8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] text-[#3D7A5A] hover:text-[#F4F0EA] transition-colors font-semibold"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verify on Skilljar <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="p-4 bg-[#1E1E22] border border-[#2A2A2E] rounded-sm">
                    <div className="flex items-center justify-between text-[11px] text-[#93C5FD] mb-1">
                      <span>ANTHROPIC • MAR 2026</span>
                      <span>ID: c8wftw996muk</span>
                    </div>
                    <h4 className="text-lg font-bold text-[#F4F0EA] mb-2">
                      AI Fluency: Framework & Foundations
                    </h4>
                    <a
                      href="https://verify.skilljar.com/c/c8wftw996muk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] text-[#3D7A5A] hover:text-[#F4F0EA] transition-colors font-semibold"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verify on Skilljar <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 05: FRICTION-FREE CONTACT BENCH */}
        <section id="contact-bench" className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="paper-card rounded-md p-6 sm:p-10 border-2 border-[#161618]">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#3D7A5A] bg-[#3D7A5A]/10 border border-[#3D7A5A]/30 px-3 py-1 rounded-sm mb-3 font-semibold">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>[ THE OPEN WORKBENCH // ZERO SALES PITCH ]</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold text-[#161618] tracking-tight leading-[1.08] mb-3">
                What is the most annoying computer chore on your desk?
              </h2>
              <p className="text-sm sm:text-base text-[#52504C] leading-relaxed mb-6">
                If you can fix it yourself in 10 minutes inside Claude or ChatGPT, I&apos;ll send you the exact setup for free. If it needs a custom build or a team workshop, we&apos;ll map out a 15-minute bottleneck audit.
              </p>

              {/* Single Universal Text Box */}
              <div className="mb-5">
                <textarea
                  id="chore-textarea"
                  rows={4}
                  value={defaultMessage}
                  onChange={(e) => setChoreDraft(e.target.value)}
                  className="w-full p-4 rounded-sm bg-[#F4F0EA] border border-[#161618] text-sm sm:text-base text-[#161618] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                />
              </div>

              {/* 3 Primary Universal Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={handleCopyMessage}
                  className="inline-flex items-center justify-center gap-2 bg-[#161618] hover:bg-[#2A2A2E] text-[#F4F0EA] text-xs uppercase tracking-wider py-3.5 px-4 rounded-sm transition-colors font-semibold"
                >
                  {copiedNote ? (
                    <>
                      <Check className="w-4 h-4 text-[#3D7A5A]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Message</span>
                    </>
                  )}
                </button>

                <a
                  href="https://www.linkedin.com/in/kevin-sorani-b70248312/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#FBF9F5] hover:bg-[#EAE3D5] text-[#161618] border border-[#161618] text-xs uppercase tracking-wider py-3.5 px-4 rounded-sm transition-colors font-semibold"
                >
                  <span>Open LinkedIn</span>
                  <ExternalLink className="w-4 h-4 text-[#2563EB]" />
                </a>

                <button
                  onClick={() => setShowEmailDrawer((prev) => !prev)}
                  className="inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-[#F4F0EA] text-xs uppercase tracking-wider py-3.5 px-4 rounded-sm transition-colors font-semibold"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email</span>
                  {showEmailDrawer ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Expandable Email Drawer (Only appears when 'Send via Email' is clicked) */}
              {showEmailDrawer && (
                <div className="mt-5 pt-5 border-t border-[#D8D0C2] bg-[#F4F0EA] p-5 rounded-sm border border-[#161618]/20">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mb-4 items-center">
                    <div className="sm:col-span-5">
                      <span className="block text-[11px] uppercase tracking-wider text-[#52504C] mb-1 font-semibold">
                        Send To (Locked):
                      </span>
                      <div className="flex items-center justify-between bg-[#FAF8F5] border border-[#161618]/30 px-3 py-2 rounded-sm text-xs sm:text-sm font-semibold text-[#161618]">
                        <span>kevin.sorani00@gmail.com</span>
                        <button
                          onClick={handleCopyEmailAddress}
                          className="text-[11px] text-[#2563EB] hover:underline inline-flex items-center gap-1 ml-2"
                          title="Copy email address"
                        >
                          {copiedEmail ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#3D7A5A]" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="sm:col-span-7">
                      <label
                        htmlFor="email-subject-input"
                        className="block text-[11px] uppercase tracking-wider text-[#52504C] mb-1 font-semibold"
                      >
                        Subject Line (Auto-Generated & Editable):
                      </label>
                      <input
                        id="email-subject-input"
                        type="text"
                        value={emailSubject}
                        onChange={(e) => setEmailSubject(e.target.value)}
                        className="w-full bg-[#FAF8F5] border border-[#161618] px-3 py-2 rounded-sm text-xs sm:text-sm text-[#161618] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={gmailComposeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#161618] hover:bg-[#2563EB] text-[#F4F0EA] text-xs uppercase tracking-wider py-3 px-4 rounded-sm transition-colors font-semibold"
                    >
                      <Mail className="w-4 h-4 text-[#93C5FD]" />
                      <span>Open in Gmail (Pre-Filled)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={outlookComposeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#FAF8F5] hover:bg-[#EAE3D5] text-[#161618] border border-[#161618] text-xs uppercase tracking-wider py-3 px-4 rounded-sm transition-colors font-semibold"
                    >
                      <Mail className="w-4 h-4 text-[#2563EB]" />
                      <span>Open in Outlook (Pre-Filled)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* STANDARD NORDIC CHARCOAL EDITORIAL FOOTER */}
      <footer className="bg-[#161618] text-[#F4F0EA] border-t border-[#2A2A2E] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A09C94]">
          <div>
            KEVIN SORANI &bull; AI WORKSHOPS &amp; AUTOMATION SPECIALIST
          </div>
          <div className="text-[#93C5FD]">
            GOTHENBURG, SWEDEN &bull; 2026
          </div>
        </div>
      </footer>
    </div>
  );
}
