"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { JournalSectionHeader } from "./JournalSectionHeader";
import { Button } from "./ui/Button";
import { revealOnScroll } from "@/lib/motion";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-[var(--space-section-mobile)] md:py-[var(--space-section-desktop)]"
    >
      <Container>
        <JournalSectionHeader index="Contact, 06" title="Get in touch" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={revealOnScroll}
          className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-[440px] text-[var(--text-body-lg)] leading-relaxed text-[var(--color-text-secondary)]">
            If you are hiring for product, strategy, or founder&apos;s office
            roles, I would like to hear about it.
          </p>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row">
            <Button
              href="https://drive.google.com/file/d/17hkxvAzOQSgnU4FBWbHV_Dfe3qVMYmxX/view?usp=sharing"
              variant="outline"
              showArrow={false}
              external
            >
              View Resume
            </Button>
            <Button href="mailto:me23b240@smail.iitm.ac.in" variant="primary" showArrow={false}>
              me23b240@smail.iitm.ac.in
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}