"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import InteractiveWorkbench from "@/components/InteractiveWorkbench";
import { FieldDiagramsShelf } from "@/components/FieldDiagramsShelf";
import { trackEngagement } from "@/lib/analytics";

export default function CasesPage() {
  return (
    <>
      <InteractiveWorkbench />
      <FieldDiagramsShelf />

      <section className="py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="paper-card rounded-md p-6 sm:p-9 border-2 border-[#161618] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#3D7A5A] font-semibold mb-1.5">
                [ NEXT STEP • QUANTIFY YOUR OWN TEAM ]
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#161618]">
                Want to see what one workflow costs your team per year?
              </h2>
              <p className="text-sm text-[#52504C] mt-1">
                Plug your team size into the SCB 500 SEK/hr Admin Drag Calculator and send over a 15-minute audit brief.
              </p>
            </div>
            <Link
              href="/audit"
              onClick={() =>
                trackEngagement("cta_clicked", { location: "cases_bottom_to_audit" })
              }
              className="inline-flex items-center justify-center gap-2 bg-[#161618] hover:bg-[#2563EB] text-[#F4F0EA] text-xs uppercase tracking-wider px-6 py-4 rounded-sm font-semibold transition-colors shrink-0"
            >
              <span>Calculate Your Admin Drag</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
