import type { Course } from "../types/course";

import { routes } from "@/lib/routes";

export const courses: Course[] = [
  {
    id: "introduction",
    title: "Einführung in die Meditation",
    shortTitle: "Einführung",
    description:
      "Der ideale Einstieg für alle, die Meditation kennenlernen möchten.",
    image: "/images/courses/course-introduction-01.png",
    href: `${routes.courses}#wochenkurse`,
    category: "Meditation",
    locations: [
      { locationId: "bavaria", available: true },
      { locationId: "rheinland", available: false },
      { locationId: "berlin", available: false },
      { locationId: "heilbronn", available: false },
      { locationId: "schwarzwald", available: false },
      { locationId: "nrw", available: false },
      { locationId: "hamburg", available: false },
    ],
  },
  {
    id: "weekly-course",
    title: "Wöchentliche Meditation",
    shortTitle: "Wochenkurs",
    description:
      "Entwickle Schritt für Schritt eine regelmäßige Meditationspraxis.",
    image: "/images/courses/course-weekly-01.png",
    href: `${routes.courses}#wochenkurse`,
    category: "Meditation",
    locations: [
      { locationId: "bavaria", available: true },
      { locationId: "rheinland", available: false },
      { locationId: "berlin", available: false },
      { locationId: "heilbronn", available: true },
      { locationId: "schwarzwald", available: false },
      { locationId: "nrw", available: false },
      { locationId: "hamburg", available: false },
    ],
  },
  {
    id: "retreat",
    title: "Meditation Retreat",
    shortTitle: "Retreat",
    description:
      "Ein ganzer Tag, um Ruhe, Klarheit und neue Energie zu finden.",
    image: "/images/courses/course-retreat-01.png",
    href: `${routes.retreats}#aktuelle-retreats`,
    category: "Retreat",
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