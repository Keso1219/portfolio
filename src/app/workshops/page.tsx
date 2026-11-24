"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Terminal } from "lucide-react";
import { CertificationsCarousel } from "@/components/CertificationsCarousel";
import { trackEngagement } from "@/lib/analytics";

export default function WorkshopsPage() {
  return (
    <>
      {/* HALF-DAY WORKSHOP STRUCTURE */}
      <section className="py-14 sm:py-18 border-b border-[#D8D0C2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/10 border border-[#2563EB]/30 px-3 py-1 rounded-sm mb-3 font-semibold">
                <Terminal className="w-3.5 h-3.5" />
                <span>[ AI FLUENCY WORKSHOPS • HALF-DAY FORMAT ]</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold text-[#161618] tracking-tight leading-[1.06] mb-4">
                Zero slides. Your team leaves with{" "}
                <span className="text-[#3D7A5A]">3 working workflows.</span>
              </h1>

              <p className="text-[#52504C] text-sm sm:text-base leading-relaxed mb-6">
                Most AI rollouts fail because leadership buys licenses and expects staff to guess what to do on Monday morning. In one focused half-day session (on-site in Gothenburg or remote), we build real workflows inside the tools your team already uses.
              </p>

              {/* 3-Block Half-Day Agenda */}
              <div className="space-y-3 mb-8">
                {[
                  {
                    step: "BLOCK 01 • 60 MIN",
                    title: "Bottleneck Triage & Context Architecture",
                    desc: "Map each role's highest-drag weekly admin tasks and build reusable company context brains so outputs match your exact voice and standards.",
                  },
                  {
                    step: "BLOCK 02 • 90 MIN",
                    title: "Live Build Inside Your Own Accounts",
                    desc: "Hands-on setup of 3 repeatable workflows (proposals, client follow-ups, reporting, or triage) directly inside Claude, ChatGPT, or Microsoft/Google Workspace.",
                  },
                  {
                    step: "BLOCK 03 • 60 MIN",
                    title: "Verification Guardrails & Monday Adoption Plan",
                    desc: "Lock in human-in-the-loop quality checks, security boundaries, and a 1-page playbook your team can run independently the next morning.",
                  },
                ].map((block) => (
                  <div key={block.step} className="paper-card rounded-md p-4 sm:p-5">
                    <div className="text-[11px] font-mono font-semibold text-[#2563EB] mb-1">
                      [{block.step}]
                    </div>
                    <h2 className="text-lg font-bold text-[#161618] mb-1">
                      {block.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#52504C] leading-relaxed">
                      {block.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/audit"
                  onClick={() =>
                    trackEngagement("cta_clicked", { location: "workshops_hero_to_audit" })
                  }
                  className="inline-flex items-center gap-2 bg-[#161618] hover:bg-[#2563EB] text-[#F4F0EA] text-xs uppercase tracking-wider px-6 py-4 rounded-sm font-semibold transition-colors"
                >
                  <span>Book a 15-Min Bottleneck Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/cases"
                  onClick={() =>
                    trackEngagement("cta_clicked", { location: "workshops_to_cases" })
                  }
                  className="inline-flex items-center gap-2 bg-[#FBF9F5] hover:bg-[#EAE3D5] text-[#161618] border border-[#161618] text-xs uppercase tracking-wider px-5 py-4 rounded-sm font-semibold transition-colors"
                >
                  <span>See 3 Client Systems</span>
                </Link>
              </div>
            </div>

            {/* Right 5 Cols: Verified Anthropic Credentials Carousel */}
            <div className="lg:col-span-5">
              <CertificationsCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-FUNCTIONAL OPERATOR & CORE TEACHING RULE */}
      <section className="py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 paper-card rounded-md p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#3D7A5A] font-semibold mb-2">
                  [ THE CROSS-FUNCTIONAL OPERATOR ]
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold text-[#161618] tracking-tight leading-[1.1] mb-4">
                  Software engineers love complexity.{" "}
                  <span className="text-[#3D7A5A]">
                    Operators demand results. Teachers bring clarity.
                  </span>
                </h2>
                <p className="text-sm text-[#52504C] leading-relaxed mb-5">
                  Most AI consultants are either programmers who have never had to hit a quarterly sales target, or theoretical trainers who have never shipped production software. My background spans the entire operational floor:
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-[#161618]">
                  {[
                    [
                      "STEM University Education:",
                      "Engineering systems down to first principles.",
                    ],
                    [
                      "B2B Sales & Commercial Pipelines:",
                      "Knowing the exact friction that kills deal momentum.",
                    ],
                    [
                      "IT Logistics & Shift Operations:",
                      "Living through the daily chaos of inventory, ERPs, and warehouse workflows.",
                    ],
                    [
                      "Classroom Pedagogy & Youth Coaching:",
                      "If your team doesn't adopt the system on Monday morning, the system is broken.",
                    ],
                    [
                      "Solo Business Founder:",
                      "Direct P&L accountability—zero SEK license waste.",
                    ],
                  ].map(([title, body]) => (
                    <li key={title} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#3D7A5A] mt-0.5 shrink-0" />
                      <span>
                        <strong className="font-semibold">{title}</strong> {body}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Salvaged Chalkboard Rule Card */}
            <div className="lg:col-span-5 paper-card rounded-md p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
                    [ THE CORE TEACHING RULE ]
                  </span>
                  <span className="text-[11px] text-[#52504C]">RULE #01</span>
                </div>
                <h3 className="text-2xl font-bold text-[#161618] mb-2 leading-snug">
                  &ldquo;I will not use AI to replace my thinking.&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-[#52504C] leading-relaxed mb-4">
                  Use AI to skip thinking and you sound like everyone else. Use it to strip out repetitive computer chores and your team becomes unstoppable.
                </p>
              </div>

              <div className="rounded-sm overflow-hidden border border-[#161618] bg-[#161618] group relative">
                <img
                  src="/simpsons-chalkboard.png"
                  alt="I will not use AI to replace my thinking chalkboard"
                  className="w-full h-48 sm:h-52 object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="p-3 bg-[#161618] text-[#F4F0EA] flex items-center justify-between text-[11px]">
                  <span>GOTHENBURG WORKSHOP</span>
                  <span className="text-[#93C5FD]">HUMAN-IN-THE-LOOP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
