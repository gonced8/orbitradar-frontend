# Orbit Radar

Orbit Radar is a React + TypeScript satellite tracker built with Vite, Tailwind CSS, `react-globe.gl`, and `satellite.js`.

## Features

- Live positions for the complete CelesTrak active-satellite catalog.
- A shared OMM catalog snapshot, published centrally and cached locally for eight hours.
- 3D globe with efficiently merged satellite markers and a selected-satellite orbital ground track.
- Search by satellite name or NORAD catalog ID.
- Paginated catalog browser for selecting any loaded satellite without searching.
- One-second position updates with a compact, collapsible control panel that keeps the globe visible.
- Telemetry panel with latitude, longitude, altitude, and speed.
- Optional selected-satellite camera follow mode.
- Browser geolocation marker for the current user when permission is granted.

## Getting started

```bash
npm install
npm run dev
```

## Available scripts

- `npm run dev` starts the Vite development server.
- `npm run build` type-checks and builds the production bundle.
- `npm run lint` runs ESLint.
- `npm run format:check` checks Prettier formatting.
- `npm run test:e2e` runs fixture-backed desktop and mobile browser checks.

## Data source

Orbital elements come from the [CelesTrak](https://celestrak.org/) active-satellite group in OMM JSON format. A scheduled GitHub Actions workflow publishes one shared snapshot to GitHub Pages; browsers read that snapshot and never query CelesTrak directly. The publisher observes CelesTrak's [GP data usage policy](https://celestrak.org/usage-policy.php), including the two-hour update cadence.

The publisher keeps the last validated snapshot if an update fails. A network failure with no HTTP response is retried after four hours. Any non-200 HTTP response is recorded with a sanitized reason and pauses all automatic source requests. Review the publisher status at `data/catalog-status.json` on the `gh-pages` branch, then use **Actions → Refresh shared satellite catalog → Run workflow** with `force_probe` enabled to make one operator-approved probe. A successful probe publishes the replacement snapshot and clears the pause; another non-200 response pauses requests again.

The browser keeps its last valid local catalog for eight hours and continues to display stale data when the shared snapshot is unavailable. Satellite orbital data is provided by [CelesTrak](https://celestrak.org/).
