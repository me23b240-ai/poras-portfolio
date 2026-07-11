"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navFade } from "@/lib/motion";

const LINKS = [
  { label: "Work", href: "#evidence" },
  { label: "Writing", href: "#writing" },
  { label: "About", href: "#about" },
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
            <NavLink key={link.href} href={link.href}>
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

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="group relative hidden text-[14px] text-[var(--color-text-secondary)] transition-colors duration-200 hover:text-[var(--color-text-primary)] md:inline-block"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[var(--color-accent)] transition-transform duration-200 group-hover:scale-x-100" />
    </Link>
  );
}