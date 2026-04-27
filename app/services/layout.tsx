import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Development Services",
  description:
    "Web and mobile development, cloud infrastructure, AI automation, systems design, and MVP delivery by Lumis Studios, Nairobi.",
  alternates: { canonical: "https://lumisstudios.site/services" },
  openGraph: {
    title: "Services — Lumis Studios",
    description:
      "Web and mobile development, cloud infrastructure, AI automation, systems design, and MVP delivery by Lumis Studios, Nairobi.",
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
