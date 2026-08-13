# STEP 4 – Bereinigungsprüfung

Stand: 13.08.2026

## Wichtig

Diese Prüfung basiert auf der zuletzt hochgeladenen Projekt-ZIP. Danach wurden Schritt 1 bis 3 lokal umgesetzt. Deshalb werden hier nur Dateien als Löschkandidaten markiert, deren Unbenutztheit unabhängig von diesen späteren Änderungen eindeutig ist.

Es wurde noch nichts gelöscht.

---

## A. Eindeutig veraltete Sonderarchitektur

Der komplette alte Bavaria-/Temple-Baukasten unter:

```text
components/temple/
```

wird im aktiven App-Code nicht mehr importiert.

Betroffene Dateien:

```text
components/temple/TempleActivities.tsx
components/temple/TempleCTA.tsx
components/temple/TempleFAQ.tsx
components/temple/TempleFacilities.tsx
components/temple/TempleGallery.tsx
components/temple/TempleHero.tsx
components/temple/TempleInfoCards.tsx
components/temple/TempleMap.tsx
components/temple/TempleStory.tsx
components/temple/TempleVisitGuide.tsx
```

Diese Dateien gehörten zur früheren Sonderarchitektur einzelner Tempelseiten.

Nach der Vereinheitlichung auf:

```text
components/locations/TempleLocationPage.tsx
```

sind sie nicht mehr Teil der Zielarchitektur.

### Empfehlung

Nach einer letzten Build-Prüfung können diese zehn Dateien entfernt werden.

---

## B. Alte Temple-Datenstruktur

Der Ordner:

```text
data/temples/
```

ist ebenfalls nur noch mit dem alten, unbenutzten Temple-Baukasten verbunden.

Betroffene Dateien:

```text
data/temples/bavaria.ts
data/temples/templeLocations.ts
data/temples/types.ts
```

Die aktive zentrale Standortquelle ist:

```text
data/templeLocations.ts
```

### Empfehlung

Nach Entfernung von `components/temple/` kann auch der gesamte Ordner `data/temples/` entfernt werden.

---

## C. Alte Standort-Datenquelle

Diese Datei:

```text
data/locations.ts
```

wird im aktiven App-Code nicht importiert.

Sie enthält eine ältere parallele Standortstruktur mit Feldern wie:

```text
weeklyMeditation
introductionCourse
oneDayRetreat
```

Die aktuelle zentrale Quelle ist:

```text
data/templeLocations.ts
```

### Empfehlung

`data/locations.ts` entfernen.

Danach wird auch dieser Typ nicht mehr benötigt:

```text
types/location.ts
```

Denn er wird nur von `data/locations.ts` verwendet.

---

## D. Noch NICHT löschen

### `data/retreats.ts`

Diese Datei ist weiterhin aktiv:

```text
components/home/RetreatSection.tsx
→ importiert data/retreats.ts
```

Obwohl Retreat-Termine inzwischen zentral in:

```text
data/retreatEvents.ts
```

liegen, darf `data/retreats.ts` noch nicht gelöscht werden.

### Empfehlung für später

Die Startseiten-Komponente `RetreatSection.tsx` sollte in einem späteren Schritt auf `data/retreatEvents.ts` umgestellt werden. Erst danach kann `data/retreats.ts` entfernt werden.

---

### `data/courses.ts`

Diese Datei ist weiterhin aktiv:

```text
components/home/CourseSection.tsx
→ importiert data/courses.ts
```

Die regelmäßigen Standorttermine liegen inzwischen in:

```text
data/weeklyCourseEvents.ts
```

Aber `data/courses.ts` enthält derzeit noch die allgemeinen Kurskarten der Startseite.

### Empfehlung

Nicht löschen, bis geprüft wurde, welche Inhalte davon weiterhin für die Startseite benötigt werden.

---

## E. Weitere unbenutzte Dateien gefunden

Es existieren zwei LanguageSwitcher-Komponenten:

```text
components/layout/LanguageSwitcher.tsx
components/ui/LanguageSwitcher.tsx
```

In der geprüften Version wird keine davon im aktiven App-Code importiert.

### Empfehlung

Noch nicht sofort löschen.

Zuerst prüfen, ob der Sprachwechsel inzwischen direkt im Header oder über andere Logik implementiert ist. Danach können beide gegebenenfalls entfernt werden.

---

## F. Bereinigungsliste – sichere Kandidaten

Nach erfolgreicher Build-Prüfung:

```text
components/temple/
data/temples/
data/locations.ts
types/location.ts
```

Das sind insgesamt:

- 10 alte Temple-Komponenten
- 3 alte Temple-Datendateien
- 1 alte Standort-Datendatei
- 1 nur dafür verwendeter Standort-Typ

= 15 eindeutig veraltete Dateien

---

## G. Nicht anfassen

Diese zentralen Dateien gehören zur neuen Zielarchitektur und müssen bleiben:

```text
data/templeLocations.ts
data/weeklyCourseEvents.ts
data/retreatEvents.ts
components/locations/TempleLocationPage.tsx
components/forms/RegistrationForm.tsx
app/retreats/page.tsx
docs/WEBSITE-STRUKTUR.md
```

---

## H. Empfohlener nächster Schritt

Nicht alles auf einmal löschen.

Empfohlene Reihenfolge:

1. `components/temple/` und `data/temples/` entfernen.
2. Build ausführen.
3. Wenn erfolgreich: `data/locations.ts` und `types/location.ts` entfernen.
4. Build erneut ausführen.
5. Erst danach weitere Duplikate wie `data/retreats.ts`, `data/courses.ts` oder die LanguageSwitcher untersuchen.

So bleibt jeder Bereinigungsschritt nachvollziehbar und reversibel.
