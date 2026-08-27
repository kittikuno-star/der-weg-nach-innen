export type WeeklyCourseEvent = {
  id: string;
  temple: string;
  status: "active" | "planned";
  schedule?: string;
  weekday?: string;
  time?: string;
  street: string;
  postalCode: string;
  city: string;
  region: string;
  price: "kostenfrei";
  registrationRequired?: boolean;
};

export const weeklyCourseEvents: WeeklyCourseEvent[] = [
  {
    id: "bavaria-weekly-wednesday",
    temple: "Wat Phra Dhammakaya Bavaria",
    status: "active",
    schedule: "Jeden Mittwoch",
    weekday: "Mittwoch",
    time: "19:30–21:00 Uhr",
    street: "Heinkelstraße 1",
    postalCode: "86343",
    city: "Königsbrunn",
    region: "Bayern",
    price: "kostenfrei",
    registrationRequired: true,
  },
  {
    id: "heilbronn-weekly-wednesday",
    temple: "Wat Buddha Heilbronn",
    status: "active",
    schedule: "Jeden Mittwoch · ab März 2027",
    weekday: "Mittwoch",
    time: "19:00–20:30 Uhr",
    street: "Waldeck 7",
    postalCode: "71543",
    city: "Wüstenrot",
    region: "Baden-Württemberg",
    price: "kostenfrei",
    registrationRequired: true,
  },
  {
    id: "heilbronn-weekly-friday",
    temple: "Wat Buddha Heilbronn",
    status: "active",
    schedule: "Jeden Freitag",
    weekday: "Freitag",
    time: "13:30–14:30 Uhr",
    street: "Waldeck 7",
    postalCode: "71543",
    city: "Wüstenrot",
    region: "Baden-Württemberg",
    price: "kostenfrei",
    registrationRequired: true,
  },
  {
    id: "rheinland-weekly-planned",
    temple: "Wat Phra Dhammakaya Rheinland",
    status: "planned",
    street: "Mainzer Straße 255",
    postalCode: "55218",
    city: "Ingelheim am Rhein",
    region: "Rheinland-Pfalz",
    price: "kostenfrei",
  },
  {
    id: "nrw-weekly-planned",
    temple: "Wat Buddha Nordrhein-Westfalen",
    status: "planned",
    street: "Römerstraße 586",
    postalCode: "47443",
    city: "Moers",
    region: "Nordrhein-Westfalen",
    price: "kostenfrei",
  },
  {
    id: "schwarzwald-weekly-planned",
    temple: "Wat Phra Dhammakaya Schwarzwald",
    status: "planned",
    street: "Wilhelm-Franz-Straße 1",
    postalCode: "77971",
    city: "Kippenheim",
    region: "Baden-Württemberg",
    price: "kostenfrei",
  },
  {
    id: "hamburg-weekly-planned",
    temple: "Wat Phra Dhammakaya Hamburg",
    status: "planned",
    street: "Am Silberberg 1",
    postalCode: "29581",
    city: "Gerdau",
    region: "Niedersachsen",
    price: "kostenfrei",
  },
  {
    id: "berlin-weekly-planned",
    temple: "Wat Phra Dhammakaya Berlin",
    status: "planned",
    street: "Dahlewitzer Dorfstraße 40A",
    postalCode: "15827",
    city: "Blankenfelde-Mahlow",
    region: "Brandenburg",
    price: "kostenfrei",
  },
];

export function getWeeklyCourseEvent(id?: string) {
  return weeklyCourseEvents.find(
    (course) => course.id === id && course.status === "active",
  );
}

export function getWeeklyCourseEventsByTemple(temple: string) {
  return weeklyCourseEvents.filter(
    (course) => course.temple === temple && course.status === "active",
  );
}

export type WeeklyCourseGroup = {
  id: string;
  temple: string;
  status: "active" | "planned";
  street: string;
  postalCode: string;
  city: string;
  region: string;
  price: "kostenfrei";
  registrationRequired: boolean;
  events: WeeklyCourseEvent[];
};

export function getWeeklyCourseGroups(): WeeklyCourseGroup[] {
  const groups = new Map<string, WeeklyCourseGroup>();

  for (const course of weeklyCourseEvents) {
    const existing = groups.get(course.temple);

    if (existing) {
      existing.events.push(course);
      continue;
    }

    groups.set(course.temple, {
      id: course.id,
      temple: course.temple,
      status: course.status,
      street: course.street,
      postalCode: course.postalCode,
      city: course.city,
      region: course.region,
      price: course.price,
      registrationRequired: course.registrationRequired !== false,
      events: [course],
    });
  }

  return Array.from(groups.values());
}

export function getWeeklyCourseGroup(id?: string) {
  if (!id) return undefined;

  const selectedCourse = weeklyCourseEvents.find(
    (course) => course.id === id && course.status === "active",
  );

  if (!selectedCourse) return undefined;

  const group = getWeeklyCourseGroups().find(
    (group) => group.temple === selectedCourse.temple && group.status === "active",
  );

  if (!group) return undefined;

  return {
    ...group,
    events: [
      selectedCourse,
      ...group.events.filter((event) => event.id !== selectedCourse.id),
    ],
  };
}
