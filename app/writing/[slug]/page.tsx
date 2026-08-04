import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArtifactLayout } from "@/components/artifact/ArtifactLayout";
import { artifacts, getArtifact, getNextReading } from "@/content/registry";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return artifacts
    .filter((a) => a.frontmatter.type === "research")
    .map((a) => ({ slug: a.frontmatter.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const artifact = getArtifact("research", slug);
  if (!artifact) return {};
  return {
    title: `${artifact.frontmatter.title} — Poras Wadhai`,
    description: artifact.frontmatter.summary,
  };
}

export default async function ResearchArtifactPage({ params }: PageProps) {
  const { slug } = await params;
  const artifact = getArtifact("research", slug);
  if (!artifact) notFound();

  const next = getNextReading(artifact);

  return <ArtifactLayout artifact={artifact} next={next} />;
}