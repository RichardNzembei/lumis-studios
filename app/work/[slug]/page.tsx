import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/work/CaseStudyLayout";
import { projects } from "@/lib/data";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  const url = `https://lumisstudios.site/work/${slug}`;
  return {
    title: `${project.title} — ${project.category}`,
    description: `${project.tagline} — A case study by Lumis Studios, Nairobi.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} — Lumis Studios`,
      description: project.tagline,
      url,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <CaseStudyLayout project={project} />;
}
