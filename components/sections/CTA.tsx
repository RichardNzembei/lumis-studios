"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";

export default function CTA() {
  return (
    <section className="bg-gray-800 py-20">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between"
        >
          <motion.div variants={fadeUpVariant} className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-gray-400">
              Let&apos;s talk about what you&apos;re building. No lengthy proposals — just a direct
              conversation.
            </p>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-3">
            <Button variant="light" href="/contact">
              Get in Touch
            </Button>
            <Button
              variant="light"
              href="/work"
              className="!bg-transparent !text-white border border-white/20 hover:!bg-white/10"
            >
              See Our Work
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
