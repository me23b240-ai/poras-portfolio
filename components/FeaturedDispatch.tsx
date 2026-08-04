import Link from "next/link";
import { motion } from "framer-motion";
import { artifactEnter } from "@/lib/motion";

/**
 * The dominant visual artifact of the hero. Positioned to bleed across
 * the grid on desktop, overlapping the spine and the bottom edge of the
 * headline column, so it reads as pinned on top of the page rather than
 * sitting inside a column. No border, no background fill, an accent
 * rule on the left is the only structural mark.
 */
export function FeaturedDispatch() {
  return (
    <motion.div
      variants={artifactEnter}
      initial="hidden"
      animate="visible"
      className="relative z-20 md:-mt-16 md:ml-[-72px] md:max-w-[440px] md:pl-8"
      style={{ borderLeft: "2px solid var(--color-accent)" }}
    >
      <span className="font-mono-meta text-[11px] uppercase tracking-[0.08em] text-[var(--color-accent)]">
        Filed dispatch, 12 min
      </span>
      <Link href="/writing/meesho-category-expansion" className="group mt-2 block">
        <h2 className="text-[22px] font-medium leading-snug tracking-[-0.015em] text-[var(--color-text-primary)] transition-colors duration-200 group-hover:text-[var(--color-accent)] md:text-[26px]">
          Category expansion is a sequencing problem, not a growth problem.
        </h2>
        <span className="mt-2 inline-block text-[13px] text-[var(--color-text-tertiary)] underline decoration-[var(--color-border)] underline-offset-4 transition-colors duration-200 group-hover:decoration-[var(--color-accent)]">
          Read the dispatch
        </span>
      </Link>
    </motion.div>
  );
}