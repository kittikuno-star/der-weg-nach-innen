export type RetreatEvent = {
  id: string;
  temple: string;
  dateLabel: string;
  dateValue: string;
  time: string;
  street: string;
  postalCode: string;
  city: string;
  region: string;
  price: string;
  image: string;
  imageAlt: string;
  registrationType: "one-day-retreat" | "multi-day-retreat";
};

export const retreatEvents: RetreatEvent[] = [
  {
    id: "rheinland-2026-08-08",
    temple: "Wat Phra Dhammakaya Rheinland",
    dateLabel: "Samstag, 08. August 2026",
    dateValue: "2026-08-08",
    time: "09:30 – 17:00 Uhr",
    street: "Mainzer Straße 255",
    postalCode: "55218",
    city: "Ingelheim am Rhein",
    region: "Rheinland-Pfalz",
    price: "25 €",
    image: "/images/temples/rheinland/map-card-01.jpg",
    imageAlt: "Wat Phra Dhammakaya Rheinland in Ingelheim am Rhein",
    registrationType: "one-day-retreat",
  },
  {
    id: "bavaria-2026-08-30",
    temple: "Wat Phra Dhammakaya Bavaria",
    dateLabel: "Sonntag, 30. August 2026",
    dateValue: "2026-08-30",
    time: "09:30 – 17:00 Uhr",
    street: "Heinkelstraße 1",
    postalCode: "86343",
    city: "Königsbrunn",
    region: "Bayern",
    price: "25 €",
    image: "/images/temples/bavaria/map-card-01.jpg",
    imageAlt: "Wat Phra Dhammakaya Bavaria in Königsbrunn",
    registrationType: "one-day-retreat",
  },
  {
    id: "heilbronn-2026-10-17",
    temple: "Wat Buddha Heilbronn",
    dateLabel: "Samstag, 17. Oktober 2026",
    dateValue: "2026-10-17",
    time: "09:30 – 17:00 Uhr",
    street: "Waldeck 7",
    postalCode: "71543",
    city: "Wüstenrot",
    region: "Baden-Württemberg",
    price: "Information folgt",
    image: "/images/temples/heilbronn/map-card-01.png",
    imageAlt: "Wat Buddha Heilbronn in Wüstenrot",
    registrationType: "one-day-retreat",
  },
];

export function getRetreatEvent(id?: string) {
  return retreatEvents.find((event) => event.id === id);
}

export function getRetreatEventsByTemple(temple: string) {
  return retreatEvents.filter((event) => event.temple === temple);
}
