import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";
import CTA from "@/components/sections/CTA";

const BASE_URL = "https://lumisstudios.site";

export const metadata: Metadata = {
  alternates: { canonical: BASE_URL },
  openGraph: { url: BASE_URL },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Work />
      <Process />
      <TechStack />
      <CTA />
    </>
  );
}
