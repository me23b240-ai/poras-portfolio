"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { JournalSectionHeader } from "./JournalSectionHeader";
import { Tag } from "./ui/Tag";
import { revealOnScroll } from "@/lib/motion";

const TOOLS = [
  "Market sizing",
  "Cohort analysis",
  "Figma",
  "SQL",
  "Framer Motion",
  "Notion",
  "Excel modeling",
  "User interviews",
];

export function Toolkit() {
  return (
    <section className="py-[var(--space-section-mobile)] md:py-[var(--space-section-desktop)]">
      <Container>
        <JournalSectionHeader
          index="Toolkit, 03"
          title="What I reach for"
          intro="The methods and tools behind the research and the builds."
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={revealOnScroll}
          className="flex flex-wrap gap-3"
        >
          {TOOLS.map((tool) => (
            <Tag key={tool}>{tool}</Tag>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}