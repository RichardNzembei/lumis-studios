"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";

/**
 * Thin client wrappers around framer-motion so pages and sections can stay
 * Server Components — only the animation shell ships client-side JS.
 */

interface PageFadeProps {
  children: React.ReactNode;
  className?: string;
}

/** Page-entry fade-up used by every inner page. */
export function PageFade({ children, className }: PageFadeProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

interface RevealGroupProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ol" | "ul";
}

/** Scroll-triggered stagger container. */
export function RevealGroup({ children, className, as = "div" }: RevealGroupProps) {
  const Component = as === "ol" ? motion.ol : as === "ul" ? motion.ul : motion.div;
  return (
    <Component
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </Component>
  );
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li";
}

/** Fade-up item — place inside a RevealGroup. */
export function Reveal({ children, className, as = "div" }: RevealProps) {
  const Component = as === "li" ? motion.li : motion.div;
  return (
    <Component variants={fadeUpVariant} className={className}>
      {children}
    </Component>
  );
}
