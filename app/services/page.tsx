"use client";

import { motion } from "framer-motion";
import { Code2, Cloud, Brain, Settings2, Rocket, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import CTA from "@/components/sections/CTA";
import { services } from "@/lib/data";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";

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
    <motion.div
      className="pt-[52px]"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {/* Header */}
      <section className="border-b border-gray-100 py-16">
        <Container>
          <div className="max-w-xl">
            <SectionHeader
              eyebrow="Services"
              title="Everything from idea to infrastructure."
              description="We work across the full software stack — building, deploying, maintaining, and scaling products for startups and growing businesses."
            />
          </div>
        </Container>
      </section>

      {/* Services grid */}
      <Section>
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={fadeUpVariant}>
                <Card hover className="flex h-full flex-col gap-5">
                  <div className="text-gray-800">{iconMap[service.icon]}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      <CTA />
    </motion.div>
  );
}
