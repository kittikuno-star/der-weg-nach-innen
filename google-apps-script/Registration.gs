/**
 * Google Apps Script für die Website
 * „Der Weg nach innen“.
 *
 * Verarbeitet:
 *
 * 1. Retreat-Anmeldungen
 * 2. Allgemeine Kontaktanfragen
 * 3. Anfragen für Schulbesuche und Gruppenführungen
 *
 * Erforderliche Skripteigenschaften:
 *
 * SCRIPT_SECRET
 * SPREADSHEET_ID
 *
 * Optionale Skripteigenschaft:
 *
 * ADMIN_EMAIL
 *
 * Die Web-App muss ausgeführt werden als:
 * - Ausführen als: Ich
 * - Zugriff: Jeder
 */

const REGISTRATION_SHEET_NAME =
  "Registrations";

const CONTACT_SHEET_NAME =
  "ContactRequests";

const SCHOOL_VISIT_SHEET_NAME =
  "SchoolVisitRequests";

const SCRIPT_SECRET_FALLBACK =
  "CHANGE_THIS_TO_A_LONG_RANDOM_SECRET";

const ADMIN_EMAIL_FALLBACK =
  "kittikuno@gmail.com";

const EMAIL_SENDER_NAME =
  "Phra Kittikuno";

const REGISTRATION_HEADERS = [
  "submittedAt",
  "status",
  "registrationType",
  "event",
  "eventDate",
  "firstName",
  "lastName",
  "email",
  "phone",
  "participants",
  "participantNames",
  "meditationExperience",
  "foodPreferences",
  "foodOther",
  "allergies",
  "healthNotes",
  "needsAccommodation",
  "arrivalDate",
  "departureDate",
  "accommodationAccepted",
  "emergencyContactName",
  "emergencyContactPhone",
  "discoverySource",
  "discoverySourceOther",
  "photoConsent",
  "newsletterConsent",
  "privacyConsent",
  "message",
  "sensitiveDataDeletedAt",
  "rowDeletionDueAt"
];

const CONTACT_HEADERS = [
  "submittedAt",
  "status",
  "requestType",
  "firstName",
  "lastName",
  "email",
  "topic",
  "location",
  "message",
  "privacyConsent",
  "deletionDueAt"
];

const SCHOOL_VISIT_HEADERS = [
  "submittedAt",
  "status",
  "requestType",
  "firstName",
  "lastName",
  "email",
  "phone",
  "organizationName",
  "groupType",
  "gradeOrAgeGroup",
  "participantCount",
  "preferredLocation",
  "preferredDate",
  "alternativeDates",
  "requestedTopics",
  "specialNotes",
  "message",
  "photoPermission",
  "publicationPermission",
  "guardianConsentConfirmed",
  "privacyConsent",
  "deletionDueAt"
];

/**
 * Testet, ob die Web-App erreichbar ist.
 */
function doGet() {
  return ContentService
    .createTextOutput(
      JSON.stringify({
        success: true,
        service:
          "Der Weg nach innen website service",
        status: "online"
      })
    )
    .setMimeType(
      ContentService.MimeType.JSON
    );
}

/**
 * Empfängt alle unterstützten Formulartypen.
 */
function doPost(e) {
  try {
    if (
      !e ||
      !e.postData ||
      !e.postData.contents
    ) {
      throw new Error(
        "Request body is missing"
      );
    }

    const payload =
      JSON.parse(e.postData.contents);

    verifySecret_(
      payload.integrationSecret
    );

    delete payload.integrationSecret;

    if (
      payload.requestType ===
      "school-visit"
    ) {
      return processSchoolVisitRequest_(
        payload
      );
    }

    if (
      payload.requestType === "contact"
    ) {
      return processContactRequest_(
        payload
      );
    }

    if (payload.registrationType) {
      return processRegistration_(
        payload
      );
    }

    throw new Error(
      "Unknown request type"
    );
  } catch (error) {
    console.error(
      "Request error:",
      error && error.stack
        ? error.stack
        : error
    );

    return jsonResponse_({
      success: false,
      message:
        error && error.message
          ? error.message
          : "Die Anfrage konnte nicht verarbeitet werden."
    });
  }
}

/**
 * Verarbeitet eine Retreat-Anmeldung.
 */
function processRegistration_(payload) {
  validateRegistrationPayload_(
    payload
  );

  const sheet =
    getOrCreateRegistrationSheet_();

  const deletionDueAt =
    calculateRegistrationDeletionDueAt_(
      payload.eventDate
    );

  const row =
    REGISTRATION_HEADERS.map(
      (header) => {
        if (
          header ===
          "sensitiveDataDeletedAt"
        ) {
          return "";
        }

        if (
          header ===
          "rowDeletionDueAt"
        ) {
          return deletionDueAt;
        }

        return formatSheetValue_(
          payload[header]
        );
      }
    );

  sheet.appendRow(row);

  try {
    sendRegistrationEmails_(
      payload
    );
  } catch (emailError) {
    console.error(
      "Registration email error:",
      emailError &&
      emailError.stack
        ? emailError.stack
        : emailError
    );
  }

  return jsonResponse_({
    success: true,
    message:
      "Ihre Anmeldung wurde erfolgreich übermittelt."
  });
}

