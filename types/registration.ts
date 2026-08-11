export type RegistrationType =
  | "onsite"
  | "online"
  | "one-day-retreat"
  | "multi-day-retreat";

export type MeditationExperience =
  | "none"
  | "little"
  | "regular"
  | "many-years";

export type FoodPreference =
  | "vegetarian"
  | "vegan"
  | "gluten-free"
  | "lactose-free"
  | "other";

export type DiscoverySource =
  | "google"
  | "facebook"
  | "instagram"
  | "youtube"
  | "flyer"
  | "friends-family"
  | "temple"
  | "previous-participation"
  | "other";

export type YesNoOption = "yes" | "no";

export interface RegistrationFormData {
  registrationType: RegistrationType;

  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  event: string;
  eventDate: string;
  participants: number;
  participantNames?: string;

  meditationExperience: MeditationExperience | "";

  foodPreferences: FoodPreference[];
  foodOther: string;
  allergies: string;
  healthNotes: string;

  needsAccommodation: YesNoOption | "";
  arrivalDate: string;
  departureDate: string;
  accommodationAccepted: boolean;

  emergencyContactName: string;
  emergencyContactPhone: string;

  discoverySource: DiscoverySource | "";
  discoverySourceOther: string;

  photoConsent: YesNoOption | "";
  newsletterConsent: boolean;
  privacyConsent: boolean;

  message: string;
}

export interface RegistrationApiPayload extends RegistrationFormData {
  submittedAt: string;
  status?: "new" | "confirmed" | "cancelled";
}

export interface RegistrationApiResponse {
  success: boolean;
  message: string;
}
