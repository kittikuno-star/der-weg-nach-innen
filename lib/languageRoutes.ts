const routes: Record<string, { de: string; en: string; th: string }> = {
  "/": { de: "/", en: "/en", th: "/th" },
  "/meditation": { de: "/meditation", en: "/en/meditation", th: "/th/meditation" },
  "/kurse": { de: "/kurse", en: "/en/courses", th: "/th/courses" },
  "/retreats": { de: "/retreats", en: "/en/retreats", th: "/th/retreats" },
  "/standorte": { de: "/standorte", en: "/en/locations", th: "/th/locations" },
  "/inspiration": { de: "/inspiration", en: "/en/inspiration", th: "/th/inspiration" },
  "/ueber-uns": { de: "/ueber-uns", en: "/en/about-us", th: "/th/about-us" },
  "/kontakt": { de: "/kontakt", en: "/en/contact", th: "/th/contact" },
  "/angebote": { de: "/angebote", en: "/en/offers", th: "/th/offers" },
  "/anmeldung": { de: "/anmeldung", en: "/en/registration", th: "/th/registration" },
  "/impressum": { de: "/impressum", en: "/en/legal-notice", th: "/th/legal-notice" },
  "/datenschutz": { de: "/datenschutz", en: "/en/privacy", th: "/th/privacy" },
};

const byPath = Object.values(routes).reduce<Record<string, { de: string; en: string; th: string }>>(
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