/**
 * Verarbeitet eine allgemeine Kontaktanfrage.
 */
function processContactRequest_(payload) {
  validateContactPayload_(payload);

  const sheet =
    getOrCreateContactSheet_();

  const deletionDueAt =
    calculateRequestDeletionDueAt_();

  const row =
    CONTACT_HEADERS.map(
      (header) => {
        if (
          header === "deletionDueAt"
        ) {
          return deletionDueAt;
        }

        return formatSheetValue_(
          payload[header]
        );
      }
    );

  sheet.appendRow(row);

  try {
    sendContactEmails_(payload);
  } catch (emailError) {
    console.error(
      "Contact email error:",
      emailError &&
      emailError.stack
        ? emailError.stack
        : emailError
    );
  }

  return jsonResponse_({
    success: true,
    message:
      "Ihre Nachricht wurde erfolgreich übermittelt."
  });
}

/**
 * Verarbeitet eine Anfrage für einen
 * Schulbesuch oder eine Gruppenführung.
 */
function processSchoolVisitRequest_(
  payload
) {
  validateSchoolVisitPayload_(
    payload
  );

  const sheet =
    getOrCreateSchoolVisitSheet_();

  const deletionDueAt =
    calculateRequestDeletionDueAt_();

  const row =
    SCHOOL_VISIT_HEADERS.map(
      (header) => {
        if (
          header === "deletionDueAt"
        ) {
          return deletionDueAt;
        }

        return formatSheetValue_(
          payload[header]
        );
      }
    );

  sheet.appendRow(row);

  try {
    sendSchoolVisitEmails_(
      payload
    );
  } catch (emailError) {
    console.error(
      "School visit email error:",
      emailError &&
      emailError.stack
        ? emailError.stack
        : emailError
    );
  }

  return jsonResponse_({
    success: true,
    message:
      "Ihre Anfrage für einen Schulbesuch wurde erfolgreich übermittelt."
  });
}

/**
 * Versendet die beiden E-Mails
 * für eine Retreat-Anmeldung.
 */
function sendRegistrationEmails_(
  payload
) {
  const adminEmail =
    getAdminEmail_();

  sendRegistrationConfirmationEmail_(
    payload,
    adminEmail
  );

  sendRegistrationAdminEmail_(
    payload,
    adminEmail
  );
}

/**
 * Bestätigung an die angemeldete Person.
 */
function sendRegistrationConfirmationEmail_(
  payload,
  adminEmail
) {
  const isCeremony =
    payload.registrationType ===
    "ceremony";
  const recipientEmail =
    String(
      payload.email || ""
    ).trim();

  if (!recipientEmail) {
    throw new Error(
      "Recipient email is missing"
    );
  }

  const fullName =
    formatFullName_(payload);

  const eventDate =
    formatGermanDate_(
      payload.eventDate
    );

  const eventName =
    formatEventName_(
      payload.event
    );

  const eventDetails =
    buildEventDetailsText_(
      eventName,
      eventDate
    );

  const subject = isCeremony
    ? "Bestätigung Ihrer Anmeldung zur buddhistischen Veranstaltung"
    : "Bestätigung Ihrer Anmeldung zum One Day Retreat";

  const registrationIntro =
    isCeremony
      ? "vielen Dank für Ihre Anmeldung zur buddhistischen Veranstaltung"
      : "vielen Dank für Ihre Anmeldung zu unserem One Day Retreat";

  const welcomeText =
    isCeremony
      ? "Wir freuen uns, Sie bei dieser gemeinsamen Veranstaltung im Tempel begrüßen zu dürfen."
      : "Wir freuen uns sehr, Sie an diesem besonderen Meditationstag persönlich begrüßen zu dürfen.";

  const plainTextBody = [
    `Guten Tag ${fullName},`,
    "",
    registrationIntro +
      eventDetails +
      ".",
    "",
    welcomeText,
    "",
    "Falls Sie noch Fragen haben, können Sie sich jederzeit gerne an uns wenden.",
    "",
    "Mit freundlichen Grüßen",
    "",
    "Phra Kittikuno",
    "Der Weg nach innen",
    adminEmail
  ].join("\n");

  const htmlBody = `
    <div style="
      font-family: Arial, Helvetica, sans-serif;
      font-size: 16px;
      line-height: 1.65;
      color: #24332f;
      max-width: 640px;
    ">
      <p>
        Guten Tag ${escapeHtml_(fullName)},
      </p>

      <p>
        ${escapeHtml_(registrationIntro)}${escapeHtml_(eventDetails)}.
      </p>

      <p>
        ${escapeHtml_(welcomeText)}
      </p>

      <p>
        Falls Sie noch Fragen haben, können Sie sich
        jederzeit gerne an uns wenden.
      </p>

      <p style="margin-top: 32px;">
        Mit freundlichen Grüßen
      </p>

      <p>
        Phra Kittikuno<br>
        Der Weg nach innen<br>
        <a
          href="mailto:${escapeHtml_(adminEmail)}"
          style="color: #153b36;"
        >
          ${escapeHtml_(adminEmail)}
        </a>
      </p>
    </div>
  `;

  MailApp.sendEmail({
    to: recipientEmail,
    subject: subject,
    body: plainTextBody,
    htmlBody: htmlBody,
    name: EMAIL_SENDER_NAME,
    replyTo: adminEmail
  });
}

