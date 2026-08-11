import { NextResponse } from "next/server";

import type {
  RegistrationApiPayload,
  RegistrationApiResponse,
  RegistrationType,
} from "@/types/registration";

const REQUEST_TIMEOUT_MS = 10_000;

const REGISTRATION_TYPES: RegistrationType[] = [
  "onsite",
  "online",
  "one-day-retreat",
  "multi-day-retreat",
];

type GoogleAppsScriptResponse = {
  success?: boolean;
  message?: string;
};

function createJsonResponse(
  body: RegistrationApiResponse,
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

function isRegistrationType(
  value: unknown,
): value is RegistrationType {
  return (
    typeof value === "string" &&
    REGISTRATION_TYPES.includes(value as RegistrationType)
  );
}

function isValidRegistrationPayload(
  value: unknown,
): value is RegistrationApiPayload {
  if (!isRecord(value)) {
    return false;
  }

  if (!isRegistrationType(value.registrationType)) {
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

  if (!isNonEmptyString(value.event)) {
    return false;
  }

  if (
    typeof value.participants !== "number" ||
    !Number.isInteger(value.participants) ||
    value.participants < 1
  ) {
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
    value.status !== "confirmed" &&
    value.status !== "cancelled"
  ) {
    return false;
  }

  if (
    value.registrationType !== "online" &&
    !isNonEmptyString(value.phone)
  ) {
    return false;
  }

  if (
    (value.registrationType === "one-day-retreat" ||
      value.registrationType === "multi-day-retreat") &&
    (!isNonEmptyString(value.emergencyContactName) ||
      !isNonEmptyString(value.emergencyContactPhone))
  ) {
    return false;
  }

  if (
    value.registrationType === "multi-day-retreat" &&
    value.needsAccommodation === "yes" &&
    (!isNonEmptyString(value.arrivalDate) ||
      !isNonEmptyString(value.departureDate) ||
      value.accommodationAccepted !== true)
  ) {
    return false;
  }

  return true;
}

function normalizePayload(
  payload: RegistrationApiPayload,
): RegistrationApiPayload {
  return {
    ...payload,
    firstName: payload.firstName.trim(),
    lastName: payload.lastName.trim(),
    email: payload.email.trim(),
    phone: payload.phone.trim(),
    event: payload.event.trim(),
    eventDate: payload.eventDate.trim(),
    participantNames: payload.participantNames?.trim() ?? "",
    foodOther: payload.foodOther.trim(),
    allergies: payload.allergies.trim(),
    healthNotes: payload.healthNotes.trim(),
    arrivalDate: payload.arrivalDate.trim(),
    departureDate: payload.departureDate.trim(),
    emergencyContactName: payload.emergencyContactName.trim(),
    emergencyContactPhone: payload.emergencyContactPhone.trim(),
    discoverySourceOther: payload.discoverySourceOther.trim(),
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
  const language = new URL(request.url).searchParams.get("lang");
  const isEnglish = language === "en";
  const isThai = language === "th";
  const googleAppsScriptUrl =
    process.env.GOOGLE_APPS_SCRIPT_URL?.trim();
  const googleAppsScriptSecret =
    process.env.GOOGLE_APPS_SCRIPT_SECRET?.trim();

  if (!googleAppsScriptUrl || !googleAppsScriptSecret) {
    console.error(
      "Registration API configuration error: GOOGLE_APPS_SCRIPT_URL or GOOGLE_APPS_SCRIPT_SECRET is missing.",
    );

    return createJsonResponse(
      {
        success: false,
        message: isThai
          ? "ระบบลงทะเบียนไม่พร้อมใช้งานในขณะนี้ กรุณาลองใหม่ภายหลัง"
          : isEnglish
          ? "The registration service is currently unavailable. Please try again later."
          : "Der Anmeldeservice ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut.",
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
        message: isThai
          ? "ไม่สามารถอ่านข้อมูลการลงทะเบียนที่ส่งมาได้"
          : isEnglish
          ? "The submitted registration details could not be read."
          : "Die übermittelten Anmeldedaten konnten nicht gelesen werden.",
      },
      400,
    );
  }

  if (!isValidRegistrationPayload(requestBody)) {
    return createJsonResponse(
      {
        success: false,
        message: isThai
          ? "กรุณาตรวจสอบข้อมูลและกรอกช่องที่จำเป็นให้ครบถ้วน"
          : isEnglish
          ? "Please check your information and complete all required fields."
          : "Bitte überprüfen Sie Ihre Angaben und füllen Sie alle erforderlichen Felder vollständig aus.",
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
        "Google Apps Script registration request failed.",
        {
          status: response.status,
          statusText: response.statusText,
          responseBody,
        },
      );

      return createJsonResponse(
        {
          success: false,
          message: isThai
            ? "ไม่สามารถส่งข้อมูลลงทะเบียนได้ในขณะนี้"
            : isEnglish
            ? "Your registration could not be submitted at this time."
            : responseBody?.message ?? "Die Anmeldung konnte derzeit nicht übermittelt werden.",
        },
        502,
      );
    }

    if (responseBody?.success === false) {
      return createJsonResponse(
        {
          success: false,
          message: isThai
            ? "ไม่สามารถดำเนินการลงทะเบียนได้"
            : isEnglish
            ? "Your registration could not be processed."
            : responseBody.message ?? "Die Anmeldung konnte nicht verarbeitet werden.",
        },
        400,
      );
    }

    return createJsonResponse(
      {
        success: true,
        message: isThai
          ? "ส่งข้อมูลลงทะเบียนเรียบร้อยแล้ว"
          : isEnglish
          ? "Your registration has been submitted successfully."
          : responseBody?.message ?? "Ihre Anmeldung wurde erfolgreich übermittelt.",
      },
      200,
    );
  } catch (error) {
    if (
      error instanceof Error &&
      error.name === "AbortError"
    ) {
      console.error(
        "Google Apps Script registration request timed out.",
      );

      return createJsonResponse(
        {
          success: false,
          message: isThai
            ? "ระบบใช้เวลาในการตอบสนองนานเกินไป กรุณาลองใหม่ภายหลัง"
            : isEnglish
            ? "The registration service is taking too long to respond. Please try again later."
            : "Der Anmeldeservice benötigt derzeit zu lange. Bitte versuchen Sie es später erneut.",
        },
        504,
      );
    }

    console.error(
      "Unexpected registration API error.",
      error,
    );

    return createJsonResponse(
      {
        success: false,
        message: isThai
          ? "เกิดข้อผิดพลาดขณะส่งข้อมูลลงทะเบียน"
          : isEnglish
          ? "An unexpected error occurred while submitting your registration."
          : "Beim Senden Ihrer Anmeldung ist ein unerwarteter Fehler aufgetreten.",
      },
      500,
    );
  } finally {
    clearTimeout(timeoutId);
  }
}
