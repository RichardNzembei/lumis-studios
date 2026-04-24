"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/lib/data";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";

export default function Process() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="How We Work"
          title="A process that ships."
          description="We keep things simple, transparent, and focused on outcomes."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4"
        >
          {processSteps.map((step) => (
            <motion.div key={step.number} variants={fadeUpVariant} className="flex flex-col gap-3">
              <span className="text-6xl font-bold leading-none text-gray-100">
                {step.number}
              </span>
              <h3 className="text-base font-semibold text-gray-800">{step.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
