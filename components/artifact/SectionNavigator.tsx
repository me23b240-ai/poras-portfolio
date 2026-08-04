// components/artifact/SectionNavigator.tsx
//
// Same wayfinding job the homepage Spine does, extended past the hero and
// down the length of the artifact. Jump links to every sectionHeading block,
// active state tracked via IntersectionObserver.

"use client";

import { useEffect, useState } from "react";

export interface SectionNavItem {
  anchor: string;
  heading: string;
  index?: string;
}

interface SectionNavigatorProps {
  sections: SectionNavItem[];
}

export function SectionNavigator({ sections }: SectionNavigatorProps) {
  const [activeAnchor, setActiveAnchor] = useState<string | null>(
    sections[0]?.anchor ?? null
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveAnchor(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.anchor);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (sections.length === 0) return null;

  return (
    <nav aria-label="Sections in this artifact" className="hidden md:block">
      <ul className="flex flex-col gap-3">
        {sections.map((section) => {
          const isActive = section.anchor === activeAnchor;
          return (
            <li key={section.anchor}>
              <a
                href={`#${section.anchor}`}
                aria-current={isActive ? "true" : undefined}
                className={[
                  "group flex items-baseline gap-2 font-mono text-[length:var(--text-micro)] uppercase tracking-[0.06em] transition-colors",
                  isActive
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]",
                ].join(" ")}
              >
                {section.index && <span aria-hidden="true">{section.index}</span>}
                <span className="normal-case tracking-normal text-[length:var(--text-small)]">
                  {section.heading}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
