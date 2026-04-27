import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work & Case Studies",
  description:
    "Portfolio of products by Lumis Studios — e-commerce, agri-tech, supply chain, fintech, and more. Real software shipped for real users.",
  alternates: { canonical: "https://lumisstudios.site/work" },
  openGraph: {
    title: "Work — Lumis Studios",
    description:
      "Portfolio of products by Lumis Studios — e-commerce, agri-tech, supply chain, fintech, and more. Real software shipped for real users.",
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
