import { NextResponse } from "next/server";

import type {
  SchoolVisitApiPayload,
  SchoolVisitApiResponse,
  SchoolVisitGroupType,
  SchoolVisitPhotoPermission,
  SchoolVisitPublicationPermission,
} from "@/types/school-visit";

const REQUEST_TIMEOUT_MS = 30_000;

const GROUP_TYPES: SchoolVisitGroupType[] = [
  "school-class",
  "student-group",
  "teacher-group",
  "youth-group",
  "adult-group",
  "other",
];

const PHOTO_PERMISSIONS: SchoolVisitPhotoPermission[] = [
  "yes",
  "no",
  "by-agreement",
];

const PUBLICATION_PERMISSIONS: SchoolVisitPublicationPermission[] = [
  "website-and-social-media",
  "website-only",
  "no",
];

type GoogleAppsScriptResponse = {
  success?: boolean;
  message?: string;
};

function createJsonResponse(
  body: SchoolVisitApiResponse,
  status: number,
) {
  return NextResponse.json(body, { status });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: unknown): value is string {
  return (
    typeof value === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
  );
}

function isGroupType(
  value: unknown,
): value is SchoolVisitGroupType {
  return (
    typeof value === "string" &&
    GROUP_TYPES.includes(value as SchoolVisitGroupType)
  );
}

function isPhotoPermission(
  value: unknown,
): value is SchoolVisitPhotoPermission {
  return (
    typeof value === "string" &&
    PHOTO_PERMISSIONS.includes(
      value as SchoolVisitPhotoPermission,
    )
  );
}

function isPublicationPermission(
  value: unknown,
): value is SchoolVisitPublicationPermission {
  return (
    typeof value === "string" &&
    PUBLICATION_PERMISSIONS.includes(
      value as SchoolVisitPublicationPermission,
    )
  );
}

function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) &&
    value.every((item) => typeof item === "string")
  );
}

function isValidSchoolVisitPayload(
  value: unknown,
): value is SchoolVisitApiPayload {
  if (!isRecord(value)) {
    return false;
  }

  if (value.requestType !== "school-visit") {
    return false;
  }

  if (!isNonEmptyString(value.submittedAt)) {
    return false;
  }

  if (!isNonEmptyString(value.firstName)) {
    return false;
  }

  if (!isNonEmptyString(value.lastName)) {
    return false;
  }

  if (!isValidEmail(value.email)) {
    return false;
  }

  if (!isNonEmptyString(value.phone)) {
    return false;
  }

  if (!isNonEmptyString(value.organizationName)) {
    return false;
  }

  if (!isGroupType(value.groupType)) {
    return false;
  }

  if (!isNonEmptyString(value.gradeOrAgeGroup)) {
    return false;
  }

  if (
    typeof value.participantCount !== "number" ||
    !Number.isInteger(value.participantCount) ||
    value.participantCount < 1
  ) {
    return false;
  }

  if (!isNonEmptyString(value.preferredLocation)) {
    return false;
  }

  if (!isNonEmptyString(value.preferredDate)) {
    return false;
  }

  if (!isStringArray(value.requestedTopics)) {
    return false;
  }

  if (!isPhotoPermission(value.photoPermission)) {
    return false;
  }

  if (
    !isPublicationPermission(
      value.publicationPermission,
    )
  ) {
    return false;
  }

  if (
    value.photoPermission !== "no" &&
    value.guardianConsentConfirmed !== true
  ) {
    return false;
  }

  if (value.privacyConsent !== true) {
    return false;
  }

  if (
    value.status !== undefined &&
    value.status !== "new" &&
    value.status !== "in-progress" &&
    value.status !== "confirmed" &&
    value.status !== "declined" &&
    value.status !== "archived"
  ) {
    return false;
  }

  return true;
}

