# Rebuild notes

This rebuild starts from `DER-WEG-NACH-INNEN-WEB(4).zip`.

Changes made:

- Removed initial hidden states from the homepage Hero.
- Replaced viewport-dependent Framer Motion wrappers with normal HTML wrappers, so content remains visible even when client-side hydration is delayed or fails.
- Kept the Hero image path at `/images/hero/hero-01.png` and confirmed the file exists under `public/images/hero/hero-01.png`.
- Simplified the mobile menu animation and added Escape-key and body-scroll handling.
- Disabled automatic dark-mode color replacement so the intended light design is stable.
- Removed the nested project ZIP from the project root.

Local dependency installation could not be completed in the build container because the package mirror returned HTTP 503. Run `npm install` and `npm run build` locally before deployment.
