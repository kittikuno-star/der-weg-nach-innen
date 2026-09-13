export type LanguageCode = "de" | "en" | "th";

export type LocalizedRoute = Record<LanguageCode, string>;

export const localizedRoutes: LocalizedRoute[] = [
  { de: "/", en: "/en", th: "/th" },
  { de: "/meditation", en: "/en/meditation", th: "/th/meditation" },
  { de: "/kurse", en: "/en/courses", th: "/th/courses" },
  { de: "/retreats", en: "/en/retreats", th: "/th/retreats" },
  { de: "/standorte", en: "/en/locations", th: "/th/locations" },
  { de: "/inspiration", en: "/en/inspiration", th: "/th/inspiration" },
  { de: "/ueber-uns", en: "/en/about-us", th: "/th/about-us" },
  { de: "/kontakt", en: "/en/contact", th: "/th/contact" },
  { de: "/angebote", en: "/en/offers", th: "/th/offers" },
  { de: "/angebote/schulangebote", en: "/en/offers/school-programmes", th: "/th/offers" },
  { de: "/angebote/vortraege-gespraeche", en: "/en/offers/talks-and-conversations", th: "/th/offers" },
  { de: "/angebote/zeremonien-veranstaltungen", en: "/en/offers/ceremonies-and-events", th: "/th/offers" },
  { de: "/anmeldung", en: "/en/registration", th: "/th/registration" },
  { de: "/impressum", en: "/en/legal-notice", th: "/th/legal-notice" },
  { de: "/datenschutz", en: "/en/privacy", th: "/th/privacy" },
];

const byPath = localizedRoutes.reduce<Record<string, LocalizedRoute>>(
  (result, item) => ({ ...result, [item.de]: item, [item.en]: item, [item.th]: item }),
  {},
);

export function languageAlternatives(pathname: string) {
  const cleanPath = pathname.replace(/\/$/, "") || "/";
  const locationMatch = cleanPath.match(/^\/(?:en|th)\/locations\/(.+)$/);
  const germanLocationMatch = cleanPath.match(/^\/standorte\/(.+)$/);
  const slug = locationMatch?.[1] ?? germanLocationMatch?.[1];
  if (slug) {
    return { de: `/standorte/${slug}`, en: `/en/locations/${slug}`, th: `/th/locations/${slug}` };
  }
  return byPath[cleanPath] ?? { de: "/", en: "/en", th: "/th" };
}

export function languageFromPathname(pathname: string): LanguageCode {
  if (pathname === "/th" || pathname.startsWith("/th/")) return "th";
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  return "de";
}