function normalizePayload(
  payload: SchoolVisitApiPayload,
): SchoolVisitApiPayload {
  return {
    ...payload,
    firstName: payload.firstName.trim(),
    lastName: payload.lastName.trim(),
    email: payload.email.trim(),
    phone: payload.phone.trim(),
    organizationName: payload.organizationName.trim(),
    gradeOrAgeGroup: payload.gradeOrAgeGroup.trim(),
    preferredLocation: payload.preferredLocation.trim(),
    preferredDate: payload.preferredDate.trim(),
    alternativeDates: payload.alternativeDates.trim(),
    requestedTopics: payload.requestedTopics
      .map((topic) => topic.trim())
      .filter(Boolean),
    specialNotes: payload.specialNotes.trim(),
    message: payload.message.trim(),
    status: payload.status ?? "new",
  };
}

async function readJsonResponse(
  response: Response,
): Promise<GoogleAppsScriptResponse | null> {
  try {
    const body: unknown = await response.json();

    if (!isRecord(body)) {
      return null;
    }

    return {
      success:
        typeof body.success === "boolean"
          ? body.success
          : undefined,
      message:
        typeof body.message === "string"
          ? body.message
          : undefined,
    };
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  const googleAppsScriptUrl =
    process.env.GOOGLE_APPS_SCRIPT_URL?.trim();

  const googleAppsScriptSecret =
    process.env.GOOGLE_APPS_SCRIPT_SECRET?.trim();

  if (!googleAppsScriptUrl || !googleAppsScriptSecret) {
    console.error(
      "School visit API configuration error: GOOGLE_APPS_SCRIPT_URL or GOOGLE_APPS_SCRIPT_SECRET is missing.",
    );

    return createJsonResponse(
      {
        success: false,
        message:
          "Der Anfrageservice ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
      },
      500,
    );
  }

  let requestBody: unknown;

  try {
    requestBody = await request.json();
  } catch {
    return createJsonResponse(
      {
        success: false,
        message:
          "Die übermittelten Angaben konnten nicht gelesen werden.",
      },
      400,
    );
  }

  if (!isValidSchoolVisitPayload(requestBody)) {
    return createJsonResponse(
      {
        success: false,
        message:
          "Bitte überprüfen Sie Ihre Angaben und füllen Sie alle erforderlichen Felder vollständig aus.",
      },
      400,
    );
  }

  const payload = normalizePayload(requestBody);
  const controller = new AbortController();

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(googleAppsScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
        integrationSecret: googleAppsScriptSecret,
      }),
      signal: controller.signal,
      cache: "no-store",
    });

    const responseBody = await readJsonResponse(response);

    if (!response.ok) {
      console.error(
        "Google Apps Script school visit request failed.",
        {
          status: response.status,
          statusText: response.statusText,
          responseBody,
        },
      );

      return createJsonResponse(
        {
          success: false,
          message:
            responseBody?.message ??
            "Ihre Anfrage konnte derzeit nicht übermittelt werden.",
        },
        502,
      );
    }

    if (responseBody?.success === false) {
      return createJsonResponse(
        {
          success: false,
          message:
            responseBody.message ??
            "Ihre Anfrage konnte nicht verarbeitet werden.",
        },
        400,
      );
    }

    return createJsonResponse(
      {
        success: true,
        message:
          responseBody?.message ??
          "Ihre Anfrage wurde erfolgreich übermittelt.",
      },
      200,
    );
  } catch (error) {
    if (
      error instanceof Error &&
      error.name === "AbortError"
    ) {
      console.error(
        "Google Apps Script school visit request timed out.",
      );

      return createJsonResponse(
        {
          success: false,
          message:
            "Der Anfrageservice benötigt derzeit zu lange. Bitte versuchen Sie es später erneut.",
        },
        504,
      );
    }

    console.error(
      "Unexpected school visit API error.",
      error,
    );

    return createJsonResponse(
      {
        success: false,
        message:
          "Beim Senden Ihrer Anfrage ist ein unerwarteter Fehler aufgetreten.",
      },
      500,
    );
  } finally {
    clearTimeout(timeoutId);
  }
}