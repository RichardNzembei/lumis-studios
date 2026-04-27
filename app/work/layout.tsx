import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A portfolio of products built by Lumis Studios — spanning productivity tools, e-commerce, agri-tech, supply chain, fintech, and consumer goods. Real software shipped for real users.",
  alternates: { canonical: "https://lumisstudios.site/work" },
  openGraph: {
    title: "Work — Lumis Studios",
    description:
      "Products built by Lumis Studios — from Kanban tools and e-commerce platforms to farm management apps and fintech. Real software shipped for real users.",
    url: "https://lumisstudios.site/work",
    images: [{ url: "https://lumisstudios.site/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://lumisstudios.site/opengraph-image"],
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
