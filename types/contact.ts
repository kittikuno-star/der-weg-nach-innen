export type ContactTopic =
  | "unsure"
  | "meditation"
  | "retreat"
  | "visit"
  | "school"
  | "event"
  | "other";

export type ContactRequestStatus =
  | "new"
  | "answered"
  | "archived";

export type ContactApiPayload = {
  requestType: "contact";
  submittedAt: string;
  status?: ContactRequestStatus;
  firstName: string;
  lastName: string;
  email: string;
  topic: ContactTopic;
  location: string;
  message: string;
  privacyConsent: boolean;
};

export type ContactApiResponse = {
  success: boolean;
  message: string;
};