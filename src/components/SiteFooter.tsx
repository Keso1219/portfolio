"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { trackEngagement } from "@/lib/analytics";

export function SiteFooter() {
  return (
    <footer className="bg-[#161618] text-[#F4F0EA] border-t border-[#2A2A2E] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-[#A09C94]">
        <div>
          KEVIN SORANI &bull; AI WORKSHOPS &amp; WORKFLOW ARCHITECT
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 uppercase tracking-wider text-[11px]">
          <Link href="/" className="hover:text-[#F4F0EA] transition-colors">
            Overview
          </Link>
          <Link href="/cases" className="hover:text-[#F4F0EA] transition-colors">
            Client Systems
          </Link>
          <Link href="/audit" className="hover:text-[#F4F0EA] transition-colors">
            Admin Drag Audit
          </Link>
          <Link href="/workshops" className="hover:text-[#F4F0EA] transition-colors">
            Workshops
          </Link>
          <a
            href="https://www.linkedin.com/in/kevin-sorani-b70248312/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEngagement("linkedin_cta_clicked", { location: "footer" })}
            className="inline-flex items-center gap-1 text-[#93C5FD] hover:underline"
          >
            LinkedIn <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="text-[#93C5FD]">
          GOTHENBURG, SWEDEN &bull; 2026
        </div>
      </div>
    </footer>
  );
}
