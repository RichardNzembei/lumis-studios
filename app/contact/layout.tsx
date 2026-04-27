import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Lumis Studios. Tell us about your project and we'll respond within 24 hours. Based in Nairobi, Kenya — working with clients across Africa and beyond.",
  alternates: { canonical: "https://lumisstudios.site/contact" },
  openGraph: {
    title: "Contact — Lumis Studios",
    description:
      "Tell us what you're building. We respond within 24 hours. Based in Nairobi, Kenya.",
    url: "https://lumisstudios.site/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
