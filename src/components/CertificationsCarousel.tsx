"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Award,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Pause,
  Play,
  ShieldCheck,
} from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  code: string;
  url: string;
  description: string;
  badge: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: "9q8igvwetrn8",
    title: "AI Fluency: Framework & Foundations",
    issuer: "ANTHROPIC • MAY 2026",
    code: "9q8igvwetrn8",
    url: "https://verify.skilljar.com/c/9q8igvwetrn8",
    description:
      "Core cognitive scaffolding for frontier LLM reasoning, context engineering, and output verification.",
    badge: "FOUNDATIONAL REASONING",
  },
  {
    id: "c8wftw996muk",
    title: "Claude 101 & AI Foundations",
    issuer: "ANTHROPIC • MAY 2026",
    code: "c8wftw996muk",
    url: "https://verify.skilljar.com/c/c8wftw996muk",
    description:
      "Foundational architecture, prompt structuring, and practical operational deployment of Claude models.",
    badge: "CORE ARCHITECTURE",
  },
  {
    id: "j26gmtfi4ugw",
    title: "AI Fluency for Small Businesses",
    issuer: "ANTHROPIC & PAYPAL • MAY 2026",
    code: "j26gmtfi4ugw",
    url: "https://verify.skilljar.com/c/j26gmtfi4ugw",
    description:
      "Practical implementation of AI workflows, payment rails, and zero-license automation for SMB operators.",
    badge: "SMB AUTOMATION",
  },
  {
    id: "f239cfxvhk2u",
    title: "Claude Code 101",
    issuer: "ANTHROPIC • MAY 2026",
    code: "f239cfxvhk2u",
    url: "https://verify.skilljar.com/c/f239cfxvhk2u",
    description:
      "Terminal-native autonomous coding agents, file editing harnesses, and test-driven refactoring workflows.",
    badge: "AUTONOMOUS CODING",
  },
  {
    id: "cnwn7m28q4vo",
    title: "Introduction to Claude Cowork",
    issuer: "ANTHROPIC • MAY 2026",
    code: "cnwn7m28q4vo",
    url: "https://verify.skilljar.com/c/cnwn7m28q4vo",
    description:
      "Multi-user project knowledge spaces, shared artifact management, and collaborative cross-team workflows.",
    badge: "TEAM WORKSPACES",
  },
  {
    id: "tkoi4c3z6n7d",
    title: "Teaching AI Fluency",
    issuer: "ANTHROPIC • MAY 2026",
    code: "tkoi4c3z6n7d",
    url: "https://verify.skilljar.com/c/tkoi4c3z6n7d",
    description:
      "Pedagogical training methodology for teaching non-technical teams how to adopt AI systems without friction.",
    badge: "PEDAGOGICAL INSTRUCTION",
  },
];

export function CertificationsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 3800,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    if (isPlaying) {
      autoplay.stop();
      setIsPlaying(false);
    } else {
      autoplay.play();
      setIsPlaying(true);
    }
  }, [emblaApi, isPlaying]);

  return (
    <div className="charcoal-slab rounded-md p-5 sm:p-6 border border-[#2A2A2E] flex flex-col justify-between">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#2A2A2E]">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-[#93C5FD]" />
          <span className="text-xs uppercase tracking-widest text-[#F4F0EA] font-semibold">
            [ VERIFIED CREDENTIALS // 6 CERTIFICATIONS ]
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[#3D7A5A] bg-[#3D7A5A]/15 border border-[#3D7A5A]/40 px-2 py-0.5 rounded-sm font-semibold">
            LIVE SKILLJAR
          </span>
          <button
            onClick={toggleAutoplay}
            className="p-1 text-[#8A8882] hover:text-[#F4F0EA] transition-colors rounded-sm"
            title={isPlaying ? "Pause auto-slide" : "Resume auto-slide"}
            aria-label={isPlaying ? "Pause auto-slide" : "Resume auto-slide"}
          >
            {isPlaying ? (
              <Pause className="w-3 h-3" />
            ) : (
              <Play className="w-3 h-3 text-[#3D7A5A]" />
            )}
          </button>
        </div>
      </div>

      {/* Embla Viewport */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex -ml-4">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_100%]"
            >
              <div className="p-4 sm:p-5 bg-[#1E1E22] border border-[#2A2A2E] rounded-sm hover:border-[#2563EB] transition-colors flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#93C5FD] mb-1.5">
                    <span>{cert.issuer}</span>
                    <span className="font-mono text-[#D4D4D8]">ID: {cert.code}</span>
                  </div>

                  <span className="inline-block text-[9px] uppercase tracking-wider text-[#3D7A5A] bg-[#3D7A5A]/15 border border-[#3D7A5A]/30 px-1.5 py-0.5 rounded-xs mb-2 font-semibold">
                    {cert.badge}
                  </span>

                  <h4 className="text-base sm:text-lg font-bold text-[#F4F0EA] leading-snug mb-2">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-[#A8A49C] leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#2A2A2E] flex items-center justify-between">
                  <span className="text-[10px] text-[#787670]">
                    Verified by Anthropic
                  </span>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#3D7A5A] hover:text-[#93C5FD] transition-colors font-semibold"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#3D7A5A]" />
                    <span>Verify on Skilljar</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Controls: Dots and Prev/Next Arrows */}
      <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#2A2A2E]">
        <div className="flex items-center gap-1.5">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === selectedIndex
                  ? "w-6 bg-[#2563EB]"
                  : "w-2 bg-[#2A2A2E] hover:bg-[#3E3E44]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] text-[#787670] font-mono mr-1">
            {String(selectedIndex + 1).padStart(2, "0")} /{" "}
            {String(CERTIFICATES.length).padStart(2, "0")}
          </span>
          <button
            onClick={scrollPrev}
            className="p-1.5 rounded-sm bg-[#222226] hover:bg-[#2563EB] text-[#F4F0EA] transition-colors"
            aria-label="Previous certificate"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={scrollNext}
            className="p-1.5 rounded-sm bg-[#222226] hover:bg-[#2563EB] text-[#F4F0EA] transition-colors"
            aria-label="Next certificate"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
