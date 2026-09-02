"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { JournalSectionHeader } from "./JournalSectionHeader";
import { revealOnScroll } from "@/lib/motion";

export function Dossier() {
  return (
    <section
      id="about"
      className="py-[var(--space-section-mobile)] md:py-[var(--space-section-desktop)]"
    >
      <Container>
        <JournalSectionHeader index="Dossier, 05S" title="Background" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={revealOnScroll}
          className="grid grid-cols-1 gap-10 md:grid-cols-12"
        >
          <div className="md:col-span-7">
            <p className="text-[var(--text-body-lg)] leading-relaxed text-[var(--color-text-secondary)]">
              I am studying mechanical engineering at IIT Madras. The
              training is in constraints, tolerances, and trade offs, not in
              growth hacks.
            </p>
            <p className="mt-5 text-[var(--text-body-lg)] leading-relaxed text-[var(--color-text-secondary)]">
              I apply the same discipline to marketplaces. I read a market
              the way I would read a system, then I write down what I think
              is true, then I build something small enough to test it
              quickly.
            </p>
            <p className="mt-5 text-[var(--text-body-lg)] leading-relaxed text-[var(--color-text-secondary)]">
              Most of what I work on sits at the intersection of Indian
              consumer commerce and the operational decisions that make or
              break it. Sellers, sequencing, trust, and the parts of a
              marketplace that do not show up in a pitch deck.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <div className="border-t border-[var(--color-border)] pt-4">
              <Fact label="Based in" value="Nagpur, India" />
              <Fact label="Studying" value="Mechanical Engineering, IIT Madras" />
              <Fact label="Focused on" value="Marketplace strategy, consumer AI" />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-[var(--color-border)] py-3">
      <span className="font-mono-meta text-[11px] uppercase tracking-[0.06em] text-[var(--color-text-tertiary)]">
        {label}
      </span>
      <span className="text-[13px] text-[var(--color-text-primary)]">{value}</span>
    </div>
  );
}