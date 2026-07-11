import type { Variants } from "framer-motion";

/** Standard ease used across all Phase 1 motion — no bounce, no overshoot. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Max entrance duration per element, per spec (200–300ms ceiling). */
export const ENTRANCE_DURATION = 0.28;

/**
 * Wraps a group of children and staggers their entrance.
 * Use on the parent; children should use `heroItem`.
 */
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

/** Individual entrance step: fade + small upward shift. */
export const heroItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ENTRANCE_DURATION, ease: EASE },
  },
};

/** Nav fades in first, ahead of the hero's own stagger group. */
export const navFade: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: ENTRANCE_DURATION, ease: EASE },
  },
};

/** Generic scroll-triggered reveal for future sections (Evidence, Writing). */
export const revealOnScroll: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};