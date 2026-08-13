export type TempleLocation = {
  slug: string;
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
    descriptionEn:
      "A peaceful and welcoming place for meditation, Buddhist practice and personal encounters.",
    nameTh: "วัดพระธรรมกายบาวาเรีย",
    descriptionTh: "สถานที่อันสงบและเปิดกว้างสำหรับการทำสมาธิ การปฏิบัติธรรม และการพบปะพูดคุยอย่างเป็นกันเอง",
    website: "https://watbavaria.de/",
    facebook: "https://www.facebook.com/watbavaria.de/",
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
    descriptionEn:
      "A place for meditation, Dhamma and community in northern Germany.",
    nameTh: "วัดพระธรรมกายฮัมบวร์ก",
    descriptionTh: "สถานที่สำหรับการทำสมาธิ ธรรมะ และการพบปะชุมชนในภาคเหนือของประเทศเยอรมนี",
    facebook: "https://www.facebook.com/watphradhammakayahamburg/",
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
    descriptionEn:
      "A meditation centre in the Berlin-Brandenburg region offering space for calm, mindfulness and Dhamma.",
    nameTh: "วัดพระธรรมกายเบอร์ลิน",
    descriptionTh: "ศูนย์ปฏิบัติธรรมในเขตเบอร์ลินและบรันเดนบวร์ก สำหรับความสงบ สติ และการเรียนรู้ธรรมะ",
    facebook: "https://www.facebook.com/dhammakayaberlin/",
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
    descriptionEn:
      "A Buddhist place for meditation, Dhamma and community in North Rhine-Westphalia.",
    nameTh: "วัดพุทธนอร์ดไรน์-เวสต์ฟาเลิน",
    descriptionTh: "สถานที่ทางพระพุทธศาสนาสำหรับการทำสมาธิ ธรรมะ และชุมชนในรัฐนอร์ดไรน์-เวสต์ฟาเลิน",
    facebook: "https://www.facebook.com/WatNRW/",
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
    descriptionEn:
      "A peaceful meditation centre in the Rhineland with space for practice, encounters and events.",
    nameTh: "วัดพระธรรมกายไรน์ลันด์",
    descriptionTh: "สถานที่ปฏิบัติธรรมอันสงบในแคว้นไรน์ลันด์ สำหรับการฝึกสมาธิ การพบปะ และกิจกรรมต่าง ๆ",
    website: "https://wrl.dmceu.net/",
    facebook: "https://www.facebook.com/DhammakayaFF.RL/",
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
    descriptionEn:
      "A Buddhist temple in the Heilbronn region offering meditation and community activities.",
    nameTh: "วัดพุทธไฮล์บรอนน์",
    descriptionTh: "วัดพุทธในเขตไฮล์บรอนน์ที่มีกิจกรรมสมาธิและกิจกรรมชุมชน",
    facebook: "https://www.facebook.com/WatBuddhaHeilbronn.de/",
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
    descriptionEn:
      "A meditation centre in the Black Forest for inner calm, Dhamma and shared practice.",
    nameTh: "วัดพระธรรมกายชวาร์ซวัลด์",
    descriptionTh: "ศูนย์ปฏิบัติธรรมในชวาร์ซวัลด์ สำหรับความสงบภายใน ธรรมะ และการปฏิบัติร่วมกัน",
    facebook: "https://www.facebook.com/100081282880924/",
  },
};
