import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { MagneticLink } from "@/components/system/MagneticLink";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "link";
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
  if (variant === "link") {
    return (
      <MagneticLink
        href={href}
        className={`group inline-flex items-center gap-2 text-[15px] font-medium text-[var(--color-text-primary)] transition-colors duration-200 hover:text-[var(--color-accent)] ${className}`}
      >
        <span className="relative">
          {children}
          <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </span>
        {showArrow && (
          <ArrowRight
            size={15}
            strokeWidth={2}
            className="ml-2 inline transition-transform duration-200 group-hover:translate-x-0.5"
          />
        )}
      </MagneticLink>
    );
  }

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