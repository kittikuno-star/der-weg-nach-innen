export type TempleProfileSection = {
  eyebrow?: string;
  title: string;
  description: string;
  items?: readonly string[];
};

export type TempleProfile = {
  today: TempleProfileSection;
  currentOffers: TempleProfileSection;
  development: TempleProfileSection;
};

export type TempleFeaturedOffer = {
  eyebrow?: string;
  title: string;
  description: string;
  details?: readonly string[];
  href: string;
  linkLabel: string;
};

export type TempleLocation = {
  slug: string;
  kind: "temple";
  focusAreas?: readonly string[];
  name: string;
  city: string;
  region: string;
  street: string;
  postalCode: string;
  image?: string;
  description: string;
  descriptionEn?: string;
  nameTh?: string;
  descriptionTh?: string;
  mapQuery?: string;
  website?: string;
  facebook?: string;
  contactEmail?: string;
  profile?: Partial<Record<"de" | "en" | "th", TempleProfile>>;
  featuredOffer?: Partial<Record<"de" | "en" | "th", TempleFeaturedOffer>>;
};

export const templeLocationOrder = [
  "hamburg",
  "berlin",
  "nrw",
  "rheinland",
  "heilbronn",
  "schwarzwald",
  "bavaria",
] as const;

export type TempleLocationSlug = (typeof templeLocationOrder)[number];

