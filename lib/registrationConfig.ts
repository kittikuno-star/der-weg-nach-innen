import type { RegistrationType } from "../types/registration";

export type RegistrationConfig = {
  title: string;
  description: string;
  showPhone: boolean;
  showParticipants: boolean;
  showFood: boolean;
  showHealth: boolean;
  showEmergencyContact: boolean;
  showAccommodation: boolean;
  showPhotoConsent: boolean;
  showNewsletter: boolean;
};

const REGISTRATION_CONFIGS: Record<RegistrationType, RegistrationConfig> = {
  onsite: {
    title: "Zur Meditation anmelden",
    description:
      "Bitte füllen Sie das Formular vollständig aus. Die mit einem Sternchen gekennzeichneten Felder sind Pflichtfelder.",
    showPhone: true,
    showParticipants: true,
    showFood: false,
    showHealth: false,
    showEmergencyContact: false,
    showAccommodation: false,
    showPhotoConsent: true,
    showNewsletter: true,
  },

  online: {
    title: "Zur Online-Meditation anmelden",
    description:
      "Nach erfolgreicher Anmeldung erhalten Sie die Zugangsdaten per E-Mail.",
    showPhone: false,
    showParticipants: false,
    showFood: false,
    showHealth: false,
    showEmergencyContact: false,
    showAccommodation: false,
    showPhotoConsent: false,
    showNewsletter: true,
  },

  "one-day-retreat": {
    title: "Zum One Day Retreat anmelden",
    description:
      "Ihre Angaben helfen uns, den Meditationstag gut vorzubereiten und auf besondere Bedürfnisse Rücksicht zu nehmen.",
    showPhone: true,
    showParticipants: true,
    showFood: true,
    showHealth: true,
    showEmergencyContact: true,
    showAccommodation: false,
    showPhotoConsent: true,
    showNewsletter: true,
  },

  "multi-day-retreat": {
    title: "Zum Retreat anmelden",
    description:
      "Bitte geben Sie auch Informationen zu Ernährung, Gesundheit und Unterkunft an, damit wir Ihren Aufenthalt gut vorbereiten können.",
    showPhone: true,
    showParticipants: true,
    showFood: true,
    showHealth: true,
    showEmergencyContact: true,
    showAccommodation: true,
    showPhotoConsent: true,
    showNewsletter: true,
  },

  ceremony: {
    title: "Zur buddhistischen Veranstaltung anmelden",
    description:
      "Wählen Sie den Tempel vor Ort, den gewünschten Termin und die Teilnahmezeit aus.",
    showPhone: false,
    showParticipants: true,
    showFood: false,
    showHealth: false,
    showEmergencyContact: false,
    showAccommodation: false,
    showPhotoConsent: false,
    showNewsletter: false,
  },
};

export function getRegistrationConfig(
  type: RegistrationType,
): RegistrationConfig {
  return REGISTRATION_CONFIGS[type];
}
