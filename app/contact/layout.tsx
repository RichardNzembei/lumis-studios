import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Get in touch with Lumis Studios. Tell us what you're building and we'll respond within 24 hours. Based in Nairobi, Kenya.",
  alternates: { canonical: "https://lumisstudios.site/contact" },
  openGraph: {
    title: "Contact — Lumis Studios",
    description:
      "Get in touch with Lumis Studios. Tell us what you're building and we'll respond within 24 hours. Based in Nairobi, Kenya.",
    url: "https://lumisstudios.site/contact",
    images: [{ url: "https://lumisstudios.site/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://lumisstudios.site/opengraph-image"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
