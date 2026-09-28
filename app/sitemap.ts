import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/posts";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllSlugs().map((slug) => ({
    url: `${siteConfig.url}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: siteConfig.url, lastModified: new Date() },
    { url: `${siteConfig.url}/blog`, lastModified: new Date() },
    { url: `${siteConfig.url}/review`, lastModified: new Date() },
    ...posts,
  ];
}
