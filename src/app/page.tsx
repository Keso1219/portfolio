"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  ExternalLink,
  Layers,
  MapPin,
  Wrench,
} from "lucide-react";
import { trackEngagement } from "@/lib/analytics";

const PROOF_CARDS = [
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
] as const;

export default function HomePage() {
  return (
    <>
      {/* EXECUTIVE HERO */}
      <section className="pt-10 pb-14 sm:pt-14 sm:pb-20 border-b border-[#D8D0C2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 7 Cols */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-[#161618] bg-[#EAE3D5] border border-[#161618]/20 px-3 py-1.5 rounded-sm mb-5">
                <Wrench className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>AI WORKSHOPS &amp; WORKFLOW ARCHITECT • GOTHENBURG</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[64px] text-[#161618] tracking-tight leading-[1.03] mb-5 font-bold">
                Teaching humans what to{" "}
                <span className="text-[#2563EB]">actually do</span> with AI.
              </h1>

              <p className="text-base sm:text-xl text-[#52504C] leading-relaxed mb-7 max-w-xl">
                I run hands-on{" "}
                <span className="text-[#161618] font-semibold underline decoration-[#2563EB]/60 decoration-2 underline-offset-4">
                  AI Fluency Workshops
                </span>{" "}
                and build owned workflow automations that cut 4–6 hours of daily manual admin and eliminate bloated SaaS spend—right inside the tools your team already pays for.
              </p>

              {/* Primary Buyer CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7">
                <Link
                  href="/audit"
                  onClick={() =>
                    trackEngagement("cta_clicked", { location: "hero_calculate_drag" })
                  }
                  className="inline-flex items-center justify-center gap-2 bg-[#161618] hover:bg-[#2563EB] text-[#F4F0EA] text-xs sm:text-sm uppercase tracking-wider px-6 py-4 rounded-sm shadow-[3px_3px_0px_#2563EB] hover:translate-y-[-1px] transition-all font-semibold"
                >
                  <Calculator className="w-4 h-4 text-[#93C5FD]" />
                  <span>Calculate Your Admin Drag</span>
                </Link>

                <Link
                  href="/cases"
                  onClick={() =>
                    trackEngagement("cta_clicked", { location: "hero_see_cases" })
                  }
                  className="inline-flex items-center justify-center gap-2 bg-[#FBF9F5] hover:bg-[#EAE3D5] text-[#161618] border border-[#161618] text-xs sm:text-sm uppercase tracking-wider px-6 py-4 rounded-sm transition-colors font-semibold"
                >
                  <Layers className="w-4 h-4 text-[#3D7A5A]" />
                  <span>See 3 Client Systems</span>
                </Link>
              </div>

              {/* Quick Trust Strip */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#52504C]">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3D7A5A]" />
                  6x Anthropic Certified (AI Fluency, Code &amp; Cowork)
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3D7A5A]" />
                  Zero new SaaS licenses required
                </span>
              </div>
            </div>

            {/* Right 5 Cols: Studio Portrait Card */}
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
                    onClick={() =>
                      trackEngagement("linkedin_cta_clicked", { location: "hero_portrait_card" })
                    }
                    className="inline-flex items-center gap-1 text-[#2563EB] hover:underline font-semibold"
                  >
                    LinkedIn <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 3-PILLAR VERIFIED PROOF STRIP -> /cases */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {PROOF_CARDS.map((item) => (
              <Link
                key={item.badge}
                href="/cases"
                onClick={() =>
                  trackEngagement("cta_clicked", {
                    location: "home_proof_card",
                    card: item.badge,
                  })
                }
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
                <div className="flex items-end justify-between gap-3">
                  <p className="text-xs sm:text-sm text-[#52504C]">{item.detail}</p>
                  <ArrowRight className="w-4 h-4 text-[#2563EB] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TWO OFFER TRACKS */}
      <section className="py-14 sm:py-16 border-b border-[#D8D0C2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#2563EB] font-semibold mb-2">
                [ TWO WAYS WE WORK TOGETHER ]
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#161618] tracking-tight">
                Train your team, or hand me the bottleneck.
              </h2>
            </div>
            <p className="text-sm text-[#52504C] max-w-sm">
              Every engagement runs inside tools you already own—zero per-seat SaaS bloat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="paper-card rounded-md p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="text-xs text-[#2563EB] font-semibold mb-2">
                  [ TRACK A // HANDS-ON TRAINING ]
                </div>
                <h3 className="text-2xl font-bold text-[#161618] mb-2">
                  Half-Day AI Fluency Workshop
                </h3>
                <p className="text-sm text-[#52504C] leading-relaxed mb-6">
                  Zero slides. Your team brings their real weekly bottlenecks and leaves with 3 working AI workflows configured inside their own Claude, ChatGPT, or Workspace accounts.
                </p>
              </div>
              <Link
                href="/workshops"
                onClick={() =>
                  trackEngagement("cta_clicked", { location: "home_track_a_workshops" })
                }
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#161618] hover:text-[#2563EB] transition-colors"
              >
                <span>Explore Workshop Structure &amp; Credentials</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="paper-card rounded-md p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="text-xs text-[#3D7A5A] font-semibold mb-2">
                  [ TRACK B // DONE-FOR-YOU BUILD ]
                </div>
                <h3 className="text-2xl font-bold text-[#161618] mb-2">
                  Custom Workflow Sprint
                </h3>
                <p className="text-sm text-[#52504C] leading-relaxed mb-6">
                  I take your highest-drag recurring workflow—inbox triage, order reconciliation, or CRM lead routing—and ship an owned automation with 0 SEK license waste.
                </p>
              </div>
              <Link
                href="/audit"
                onClick={() =>
                  trackEngagement("cta_clicked", { location: "home_track_b_audit" })
                }
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#161618] hover:text-[#3D7A5A] transition-colors"
              >
                <span>Calculate Your Admin Drag &amp; Book Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMPACT EXECUTIVE BOTTOM CTA */}
      <section className="py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-charcoal-grid text-[#F4F0EA] rounded-md p-7 sm:p-10 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="text-xs uppercase tracking-widest text-[#93C5FD] font-semibold mb-2">
                [ START WITH 15 MINUTES • ZERO COMMITMENT ]
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-2">
                Ready to see where your team is losing 4–6 hours a day?
              </h2>
              <p className="text-sm text-[#D4D4D8]">
                Run your numbers in the SCB Admin Drag Calculator and book a 15-Minute Bottleneck Audit.
              </p>
            </div>
            <Link
              href="/audit"
              onClick={() =>
                trackEngagement("cta_clicked", { location: "home_bottom_audit_cta" })
              }
              className="inline-flex items-center justify-center gap-2 bg-[#F4F0EA] hover:bg-[#93C5FD] text-[#161618] text-xs sm:text-sm uppercase tracking-wider px-6 py-4 rounded-sm font-semibold transition-colors shrink-0"
            >
              <span>Book a 15-Min Bottleneck Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
