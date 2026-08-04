"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

/**
 * Counts a numeric value up once, when scrolled into view. Used only
 * where the number is real, this is meant to signal measurement, not
 * to decorate. Formats with leading zero padding to match the site's
 * mono numeral convention, e.g. 03, 12.
 */
export function AnimatedCounter({
  value,
  padTo = 2,
}: {
  value: number;
  padTo?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 900, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = String(Math.round(latest)).padStart(
          padTo,
          "0"
        );
      }
    });
    return unsubscribe;
  }, [spring, padTo]);

  return <span ref={ref}>{"0".repeat(padTo)}</span>;
}