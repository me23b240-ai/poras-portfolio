// components/artifact/ReadingProgress.tsx
//
// A quiet vertical progress line in the sidebar, not a top-of-page bar
// (top bars read as SaaS chrome). Functional wayfinding, not decoration:
// it answers "how much is left."

"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

interface ReadingProgressProps {
  targetRef: React.RefObject<HTMLElement>;
}

export function ReadingProgress({ targetRef }: ReadingProgressProps) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothed = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  return (
    <div
      className="relative hidden h-40 w-px bg-[var(--color-border)] md:block"
      role="progressbar"
      aria-label="Reading progress"
    >
      <motion.div
        className="absolute left-0 top-0 w-px origin-top bg-[var(--color-accent)]"
        style={{ scaleY: smoothed, height: "100%" }}
      />
    </div>
  );
}
