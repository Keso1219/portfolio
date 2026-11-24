"use client";

import React from "react";

export interface MarqueeItem {
  name: string;
  category: string;
}

interface LogoMarqueeProps {
  items: MarqueeItem[];
  reverse?: boolean;
  durationSec?: number;
  theme?: "paper" | "dark";
}

export function LogoMarquee({
  items,
  reverse = false,
  durationSec = 32,
  theme = "paper",
}: LogoMarqueeProps) {
  const duplicated = [...items, ...items];

  const pillClasses =
    theme === "dark"
      ? "bg-[#212125] border-[#2A2A2E] text-[#F4F0EA] hover:border-[#93C5FD]/60"
      : "bg-[#FAF8F5] border-[#161618]/15 text-[#161618] hover:border-[#2563EB]";

  const subClasses =
    theme === "dark" ? "text-[#93C5FD]" : "text-[#2563EB]";

  return (
    <div className="marquee-track marquee-mask relative w-full overflow-hidden py-2">
      <div
        className={`flex w-max gap-4 ${
          reverse ? "animate-marquee-right" : "animate-marquee-left"
        }`}
        style={
          {
            "--marquee-duration": `${durationSec}s`,
          } as React.CSSProperties
        }
      >
        {duplicated.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className={`shrink-0 inline-flex items-center gap-3 px-5 py-3 rounded-sm border transition-colors ${pillClasses}`}
          >
            <span className="w-2 h-2 rounded-full bg-[#3D7A5A]" />
            <span className="text-sm sm:text-base font-bold tracking-tight">
              {item.name}
            </span>
            <span className={`text-[11px] uppercase tracking-widest ${subClasses}`}>
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
