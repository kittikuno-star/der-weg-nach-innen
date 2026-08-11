import { routes } from "@/lib/routes";
import type { NavigationItem } from "@/types/navigation";

export const navigation: NavigationItem[] = [
  {
    id: "home",
    label: "Startseite",
    href: routes.home,
    visible: true,
  },
  {
    id: "meditation",
    label: "Meditation",
    href: routes.meditation,
    visible: true,
  },
  {
    id: "courses",
    label: "Meditationskurse",
    href: routes.courses,
    visible: true,
  },
  {
    id: "retreats",
    label: "Retreats",
    href: routes.retreats,
    visible: true,
  },
  {
    id: "locations",
    label: "Standorte",
    href: routes.locations,
    visible: true,
  },
  {
    id: "articles",
    label: "Inspiration",
    href: routes.inspiration,
    visible: true,
  },
  {
  id: "about",
  label: "Über uns",
  href: `${routes.about}#menschen-hinter-dem-projekt`,
  visible: true,
},
  {
    id: "contact",
    label: "Kontakt",
    href: routes.contact,
    visible: true,
  },
];