import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE = "https://jessebeuman.com";
const lastModified = new Date("2026-11-06");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/`, lastModified, priority: 1 },
    { url: `${SITE}/suguru`, lastModified, priority: 0.9 },
    { url: `${SITE}/suguru/how-to-play`, lastModified, priority: 0.8 },
    { url: `${SITE}/suguru/privacy`, lastModified, priority: 0.3 },
    { url: `${SITE}/portfolio`, lastModified, priority: 0.4 },
  ];
}
