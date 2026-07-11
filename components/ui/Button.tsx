import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  showArrow?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  showArrow = true,
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 text-[15px] font-medium transition-colors duration-200";

  const variants = {
    primary:
      "rounded-[10px] bg-[var(--color-accent)] px-5 py-2.5 text-[#0a0a0a] hover:bg-[var(--color-accent-hover)]",
    ghost: "text-[var(--color-text-primary)] hover:text-[var(--color-accent)]",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {showArrow && (
        <ArrowRight
          size={16}
          strokeWidth={2}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </Link>
  );
}