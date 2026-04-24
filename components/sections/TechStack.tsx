"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { techGroups } from "@/lib/data";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";

export default function TechStack() {
  return (
    <Section bg="gray">
      <Container>
        <SectionHeader
          eyebrow="Technologies"
          title="41+ technologies. One team."
          description="We go deep on the tools that matter — and stay current as the ecosystem evolves."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 flex flex-col gap-8"
        >
          {techGroups.map((group) => (
            <motion.div key={group.label} variants={fadeUpVariant}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
