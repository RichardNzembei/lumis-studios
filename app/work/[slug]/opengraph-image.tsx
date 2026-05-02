import { ImageResponse } from "next/og";
import { projects } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  const title = project?.title ?? "Case Study";
  const category = project?.category ?? "Software";
  const tagline = project?.tagline ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#86868b",
          }}
        >
          LUMIS STUDIOS — {category.toUpperCase()}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: "#1d1d1f",
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            {title}
          </div>
          {tagline && (
            <div
              style={{
                fontSize: 26,
                color: "#6e6e73",
                maxWidth: 700,
                lineHeight: 1.4,
              }}
            >
              {tagline}
            </div>
          )}
        </div>

        <div
          style={{
            fontSize: 18,
            color: "#86868b",
          }}
        >
          lumisstudios.site
        </div>
      </div>
    ),
    { ...size }
  );
}
