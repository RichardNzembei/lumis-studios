import { Code2, Cloud, Brain, Settings2, Rocket, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { PageFade, Reveal, RevealGroup } from "@/components/motion/Reveal";
import CTA from "@/components/sections/CTA";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={24} />,
  Cloud: <Cloud size={24} />,
  Brain: <Brain size={24} />,
  Settings2: <Settings2 size={24} />,
  Rocket: <Rocket size={24} />,
  Wrench: <Wrench size={24} />,
};

export default function ServicesPage() {
  return (
    <PageFade className="pt-[52px]">
      {/* Header */}
      <section className="border-b border-gray-100 py-16">
        <Container>
          <div className="max-w-xl">
            <SectionHeader
              as="h1"
              eyebrow="Services"
              title="Everything from idea to infrastructure."
              description="We work across the full software stack — building, deploying, maintaining, and scaling products for startups and growing businesses."
            />
          </div>
        </Container>
      </section>

      {/* Services grid */}
      <Section>
        <Container variant="wide">
          <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <Reveal key={service.id}>
                <Card hover className="flex h-full flex-col gap-5">
                  <div className="text-gray-800">{iconMap[service.icon]}</div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-800">{service.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <CTA />
    </PageFade>
  );
}
