# Lux Nails

React + TypeScript + Vite website for Lux Nails in Surfers Paradise.

## Local development

```sh
npm ci
npm run dev
```

Open the local address printed by Vite. Changes in `src/` reload automatically.

```sh
npm run typecheck
npm run build
npm run preview
```

`npm run build` checks TypeScript and generates the production website in `dist/`. Do not edit generated files in `dist/`.

## Where to edit

- `src/pages/HomePage.tsx`: main page composition.
- `src/components/`: logo, shared layout, hero, service menu and contact section.
- `src/data/services.ts`: typed service categories and treatment names.
- `src/data/salon.ts`: shared contact information and salon timezone.
- `src/styles.css`: existing beige theme and responsive styling.
- `public/assets/`: logo and photography.
- `index.html`: page title, description and favicon.
- `.openai/hosting.json`: existing Sites identity and production output directory.

## Future bookings

This migration preserves the current call-to-book experience. Online bookings, accounts, availability and appointment management are not implemented yet.

Before adding them, choose a booking provider or a custom backend. A custom system needs persistent appointment storage, server-side availability/conflict checks, staff authentication and access controls, plus confirmed service durations, prices and working hours. Use the salon's Australia/Brisbane timezone. Keep privileged credentials on the server, never in the browser bundle.

Add booking pages alongside `HomePage` once that scope is agreed. The service data is separated from the presentation so it can be connected to a future catalogue or API.

## GitHub Pages

Repository: https://github.com/Johncute123/LuxNails

The Git repository starts in this `site` directory, not its parent. On GitHub, `package.json` and `src/` therefore appear at the repository root.

The workflow in `.github/workflows/pages.yml` builds and deploys pushes to `main`. Pages must use **GitHub Actions** as its publishing source.

```sh
npm run build:pages
```

This build uses `/LuxNails/` as its base, including logo and photo URLs. The normal `npm run build` retains `/` for the existing root-hosted site. The expected GitHub Pages address is https://johncute123.github.io/LuxNails/.

GitHub Pages hosts the frontend only. Future online bookings will need a separate booking service or backend.
