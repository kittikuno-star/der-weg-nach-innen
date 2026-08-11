import type { Retreat } from "../types/retreat";

import { routes } from "@/lib/routes";

export const retreats: Retreat[] = [
  {
    id: "one-day-retreat",
    title: "One Day Retreat",
    shortTitle: "Zeit für Stille",
    description:
      "Ein Tag für Ruhe, Meditation und innere Einkehr.",
    image: "/images/retreat/retreat-hero-01.png",
    href: routes.retreats,

    locations: [
      { locationId: "bavaria", available: true },
      { locationId: "rheinland", available: true },
      { locationId: "berlin", available: false },
      { locationId: "heilbronn", available: false },
      { locationId: "schwarzwald", available: false },
      { locationId: "nrw", available: false },
      { locationId: "hamburg", available: false },
    ],
  },
];