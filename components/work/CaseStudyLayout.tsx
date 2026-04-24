import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { Container } from "@/components/ui/Container";
import type { Project } from "@/lib/data";

interface CaseStudyLayoutProps {
  project: Project;
}

export function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  return (
    <div className="min-h-screen bg-white pt-[52px]">
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
            <p className="mt-4 text-lg leading-relaxed text-gray-600">{project.tagline}</p>
            <p className="mt-1 text-sm text-gray-400">{project.year}</p>
          </div>
        </Container>
      </section>

      {/* Body */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Overview
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">{project.description}</p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                Tech Stack
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
