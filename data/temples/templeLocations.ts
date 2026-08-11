export type TempleLocation = {
  slug: string;
  name: string;
  city: string;
  region: string;
  street: string;
  postalCode: string;
  image?: string;
  description: string;
  mapQuery?: string;
};

export const templeLocations: Record<string, TempleLocation> = {
  bavaria: {
    slug: "bavaria",
    name: "Wat Phra Dhammakaya Bavaria",
    city: "Königsbrunn",
    region: "Bayern",
    street: "Heinkelstraße 1",
    postalCode: "86343",
    image: "/images/temples/bavaria/map-card-01.jpg",
    description:
      "Ein ruhiger und offener Ort für Meditation, buddhistische Praxis und persönliche Begegnung.",
  },
  hamburg: {
    slug: "hamburg",
    name: "Wat Phra Dhammakaya Hamburg",
    city: "Gerdau",
    region: "Niedersachsen",
    street: "Am Silberberg 1",
    postalCode: "29581",
    image: "/images/temples/hamburg/map-card-01.png",
    description:
      "Ein Ort für Meditation, Dhamma und gemeinschaftliche Begegnung in Norddeutschland.",
  },
  berlin: {
    slug: "berlin",
    name: "Wat Phra Dhammakaya Berlin",
    city: "Blankenfelde-Mahlow",
    region: "Brandenburg",
    street: "Dahlewitzer Dorfstraße 40A",
    postalCode: "15827",
    image: "/images/temples/berlin/map-card-01.jpg",
    description:
      "Ein Meditationszentrum im Raum Berlin-Brandenburg mit Angeboten für Ruhe, Achtsamkeit und Dhamma.",
  },
  nrw: {
    slug: "nrw",
    name: "Wat Buddha Nordrhein-Westfalen",
    city: "Moers",
    region: "Nordrhein-Westfalen",
    street: "Römerstraße 586",
    postalCode: "47443",
    image: "/images/temples/nrw/map-card-01.jpg",
    description:
      "Ein buddhistischer Ort der Meditation, des Dhamma und der Gemeinschaft in Nordrhein-Westfalen.",
  },
  rheinland: {
    slug: "rheinland",
    name: "Wat Phra Dhammakaya Rheinland",
    city: "Ingelheim am Rhein",
    region: "Rheinland-Pfalz",
    street: "Mainzer Straße 255",
    postalCode: "55218",
    image: "/images/temples/rheinland/map-card-01.jpg",
    description:
      "Ein ruhiger Meditationsort im Rheinland mit Raum für Praxis, Begegnung und Veranstaltungen.",
  },
  heilbronn: {
    slug: "heilbronn",
    name: "Wat Buddha Heilbronn",
    city: "Wüstenrot",
    region: "Baden-Württemberg",
    street: "Waldeck 7",
    postalCode: "71543",
    image: "/images/temples/heilbronn/map-card-01.png",
    description:
      "Ein buddhistischer Tempel im Raum Heilbronn mit Meditation und gemeinschaftlichen Aktivitäten.",
  },
  schwarzwald: {
    slug: "schwarzwald",
    name: "Wat Phra Dhammakaya Schwarzwald",
    city: "Kippenheim",
    region: "Baden-Württemberg",
    street: "Wilhelm-Franz-Straße 1",
    postalCode: "77971",
    image: "/images/temples/schwarzwald/map-card-01.jpg",
    description:
      "Ein Meditationszentrum im Schwarzwald für innere Ruhe, Dhamma und gemeinschaftliche Praxis.",
  },
};
