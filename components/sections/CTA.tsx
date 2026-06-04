import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

export default function CTA() {
  return (
    <section className="bg-gray-800 py-20">
      <Container>
        <RevealGroup className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <Reveal className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Have a project in mind?
            </h2>
            {/* In dark mode this band inverts to light, so the muted copy needs a dark tone */}
            <p className="mt-3 text-base leading-relaxed text-gray-400 dark:text-[#5d5d62]">
              Let&apos;s talk about what you&apos;re building. No lengthy proposals — just a direct
              conversation.
            </p>
          </Reveal>

          <Reveal className="flex flex-wrap gap-3">
            <Button variant="light" href="/contact">
              Get in Touch
            </Button>
            <Button variant="ghost" href="/work">
              See Our Work
            </Button>
          </Reveal>
        </RevealGroup>
      </Container>
    </section>
  );
}
