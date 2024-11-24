import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sheikh-othman.vercel.app";
  const dPages = [];
  const lastModified = new Date();

  for (let i = 0; i < 37; i++) {
    dPages.push({
      url: `${baseUrl}/${i + 1}`,
      lastModified: lastModified,
    });
  }
  return [
    {
      url: `${baseUrl}`,
      lastModified: lastModified,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastModified,
    },
    {
      url: `${baseUrl}/sheikh-othman-al-kamees`,
      lastModified: lastModified,
    },
    {
      url: `${baseUrl}/program`,
      lastModified: lastModified,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: lastModified,
    },
    ...dPages,
  ];
}
