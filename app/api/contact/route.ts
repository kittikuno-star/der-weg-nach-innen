import { NextResponse } from "next/server";

import type {
  ContactApiPayload,
  ContactApiResponse,
  ContactLocation,
  ContactTopic,
} from "@/types/contact";

const REQUEST_TIMEOUT_MS = 30_000;

const CONTACT_TOPICS: ContactTopic[] = [
  "unsure",
  "meditation",
  "retreat",
  "visit",
  "school",
  "event",
  "other",
];

const CONTACT_LOCATIONS: ContactLocation[] = [
  "general",
  "bavaria",
  "heilbronn",
  "rheinland",
  "hamburg",
  "berlin",
  "nrw",
  "schwarzwald",
];

type GoogleAppsScriptResponse = {
  success?: boolean;
  message?: string;
};

function createJsonResponse(
  body: ContactApiResponse,
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

function isContactTopic(value: unknown): value is ContactTopic {
  return (
    typeof value === "string" &&
    CONTACT_TOPICS.includes(value as ContactTopic)
  );
}

function isContactLocation(value: unknown): value is ContactLocation {
  return (
    typeof value === "string" &&
    CONTACT_LOCATIONS.includes(value as ContactLocation)
  );
}

function isValidContactPayload(
  value: unknown,
): value is ContactApiPayload {
  if (!isRecord(value)) {
    return false;
  }

  if (value.requestType !== "contact") {
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

  if (!isContactTopic(value.topic)) {
    return false;
  }

  if (!isContactLocation(value.location)) {
    return false;
  }

  if (!isNonEmptyString(value.message)) {
    return false;
  }

  if (value.privacyConsent !== true) {
    return false;
  }

  if (!isNonEmptyString(value.submittedAt)) {
    return false;
  }

  if (
    value.status !== undefined &&
    value.status !== "new" &&
    value.status !== "answered" &&
    value.status !== "archived"
  ) {
    return false;
  }

  return true;
}

function normalizePayload(
  payload: ContactApiPayload,
): ContactApiPayload {
  return {
    ...payload,
    firstName: payload.firstName.trim(),
    lastName: payload.lastName.trim(),
    email: payload.email.trim(),
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
      "Contact API configuration error: GOOGLE_APPS_SCRIPT_URL or GOOGLE_APPS_SCRIPT_SECRET is missing.",
    );

    return createJsonResponse(
      {
        success: false,
        message:
          "Der Kontaktservice ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
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
          "Die übermittelten Kontaktdaten konnten nicht gelesen werden.",
      },
      400,
    );
  }

  if (!isValidContactPayload(requestBody)) {
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
        "Google Apps Script contact request failed.",
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
            "Ihre Nachricht konnte derzeit nicht übermittelt werden.",
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
            "Ihre Nachricht konnte nicht verarbeitet werden.",
        },
        400,
      );
    }

    return createJsonResponse(
      {
        success: true,
        message:
          responseBody?.message ??
          "Ihre Nachricht wurde erfolgreich übermittelt.",
      },
      200,
    );
  } catch (error) {
    if (
      error instanceof Error &&
      error.name === "AbortError"
    ) {
      console.error(
        "Google Apps Script contact request timed out.",
      );

      return createJsonResponse(
        {
          success: false,
          message:
            "Der Kontaktservice benötigt derzeit zu lange. Bitte versuchen Sie es später erneut.",
        },
        504,
      );
    }

    console.error(
      "Unexpected contact API error.",
      error,
    );

    return createJsonResponse(
      {
        success: false,
        message:
          "Beim Senden Ihrer Nachricht ist ein unerwarteter Fehler aufgetreten.",
      },
      500,
    );
  } finally {
    clearTimeout(timeoutId);
  }
}
