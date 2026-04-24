"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/work/ProjectCard";
import { projects } from "@/lib/data";
import { staggerContainer, fadeUpVariant } from "@/lib/utils";

export default function Work() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Section bg="gray">
      <Container>
        <SectionHeader
          eyebrow="Our Work"
          title="Projects we're proud of."
          description="A selection of products we've designed, built, and shipped."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {featured.map((project) => (
            <motion.div key={project.slug} variants={fadeUpVariant}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10">
          <Button variant="light" href="/work">
            View All Work
          </Button>
        </div>
      </Container>
    </Section>
  );
}
