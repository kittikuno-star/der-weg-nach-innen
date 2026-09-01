import { templeLocations } from "@/data/templeLocations";

export type BuddhistEventCategory =
  | "monthly"
  | "buddhist-holiday"
  | "teacher-day"
  | "temple-festival";

export type BuddhistEventDate = {
  value: string;
  label: string;
};

export type BuddhistEvent = {
  id: string;
  title: string;
  thaiTitle?: string;
  category: BuddhistEventCategory;
  description: string;
  dates: BuddhistEventDate[];
  templeSlugs: string[];
  participationOptions?: string[];
  registrationOpen?: boolean;
  registrationUrl?: string;
  detailsUrl?: string;
};

export const allTempleSlugs = Object.keys(templeLocations);

export const buddhistEvents: BuddhistEvent[] = [
  {
    id: "bucha-khao-phra",
    title: "Bucha Khao Phra",
    thaiTitle: "วันบูชาข้าวพระ",
    category: "monthly",
    description:
      "Am ersten Sonntag des Monats kommen Menschen in Dhammakaya-Tempeln und Meditationszentren weltweit zur zeitgleichen Meditation zusammen. Im Mittelpunkt stehen die Verehrung von Buddha, Dhamma und Sangha, die gemeinsame Meditation und das symbolische Darbringen sorgfältig vorbereiteter Speisen und Blumen.",
    dates: [
      { value: "2026-09-06", label: "Sonntag, 6. September 2026" },
      { value: "2026-10-04", label: "Sonntag, 4. Oktober 2026" },
      { value: "2026-11-01", label: "Sonntag, 1. November 2026" },
      { value: "2026-12-06", label: "Sonntag, 6. Dezember 2026" },
    ],
    templeSlugs: allTempleSlugs,
    participationOptions: [
      "Weltweite Meditation – Sommerzeit 04:30 Uhr / Winterzeit 03:30 Uhr",
      "Vormittagszeremonie um 10:00 Uhr und gemeinsames Mittagessen",
      "Gesamtes Programm",
    ],
    registrationOpen: true,
  },
  {
    id: "khun-yai-gedenktag",
    title: "Gedenktag von Khun Yai Achan Chandra Khonnokyoong",
    thaiTitle: "วันคล้ายวันเกิดคุณยายอาจารย์มหารัตนอุบาสิกาจันทร์ ขนนกยูง",
    category: "teacher-day",
    description:
      "Ein Tag des dankbaren Erinnerns an Khun Yai Achan Chandra Khonnokyoong, die Gründerin von Wat Phra Dhammakaya und eine bedeutende Lehrerin der Dhammakaya-Tradition.",
    dates: [{ value: "2026-01-19", label: "Montag, 19. Januar 2026" }],
    templeSlugs: allTempleSlugs,
  },
  {
    id: "maha-pujaniya-achariya",
    title: "Tag der großen Dhammakaya-Meister",
    thaiTitle: "วันมหาปูชนียาจารย์",
    category: "teacher-day",
    description:
      "An diesem Tag wird der großen Meister gedacht, durch deren Lehre und Wirken die Dhammakaya-Tradition weitergegeben wurde.",
    dates: [{ value: "2026-02-03", label: "Dienstag, 3. Februar 2026" }],
    templeSlugs: allTempleSlugs,
  },
  {
    id: "makha-puja",
    title: "Makha-Puja",
    thaiTitle: "วันมาฆบูชา",
    category: "buddhist-holiday",
    description:
      "Makha-Puja erinnert an die spontane Zusammenkunft von 1.250 erleuchteten Mönchen beim Buddha. Der Feiertag lädt zu Meditation, Rezitation, guten Taten und bewusster Lebensführung ein.",
    dates: [{ value: "2026-03-03", label: "Dienstag, 3. März 2026" }],
    templeSlugs: allTempleSlugs,
  },
  {
    id: "songkran",
    title: "Songkran-Fest",
    thaiTitle: "งานบุญวันสงกรานต์",
    category: "temple-festival",
    description:
      "Das traditionelle thailändische Neujahrsfest verbindet buddhistische Praxis, Dankbarkeit gegenüber älteren Menschen und gemeinschaftliche Begegnung im Tempel.",
    dates: [{ value: "2026-04-19", label: "Sonntag, 19. April 2026" }],
    templeSlugs: ["bavaria"],
  },
  {
    id: "dhammajayo-day",
    title: "Ehrentag von Luang Por Dhammajayo",
    thaiTitle: "วันคล้ายวันเกิดพระเดชพระคุณหลวงพ่อธัมมชโย",
    category: "teacher-day",
    description:
      "Ein Tag der Dankbarkeit für die Lehre und das langjährige Wirken von Luang Por Dhammajayo für Meditation, Dhamma und die Verbreitung buddhistischer Werte.",
    dates: [{ value: "2026-04-22", label: "Mittwoch, 22. April 2026" }],
    templeSlugs: allTempleSlugs,
  },
  {
    id: "vesak",
    title: "Visakha-Puja (Vesak)",
    thaiTitle: "วันวิสาขบูชา",
    category: "buddhist-holiday",
    description:
      "Vesak erinnert an Geburt, Erwachen und Parinibbana des Buddha. Der bedeutende buddhistische Feiertag wird mit Meditation, Rezitation und verdienstvollen Handlungen begangen.",
    dates: [{ value: "2026-05-31", label: "Sonntag, 31. Mai 2026" }],
    templeSlugs: allTempleSlugs,
  },
  {
    id: "asalha-puja",
    title: "Asalha-Puja",
    thaiTitle: "วันอาสาฬหบูชา",
    category: "buddhist-holiday",
    description:
      "Asalha-Puja erinnert an die erste Lehrrede des Buddha und die Entstehung der buddhistischen Gemeinschaft. Im Mittelpunkt stehen Dhamma, Meditation und Rezitation.",
    dates: [{ value: "2026-07-29", label: "Mittwoch, 29. Juli 2026" }],
    templeSlugs: allTempleSlugs,
  },
  {
    id: "buddhist-lent",
    title: "Beginn der buddhistischen Regenzeit",
    thaiTitle: "วันเข้าพรรษา",
    category: "buddhist-holiday",
    description:
      "Mit dem Beginn der Regenzeit beginnt für die Mönchsgemeinschaft eine dreimonatige Zeit vertiefter Praxis. Viele Laien nehmen sich in dieser Zeit ebenfalls besondere heilsame Vorsätze vor.",
    dates: [{ value: "2026-07-30", label: "Donnerstag, 30. Juli 2026" }],
    templeSlugs: allTempleSlugs,
  },
  {
    id: "dhammachai-day",
    title: "Dhammachai-Tag",
    thaiTitle: "วันธรรมชัย",
    category: "teacher-day",
    description:
      "Der Dhammachai-Tag erinnert an einen wichtigen Abschnitt im Wirken von Luang Por Dhammajayo und lädt zur gemeinsamen Meditation und zum Studium des Dhamma ein.",
    dates: [{ value: "2026-08-27", label: "Donnerstag, 27. August 2026" }],
    templeSlugs: allTempleSlugs,
  },
  {
    id: "khun-yai-passing",
    title: "Gedenktag des Verlassens des Körpers von Khun Yai Achan",
    thaiTitle: "วันคล้ายวันละสังขารคุณยายอาจารย์ฯ",
    category: "teacher-day",
    description:
      "Die Gemeinschaft erinnert sich in Dankbarkeit an das Leben, die Meditationserfahrung und das vorbildliche Wirken von Khun Yai Achan Chandra Khonnokyoong.",
    dates: [{ value: "2026-09-10", label: "Donnerstag, 10. September 2026" }],
    templeSlugs: allTempleSlugs,
  },
  {
    id: "europe-mudita",
    title: "Europäische Ehrungszeremonie",
    thaiTitle:
      "พิธีมุทิตาสักการะพระมหาเถระ พระเถระ เจ้าหน้าที่ วัดพระธรรมกายภาคพื้นทวีปยุโรป",
    category: "temple-festival",
    description:
      "Eine gemeinsame Ehrungszeremonie für hochrangige Mönche, Mönche und Mitarbeitende der Dhammakaya-Tempel in Europa.",
    dates: [{ value: "2026-09-19", label: "19. bis 20. September 2026" }],
    templeSlugs: ["bavaria"],
  },
  {
    id: "teacher-vijja-dhammakaya",
    title: "Tag des Lehrers, der Vijja Dhammakaya wiederentdeckte",
    thaiTitle: "วันครูผู้ค้นพบวิชชาธรรมกาย",
    category: "teacher-day",
    description:
      "Dieser Gedenktag ehrt Luang Pu Sodh Candasaro und die Wiederentdeckung von Vijja Dhammakaya. Die gemeinsame Praxis steht im Mittelpunkt.",
    dates: [{ value: "2026-09-26", label: "Samstag, 26. September 2026" }],
    templeSlugs: allTempleSlugs,
  },
  {
    id: "luang-pu-birthday",
    title: "Geburtstag von Luang Pu Sodh Candasaro",
    thaiTitle: "วันคล้ายวันเกิดพระเดชพระคุณหลวงปู่",
    category: "teacher-day",
    description:
      "Ein Gedenktag zu Ehren von Luang Pu Sodh Candasaro, dem Wiederentdecker von Vijja Dhammakaya.",
    dates: [{ value: "2026-10-10", label: "Samstag, 10. Oktober 2026" }],
    templeSlugs: allTempleSlugs,
  },
  {
    id: "end-buddhist-lent",
    title: "Ende der buddhistischen Regenzeit",
    thaiTitle: "วันออกพรรษา",
    category: "buddhist-holiday",
    description:
      "Das Ende der dreimonatigen Regenzeit ist ein Anlass für gemeinsame Praxis, Rückblick und die Fortsetzung heilsamer Vorsätze im Alltag.",
    dates: [{ value: "2026-10-26", label: "Montag, 26. Oktober 2026" }],
    templeSlugs: allTempleSlugs,
  },
  {
    id: "kathina-dhammakaya",
    title: "Kathinazeremonie von Wat Phra Dhammakaya",
    thaiTitle: "พิธีทอดกฐินวัดพระธรรมกาย",
    category: "buddhist-holiday",
    description:
      "Nach dem Ende der Regenzeit werden der Mönchsgemeinschaft in einer gemeinschaftlichen Zeremonie Kathina-Roben und weitere notwendige Dinge dargebracht.",
    dates: [],
    templeSlugs: allTempleSlugs,
  },
  {
    id: "kathina-local",
    title: "Kathinafest 2026 in Bavaria",
    thaiTitle: "พิธีทอดกฐิน",
    category: "temple-festival",
    description:
      "Das Kathinafest findet einmal im Jahr nach dem Ende der Regenzeitklausur statt. Im Wat Phra Dhammakaya Bavaria erwarten Sie die Kathinazeremonie, Rezitationen, Dhammaimpulse, ein gemeinsames Mittagessen und Zeit für Begegnung.",
    dates: [
      {
        value: "2026-11-08",
        label: "Sonntag, 8. November 2026 · Beginn 9:30 Uhr",
      },
    ],
    templeSlugs: ["bavaria"],
    registrationOpen: true,
    registrationUrl: "https://forms.gle/kyCfxFFEoYfo8Vs1A",
    detailsUrl: "https://watbavaria.de/?p=168",
  },
  {
    id: "loy-krathong",
    title: "Loy Krathong",
    thaiTitle: "วันลอยกระทง",
    category: "temple-festival",
    description:
      "Loy Krathong ist ein thailändisches Kulturfest, das Dankbarkeit, Loslassen und gemeinschaftliche Begegnung miteinander verbindet.",
    dates: [{ value: "2026-11-24", label: "Dienstag, 24. November 2026" }],
    templeSlugs: ["bavaria"],
  },
  {
    id: "dattajivo-day",
    title: "Ehrentag von Luang Por Dattajivo",
    thaiTitle: "วันอายุวัฒนมงคลหลวงพ่อทัตตชีโว",
    category: "teacher-day",
    description:
      "Ein Tag der Dankbarkeit für die Lehre und das langjährige Wirken von Luang Por Dattajivo.",
    dates: [{ value: "2026-12-21", label: "Montag, 21. Dezember 2026" }],
    templeSlugs: allTempleSlugs,
  },
  {
    id: "new-years-eve",
    title: "Jahresabschluss und Rezitation zum Jahreswechsel",
    thaiTitle: "วันสิ้นปี / สวดมนต์ข้ามปี",
    category: "buddhist-holiday",
    description:
      "Wir schließen das Jahr bewusst mit gemeinsamer Meditation und Rezitation ab und begrüßen das neue Jahr mit einem ruhigen, heilsamen Geist.",
    dates: [{ value: "2026-12-31", label: "Donnerstag, 31. Dezember 2026" }],
    templeSlugs: allTempleSlugs,
  },
];

export function getBuddhistEvent(id?: string) {
  return buddhistEvents.find((event) => event.id === id);
}

export function getBuddhistEventsByTemple(templeSlug: string) {
  return buddhistEvents.filter((event) => event.templeSlugs.includes(templeSlug));
}
