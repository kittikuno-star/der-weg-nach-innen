import type { Metadata } from "next";

import EnglishTempleLocationPage from "@/components/locations/EnglishTempleLocationPage";
import { templeLocations } from "@/data/templeLocations";

const location = templeLocations["schwarzwald"];

export const metadata: Metadata = {
  title: `${location.name} | The Way Within`,
  description: `${location.name} in ${location.city}.`,
};

export default function Page() {
  return <EnglishTempleLocationPage location={location} />;
}
