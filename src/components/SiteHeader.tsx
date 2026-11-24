"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { trackEngagement } from "@/lib/analytics";

const NAV_LINKS = [
  { href: "/", label: "Overview" },
  { href: "/cases", label: "Client Systems" },
  { href: "/audit", label: "Admin Drag Audit" },
  { href: "/workshops", label: "Workshops" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-[#F4F0EA]/95 backdrop-blur-md border-b border-[#D8D0C2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#3D7A5A] ring-4 ring-[#3D7A5A]/20" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#161618]">
            [ KEVIN SORANI • GOTHENBURG ]
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider"
        >
          {NAV_LINKS.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  isActive
                    ? "text-[#161618] font-bold underline decoration-[#2563EB] decoration-2 underline-offset-8"
                    : "text-[#52504C] hover:text-[#2563EB]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/audit"
          onClick={() => trackEngagement("cta_clicked", { location: "header_audit_cta" })}
          className="inline-flex items-center gap-1.5 bg-[#161618] hover:bg-[#2563EB] text-[#F4F0EA] text-[11px] sm:text-xs uppercase tracking-wider px-3.5 py-2 rounded-sm transition-colors font-semibold shrink-0"
        >
          <span>Book 15-Min Audit</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Mobile Route Bar (ensures iOS/mobile visitors can navigate all 4 routes in 1 tap) */}
      <nav
        aria-label="Mobile navigation"
        className="md:hidden border-t border-[#D8D0C2]/80 bg-[#F4F0EA] px-4 py-2 flex items-center justify-between gap-2 overflow-x-auto text-[11px] uppercase tracking-wider"
      >
        {NAV_LINKS.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap px-2 py-1 rounded-sm transition-colors ${
                isActive
                  ? "bg-[#161618] text-[#F4F0EA] font-semibold"
                  : "text-[#52504C] hover:text-[#161618]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
