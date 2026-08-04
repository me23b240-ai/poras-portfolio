// components/blocks/Lightbox.tsx
//
// Deliberately unstyled/minimal: dark scrim, image, caption, close. Not a
// carousel, not zoom-and-pan theatrics — a lightbox is a magnifier, not a
// feature.

"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface LightboxProps {
  src: string;
  alt: string;
  caption: string;
  isOpen: boolean;
  onClose: () => void;
}

export function Lightbox({ src, alt, caption, isOpen, onClose }: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/90 p-6"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image"
            className="absolute right-6 top-6 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            <X size={20} />
          </button>
          <div className="relative max-h-[80vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={src}
              alt={alt}
              width={1600}
              height={1000}
              className="max-h-[80vh] w-auto object-contain"
            />
          </div>
          <p className="font-mono text-[length:var(--text-micro)] text-[var(--color-text-tertiary)]">
            {caption}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
