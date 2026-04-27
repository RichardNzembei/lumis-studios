"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { Container } from "@/components/ui/Container";
import type { Project } from "@/lib/data";

interface CaseStudyLayoutProps {
  project: Project;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  return (
    <motion.div
      className="min-h-screen bg-white pt-[52px]"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {/* Hero */}
      <section className="border-b border-gray-100 py-16">
        <Container>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-800"
          >
            <ArrowLeft size={14} />
            All Work
          </Link>

          <div className="mt-8 max-w-2xl">
            <Tag>{project.category}</Tag>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-800 md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">{project.tagline}</p>
            <p className="mt-2 text-sm text-gray-400">{project.year}</p>
          </div>
        </Container>
      </section>

      {/* Overview + Role + Tech */}
      <section className="border-b border-gray-100 py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                  Overview
                </h2>
                <p className="text-base leading-relaxed text-gray-600">{project.overview}</p>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                  Our Role
                </h2>
                <p className="text-base leading-relaxed text-gray-600">{project.role}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="border-b border-gray-100 py-16">
        <Container>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-10">
            Key Features
          </h2>
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {project.features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="rounded-2xl border border-gray-100 bg-white p-6 transition-colors duration-200 hover:border-gray-200"
              >
                <h3 className="text-sm font-semibold text-gray-800">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Architecture */}
      <section className="border-b border-gray-100 py-16">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              How It Was Built
            </h2>
            <p className="text-base leading-relaxed text-gray-600">{project.architecture}</p>
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <Container>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
            Highlights
          </h2>
          <motion.ul
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {project.highlights.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-gray-400"
                />
                <span className="text-sm leading-relaxed text-gray-600">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </Container>
      </section>

      {/* Bottom nav */}
      <section className="border-t border-gray-100 py-10">
        <Container>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-800"
          >
            <ArrowLeft size={14} />
            Back to all work
          </Link>
        </Container>
      </section>
    </motion.div>
  );
}
