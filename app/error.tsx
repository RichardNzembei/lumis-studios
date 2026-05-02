"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white pt-[52px]">
      <Container>
        <div className="max-w-md">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Error</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-800">
            Something went wrong.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            An unexpected error occurred. Try refreshing the page — if it persists, reach out to us.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="dark" onClick={reset}>
              Try Again
            </Button>
            <Button variant="light" href="/">
              Go Home
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