/**
 * Interne Benachrichtigung
 * über eine Retreat-Anmeldung.
 */
function sendRegistrationAdminEmail_(
  payload,
  adminEmail
) {
  const isCeremony =
    payload.registrationType ===
    "ceremony";
  const fullName =
    formatFullName_(payload);

  const eventDate =
    formatGermanDate_(
      payload.eventDate
    );

  const eventName =
    formatEventName_(
      payload.event
    );

  const participantCount =
    String(
      payload.participants || "1"
    );

  const phone =
    String(
      payload.phone || ""
    ).trim();

  const participantNames =
    formatListValue_(
      payload.participantNames
    );

  const message =
    String(
      payload.message || ""
    ).trim();

  const subjectParts = [
    isCeremony
      ? "Neue Anmeldung zur buddhistischen Veranstaltung:"
      : "Neue Retreat-Anmeldung:",
    fullName
  ];

  if (eventName) {
    subjectParts.push(
      `– ${eventName}`
    );
  }

  const subject =
    subjectParts.join(" ");

  const lines = [
    isCeremony
      ? "Eine neue Anmeldung zu einer buddhistischen Veranstaltung ist eingegangen."
      : "Eine neue Retreat-Anmeldung ist eingegangen.",
    "",
    `Name: ${fullName}`,
    `E-Mail: ${payload.email}`,
    `Telefon: ${
      phone || "Nicht angegeben"
    }`,
    `Veranstaltung: ${
      eventName || "Nicht angegeben"
    }`,
    `Datum: ${
      eventDate || "Nicht angegeben"
    }`,
    `Anzahl der Teilnehmenden: ${participantCount}`,
    `Weitere Namen: ${
      participantNames ||
      "Nicht angegeben"
    }`,
    `Übernachtung benötigt: ${
      formatBoolean_(
        payload.needsAccommodation
      )
    }`,
    "",
    "Nachricht:",
    message || "Keine Nachricht",
    "",
    "Weitere Angaben, insbesondere vertrauliche Gesundheitsinformationen, finden Sie in der Google-Tabelle.",
    "",
    "Phra Kittikuno",
    "Der Weg nach innen"
  ];

  MailApp.sendEmail({
    to: adminEmail,
    subject: subject,
    body: lines.join("\n"),
    name: EMAIL_SENDER_NAME,
    replyTo:
      String(
        payload.email || ""
      ).trim()
  });
}

/**
 * Versendet die beiden E-Mails
 * für eine allgemeine Kontaktanfrage.
 */
function sendContactEmails_(payload) {
  const adminEmail =
    getAdminEmail_();

  sendContactConfirmationEmail_(
    payload,
    adminEmail
  );

  sendContactAdminEmail_(
    payload,
    adminEmail
  );
}

/**
 * Bestätigung an die anfragende Person.
 */
function sendContactConfirmationEmail_(
  payload,
  adminEmail
) {
  const recipientEmail =
    String(
      payload.email || ""
    ).trim();

  if (!recipientEmail) {
    throw new Error(
      "Recipient email is missing"
    );
  }

  const fullName =
    formatFullName_(payload);

  const subject =
    "Bestätigung Ihrer Nachricht";

  const plainTextBody = [
    `Guten Tag ${fullName},`,
    "",
    "vielen Dank für Ihre Nachricht.",
    "",
    "Ihre Anfrage ist bei uns eingegangen. Wir werden uns so bald wie möglich bei Ihnen melden.",
    "",
    "Mit freundlichen Grüßen",
    "",
    "Phra Kittikuno",
    "Der Weg nach innen",
    adminEmail
  ].join("\n");

  const htmlBody = `
    <div style="
      font-family: Arial, Helvetica, sans-serif;
      font-size: 16px;
      line-height: 1.65;
      color: #24332f;
      max-width: 640px;
    ">
      <p>
        Guten Tag ${escapeHtml_(fullName)},
      </p>

      <p>
        vielen Dank für Ihre Nachricht.
      </p>

      <p>
        Ihre Anfrage ist bei uns eingegangen.
        Wir werden uns so bald wie möglich
        bei Ihnen melden.
      </p>

      <p style="margin-top: 32px;">
        Mit freundlichen Grüßen
      </p>

      <p>
        Phra Kittikuno<br>
        Der Weg nach innen<br>
        <a
          href="mailto:${escapeHtml_(adminEmail)}"
          style="color: #153b36;"
        >
          ${escapeHtml_(adminEmail)}
        </a>
      </p>
    </div>
  `;

  MailApp.sendEmail({
    to: recipientEmail,
    subject: subject,
    body: plainTextBody,
    htmlBody: htmlBody,
    name: EMAIL_SENDER_NAME,
    replyTo: adminEmail
  });
}

/**
 * Interne Benachrichtigung
 * über eine allgemeine Kontaktanfrage.
 */
