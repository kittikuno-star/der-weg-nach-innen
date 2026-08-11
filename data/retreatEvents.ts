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
};

export const retreatEvents: RetreatEvent[] = [
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
    price: "25 €",
    image: "/images/temples/heilbronn/map-card-01.png",
    imageAlt: "Wat Buddha Heilbronn in Wüstenrot",
  },
];

export function getRetreatEvent(id?: string) {
  return retreatEvents.find((event) => event.id === id);
}

export function getRetreatEventsByTemple(temple: string) {
  return retreatEvents.filter((event) => event.temple === temple);
}
