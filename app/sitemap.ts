import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";

const BASE_URL = "https://lumisstudios.site";

const SITE_UPDATED = new Date("2026-04-27");

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies = projects.map((p) => ({
    url: `${BASE_URL}/work/${p.slug}`,
    lastModified: SITE_UPDATED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: BASE_URL, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/work`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    ...caseStudies,
  ];
}