function sendContactAdminEmail_(
  payload,
  adminEmail
) {
  const fullName =
    formatFullName_(payload);

  const topic =
    formatContactTopic_(
      payload.topic
    );

  const location =
    formatTempleLocation_(
      payload.location
    );

  const message =
    String(
      payload.message || ""
    ).trim();

  const subject =
    `Neue Kontaktanfrage: ${topic} – ${fullName}`;

  const lines = [
    "Eine neue Kontaktanfrage ist eingegangen.",
    "",
    `Name: ${fullName}`,
    `E-Mail: ${payload.email}`,
    `Thema: ${topic}`,
    `Gewählter Tempel: ${location}`,
    "",
    "Nachricht:",
    message || "Keine Nachricht",
    "",
    "Phra Kittikuno",
    "Der Weg nach innen"
  ];

  MailApp.sendEmail({
    to: adminEmail,
    subject: subject,
    body: lines.join("\n"),
    name: EMAIL_SENDER_NAME,
    replyTo:
      String(
        payload.email || ""
      ).trim()
  });
}

/**
 * Versendet die beiden E-Mails
 * für einen Schulbesuch.
 */
function sendSchoolVisitEmails_(
  payload
) {
  const adminEmail =
    getAdminEmail_();

  sendSchoolVisitConfirmationEmail_(
    payload,
    adminEmail
  );

  sendSchoolVisitAdminEmail_(
    payload,
    adminEmail
  );
}

/**
 * Bestätigung an die Lehrkraft
 * oder Kontaktperson.
 */
function sendSchoolVisitConfirmationEmail_(
  payload,
  adminEmail
) {
  const recipientEmail =
    String(
      payload.email || ""
    ).trim();

  if (!recipientEmail) {
    throw new Error(
      "Recipient email is missing"
    );
  }

  const fullName =
    formatFullName_(payload);

  const subject =
    "Bestätigung Ihrer Anfrage für einen Schulbesuch";

  const plainTextBody = [
    `Guten Tag ${fullName},`,
    "",
    "vielen Dank für Ihre Anfrage und Ihr Interesse an einem Besuch unseres Tempels.",
    "",
    "Ihre Anfrage ist bei uns eingegangen. Wir werden die Angaben prüfen und uns anschließend persönlich bei Ihnen melden.",
    "",
    "Mit freundlichen Grüßen",
    "",
    "Phra Kittikuno",
    "Der Weg nach innen",
    adminEmail
  ].join("\n");

  const htmlBody = `
    <div style="
      font-family: Arial, Helvetica, sans-serif;
      font-size: 16px;
      line-height: 1.65;
      color: #24332f;
      max-width: 640px;
    ">
      <p>
        Guten Tag ${escapeHtml_(fullName)},
      </p>

      <p>
        vielen Dank für Ihre Anfrage und Ihr Interesse
        an einem Besuch unseres Tempels.
      </p>

      <p>
        Ihre Anfrage ist bei uns eingegangen.
        Wir werden die Angaben prüfen und uns
        anschließend persönlich bei Ihnen melden.
      </p>

      <p style="margin-top: 32px;">
        Mit freundlichen Grüßen
      </p>

      <p>
        Phra Kittikuno<br>
        Der Weg nach innen<br>
        <a
          href="mailto:${escapeHtml_(adminEmail)}"
          style="color: #153b36;"
        >
          ${escapeHtml_(adminEmail)}
        </a>
      </p>
    </div>
  `;

  MailApp.sendEmail({
    to: recipientEmail,
    subject: subject,
    body: plainTextBody,
    htmlBody: htmlBody,
    name: EMAIL_SENDER_NAME,
    replyTo: adminEmail
  });
}

/**
 * Interne Benachrichtigung
 * über einen Schulbesuch.
 */
function sendSchoolVisitAdminEmail_(
  payload,
  adminEmail
) {
  const fullName =
    formatFullName_(payload);

  const organizationName =
    String(
      payload.organizationName || ""
    ).trim();

  const groupType =
    formatSchoolGroupType_(
      payload.groupType
    );

  const preferredLocation =
    formatTempleLocation_(
      payload.preferredLocation
    );

  const preferredDate =
    formatGermanDate_(
      payload.preferredDate
    );

  const alternativeDates =
    String(
      payload.alternativeDates || ""
    ).trim();

  const requestedTopics =
    formatSchoolVisitTopics_(
      payload.requestedTopics
    );

  const specialNotes =
    String(
      payload.specialNotes || ""
    ).trim();

  const message =
    String(
      payload.message || ""
    ).trim();

  const photoPermission =
    formatPhotoPermission_(
      payload.photoPermission
    );

  const publicationPermission =
    formatPublicationPermission_(
      payload.publicationPermission
    );

  const guardianConsent =
    formatBoolean_(
      payload.guardianConsentConfirmed
    );

  const subject =
    `Neue Anfrage für einen Schulbesuch: ${
      organizationName ||
      "Schule oder Gruppe"
    } – ${fullName}`;

  const lines = [
    "Eine neue Anfrage für einen Schulbesuch oder eine Gruppenführung ist eingegangen.",
    "",
    "Kontaktperson",
    `Name: ${fullName}`,
    `E-Mail: ${payload.email}`,
    `Telefon: ${payload.phone}`,
    "",
    "Schule oder Gruppe",
    `Name: ${
      organizationName ||
      "Nicht angegeben"
    }`,
    `Art der Gruppe: ${groupType}`,
    `Klassenstufe oder Altersgruppe: ${payload.gradeOrAgeGroup}`,
    `Anzahl der Personen: ${payload.participantCount}`,
    "",
    "Besuchswunsch",
    `Standort: ${preferredLocation}`,
    `Gewünschter Termin: ${
      preferredDate ||
      "Nicht angegeben"
    }`,
    `Alternative Termine: ${
      alternativeDates ||
      "Nicht angegeben"
    }`,
    "",
    "Gewünschte Inhalte",
    requestedTopics ||
      "Keine Inhalte ausgewählt",
    "",
    "Fotoaufnahmen",
    `Fotos aufnehmen: ${photoPermission}`,
    `Veröffentlichung: ${publicationPermission}`,
    `Einwilligungen der Erziehungsberechtigten bestätigt: ${guardianConsent}`,
    "",
    "Besondere Hinweise:",
    specialNotes ||
      "Keine besonderen Hinweise",
    "",
    "Weitere Nachricht:",
    message || "Keine Nachricht",
    "",
    "Phra Kittikuno",
    "Der Weg nach innen"
  ];

  MailApp.sendEmail({
    to: adminEmail,
    subject: subject,
    body: lines.join("\n"),
    name: EMAIL_SENDER_NAME,
    replyTo:
      String(
        payload.email || ""
      ).trim()
  });
}

