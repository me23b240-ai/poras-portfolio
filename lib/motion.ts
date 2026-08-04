import type { Variants } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;
export const ENTRANCE_DURATION = 0.28;

export const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ENTRANCE_DURATION, ease: EASE },
  },
};

export const navFade: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ENTRANCE_DURATION, ease: EASE },
  },
};

export const revealOnScroll: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/** Capped at 600ms per motion constraint. */
export const maskLine: Variants = {
  hidden: { y: "100%" },
  visible: { y: "0%", transition: { duration: 0.6, ease: EASE } },
};

/** Capped at 600ms. */
export const spineDraw: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.6, ease: EASE, delay: 0.15 },
  },
};

export const ruleDraw: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.55, ease: EASE } },
};

export const listStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export const listItem: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ENTRANCE_DURATION, ease: EASE },
  },
};

/** The featured artifact enters slightly after the headline, so it reads as landing on top of it. */
export const artifactEnter: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay: 0.3 },
  },
};

/** Footnote annotation, fades and rises a few pixels on hover. */
export const footnoteReveal: Variants = {
  hidden: { opacity: 0, y: 4 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: EASE } },
};

/** Investigations row result reveal. Expands beneath the row on hover, height + opacity, not a CSS max-height hack. */
export const resultReveal: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.3, ease: EASE } },
};

/** Adapted from ReactBits' Blur Text mechanic. Content resolves into focus rather than
 * simply fading in, matches the "hover reveals information" philosophy without
 * borrowing ReactBits' own visual style, colors, or layout. */
export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: "blur(6px)", y: 4 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.35, ease: EASE },
  },
};

// --- Added for the artifact page system (Phase 1) ---------------------------
// These three were referenced by ArtifactLayout, MetricsPanel, FrameworkDiagram,
// and ImageFigure but were missing from this file, causing the build error.

/** Alias so ArtifactLayout's list stagger reads the same as the homepage's,
 * without redefining a variant that already exists as `listItem`. */
export { listItem as listStaggerItem };

/** Small popover used for hover-revealed context: a metric's methodology,
 * or a framework node's takeaway. Appears and disappears in place, no
 * layout shift, matches the "hover reveals information" rule. */
export const popoverReveal: Variants = {
  hidden: { opacity: 0, y: 4, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: EASE },
  },
};

/** Figure images resolve into view via a rising mask rather than a flat
 * fade or pop-in, matches "a document being filed" over a generic reveal. */
export const maskedFigureReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.6, ease: EASE },
  },
};