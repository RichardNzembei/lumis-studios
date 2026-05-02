import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import { Analytics } from "@vercel/analytics/next";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BASE_URL = "https://lumisstudios.site";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Lumis Studios — Software Studio, Nairobi",
    template: "%s | Lumis Studios",
  },
  description:
    "Lumis Studios is a tech studio in Nairobi. We build web apps, mobile apps, cloud infrastructure, and AI solutions for African businesses.",
  keywords: [
    "software studio Nairobi",
    "web development Kenya",
    "mobile app development Africa",
    "React developer Nairobi",
    "Next.js developer Kenya",
    "software engineer Kenya",
    "cloud infrastructure Africa",
    "AI automation Kenya",
    "MVP development Nairobi",
    "Lumis Studios",
  ],
  authors: [{ name: "Nzembei Reuben", url: BASE_URL }],
  creator: "Lumis Studios",
  publisher: "Lumis Studios",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: BASE_URL,
    siteName: "Lumis Studios",
    title: "Lumis Studios — Software Studio, Nairobi",
    description:
      "We build web apps, mobile apps, cloud infrastructure, and AI solutions for African businesses.",
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumis Studios — Software Studio, Nairobi",
    description:
      "We build web apps, mobile apps, cloud infrastructure, and AI solutions for African businesses.",
    creator: "@lumisstudios",
    images: [`${BASE_URL}/opengraph-image`],
  },
  icons: {
    icon: "/lumis-favicon.svg",
    shortcut: "/lumis-favicon.svg",
    apple: "/lumis-favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Lumis Studios",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/lumis-logo-primary-light.svg`,
      },
      description:
        "A technology studio based in Nairobi, Kenya, building web applications, mobile apps, cloud infrastructure, and AI-powered solutions.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      sameAs: [
        "https://www.linkedin.com/company/lumis-studios/",
        "https://github.com/lumis-studios",
      ],
      founder: {
        "@type": "Person",
        name: "Nzembei Reuben",
        url: "https://www.linkedin.com/in/nzembei-reuben",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Lumis Studios",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gray-800 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Nav />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