/**
 * Öffnet oder erstellt das Tabellenblatt
 * für Retreat-Anmeldungen.
 */
function getOrCreateRegistrationSheet_() {
  return getOrCreateSheet_(
    REGISTRATION_SHEET_NAME,
    REGISTRATION_HEADERS
  );
}

/**
 * Öffnet oder erstellt das Tabellenblatt
 * für allgemeine Kontaktanfragen.
 */
function getOrCreateContactSheet_() {
  return getOrCreateSheet_(
    CONTACT_SHEET_NAME,
    CONTACT_HEADERS
  );
}

/**
 * Öffnet oder erstellt das Tabellenblatt
 * für Schulbesuche.
 */
function getOrCreateSchoolVisitSheet_() {
  return getOrCreateSheet_(
    SCHOOL_VISIT_SHEET_NAME,
    SCHOOL_VISIT_HEADERS
  );
}

/**
 * Öffnet oder erstellt ein Tabellenblatt
 * und richtet die Kopfzeile ein.
 */
function getOrCreateSheet_(
  sheetName,
  headers
) {
  const scriptProperties =
    PropertiesService
      .getScriptProperties();

  const spreadsheetId =
    scriptProperties.getProperty(
      "SPREADSHEET_ID"
    );

  if (!spreadsheetId) {
    throw new Error(
      "SPREADSHEET_ID is missing in Script Properties"
    );
  }

  const spreadsheet =
    SpreadsheetApp.openById(
      spreadsheetId
    );

  let sheet =
    spreadsheet.getSheetByName(
      sheetName
    );

  if (!sheet) {
    sheet =
      spreadsheet.insertSheet(
        sheetName
      );
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);

    const headerRange =
      sheet.getRange(
        1,
        1,
        1,
        headers.length
      );

    headerRange
      .setFontWeight("bold")
      .setBackground("#153B36")
      .setFontColor("#FFFFFF");

    sheet.autoResizeColumns(
      1,
      headers.length
    );
  }

  return sheet;
}

/**
 * Prüft das geheime Kennwort.
 */
function verifySecret_(
  providedSecret
) {
  const configuredSecret =
    PropertiesService
      .getScriptProperties()
      .getProperty(
        "SCRIPT_SECRET"
      ) ||
    SCRIPT_SECRET_FALLBACK;

  if (
    !providedSecret ||
    configuredSecret ===
      "CHANGE_THIS_TO_A_LONG_RANDOM_SECRET" ||
    providedSecret !==
      configuredSecret
  ) {
    throw new Error(
      "Unauthorized request"
    );
  }
}

/**
 * Prüft die Pflichtfelder
 * einer Retreat-Anmeldung.
 */
function validateRegistrationPayload_(
  payload
) {
  const requiredFields = [
    "registrationType",
    "event",
    "firstName",
    "lastName",
    "email",
    "submittedAt"
  ];

  validateRequiredFields_(
    payload,
    requiredFields
  );

  if (
    payload.privacyConsent !== true
  ) {
    throw new Error(
      "Privacy consent is required"
    );
  }
}

/**
 * Prüft die Pflichtfelder
 * einer allgemeinen Kontaktanfrage.
 */
function validateContactPayload_(
  payload
) {
  const requiredFields = [
    "requestType",
    "firstName",
    "lastName",
    "email",
    "topic",
    "message",
    "submittedAt"
  ];

  validateRequiredFields_(
    payload,
    requiredFields
  );

  if (
    payload.requestType !==
    "contact"
  ) {
    throw new Error(
      "Invalid request type"
    );
  }

  if (
    payload.privacyConsent !== true
  ) {
    throw new Error(
      "Privacy consent is required"
    );
  }
}

/**
 * Prüft die Pflichtfelder einer Anfrage
 * für einen Schulbesuch.
 */
