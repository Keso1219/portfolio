"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SectionIlluminateProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
}

export function SectionIlluminate({
  id,
  children,
  className = "",
  as = "section",
}: SectionIlluminateProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    if (as === "div") {
      return (
        <div id={id} className={className}>
          {children}
        </div>
      );
    }
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  const Component = as === "div" ? motion.div : motion.section;

  return (
    <Component
      id={id}
      initial={{ opacity: 0.18, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: "some", margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
