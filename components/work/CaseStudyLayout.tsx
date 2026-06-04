import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageFade, Reveal, RevealGroup } from "@/components/motion/Reveal";
import type { Project } from "@/lib/data";

interface CaseStudyLayoutProps {
  project: Project;
}

const BASE_URL = "https://lumisstudios.site";

const inlineLink =
  "underline underline-offset-2 decoration-accent/50 transition-colors duration-200 hover:text-accent";

export function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.tagline,
    url: `${BASE_URL}/work/${project.slug}`,
    creator: { "@id": `${BASE_URL}/#organization` },
    keywords: project.tech.join(", "),
    genre: project.category,
    dateCreated: project.year,
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <PageFade className="min-h-screen bg-white pt-[52px]">
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
        <Container variant="wide">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-10">
            Key Features
          </h2>
          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature) => (
              <Reveal
                key={feature.title}
                className="card-surface rounded-2xl border border-gray-100 p-6 transition-colors duration-200 hover:border-gray-200"
              >
                <h3 className="text-sm font-semibold text-gray-800">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{feature.description}</p>
              </Reveal>
            ))}
          </RevealGroup>
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
        <Container variant="wide">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
            Highlights
          </h2>
          <RevealGroup as="ul" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.highlights.map((item) => (
              <Reveal as="li" key={item} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-sm leading-relaxed text-gray-600">{item}</span>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Internal CTA */}
      <section className="border-t border-gray-100 bg-gray-50 py-14">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Build with us
              </p>
              <p className="mt-2 text-lg font-semibold text-gray-800">
                Want something like this for your business?
              </p>
              <p className="mt-1 text-sm text-gray-600">
                We build{" "}
                <Link href="/services" className={inlineLink}>
                  web apps, mobile apps, and cloud infrastructure
                </Link>{" "}
                for African businesses.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button variant="dark" href="/contact">
                Start a Project
              </Button>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-gray-800"
              >
                <ArrowLeft size={14} />
                All Work
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </PageFade>
    </>
  );
}