function validateSchoolVisitPayload_(
  payload
) {
  const requiredFields = [
    "requestType",
    "submittedAt",
    "firstName",
    "lastName",
    "email",
    "phone",
    "organizationName",
    "groupType",
    "gradeOrAgeGroup",
    "participantCount",
    "preferredLocation",
    "preferredDate",
    "photoPermission",
    "publicationPermission"
  ];

  validateRequiredFields_(
    payload,
    requiredFields
  );

  if (
    payload.requestType !==
    "school-visit"
  ) {
    throw new Error(
      "Invalid request type"
    );
  }

  const participantCount =
    Number(
      payload.participantCount
    );

  if (
    !Number.isInteger(
      participantCount
    ) ||
    participantCount < 1
  ) {
    throw new Error(
      "Invalid participant count"
    );
  }

  if (
    !Array.isArray(
      payload.requestedTopics
    )
  ) {
    throw new Error(
      "Invalid requested topics"
    );
  }

  const photoPermissions = [
    "yes",
    "no",
    "by-agreement"
  ];

  if (
    !photoPermissions.includes(
      payload.photoPermission
    )
  ) {
    throw new Error(
      "Invalid photo permission"
    );
  }

  const publicationPermissions = [
    "website-and-social-media",
    "website-only",
    "no"
  ];

  if (
    !publicationPermissions.includes(
      payload.publicationPermission
    )
  ) {
    throw new Error(
      "Invalid publication permission"
    );
  }

  if (
    payload.photoPermission !== "no" &&
    payload.guardianConsentConfirmed !==
      true
  ) {
    throw new Error(
      "Guardian consent confirmation is required"
    );
  }

  if (
    payload.privacyConsent !== true
  ) {
    throw new Error(
      "Privacy consent is required"
    );
  }
}

/**
 * Gemeinsame Prüfung der Pflichtfelder.
 */
function validateRequiredFields_(
  payload,
  requiredFields
) {
  requiredFields.forEach(
    (field) => {
      const value =
        payload[field];

      if (
        !String(
          value || ""
        ).trim()
      ) {
        throw new Error(
          `Missing required field: ${field}`
        );
      }
    }
  );
}

/**
 * Legt das Löschdatum sechs Monate
 * nach dem Retreat fest.
 */
function calculateRegistrationDeletionDueAt_(
  eventDate
) {
  const baseDate =
    eventDate
      ? new Date(eventDate)
      : new Date();

  if (
    Number.isNaN(
      baseDate.getTime()
    )
  ) {
    return "";
  }

  baseDate.setMonth(
    baseDate.getMonth() + 6
  );

  return baseDate.toISOString();
}

/**
 * Kontakt- und Schulbesuchsanfragen
 * werden sechs Monate nach Eingang gelöscht.
 */
function calculateRequestDeletionDueAt_() {
  const deletionDate =
    new Date();

  deletionDate.setMonth(
    deletionDate.getMonth() + 6
  );

  return deletionDate.toISOString();
}

/**
 * Einmal manuell ausführen,
 * um die tägliche Datenbereinigung einzurichten.
 */
function createDailyCleanupTrigger() {
  const existingTriggers =
    ScriptApp.getProjectTriggers();

  existingTriggers
    .filter(
      (trigger) =>
        trigger.getHandlerFunction() ===
        "deleteExpiredData"
    )
    .forEach((trigger) => {
      ScriptApp.deleteTrigger(
        trigger
      );
    });

  ScriptApp
    .newTrigger(
      "deleteExpiredData"
    )
    .timeBased()
    .everyDays(1)
    .atHour(3)
    .create();
}

/**
 * Bereinigt alle drei Tabellenblätter.
 */
function deleteExpiredData() {
  deleteExpiredRegistrationData_();

  deleteExpiredRequestRows_(
    getOrCreateContactSheet_()
  );

  deleteExpiredRequestRows_(
    getOrCreateSchoolVisitSheet_()
  );
}

/**
 * Löscht sensible Retreat-Angaben nach dem Retreat
 * und vollständige Anmeldungen nach sechs Monaten.
 */
function deleteExpiredRegistrationData_() {
  const sheet =
    getOrCreateRegistrationSheet_();

  const values =
    sheet
      .getDataRange()
      .getValues();

  if (values.length < 2) {
    return;
  }

  const header = values[0];

  const index =
    Object.fromEntries(
      header.map(
        (
          name,
          columnIndex
        ) => [
          name,
          columnIndex
        ]
      )
    );

  const now = new Date();
  const rowsToDelete = [];

  for (
    let rowIndex = 1;
    rowIndex < values.length;
    rowIndex += 1
  ) {
    const row =
      values[rowIndex];

    const eventDate =
      parseDate_(
        row[index.eventDate]
      );

    const deletionDueAt =
      parseDate_(
        row[
          index.rowDeletionDueAt
        ]
      );

    if (
      deletionDueAt &&
      deletionDueAt <= now
    ) {
      rowsToDelete.push(
        rowIndex + 1
      );

      continue;
    }

    const sensitiveDataAlreadyDeleted =
      row[
        index
          .sensitiveDataDeletedAt
      ];

    if (
      eventDate &&
      eventDate < now &&
      !sensitiveDataAlreadyDeleted
    ) {
      const sensitiveFields = [
        "allergies",
        "healthNotes",
        "emergencyContactName",
        "emergencyContactPhone"
      ];

      sensitiveFields.forEach(
        (field) => {
          const columnIndex =
            index[field];

          if (
            typeof columnIndex ===
            "number"
          ) {
            sheet
              .getRange(
                rowIndex + 1,
                columnIndex + 1
              )
              .clearContent();
          }
        }
      );

      const deletedAtColumn =
        index
          .sensitiveDataDeletedAt;

      if (
        typeof deletedAtColumn ===
        "number"
      ) {
        sheet
          .getRange(
            rowIndex + 1,
            deletedAtColumn + 1
          )
          .setValue(
            new Date()
              .toISOString()
          );
      }
    }
  }

  deleteRows_(
    sheet,
    rowsToDelete
  );
}

