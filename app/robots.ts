import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://lumisstudios.site/sitemap.xml",
    host: "https://lumisstudios.site",
  };
}
