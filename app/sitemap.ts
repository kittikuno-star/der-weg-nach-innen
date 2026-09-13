import type { MetadataRoute } from "next";

import { templeLocations } from "@/data/templeLocations";
import { localizedRoutes, type LocalizedRoute } from "@/lib/languageRoutes";
import { absoluteUrl } from "@/lib/seo";

function sitemapAlternates(route: LocalizedRoute) {
  return {
    languages: {
      "de-DE": absoluteUrl(route.de),
      en: absoluteUrl(route.en),
      th: absoluteUrl(route.th),
      "x-default": absoluteUrl(route.de),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const locationRoutes = Object.keys(templeLocations).map<LocalizedRoute>((slug) => ({
    de: `/standorte/${slug}`,
    en: `/en/locations/${slug}`,
    th: `/th/locations/${slug}`,
  }));
  const routes = [...localizedRoutes, ...locationRoutes];

  return routes.flatMap((route) =>
    (["de", "en", "th"] as const).map((language) => ({
      url: absoluteUrl(route[language]),
      changeFrequency: route.de === "/" ? "weekly" as const : "monthly" as const,
      priority: route.de === "/" ? 1 : 0.7,
      alternates: sitemapAlternates(route),
    })),
  ).filter((entry, index, entries) => entries.findIndex((candidate) => candidate.url === entry.url) === index);
}