/**
 * Löscht allgemeine Anfragen
 * nach dem gespeicherten Löschdatum.
 */
function deleteExpiredRequestRows_(
  sheet
) {
  const values =
    sheet
      .getDataRange()
      .getValues();

  if (values.length < 2) {
    return;
  }

  const header = values[0];

  const index =
    Object.fromEntries(
      header.map(
        (
          name,
          columnIndex
        ) => [
          name,
          columnIndex
        ]
      )
    );

  const deletionColumn =
    index.deletionDueAt;

  if (
    typeof deletionColumn !==
    "number"
  ) {
    return;
  }

  const now = new Date();
  const rowsToDelete = [];

  for (
    let rowIndex = 1;
    rowIndex < values.length;
    rowIndex += 1
  ) {
    const deletionDueAt =
      parseDate_(
        values[rowIndex][
          deletionColumn
        ]
      );

    if (
      deletionDueAt &&
      deletionDueAt <= now
    ) {
      rowsToDelete.push(
        rowIndex + 1
      );
    }
  }

  deleteRows_(
    sheet,
    rowsToDelete
  );
}

/**
 * Löscht Zeilen von unten nach oben.
 */
function deleteRows_(
  sheet,
  rowsToDelete
) {
  rowsToDelete
    .sort(
      (first, second) =>
        second - first
    )
    .forEach(
      (rowNumber) => {
        sheet.deleteRow(
          rowNumber
        );
      }
    );
}

/**
 * Liest die interne Empfängeradresse.
 */
function getAdminEmail_() {
  return (
    PropertiesService
      .getScriptProperties()
      .getProperty(
        "ADMIN_EMAIL"
      ) ||
    ADMIN_EMAIL_FALLBACK
  );
}

/**
 * Erstellt den vollständigen Namen.
 */
function formatFullName_(payload) {
  const firstName =
    String(
      payload.firstName || ""
    ).trim();

  const lastName =
    String(
      payload.lastName || ""
    ).trim();

  return [firstName, lastName]
    .filter(Boolean)
    .join(" ");
}

/**
 * Formatiert die Veranstaltungsbezeichnung.
 */
function formatEventName_(
  eventValue
) {
  const event =
    String(
      eventValue || ""
    ).trim();

  const knownEvents = {
    "rheinland-2026-08-08":
      "Wat Phra Dhammakaya Rheinland",

    "bavaria-2026-08-30":
      "Wat Phra Dhammakaya Bavaria"
  };

  return knownEvents[event] || event;
}

/**
 * Formatiert das Thema
 * einer allgemeinen Kontaktanfrage.
 */
function formatContactTopic_(
  topicValue
) {
  const topic =
    String(
      topicValue || ""
    ).trim();

  const knownTopics = {
    unsure:
      "Ich bin noch unsicher",

    meditation:
      "Meditationskurs",

    retreat:
      "Retreat oder Meditationstag",

    visit:
      "Tempelbesuch",

    school:
      "Schulbesuch oder Gruppenführung",

    event:
      "Buddhistische Veranstaltung",

    other:
      "Anderes Anliegen"
  };

  return (
    knownTopics[topic] ||
    topic ||
    "Allgemeine Anfrage"
  );
}

/**
 * Formatiert die Gruppenart.
 */
function formatSchoolGroupType_(
  value
) {
  const types = {
    "school-class":
      "Schulklasse",

    "student-group":
      "Studierendengruppe",

    "teacher-group":
      "Lehrkräfte",

    "youth-group":
      "Jugendgruppe",

    "adult-group":
      "Erwachsenengruppe",

    other:
      "Andere Gruppe"
  };

  return (
    types[value] ||
    value ||
    "Nicht angegeben"
  );
}

/**
 * Formatiert einen Tempelstandort.
 */
