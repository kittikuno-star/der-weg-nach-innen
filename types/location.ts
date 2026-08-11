export interface Location {
  id: string;

  name: string;
  shortName: string;

  city: string;
  state: string;

  address: string;
  postcode: string;

  weeklyMeditation: boolean;
  introductionCourse: boolean;
  oneDayRetreat: boolean;

  active: boolean;
}