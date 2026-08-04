"use client";

import { useState } from "react";
import Image from "next/image";
import type { ContentBlock } from "@/lib/artifact-types";

export function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "sectionHeading":
      return (
        <div id={block.anchor} className="relative">
          <div className="h-px w-full bg-[var(--color-border)]" />
          {block.index && (
            <span className="font-mono-meta absolute -top-2.5 left-0 bg-[var(--color-bg)] pr-3 text-[11px] uppercase tracking-[0.1em] text-[var(--color-text-tertiary)]">
              {block.index}
            </span>
          )}
          <h2 className="mt-6 text-[var(--text-h2)] font-medium tracking-[-0.015em] text-[var(--color-text-primary)]">
            {block.heading}
          </h2>
        </div>
      );

    case "paragraph":
      return (
        <p className="max-w-[680px] text-[var(--text-body-lg)] leading-relaxed text-[var(--color-text-secondary)]">
          {block.text}
        </p>
      );

    case "insightCallout":
      return (
        <div
          className="max-w-[680px] border-l-2 py-3 pl-5 text-[15px] leading-relaxed text-[var(--color-text-primary)]"
          style={{ borderColor: "var(--color-accent)" }}
        >
          {block.text}
        </div>
      );

    case "quote":
      return (
        <blockquote className="max-w-[600px] border-l-2 border-[var(--color-border)] py-2 pl-6">
          <p className="text-[19px] font-medium leading-snug tracking-[-0.01em] text-[var(--color-text-primary)]">
            {block.quote}
          </p>
          {block.attribution && (
            <cite className="font-mono-meta mt-3 block text-[12px] not-italic text-[var(--color-text-tertiary)]">
              {block.attribution}
            </cite>
          )}
        </blockquote>
      );

    case "evidence":
      return (
        <div className="max-w-[680px] border-t border-[var(--color-border)] pt-4">
          <div className="flex items-baseline justify-between">
            <span className="text-[14px] text-[var(--color-text-secondary)]">
              {block.label}
            </span>
            <span className="font-mono-meta text-[18px] font-medium text-[var(--color-text-primary)]">
              {block.value}
            </span>
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
            {block.interpretation}
          </p>
          <span className="font-mono-meta mt-2 block text-[11px] text-[var(--color-text-tertiary)]">
            Source, {block.source}
          </span>
        </div>
      );

    case "decision":
      return (
        <div className="max-w-[680px] space-y-3 rounded-[var(--radius-md)] border border-[var(--color-border)] p-6">
          <DecisionRow label="Assumed" value={block.assumed} />
          <DecisionRow label="Found" value={block.found} />
          <DecisionRow label="Changed" value={block.changed} accent />
        </div>
      );

    case "figure":
      return (
        <figure className="max-w-[820px]">
          <div className="relative overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)]">
            <Image
              src={block.src}
              alt={block.alt}
              width={1600}
              height={1000}
              className="h-auto w-full"
            />
            {block.annotations?.map((a, i) => (
              <AnnotationDot key={i} x={a.x} y={a.y} note={a.note} />
            ))}
          </div>
          <figcaption className="font-mono-meta mt-3 text-[12px] text-[var(--color-text-tertiary)]">
            Fig. {block.figureNumber}, {block.caption}
          </figcaption>
        </figure>
      );

    case "framework":
      return (
        <div className="max-w-[680px]">
          {block.heading && (
            <h3 className="text-[15px] font-medium text-[var(--color-text-primary)]">
              {block.heading}
            </h3>
          )}
          <ol className="mt-4 space-y-4">
            {block.nodes.map((node, i) => (
              <li key={node.id} className="flex gap-4">
                <span className="font-mono-meta text-[12px] text-[var(--color-text-tertiary)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="text-[14px] font-medium text-[var(--color-text-primary)]">
                    {node.label}
                  </div>
                  <div className="mt-1 text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
                    {node.takeaway}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      );

    case "metrics":
      return (
        <div className="max-w-[680px]">
          {block.heading && (
            <h3 className="mb-4 text-[15px] font-medium text-[var(--color-text-primary)]">
              {block.heading}
            </h3>
          )}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {block.metrics.map((metric) => (
              <div key={metric.label} className="border-t border-[var(--color-border)] pt-3">
                <div className="font-mono-meta text-[20px] font-medium text-[var(--color-text-primary)]">
                  {metric.value}
                </div>
                <div className="mt-1 text-[12px] text-[var(--color-text-tertiary)]">
                  {metric.label}
                </div>
                {metric.methodology && (
                  <div className="mt-2 text-[11px] leading-relaxed text-[var(--color-text-tertiary)]">
                    {metric.methodology}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );

    case "timeline":
      return (
        <div className="max-w-[680px]">
          {block.heading && (
            <h3 className="text-[15px] font-medium text-[var(--color-text-primary)]">
              {block.heading}
            </h3>
          )}
          <ul className="mt-4 divide-y divide-[var(--color-border)]">
            {block.entries.map((entry) => (
              <li key={entry.title} className="py-4">
                <span className="font-mono-meta text-[11px] uppercase tracking-[0.06em] text-[var(--color-accent)]">
                  {entry.date}
                </span>
                <div className="mt-1 text-[14px] font-medium text-[var(--color-text-primary)]">
                  {entry.title}
                </div>
                <p className="mt-1 text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
                  {entry.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      );

    default:
      return null;
  }
}

function DecisionRow({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div>
      <span
        className="font-mono-meta text-[11px] uppercase tracking-[0.06em]"
        style={{ color: accent ? "var(--color-accent)" : "var(--color-text-tertiary)" }}
      >
        {label}
      </span>
      <p className="mt-1 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
        {value}
      </p>
    </div>
  );
}

function AnnotationDot({ x, y, note }: { x: number; y: number; note: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-label={note}
        className="h-2.5 w-2.5 rounded-full border-2 border-[var(--color-bg)] transition-transform duration-200 hover:scale-125"
        style={{ background: "var(--color-accent)" }}
      />
      {open && (
        <span className="font-mono-meta pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-max max-w-[200px] -translate-x-1/2 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-[11px] leading-relaxed text-[var(--color-text-secondary)]">
          {note}
        </span>
      )}
    </div>
  );
}