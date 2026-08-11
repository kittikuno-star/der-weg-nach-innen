export interface RetreatLocation {
  locationId: string;
  available: boolean;
}

export interface Retreat {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  href: string;
  locations: RetreatLocation[];
}