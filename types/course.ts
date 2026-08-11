export type CourseLocation = {
  locationId: string;
  available: boolean;
};

export type Course = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  href: string;
  category: string;
  locations: CourseLocation[];
};