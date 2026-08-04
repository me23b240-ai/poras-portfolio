// components/blocks/BlockRenderer.tsx
//
// The one place that knows how to turn a ContentBlock into a component.
// ArtifactLayout maps over an artifact's blocks and hands each one to
// <BlockRenderer />. Adding a new block type means adding one line here,
// not touching any page.

import type { ContentBlock } from "@/lib/artifact-types";
import { SectionHeading } from "./SectionHeading";
import { Paragraph } from "./Paragraph";
import { InsightCallout } from "./InsightCallout";
import { QuoteBlock } from "./QuoteBlock";
import { EvidenceBlock } from "./EvidenceBlock";
import { DecisionCard } from "./DecisionCard";
import { Timeline } from "./Timeline";
import { MetricsPanel } from "./MetricsPanel";
import { FrameworkDiagram } from "./FrameworkDiagram";
import { ImageFigure } from "./ImageFigure";

export function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "sectionHeading":
      return <SectionHeading block={block} />;
    case "paragraph":
      return <Paragraph block={block} />;
    case "insightCallout":
      return <InsightCallout block={block} />;
    case "quote":
      return <QuoteBlock block={block} />;
    case "evidence":
      return <EvidenceBlock block={block} />;
    case "decision":
      return <DecisionCard block={block} />;
    case "timeline":
      return <Timeline block={block} />;
    case "metrics":
      return <MetricsPanel block={block} />;
    case "framework":
      return <FrameworkDiagram block={block} />;
    case "figure":
      return <ImageFigure block={block} />;
    default: {
      // Exhaustiveness check: if a new ContentBlock variant is added to
      // lib/artifact-types.ts without a case above, this fails to compile.
      const _exhaustive: never = block;
      return _exhaustive;
    }
  }
}
