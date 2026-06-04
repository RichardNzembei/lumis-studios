"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface CountUpProps {
  value: number;
  className?: string;
}

/**
 * Counts from 0 to `value` when scrolled into view. Server-renders the final
 * value so SEO and no-JS visitors see the real number, and skips the
 * animation entirely for prefers-reduced-motion users.
 */
export function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (latest) => {
        if (ref.current) ref.current.textContent = String(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