function formatTempleLocation_(
  value
) {
  const locations = {
    general:
      "Allgemeine Anfrage (kein bestimmter Tempel)",

    hamburg:
      "Dhammakaya Hamburg (Gerdau, Niedersachsen)",

    berlin:
      "Wat Phra Dhammakaya Berlin (Blankenfelde-Mahlow, Brandenburg)",

    nrw:
      "Wat Buddha Nordrhein-Westfalen (Moers, Nordrhein-Westfalen)",

    rheinland:
      "Wat Phra Dhammakaya Rheinland (Ingelheim, Rheinland-Pfalz)",

    heilbronn:
      "Wat Buddha Heilbronn (Wüstenrot, Baden-Württemberg)",

    schwarzwald:
      "Wat Phra Dhammakaya Schwarzwald (Kippenheim, Baden-Württemberg)",

    bavaria:
      "Wat Phra Dhammakaya Bavaria (Königsbrunn, Bayern)"
  };

  return (
    locations[value] ||
    value ||
    "Nicht angegeben"
  );
}

/**
 * Formatiert die gewünschten Inhalte.
 */
function formatSchoolVisitTopics_(
  value
) {
  if (!Array.isArray(value)) {
    return "";
  }

  const topics = {
    buddhism:
      "Grundlagen des Buddhismus",

    meditation:
      "Einführung in die Meditation",

    "monastic-life":
      "Alltag und Leben im Tempel",

    "temple-tour":
      "Führung durch den Tempel",

    questions:
      "Gespräch und Fragerunde",

    other:
      "Andere Themen"
  };

  return value
    .map(
      (topic) =>
        topics[topic] || topic
    )
    .filter(Boolean)
    .join(", ");
}

/**
 * Formatiert die Erlaubnis
 * für Fotoaufnahmen.
 */
function formatPhotoPermission_(
  value
) {
  const permissions = {
    yes:
      "Ja",

    no:
      "Nein",

    "by-agreement":
      "Nur nach vorheriger Absprache"
  };

  return (
    permissions[value] ||
    value ||
    "Nicht angegeben"
  );
}

/**
 * Formatiert die Erlaubnis
 * zur Veröffentlichung.
 */
function formatPublicationPermission_(
  value
) {
  const permissions = {
    "website-and-social-media":
      "Website und soziale Medien",

    "website-only":
      "Nur Website",

    no:
      "Keine Veröffentlichung"
  };

  return (
    permissions[value] ||
    value ||
    "Nicht angegeben"
  );
}

/**
 * Erstellt den Zusatz
 * mit Datum und Veranstaltungsort.
 */
function buildEventDetailsText_(
  eventName,
  eventDate
) {
  if (eventDate && eventName) {
    return (
      ` am ${eventDate}` +
      ` im ${eventName}`
    );
  }

  if (eventDate) {
    return ` am ${eventDate}`;
  }

  if (eventName) {
    return ` im ${eventName}`;
  }

  return "";
}

/**
 * Formatiert ein Datum auf Deutsch.
 */
function formatGermanDate_(value) {
  if (!value) {
    return "";
  }

  const date =
    value instanceof Date
      ? value
      : new Date(value);

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return String(value);
  }

  return Utilities.formatDate(
    date,
    "Europe/Berlin",
    "dd.MM.yyyy"
  );
}

/**
 * Formatiert Ja- und Nein-Werte.
 */
function formatBoolean_(value) {
  if (
    value === true ||
    value === "true" ||
    value === "Ja"
  ) {
    return "Ja";
  }

  if (
    value === false ||
    value === "false" ||
    value === "Nein"
  ) {
    return "Nein";
  }

  return "Nicht angegeben";
}

/**
 * Formatiert Arrays oder Texte.
 */
function formatListValue_(value) {
  if (Array.isArray(value)) {
    return value
      .filter(Boolean)
      .join(", ");
  }

  return String(
    value || ""
  ).trim();
}

/**
 * Formatiert einen Tabellenwert.
 */
function formatSheetValue_(value) {
  if (Array.isArray(value)) {
    return value.join(", ");
  }

  if (
    typeof value === "boolean"
  ) {
    return value
      ? "Ja"
      : "Nein";
  }

  return value ?? "";
}

/**
 * Schützt Inhalte für HTML-E-Mails.
 */
function escapeHtml_(value) {
  return String(
    value || ""
  )
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Hilfsfunktion zur Datumsumwandlung.
 */
function parseDate_(value) {
  if (!value) {
    return null;
  }

  const parsed =
    value instanceof Date
      ? value
      : new Date(value);

  return Number.isNaN(
    parsed.getTime()
  )
    ? null
    : parsed;
}

/**
 * Erstellt eine JSON-Antwort.
 */
function jsonResponse_(body) {
  return ContentService
    .createTextOutput(
      JSON.stringify(body)
    )
    .setMimeType(
      ContentService.MimeType.JSON
    );
}

/**
 * Nur bei der Ersteinrichtung oder beim Wechsel
 * zu einer anderen Google-Tabelle manuell ausführen.
 */
function setupSpreadsheetId() {
  const spreadsheet =
    SpreadsheetApp
      .getActiveSpreadsheet();

  if (!spreadsheet) {
    throw new Error(
      "Keine verbundene Google-Tabelle gefunden. Öffnen Sie Apps Script über Erweiterungen → Apps Script aus der Tabelle."
    );
  }

  const spreadsheetId =
    spreadsheet.getId();

  PropertiesService
    .getScriptProperties()
    .setProperty(
      "SPREADSHEET_ID",
      spreadsheetId
    );

  console.log(
    "SPREADSHEET_ID wurde gespeichert: " +
      spreadsheetId
  );
}
