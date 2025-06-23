import { env } from "@/env.mjs";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all static routes
  const routes = [""];
  const staticPages = routes.map((route) => ({
    url: `${env.NEXT_PUBLIC_APP_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily" as const,
    priority: 1,
  }));

  return [...staticPages];
}
