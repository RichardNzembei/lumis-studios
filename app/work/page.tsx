"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/work/ProjectCard";
import CTA from "@/components/sections/CTA";
import { projects } from "@/lib/data";
import { staggerContainer, fadeUpVariant } from "@/lib/utils";

export default function WorkPage() {
  return (
    <div className="pt-[52px]">
      {/* Header */}
      <section className="border-b border-gray-100 py-16">
        <Container>
          <div className="max-w-xl">
            <SectionHeader
              eyebrow="Our Work"
              title="Products we've built."
              description="A selection of projects across productivity, e-commerce, agri-tech, supply chain, fintech, and consumer goods."
            />
          </div>
        </Container>
      </section>

      {/* Projects grid */}
      <Section>
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            {projects.map((project) => (
              <motion.div key={project.slug} variants={fadeUpVariant}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      <CTA />
    </div>
  );
}
