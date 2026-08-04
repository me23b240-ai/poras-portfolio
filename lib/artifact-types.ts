// lib/artifact-types.ts
//
// Every artifact (product or research) is represented as structured data:
// frontmatter + an ordered list of content blocks. Pages never branch on
// content, they map over `blocks` and hand each one to BlockRenderer.

export type ArtifactType = "product" | "research";

export type ArtifactStatus =
  | "shipped"
  | "in-progress"
  | "archived"
  | "draft";

export interface ArtifactMetadataField {
  label: string; // e.g. "STATUS", rendered in mono, upper-case via CSS
  value: string; // e.g. "Shipped"
}

export interface ArtifactFrontmatter {
  slug: string;
  type: ArtifactType;
  eyebrow: string; // "Investigation" | "Dispatch" etc, small label above title
  title: string;
  subtitle: string; // one-line thesis / what this artifact claims
  status: ArtifactStatus;
  readTime: string; // "6 min"
  publishedAt: string; // ISO date, used for sorting + display
  updatedAt?: string;
  summary: string; // used on index cards / RelatedArtifacts previews
  coverImage?: {
    src: string;
    alt: string;
  };
  // The fields actually rendered in ArtifactMetadata, in display order.
  // Product and research artifacts pass different field sets through the
  // same component — this is the only place the two types diverge.
  metadata: ArtifactMetadataField[];
}

// --- Content blocks -------------------------------------------------------
// Each block is self-contained data. No block knows whether it's on a
// product page or a research page.

export interface SectionHeadingBlock {
  type: "sectionHeading";
  id: string;
  anchor: string; // used by SectionNavigator + ReadingProgress
  heading: string;
  index?: string; // optional "01" style index shown before the heading
}

export interface ParagraphBlock {
  type: "paragraph";
  id: string;
  text: string;
}

export interface InsightCalloutBlock {
  type: "insightCallout";
  id: string;
  text: string;
}

export interface QuoteBlockData {
  type: "quote";
  id: string;
  quote: string;
  attribution?: string;
}

export interface EvidenceBlockData {
  type: "evidence";
  id: string;
  label: string;
  value: string;
  source: string;
  interpretation: string; // one line, what the number means
}

export interface DecisionCardData {
  type: "decision";
  id: string;
  assumed: string; // the wrong / initial assumption
  found: string; // what was actually true
  changed: string; // what changed as a result
}

export interface TimelineEntry {
  date: string;
  title: string;
  description: string;
}

export interface TimelineBlockData {
  type: "timeline";
  id: string;
  heading?: string;
  entries: TimelineEntry[];
}

export interface MetricEntry {
  label: string;
  value: string;
  methodology?: string; // revealed on hover
}

export interface MetricsPanelData {
  type: "metrics";
  id: string;
  heading?: string;
  metrics: MetricEntry[];
}

export interface FrameworkNode {
  id: string;
  label: string;
  takeaway: string; // revealed on hover
}

export interface FrameworkDiagramData {
  type: "framework";
  id: string;
  heading?: string;
  nodes: FrameworkNode[];
  connections?: [string, string][]; // node id pairs, optional
}

export interface FigureAnnotation {
  x: number; // percentage, 0-100
  y: number; // percentage, 0-100
  note: string;
}

export interface ImageFigureData {
  type: "figure";
  id: string;
  src: string;
  alt: string;
  caption: string;
  figureNumber: number;
  sticky?: boolean; // reserved for future use, not implemented yet
  annotations?: FigureAnnotation[];
}

export interface FootnoteRefBlock {
  type: "footnoteRef";
  id: string;
  marker: number;
  text: string; // inline text this marker attaches to
}

export type ContentBlock =
  | SectionHeadingBlock
  | ParagraphBlock
  | InsightCalloutBlock
  | QuoteBlockData
  | EvidenceBlockData
  | DecisionCardData
  | TimelineBlockData
  | MetricsPanelData
  | FrameworkDiagramData
  | ImageFigureData
  | FootnoteRefBlock;

export interface FootnoteEntry {
  marker: number;
  text: string;
  source?: string;
}

export interface RelatedLink {
  slug: string;
  type: ArtifactType;
  title: string;
  reason: string; // editorial framing, e.g. "Next dispatch"
}

export interface Artifact {
  frontmatter: ArtifactFrontmatter;
  blocks: ContentBlock[];
  footnotes: FootnoteEntry[];
  related: RelatedLink[]; // manually curated, never auto-suggested
}