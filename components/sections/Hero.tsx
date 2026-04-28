"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-white pt-[52px]">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6 md:max-w-3xl"
        >
          <motion.p
            variants={fadeUpVariant}
            className="text-xs font-semibold uppercase tracking-widest text-gray-400"
          >
            Lumis Studios — Nairobi, Kenya
          </motion.p>

          <motion.h1
            variants={fadeUpVariant}
            className="text-5xl font-semibold leading-tight tracking-tight text-gray-800 md:text-7xl"
          >
            We build software that works.
          </motion.h1>

          <motion.p
            variants={fadeUpVariant}
            className="max-w-lg text-lg leading-relaxed text-gray-600 md:text-xl"
          >
            A technology studio crafting web applications, mobile apps, and
            cloud infrastructure for businesses across Africa and beyond.
          </motion.p>

          <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-3">
            <Button variant="dark" href="/work">
              See Our Work
            </Button>
            <Button variant="light" href="/contact">
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <ChevronDown size={20} className="text-gray-400" />
      </motion.div>
    </section>
  );
}
