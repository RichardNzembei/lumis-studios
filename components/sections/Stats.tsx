import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <Section bg="gray">
      <Container variant="wide">
        <RevealGroup className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <Reveal key={stat.label} className="flex flex-col gap-1">
              <span className="text-4xl font-bold tracking-tight text-gray-800">
                {stat.prefix}
                <CountUp value={stat.value} />
                {stat.suffix && <span className="text-accent">{stat.suffix}</span>}
              </span>
              <span className="text-sm text-gray-600">{stat.label}</span>
            </Reveal>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
