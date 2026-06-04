import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/work/ProjectCard";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { projects } from "@/lib/data";

export default function Work() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Section bg="gray">
      <Container variant="wide">
        <SectionHeader
          eyebrow="Our Work"
          title="Projects we're proud of."
          description="A selection of products we've designed, built, and shipped."
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {featured.map((project) => (
            <Reveal key={project.slug}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </RevealGroup>

        <div className="mt-10">
          <Button variant="light" href="/work">
            View All Work
          </Button>
        </div>
      </Container>
    </Section>
  );
}
