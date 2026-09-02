"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navFade } from "@/lib/motion";
import { MagneticLink } from "@/components/system/MagneticLink";
import { getArtifactsByType } from "@/content/registry";

const workCount = getArtifactsByType("product").length;
const writingCount = getArtifactsByType("research").length;

const LINKS = [
  { label: "Work", href: "#evidence", meta: "2 shipped" },
  { label: "Writing", href: "#writing", meta: "1 memo live" },
  { label: "About", href: "#about", meta: "IIT Madras" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navFade}
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-[var(--color-border)] bg-[var(--color-bg)]/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-5 md:px-10">
        <Link
          href="/"
          className="text-[15px] font-medium tracking-[-0.01em] text-[var(--color-text-primary)]"
        >
          Poras Wadhai
        </Link>

        <nav className="flex items-center gap-8">
          {LINKS.map((link) => (
            <NavLink key={link.href} href={link.href} meta={link.meta}>
              {link.label}
            </NavLink>
          ))}

          <Link
            href="#contact"
            className="rounded-[8px] border border-[var(--color-accent)]/40 px-4 py-1.5 text-[13px] font-medium text-[var(--color-accent)] transition-colors duration-200 hover:bg-[var(--color-accent-muted)]"
          >
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}

function NavLink({
  href,
  children,
  meta,
}: {
  href: string;
  children: string;
  meta: string;
}) {
  return (
    <MagneticLink
      href={href}
      className="group relative hidden py-1 text-[14px] text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-[var(--color-text-primary)] md:inline-block"
    >
      {children}
      <span className="pointer-events-none absolute left-0 top-full mt-1.5 flex translate-y-[-2px] items-center gap-1.5 whitespace-nowrap opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="h-px w-2.5 bg-[var(--color-accent)]" />
        <span className="font-mono-meta text-[10px] uppercase tracking-[0.06em] text-[var(--color-accent)]">
          {meta}
        </span>
      </span>
    </MagneticLink>
  );
}