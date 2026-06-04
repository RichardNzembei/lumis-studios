import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <Section>
      <Container variant="wide">
        <SectionHeader
          eyebrow="How We Work"
          title="A process that ships."
          description="We keep things simple, transparent, and focused on outcomes."
        />

        <RevealGroup
          as="ol"
          className="mt-12 grid list-none grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4"
        >
          {processSteps.map((step) => (
            <Reveal as="li" key={step.number} className="flex flex-col gap-3">
              <span className="text-6xl font-bold leading-none text-gray-100" aria-hidden="true">
                {step.number}
              </span>
              <h3 className="text-base font-semibold text-gray-800">{step.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{step.description}</p>
            </Reveal>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
