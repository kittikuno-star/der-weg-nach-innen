# Website-Struktur – DER WEG NACH INNEN

Stand: 13.08.2026

Diese Datei beschreibt die zentrale Architektur der Website, damit Änderungen auch nach mehreren Monaten schnell, sicher und ohne langes Suchen vorgenommen werden können.

## Grundprinzip

Die Website soll möglichst pflegeleicht bleiben.

Wichtige Regel:

> Daten werden zentral gepflegt. Einzelne Seiten sollen möglichst keine eigenen Standort-, Kurs- oder Retreat-Daten enthalten.

Die wichtigsten zentralen Dateien sind:

```text
data/templeLocations.ts
data/weeklyCourseEvents.ts
data/retreatEvents.ts
```

Die wichtigsten gemeinsamen Komponenten sind:

```text
components/locations/TempleLocationPage.tsx
components/forms/RegistrationForm.tsx
```

---

## 1. Standorte

### Zentrale Datei

```text
data/templeLocations.ts
```

Hier werden die dauerhaften Daten aller Tempel gepflegt:

- Name
- Stadt
- Bundesland
- Straße
- Postleitzahl
- Bild
- Beschreibung
- Website
- Facebook
- Kontakt-E-Mail, falls später benötigt

Beispiel:

```ts
bavaria: {
  slug: "bavaria",
  name: "Wat Phra Dhammakaya Bavaria",
  city: "Königsbrunn",
  region: "Bayern",
  street: "Heinkelstraße 1",
  postalCode: "86343",
  image: "/images/temples/bavaria/map-card-01.jpg",
  description: "...",
  website: "https://watbavaria.de/",
  facebook: "https://www.facebook.com/...",
},
```

### Gemeinsame Darstellung

```text
components/locations/TempleLocationPage.tsx
```

Diese Komponente ist die gemeinsame Grundlage für alle deutschen Standortseiten.

Die einzelnen Standortseiten unter:

```text
app/standorte/bavaria/page.tsx
app/standorte/berlin/page.tsx
app/standorte/hamburg/page.tsx
app/standorte/heilbronn/page.tsx
app/standorte/nrw/page.tsx
app/standorte/rheinland/page.tsx
app/standorte/schwarzwald/page.tsx
```

sollen nur noch den jeweiligen Standort aus `templeLocations.ts` laden und an `TempleLocationPage` übergeben.

### Architekturregel

Keine Website-, Facebook-, Adress- oder Beschreibungsdaten direkt in einzelnen Standortseiten doppelt pflegen.

---

## 2. Regelmäßige Meditationskurse

### Zentrale Datei

```text
data/weeklyCourseEvents.ts
```

Hier werden regelmäßige Termine gepflegt.

Beispiel Heilbronn:

```text
Mittwoch 19:00–20:30 Uhr
Freitag 13:30–14:30 Uhr
```

Mehrere Termine eines Tempels werden gemeinsam als ein Standortangebot dargestellt.

### Wichtig

Keine konkreten Kalenderdaten für wöchentliche Angebote pflegen, wenn es nicht unbedingt nötig ist.

Die Anmeldung bezieht sich auf den regelmäßigen Wochentermin. Ein konkreter Besuchstag kann im Nachrichtenfeld angegeben werden.

So muss die Website nicht jede Woche aktualisiert werden.

---

## 3. One Day Retreats

### Zentrale Datei

```text
data/retreatEvents.ts
```

Jeder Retreat erhält ein festes maschinenlesbares Datum, zum Beispiel:

```ts
dateValue: "2026-10-17"
```

### Automatische Trennung

Die Website trennt Retreats automatisch nach Datum:

```text
Datum heute oder später
→ Kommende Veranstaltungen

Datum vor heute
→ Vergangene Veranstaltungen
```

Vergangene Retreats werden nicht gelöscht und nicht in einen anderen Ordner verschoben.

Sie bleiben in `data/retreatEvents.ts` und erscheinen automatisch im Bereich:

```text
Vergangene Veranstaltungen
```

### Wichtig

Es soll keine manuelle Archivierung notwendig sein.

---

## 4. Retreat-Seite

### Datei

```text
app/retreats/page.tsx
```

Diese Seite zeigt:

- kommende Retreats
- vergangene Retreats
- Anmeldebutton nur bei kommenden Retreats

Die Sortierung erfolgt automatisch anhand von `dateValue`.

---

## 5. Standortseiten und Retreats

### Datei

```text
components/locations/TempleLocationPage.tsx
```

Diese gemeinsame Standortseite zeigt:

