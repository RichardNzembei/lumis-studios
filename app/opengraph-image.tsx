import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#86868b",
            marginBottom: 32,
          }}
        >
          LUMIS STUDIOS — NAIROBI, KENYA
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#1d1d1f",
            lineHeight: 1.1,
            marginBottom: 32,
          }}
        >
          We build software
          <br />
          that works.
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#6e6e73",
            maxWidth: 700,
          }}
        >
          Web apps, mobile apps, cloud infrastructure, and AI solutions for African businesses.
        </div>
      </div>
    ),
    { ...size }
  );
}
