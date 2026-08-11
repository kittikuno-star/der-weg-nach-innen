# Der Weg nach Innen

## Aktuelle Version

Release 0.8A

---

## Projektziel

Eine moderne, ruhige und benutzerfreundliche Website für die Meditationsangebote von Wat Phra Dhammakaya in Deutschland.

Die Website soll administrative Arbeit reduzieren, Interessierten einen klaren Zugang zu Meditation, Kursen und Retreats ermöglichen und langfristig als gemeinsame Plattform für mehrere Standorte dienen.

---

## Projektstatus

### Foundation

- [x] npm install
- [x] npm run lint
- [x] npm run build
- [x] Homepage Foundation
- [x] TypeScript-Konfiguration
- [x] Path Alias `@/*`
- [x] Statische Seitengenerierung
- [x] Dynamische Registration API Route

### Komponenten

- [x] `FadeIn` mit Intersection Observer
- [x] Reduced-Motion-Unterstützung
- [x] `FeatureCards` verwendet `IconBox`
- [x] Veraltete `Icon.tsx` entfernt
- [x] Gemeinsame `PageHero`-Komponente erstellt
- [x] `PageHero` in Retreats, Kontakt und Standorte integriert

### Registration API

- [x] Environment-Variable wird geprüft
- [x] Payload wird validiert
- [x] Registrierungstyp wird validiert
- [x] Pflichtfelder werden abhängig vom Registrierungstyp geprüft
- [x] Request-Timeout integriert
- [x] Fehlerantworten werden behandelt
- [x] Google Apps Script Response wird geprüft
- [x] HTTP-Statuscodes werden zurückgegeben
- [x] Serverfehler werden protokolliert

### Entwicklung

- [ ] Hero Premium
- [ ] Homepage Premium
- [ ] Mobile Navigation vollständig prüfen
- [ ] Responsive Design vollständig prüfen
- [x] Animation Foundation
- [ ] Animation Feinschliff
- [ ] SEO
- [ ] Accessibility
- [ ] Performance > 95

---

## Build-Status

Stand: 24.07.2026

```text
ESLint: Passed
TypeScript: Passed
Production Build: Passed
Static Pages: 12/12