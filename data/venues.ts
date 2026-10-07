export type VenueType = "external-venue";

export type Venue = {
  id: string;
  name: string;
  city: string;
  street: string;
  postalCode: string;
  country: string;
  type: VenueType;
  mapQuery?: string;
  website?: string;
  notes?: string;
};

export const venues: Record<string, Venue> = {
  "stuttgart-vij": {
    id: "stuttgart-vij",
    name: "Verein für Internationale Jugendarbeit",
    city: "Stuttgart",
    street: "Moserstraße 10",
    postalCode: "70182",
    country: "Deutschland",
    type: "external-venue",
  },
};

export function getVenue(id?: string) {
  return id ? venues[id] : undefined;
}
