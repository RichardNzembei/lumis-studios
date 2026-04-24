"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { stats } from "@/lib/data";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";

export default function Stats() {
  return (
    <Section bg="gray">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUpVariant} className="flex flex-col gap-1">
              <span className="text-4xl font-bold tracking-tight text-gray-800">{stat.value}</span>
              <span className="text-sm text-gray-600">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
