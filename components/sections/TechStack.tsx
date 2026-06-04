import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { techGroups } from "@/lib/data";

export default function TechStack() {
  return (
    <Section bg="gray">
      <Container variant="wide">
        <SectionHeader
          eyebrow="Technologies"
          title="Deep in the tools that matter."
          description="From frontend frameworks to cloud infrastructure — we pick proven technology for each problem and stay current as the ecosystem evolves."
        />

        <RevealGroup className="mt-12 flex flex-col gap-8">
          {techGroups.map((group) => (
            <Reveal key={group.label}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
