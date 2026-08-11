import type { Metadata } from "next";

import TempleLocationPage from "@/components/locations/TempleLocationPage";
import { templeLocations } from "@/data/templeLocations";

const location = templeLocations["hamburg"];

export const metadata: Metadata = {
  title: `${location.name} | Der Weg nach innen`,
  description: `${location.name} in ${location.city}.`,
};

export default function Page() {
  return <TempleLocationPage location={location} />;
}
