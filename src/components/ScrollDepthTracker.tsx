"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackEngagement } from "@/lib/analytics";

const MILESTONES = [25, 50, 75, 100] as const;

export function ScrollDepthTracker() {
  const pathname = usePathname();
  const firedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    firedRef.current = new Set();
    let ticking = false;

    const measure = () => {
      ticking = false;
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const percent =
        scrollable <= 0 ? 100 : Math.min(100, Math.round((scrollTop / scrollable) * 100));

      for (const milestone of MILESTONES) {
        if (percent >= milestone && !firedRef.current.has(milestone)) {
          firedRef.current.add(milestone);
          trackEngagement("scroll_depth", { depth: milestone });
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(measure);
      }
    };

    // Check initial viewport (captures short pages cleanly)
    const initialTimer = window.setTimeout(measure, 400);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(initialTimer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return null;
}
