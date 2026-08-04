"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Wraps an internal link. Pulls a few pixels toward the cursor on
 * approach, snaps back on leave. Capped at 6px so it reads as a
 * physical, handcrafted response, never as a floating or bouncy
 * effect.
 */
export function MagneticLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: relX * 0.15, y: relY * 0.15 });
  }

  return (
    <motion.span
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      className="inline-block"
    >
      <Link ref={ref} href={href} className={className}>
        {children}
      </Link>
    </motion.span>
  );
}