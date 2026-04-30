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
  const ogImage = { url: "https://lumisstudios.site/opengraph-image", width: 1200, height: 630 };
  return {
    title: `${project.title} — ${project.category} Case Study`,
    description: `${project.tagline} — A case study by Lumis Studios, Nairobi.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} — Lumis Studios`,
      description: project.tagline,
      url,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Lumis Studios`,
      description: project.tagline,
      images: ["https://lumisstudios.site/opengraph-image"],
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
