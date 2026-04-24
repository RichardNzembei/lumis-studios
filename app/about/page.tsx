"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import CTA from "@/components/sections/CTA";
import { fadeUpVariant, staggerContainer } from "@/lib/utils";

const values = [
  {
    title: "Clarity over complexity",
    description:
      "We write code that humans can read. Simple systems outlast clever ones.",
  },
  {
    title: "Ship, then iterate",
    description:
      "A working product in users' hands beats a perfect product on a whiteboard. We move fast and improve continuously.",
  },
  {
    title: "Honest communication",
    description:
      "We tell clients what we know, what we don't, and what we're doing about it. No surprises.",
  },
  {
    title: "Africa-first thinking",
    description:
      "We build for the realities of our market — intermittent connectivity, mobile-first users, local payment systems.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-[52px]">
      {/* Header */}
      <section className="border-b border-gray-100 py-16">
        <Container>
          <div className="max-w-xl">
            <SectionHeader
              eyebrow="About"
              title="Built in Nairobi."
              description="Lumis Studios is a technology studio focused on shipping software that solves real problems for African businesses and beyond."
            />
          </div>
        </Container>
      </section>

      {/* Founder */}
      <Section>
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 gap-12 md:grid-cols-2"
          >
            <motion.div variants={fadeUpVariant}>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Founder
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-800">
                Nzembei Reuben
              </h2>
              <p className="mt-2 text-base text-gray-600">Software Engineer & Founder</p>

              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin size={14} className="shrink-0 text-gray-400" />
                  Nairobi, Kenya
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <GraduationCap size={14} className="shrink-0 text-gray-400" />
                  BSc Computer Science — Kabarak University, 2022–2025
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Briefcase size={14} className="shrink-0 text-gray-400" />
                  Back End Developer — Riverbank Solutions Ltd
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/nzembei-reuben"
                rel="noopener noreferrer"
                target="_blank"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gray-800 transition-opacity duration-200 hover:opacity-60"
              >
                <ExternalLink size={14} />
                LinkedIn · 5,700+ connections
              </a>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex flex-col gap-4">
              <p className="text-sm leading-relaxed text-gray-600">
                Lumis Studios was founded with a simple belief: that quality software shouldn&apos;t
                require a US-sized budget. African startups and businesses deserve the same technical
                excellence as companies anywhere in the world.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                With a background in computer science and hands-on experience building production
                systems, Reuben started Lumis Studios to work directly with founders, product teams,
                and enterprises — shipping products that hold up under real-world use.
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                The studio operates at the intersection of speed and craft. Fast enough to compete
                with the pace of modern startups. Careful enough to build systems that scale.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Values */}
      <Section bg="gray">
        <Container>
          <SectionHeader
            eyebrow="Values"
            title="How we think."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUpVariant}
                className="rounded-[16px] border border-gray-100 bg-white p-6"
              >
                <h3 className="font-semibold text-gray-800">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      <CTA />
    </div>
  );
}
