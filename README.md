# Orbit Radar

Orbit Radar is a React + TypeScript satellite tracker built with Vite, Tailwind CSS, `react-globe.gl`, and `satellite.js`.

## Features

- Live positions for the complete CelesTrak active-satellite catalog.
- A single bulk catalog request and eight-hour local cache to respect CelesTrak rate limits.
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

## Data source

Orbital elements are fetched from the [CelesTrak](https://celestrak.org/) active-satellite group as one TLE catalog request. The browser caches the response for eight hours and falls back to stale cached data if CelesTrak is temporarily unavailable. This avoids making one request per satellite while allowing Orbit Radar to display every valid active object returned by the catalog.
