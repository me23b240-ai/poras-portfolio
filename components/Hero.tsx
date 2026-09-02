"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Spine } from "./Spine";
import { FieldNotes } from "./FieldNotes";
import { heroContainer, heroItem, artifactEnter } from "@/lib/motion";
import { getArtifactsByType } from "@/content/registry";

export function Hero() {
  const reportsCount = getArtifactsByType("research").length;
  const productsCount = getArtifactsByType("product").length;
  const featured = getArtifactsByType("research")[0];

  const featuredMeta = featured
    ? `Filed dispatch, ${featured.frontmatter.readTime}${
        featured.frontmatter.updatedAt
          ? `, updated ${new Date(featured.frontmatter.updatedAt).toLocaleString("en-US", { month: "short", year: "numeric" })}`
          : ""
      }`
    : "";

  return (
    <section className="relative overflow-visible pt-40 pb-32 md:pt-48 md:pb-40">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroContainer}
          className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-12"
        >
          <div className="relative z-10 md:col-span-4">
            <motion.span
              variants={heroItem}
              className="font-mono-meta block text-[12px] uppercase tracking-[0.12em] text-[var(--color-text-tertiary)]"
            >
              Field Notes
            </motion.span>

            <motion.p
              variants={heroItem}
              className="mt-6 text-[length:var(--text-h2)] font-medium leading-[1.25] tracking-[-0.015em] text-[var(--color-text-primary)]"
            >
              I don&apos;t pitch ideas. I test them.
            </motion.p>

            <motion.p
              variants={heroItem}
              className="mt-5 max-w-[340px] text-[15px] leading-relaxed text-[var(--color-text-secondary)]"
            >
              {productsCount} products shipped, {reportsCount} memos filed,
              one method: read the market, write down the thesis, build
              something small enough to prove it fast.
            </motion.p>

            <motion.div variants={heroItem} className="mt-9">
              <Button href="#evidence" variant="link">
                See what I have built
              </Button>
            </motion.div>
          </div>

          <div className="relative z-30 hidden md:col-span-1 md:block">
            <Spine />
          </div>

          <motion.div variants={artifactEnter} className="relative z-20 md:col-span-7">
            {featured && (
              <>
                <span className="font-mono-meta text-[11px] uppercase tracking-[0.08em] text-[var(--color-accent)]">
                  {featuredMeta}
                </span>

                <h1 className="mt-4 text-[length:var(--text-h1)] font-semibold leading-[1.05] tracking-[-0.035em] text-[var(--color-text-primary)]">
                  {featured.frontmatter.subtitle}
                </h1>

                <div className="mt-6 flex items-center gap-6">
                  <Button href={`/writing/${featured.frontmatter.slug}`} variant="link">
                    Read the dispatch
                  </Button>
                  <Button href="/work/applyos" variant="link">
                    See ApplyOS
                  </Button>
                </div>
              </>
            )}

            <div className="mt-14 max-w-[420px]">
              <FieldNotes />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}