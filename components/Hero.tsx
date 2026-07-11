"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { CurrentFocusPanel } from "./CurrentFocusPanel";
import { heroContainer, heroItem } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-24 pb-16 md:pt-16">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroContainer}
          className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8"
        >
          {/* Left: thesis */}
          <div className="md:col-span-7">
            <motion.p
              variants={heroItem}
              className="font-mono-meta text-[13px] uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]"
            >
              Poras Wadhai — Mechanical Engineering, IIT Madras
            </motion.p>

            <motion.h1
              variants={heroItem}
              className="mt-5 text-[var(--text-display)] font-medium leading-[1.05] tracking-[-0.03em] text-[var(--color-text-primary)]"
            >
              I read Indian marketplaces
              <br />
              like systems —
              <br />
              <span className="text-[var(--color-text-secondary)]">
                then build the product that tests the thesis.
              </span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mt-7 max-w-[520px] text-[var(--text-body-lg)] leading-relaxed text-[var(--color-text-secondary)]"
            >
              Mechanical engineering trained me to think in constraints and
              trade-offs. I apply that to category strategy, seller behavior,
              and consumer AI — writing the memo, then shipping the thing
              that proves or breaks it.
            </motion.p>

            <motion.div
              variants={heroItem}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <Button href="#writing" variant="primary">
                Read the Meesho memo
              </Button>
              <Button href="#evidence" variant="ghost">
                See what I&rsquo;m building
              </Button>
            </motion.div>
          </div>

          {/* Right: Current Focus panel */}
          <motion.div variants={heroItem} className="md:col-span-5">
            <CurrentFocusPanel />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}