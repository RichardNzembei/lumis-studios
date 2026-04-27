import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lumis Studios was founded by Nzembei Reuben, a software engineer based in Nairobi, Kenya. We build quality software for African startups and enterprises at an accessible price point.",
  alternates: { canonical: "https://lumisstudios.site/about" },
  openGraph: {
    title: "About — Lumis Studios",
    description:
      "Lumis Studios was founded by Nzembei Reuben, a software engineer based in Nairobi. We build quality software for African businesses at an accessible price point.",
    url: "https://lumisstudios.site/about",
    images: [{ url: "https://lumisstudios.site/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://lumisstudios.site/opengraph-image"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