- Standortinformationen
- Website und Facebook, falls vorhanden
- regelmäßige Meditationsangebote
- kommende Retreats am jeweiligen Standort

Vergangene Retreats sollen auf Standortseiten nicht mehr als aktuelle Angebote erscheinen.

---

## 6. Anmeldung

### Datei

```text
components/forms/RegistrationForm.tsx
```

Hier wird das zentrale Anmeldeformular gepflegt.

Für regelmäßige Kurse kann der gewünschte Wochentermin ausgewählt werden.

Für Retreats werden die Daten aus `data/retreatEvents.ts` übernommen.

### Zentrale Anmeldung

Die Anmeldung bleibt über:

```text
derwegnachinnen.de
```

möglich.

Die Website ist die zentrale Anlaufstelle. Tempel-Websites und Facebook-Seiten dienen als zusätzliche Informationsquellen.

---

## 7. Externe Tempel-Websites und Facebook

Externe Links werden ausschließlich in:

```text
data/templeLocations.ts
```

gepflegt.

Wenn ein Tempel keine Website hat, wird kein Website-Button angezeigt.

Wenn ein Tempel keine Facebook-Seite hat, wird kein Facebook-Button angezeigt.

Keine leeren oder provisorischen Links eintragen.

---

## 8. Bilder

Standortbilder liegen unter:

```text
public/images/temples/
```

Empfohlene Struktur:

```text
public/images/temples/bavaria/
public/images/temples/berlin/
public/images/temples/hamburg/
public/images/temples/heilbronn/
public/images/temples/nrw/
public/images/temples/rheinland/
public/images/temples/schwarzwald/
```

Die Bildpfade werden zentral in `data/templeLocations.ts` gepflegt.

---

## 9. Was ändere ich wo?

### Tempeladresse ändern

```text
data/templeLocations.ts
```

### Tempel-Website oder Facebook ändern

```text
data/templeLocations.ts
```

### Neues Standortbild eintragen

```text
data/templeLocations.ts
```

### Regelmäßigen Meditationstermin ändern

```text
data/weeklyCourseEvents.ts
```

### Neuen Retreat hinzufügen

```text
data/retreatEvents.ts
```

### Retreat-Darstellung ändern

```text
app/retreats/page.tsx
```

### Darstellung aller Standortseiten ändern

```text
components/locations/TempleLocationPage.tsx
```

### Anmeldeformular ändern

```text
components/forms/RegistrationForm.tsx
```

---

## 10. Was wir vermeiden

Nicht wieder einführen:

- eigene Sonderarchitektur für einzelne Tempel
- doppelte Standortdaten
- Website-Links direkt in `page.tsx`
- Facebook-Links direkt in `page.tsx`
- manuelles Verschieben vergangener Retreats
- separate Archivordner für vergangene Retreats
- wöchentlich neue Datumslisten für regelmäßige Meditation

---

## 11. Wartungsprinzip

Vor jeder größeren Änderung:

1. Zuerst prüfen, ob die Information bereits zentral gepflegt wird.
2. Wenn ja, die zentrale Datei ändern.
3. Keine neue Sonderlösung bauen, wenn eine gemeinsame Komponente erweitert werden kann.
4. Nach Änderungen:

```bash
rm -rf .next
npm run build
```

5. Nur wenn der Build erfolgreich ist:

```bash
npm run start -- -H 0.0.0.0
```

---

## 12. Zielarchitektur

```text
                    ZENTRALE DATEN

       data/templeLocations.ts
       data/weeklyCourseEvents.ts
       data/retreatEvents.ts
                │
                ▼
        GEMEINSAME KOMPONENTEN
                │
        ┌───────┴────────┐
        ▼                ▼
   Standortseiten     Anmeldung
        │
        ▼
Bavaria / Berlin / Hamburg / Heilbronn /
NRW / Rheinland / Schwarzwald
```

Retreats:

```text
data/retreatEvents.ts
       │
       ├── Datum >= heute
       │       → Kommende Veranstaltungen
       │
       └── Datum < heute
               → Vergangene Veranstaltungen
```

---

## 13. Grundsatz für zukünftige Entwicklung

Wenn eine Änderung für mehrere Tempel relevant ist, zuerst prüfen, ob sie zentral umgesetzt werden kann.

Bevorzugt:

```text
eine Datenquelle
eine gemeinsame Komponente
eine klare Dokumentation
```

Vermeiden:

```text
mehrere Sonderseiten
doppelte Daten
manuelle Pflege
```

Das Ziel ist eine Website, die auch nach mehreren Monaten sofort verständlich und sicher weiterentwickelbar bleibt.
