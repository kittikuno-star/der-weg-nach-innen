export type SchoolVisitGroupType =
  | "school-class"
  | "student-group"
  | "teacher-group"
  | "youth-group"
  | "adult-group"
  | "other";

export type SchoolVisitPhotoPermission =
  | "yes"
  | "no"
  | "by-agreement";

export type SchoolVisitPublicationPermission =
  | "website-and-social-media"
  | "website-only"
  | "no";

export type SchoolVisitRequestStatus =
  | "new"
  | "in-progress"
  | "confirmed"
  | "declined"
  | "archived";

export type SchoolVisitApiPayload = {
  requestType: "school-visit";
  submittedAt: string;
  status?: SchoolVisitRequestStatus;

  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  organizationName: string;
  groupType: SchoolVisitGroupType;
  gradeOrAgeGroup: string;
  participantCount: number;

  preferredLocation: string;
  preferredDate: string;
  alternativeDates: string;

  requestedTopics: string[];
  specialNotes: string;
  message: string;

  photoPermission: SchoolVisitPhotoPermission;
  publicationPermission: SchoolVisitPublicationPermission;
  guardianConsentConfirmed: boolean;

  privacyConsent: boolean;
};

export type SchoolVisitApiResponse = {
  success: boolean;
  message: string;
};