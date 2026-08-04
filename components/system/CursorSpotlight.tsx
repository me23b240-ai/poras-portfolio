"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";

/**
 * Wraps a content block. On mouse move, a bounded radial highlight
 * follows the cursor within that block only, it never lights up
 * the page. Effect is a small, local increase in border and text
 * contrast, not a glow or gradient wash.
 */
export function CursorSpotlight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={`relative ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(180px circle at ${pos.x}% ${pos.y}%, var(--color-accent-muted), transparent 70%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}