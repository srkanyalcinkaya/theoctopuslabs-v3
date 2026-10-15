import { MetadataRoute } from "next";
import { getEntrySlugs } from "@/lib/cms-content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://theoctopuslabs.com";
  const currentDate = new Date();

  // Ana sayfalar - yüksek öncelik
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ];

  // Hizmet sayfaları - yüksek öncelik
  const servicePages = [
    {
      url: `${baseUrl}/bespoke-web-development`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/web-development`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/web-design`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/e-commerce`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mobile-application-development`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/search-engine-optimisation`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/graphic-design`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/social-media`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ];

  // Diğer sayfalar - orta öncelik
  const otherPages = [
    {
      url: `${baseUrl}/quote`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/offer`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/payment`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
  ];

  // Blog posts and products from DatoCMS; the static pages still ship if the CMS is unreachable.
  const cmsPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/products`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.8 },
  ];
  try {
    const [posts, products] = await Promise.all([getEntrySlugs("post"), getEntrySlugs("product")]);
    for (const [base, entries] of [["blog", posts], ["products", products]] as const) {
      for (const entry of entries) {
        cmsPages.push({
          url: `${baseUrl}/${base}/${entry.slug}`,
          lastModified: new Date(entry.date),
          changeFrequency: "monthly",
          priority: 0.7,
        });
      }
    }
  } catch (error) {
    console.error("sitemap: could not load DatoCMS entries", error);
  }

  return [...mainPages, ...servicePages, ...cmsPages, ...otherPages];
}
