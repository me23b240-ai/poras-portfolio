// components/artifact/ArtifactLayout.tsx

"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import type { Artifact, ContentBlock } from "@/lib/artifact-types";
import { BreadcrumbRail } from "./BreadcrumbRail";
import { ArtifactHero } from "./ArtifactHero";
import { ArtifactSidebar } from "./ArtifactSidebar";
import { Footnotes } from "./Footnotes";
import { RelatedArtifacts } from "./RelatedArtifacts";
import { NextReading } from "./NextReading";
import { BlockRenderer } from "@/components/blocks/BlockRenderer";
import { listStagger, listStaggerItem } from "@/lib/motion";

interface ArtifactLayoutProps {
  artifact: Artifact;
  next?: { slug: string; title: string };
}

function blockSpacing(type: ContentBlock["type"], isFirst: boolean): string {
  if (isFirst) return "";
  if (type === "sectionHeading") return "mt-20 md:mt-24";
  if (
    type === "figure" ||
    type === "framework" ||
    type === "timeline" ||
    type === "metrics"
  ) {
    return "mt-10";
  }
  return "mt-5";
}

export function ArtifactLayout({ artifact, next }: ArtifactLayoutProps) {
  const contentRef = useRef<HTMLElement>(null);

  const sections = artifact.blocks
    .filter((block) => block.type === "sectionHeading")
    .map((block) => ({
      anchor: block.anchor,
      heading: block.heading,
      index: block.index,
    }));

  return (
    <article>
      <BreadcrumbRail
        type={artifact.frontmatter.type}
        title={artifact.frontmatter.title}
      />

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <ArtifactHero frontmatter={artifact.frontmatter} />

        {sections.length > 0 && (
          <div className="sticky top-0 z-10 -mx-6 overflow-x-auto border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 px-6 py-3 backdrop-blur-sm md:hidden">
            <ul className="flex gap-5 whitespace-nowrap">
              {sections.map((section) => (
                <li key={section.anchor}>
                  <a
                    href={`#${section.anchor}`}
                    className="font-mono text-[length:var(--text-micro)] uppercase tracking-[0.06em] text-[var(--color-text-tertiary)]"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-16 pb-20 pt-4 md:pb-24">
          <ArtifactSidebar sections={sections} contentRef={contentRef} />

          <motion.section
            ref={contentRef}
            variants={listStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="flex min-w-0 flex-1 flex-col"
          >
            {artifact.blocks.map((block, i) => (
              <motion.div
                key={block.id}
                variants={listStaggerItem}
                className={blockSpacing(block.type, i === 0)}
              >
                <BlockRenderer block={block} />
              </motion.div>
            ))}
          </motion.section>
        </div>

        <Footnotes footnotes={artifact.footnotes} />
        <RelatedArtifacts items={artifact.related} />
      </div>

      {next && (
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <NextReading
            slug={next.slug}
            type={artifact.frontmatter.type}
            title={next.title}
          />
        </div>
      )}
    </article>
  );
}