export const templeLocations: Record<string, TempleLocation> = {
  bavaria: {
    slug: "bavaria",
    kind: "temple",
    focusAreas: ["Deutschsprachige Ordination"],
    name: "Wat Phra Dhammakaya Bavaria",
    city: "Königsbrunn",
    region: "Bayern",
    street: "Heinkelstraße 1",
    postalCode: "86343",
    image: "/images/temples/bavaria/map-card-01.jpg",
    description:
      "Ein ruhiger und offener Ort für Meditation, buddhistische Praxis und persönliche Begegnung.",
    descriptionEn:
      "A peaceful and welcoming place for meditation, Buddhist practice and personal encounters.",
    nameTh: "วัดพระธรรมกายบาวาเรีย",
    descriptionTh: "สถานที่อันสงบและเปิดกว้างสำหรับการทำสมาธิ การปฏิบัติธรรม และการพบปะพูดคุยอย่างเป็นกันเอง",
    website: "https://watbavaria.de/",
    facebook: "https://www.facebook.com/watbavaria.de/",
    featuredOffer: {
      de: {
        eyebrow: "Besonderer Schwerpunkt",
        title: "Deutschsprachige Ordination",
        description:
          "Wat Phra Dhammakaya Bavaria ist ein vollwertiger buddhistischer Tempel. Als besonderen Schwerpunkt bietet der Tempel einmal jährlich eine deutschsprachige Ordination an.",
        details: [
          "Die deutschsprachige Ordination 2026 hat bereits stattgefunden.",
          "Informationen zur nächsten Ordination werden veröffentlicht, sobald der Termin und die Teilnahmebedingungen feststehen.",
        ],
        href: "/angebote/ordination",
        linkLabel: "Mehr über die Ordination erfahren",
      },
    },
  },
  hamburg: {
    slug: "hamburg",
    kind: "temple",
    name: "Wat Phra Dhammakaya Hamburg",
    city: "Gerdau",
    region: "Niedersachsen",
    street: "Am Silberberg 1",
    postalCode: "29581",
    image: "/images/temples/hamburg/map-card-01.png",
    description:
      "Ein Ort für Meditation, Dhamma und gemeinschaftliche Begegnung in Norddeutschland.",
    descriptionEn:
      "A place for meditation, Dhamma and community in northern Germany.",
    nameTh: "วัดพระธรรมกายฮัมบวร์ก",
    descriptionTh: "สถานที่สำหรับการทำสมาธิ ธรรมะ และการพบปะชุมชนในภาคเหนือของประเทศเยอรมนี",
    facebook: "https://www.facebook.com/watphradhammakayahamburg/",
  },
  berlin: {
    slug: "berlin",
    kind: "temple",
    name: "Wat Phra Dhammakaya Berlin",
    city: "Blankenfelde-Mahlow",
    region: "Brandenburg",
    street: "Dahlewitzer Dorfstraße 40A",
    postalCode: "15827",
    image: "/images/temples/berlin/map-card-01.jpg",
    description:
      "Ein Meditationszentrum im Raum Berlin-Brandenburg mit Angeboten für Ruhe, Achtsamkeit und Dhamma.",
    descriptionEn:
      "A meditation centre in the Berlin-Brandenburg region offering space for calm, mindfulness and Dhamma.",
    nameTh: "วัดพระธรรมกายเบอร์ลิน",
    descriptionTh: "ศูนย์ปฏิบัติธรรมในเขตเบอร์ลินและบรันเดนบวร์ก สำหรับความสงบ สติ และการเรียนรู้ธรรมะ",
    facebook: "https://www.facebook.com/dhammakayaberlin/",
  },
  nrw: {
    slug: "nrw",
    kind: "temple",
    name: "Wat Buddha Nordrhein-Westfalen",
    city: "Moers",
    region: "Nordrhein-Westfalen",
    street: "Römerstraße 586",
    postalCode: "47443",
    image: "/images/temples/nrw/map-card-01.jpg",
    description:
      "Ein buddhistischer Ort der Meditation, des Dhamma und der Gemeinschaft in Nordrhein-Westfalen.",
    descriptionEn:
      "A Buddhist place for meditation, Dhamma and community in North Rhine-Westphalia.",
    nameTh: "วัดพุทธนอร์ดไรน์-เวสต์ฟาเลิน",
    descriptionTh: "สถานที่ทางพระพุทธศาสนาสำหรับการทำสมาธิ ธรรมะ และชุมชนในรัฐนอร์ดไรน์-เวสต์ฟาเลิน",
    facebook: "https://www.facebook.com/WatNRW/",
  },
  rheinland: {
    slug: "rheinland",
    kind: "temple",
    name: "Wat Phra Dhammakaya Rheinland",
    city: "Ingelheim am Rhein",
    region: "Rheinland-Pfalz",
    street: "Mainzer Straße 255",
    postalCode: "55218",
    image: "/images/temples/rheinland/map-card-01.jpg",
    description:
      "Ein ruhiger Meditationsort im Rheinland mit Raum für Praxis, Begegnung und Veranstaltungen.",
    descriptionEn:
      "A peaceful meditation centre in the Rhineland with space for practice, encounters and events.",
    nameTh: "วัดพระธรรมกายไรน์ลันด์",
    descriptionTh: "สถานที่ปฏิบัติธรรมอันสงบในแคว้นไรน์ลันด์ สำหรับการฝึกสมาธิ การพบปะ และกิจกรรมต่าง ๆ",
    website: "https://wrl.dmceu.net/",
    facebook: "https://www.facebook.com/DhammakayaFF.RL/",
  },
  heilbronn: {
    slug: "heilbronn",
    kind: "temple",
    name: "Wat Buddha Heilbronn",
    city: "Wüstenrot",
    region: "Baden-Württemberg",
    street: "Waldeck 7",
    postalCode: "71543",
    image: "/images/temples/heilbronn/map-card-01.png",
    description:
      "Ein buddhistischer Tempel im Raum Heilbronn mit Meditation und gemeinschaftlichen Aktivitäten.",
    descriptionEn:
      "A Buddhist temple in the Heilbronn region offering meditation and community activities.",
    nameTh: "วัดพุทธไฮล์บรอนน์",
    descriptionTh: "วัดพุทธในเขตไฮล์บรอนน์ที่มีกิจกรรมสมาธิและกิจกรรมชุมชน",
    website: "https://watheilbronn.de",
    facebook: "https://www.facebook.com/WatBuddhaHeilbronn.de/",
    profile: {
      de: {
        today: {
          eyebrow: "Wat Buddha Heilbronn",
          title: "Tempel heute",
          description:
            "Wat Buddha Heilbronn ist ein vollwertiger buddhistischer Tempel und ein Ort für buddhistische Praxis, Meditation und gemeinschaftliche Begegnung.",
          items: [
            "Der Tempel verfügt über etwa 8 Zimmer.",
            "Es besteht eine Übernachtungsmöglichkeit für ungefähr 16 Personen.",
          ],
        },
        currentOffers: {
          eyebrow: "Meditation und aktuelle Angebote",
          title: "Regelmäßig gemeinsam meditieren",
          description:
            "Die aktuell bestätigten Meditationstermine und Retreats sind nachfolgend aufgeführt.",
          items: [
            "Je nach Nachfrage können zusätzliche Meditationstermine am Wochenende angeboten werden.",
          ],
        },
        development: {
          eyebrow: "Schrittweise Entwicklung",
          title: "Entwicklung zum Meditationszentrum",
          description:
            "Wat Buddha Heilbronn ist ein buddhistischer Tempel und wird schrittweise zu einem Meditationszentrum weiterentwickelt.",
          items: [
            "Feste deutschsprachige Einführungskurse sind vorgesehen.",
            "In Phase 2 sind etwa 3–4 Meditationstage beziehungsweise One Day Retreats pro Jahr geplant.",
            "Später sollen Wochenendretreats, mehrtägige Retreats und Vertiefungsangebote entwickelt werden.",
            "Schulbesuche und Vorträge sollen langfristig eine wichtige Rolle spielen.",
            "Weitere regionale Außenangebote können bei entsprechender Nachfrage hinzukommen.",
          ],
        },
      },
    },
  },
  schwarzwald: {
    slug: "schwarzwald",
    kind: "temple",
    name: "Wat Phra Dhammakaya Schwarzwald",
    city: "Kippenheim",
    region: "Baden-Württemberg",
    street: "Wilhelm-Franz-Straße 1",
    postalCode: "77971",
    image: "/images/temples/schwarzwald/map-card-01.jpg",
    description:
      "Ein Meditationszentrum im Schwarzwald für innere Ruhe, Dhamma und gemeinschaftliche Praxis.",
    descriptionEn:
      "A meditation centre in the Black Forest for inner calm, Dhamma and shared practice.",
    nameTh: "วัดพระธรรมกายชวาร์ซวัลด์",
    descriptionTh: "ศูนย์ปฏิบัติธรรมในชวาร์ซวัลด์ สำหรับความสงบภายใน ธรรมะ และการปฏิบัติร่วมกัน",
    facebook: "https://www.facebook.com/100081282880924/",
  },
};

export const templeLocationList = templeLocationOrder.map(
  (slug) => templeLocations[slug],
);
