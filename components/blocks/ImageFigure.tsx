// components/blocks/ImageFigure.tsx
//
// Editorial figure, not a SaaS-template card: no drop shadow, hairline
// border only, caption below in mono rather than overlaid. Annotated
// screenshots use numbered circle markers keyed to a list beneath the
// image, not floating tooltip bubbles.
//
// `sticky` is part of the data shape (see ImageFigureData) so the layout
// can support pinned figures later, but the pinning behavior itself is
// intentionally NOT implemented yet — do not wire it up until a real
// artifact needs it. If block.sticky is true today, it's treated as a
// normal inline figure and a dev-only warning is logged.

"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { maskedFigureReveal } from "@/lib/motion";
import { FigureCaption } from "./FigureCaption";
import { Lightbox } from "./Lightbox";
import type { ImageFigureData } from "@/lib/artifact-types";

export function ImageFigure({ block }: { block: ImageFigureData }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  if (block.sticky && process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.warn(
      `ImageFigure "${block.id}" is marked sticky, but sticky positioning is not implemented yet. Rendering inline.`
    );
  }

  return (
    <figure className="max-w-[72ch]">
      <motion.button
        type="button"
        onClick={() => setLightboxOpen(true)}
        className="relative block w-full overflow-hidden border border-[var(--color-border)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)]"
        variants={prefersReducedMotion ? undefined : maskedFigureReveal}
        initial={prefersReducedMotion ? undefined : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-10%" }}
        aria-label={`Open larger view: ${block.alt}`}
      >
        <Image
          src={block.src}
          alt={block.alt}
          width={1400}
          height={900}
          className="h-auto w-full object-cover"
        />

        {block.annotations?.map((annotation, i) => (
          <span
            key={i}
            className="absolute flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-accent)] bg-[var(--color-bg)] font-mono text-[10px] text-[var(--color-accent)]"
            style={{ left: `${annotation.x}%`, top: `${annotation.y}%` }}
            aria-hidden="true"
          >
            {i + 1}
          </span>
        ))}
      </motion.button>

      <FigureCaption figureNumber={block.figureNumber} caption={block.caption} />

      {block.annotations && block.annotations.length > 0 && (
        <ol className="mt-3 flex flex-col gap-1.5">
          {block.annotations.map((annotation, i) => (
            <li
              key={i}
              className="flex gap-2 text-[length:var(--text-micro)] leading-relaxed text-[var(--color-text-secondary)]"
            >
              <span className="font-mono text-[var(--color-accent)]">{i + 1}</span>
              <span>{annotation.note}</span>
            </li>
          ))}
        </ol>
      )}

      <Lightbox
        src={block.src}
        alt={block.alt}
        caption={block.caption}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </figure>
  );
}
