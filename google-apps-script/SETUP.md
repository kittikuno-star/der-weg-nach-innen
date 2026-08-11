# Google Sheets registration setup

## 1. Create the spreadsheet

1. Sign in to the Google account that only you control.
2. Create a new Google Sheet, for example `DWNI Registrations`.
3. Do not share the sheet with other people unless operationally required.
4. Open **Extensions → Apps Script**.
5. Replace the content of `Code.gs` with `Registration.gs` from this package.

## 2. Create a secret

Create a long random secret, ideally at least 32 characters.

In Apps Script:

1. Open **Project Settings**.
2. Under **Script Properties**, add:
   - Property: `SCRIPT_SECRET`
   - Value: your long random secret

Never put this secret into browser-side code.

## 3. Deploy the script

1. Click **Deploy → New deployment**.
2. Select **Web app**.
3. Execute as: **Me**.
4. Who has access: **Anyone**.
5. Deploy and copy the Web App URL.

The endpoint is public, but requests are rejected unless the shared secret is correct.

## 4. Configure the website on Netlify

In Netlify open **Project configuration → Environment variables** and add:

```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
GOOGLE_APPS_SCRIPT_SECRET=YOUR_LONG_RANDOM_SECRET
```

Do not commit `.env.local` to Git.

The value of `GOOGLE_APPS_SCRIPT_SECRET` must be exactly the same as the
`SCRIPT_SECRET` script property in Google Apps Script. After saving the two
variables, open **Deploys → Trigger deploy → Clear cache and deploy site**.

For contact notifications, also add this script property in Google Apps Script:

```text
ADMIN_EMAIL=kittikuno@gmail.com
```

After changing `Registration.gs`, create a new Apps Script deployment version
or edit the existing deployment so that the current version is published.

## 5. Activate automatic deletion

In Apps Script, run this function once manually:

```text
createDailyCleanupTrigger
```

Authorize the requested permissions. The daily task then:

- deletes allergy, health and emergency-contact fields after the event date;
- deletes the complete registration row six months after the event.

## 6. Test

1. Submit a test registration from the website.
2. Confirm that a new row appears in `Registrations`.
3. Check that the secret is not visible in browser developer tools.
4. Delete the test row afterwards.

## Data protection notes

- Restrict spreadsheet access to your Google account.
- Enable two-factor authentication on the Google account.
- Do not collect health information unless it is necessary for safe participation.
- Do not use registration data for newsletters unless the person separately consented.
- Review and delete old rows regularly even though an automatic cleanup is included.
