import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/work/ProjectCard";
import { PageFade, Reveal, RevealGroup } from "@/components/motion/Reveal";
import CTA from "@/components/sections/CTA";
import { projects } from "@/lib/data";

const inlineLink =
  "underline underline-offset-2 decoration-accent/50 transition-colors duration-200 hover:text-accent";

export default function WorkPage() {
  return (
    <PageFade className="pt-[52px]">
      {/* Header */}
      <section className="border-b border-gray-100 py-16">
        <Container>
          <div className="max-w-xl">
            <SectionHeader
              as="h1"
              eyebrow="Our Work"
              title="Products we've built."
              description="A selection of projects across proptech, productivity, e-commerce, agri-tech, supply chain, fintech, and internal tooling."
            />
            <p className="mt-4 text-sm text-gray-500">
              Want to work with us?{" "}
              <Link href="/contact" className={inlineLink}>
                Start a project
              </Link>{" "}
              or{" "}
              <Link href="/services" className={inlineLink}>
                explore our services
              </Link>.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects grid */}
      <Section>
        <Container variant="wide">
          <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} headingLevel="h2" />
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <CTA />
    </PageFade>
  );
}
