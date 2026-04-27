import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Lumis Studios offers web and mobile development, cloud infrastructure, AI and data automation, systems design, MVP development, and ongoing maintenance for businesses across Africa.",
  alternates: { canonical: "https://lumisstudios.site/services" },
  openGraph: {
    title: "Services — Lumis Studios",
    description:
      "Full-stack web and mobile development, cloud infrastructure, AI automation, systems design, and MVP delivery. Built for African businesses.",
    url: "https://lumisstudios.site/services",
    images: [{ url: "https://lumisstudios.site/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://lumisstudios.site/opengraph-image"],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
