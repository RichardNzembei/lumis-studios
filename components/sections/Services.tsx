"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, Brain, Settings2, Rocket, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={20} />,
  Cloud: <Cloud size={20} />,
  Brain: <Brain size={20} />,
  Settings2: <Settings2 size={20} />,
  Rocket: <Rocket size={20} />,
  Wrench: <Wrench size={20} />,
};

export default function Services() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="What We Do"
          title="Services built for real products."
          description="From first commit to production and beyond — we cover the full lifecycle of software delivery."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={fadeUpVariant}>
              <Card hover className="flex h-full flex-col gap-4">
                <div className="text-gray-800">{iconMap[service.icon]}</div>
                <div>
                  <h3 className="font-semibold text-gray-800">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10">
          <Button variant="light" href="/services">
            View All Services
          </Button>
        </div>
      </Container>
    </Section>
  );
}
