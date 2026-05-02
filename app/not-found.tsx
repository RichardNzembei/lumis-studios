import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white pt-[52px]">
      <Container>
        <div className="max-w-md">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">404</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-800">
            Page not found.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="dark" href="/">
              Go Home
            </Button>
            <Button variant="light" href="/work">
              See Our Work
            </Button>
          </div>
          <p className="mt-8 text-sm text-gray-400">
            Looking to start a project?{" "}
            <Link
              href="/contact"
              className="text-gray-600 underline underline-offset-2 transition-colors duration-200 hover:text-gray-800"
            >
              Get in touch.
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}
