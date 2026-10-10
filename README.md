# Orbit Radar

Orbit Radar is a React + TypeScript satellite tracker built with Vite, Tailwind CSS, `react-globe.gl`, and `satellite.js`.

## Features

- Live positions for the complete CelesTrak active-satellite catalog.
- A shared OMM catalog snapshot, published centrally and cached locally for eight hours.
- 3D globe with efficiently merged satellite markers and a selected-satellite orbital ground track.
- Progressive orbit rendering when changing the selected satellite, with smooth GPU marker interpolation.
- Search by satellite name or NORAD catalog ID.
- Paginated catalog browser for selecting any loaded satellite without searching.
- One-second position updates with a compact, collapsible control panel that keeps the globe visible.
- Telemetry panel with latitude, longitude, altitude, and speed.
- Optional UTC-based day/night shading and a Live, Simulation, or Paused UTC clock.
- Optional NASA GIBS daily cloud-fraction overlay; the latest available observation remains visible during time-lapse.
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

## Physical model and visual layers

Satellite positions are propagated with SGP4 through [`satellite.js`](https://github.com/shashwatak/satellite.js), using the TLE or OMM epoch supplied by CelesTrak. The result is converted from ECI to geodetic latitude, longitude, and altitude with Greenwich sidereal time. The displayed orbital path is a ground track covering one orbital period centred on the selected time, so it includes both the recent past and the near future.

The globe's night side uses the simulated UTC time, seasonal solar declination, and the equation of time. During time-lapse it follows simulation time; in live mode it follows the current UTC clock. This is a visual Earth-lighting model and does not simulate city lights or atmospheric scattering.

Cloud cover is an optional daily `MODIS_Terra_Cloud_Fraction_Day` image from [NASA GIBS](https://nasa-gibs.github.io/gibs-api-docs/). It represents the latest available observation rather than a forecast, historical weather playback, or a three-dimensional cloud field. The globe remains usable if the public imagery service is unavailable.

## Data source

Orbital elements come from the [CelesTrak](https://celestrak.org/) active-satellite group in OMM JSON format. A scheduled GitHub Actions workflow publishes one shared snapshot to GitHub Pages; browsers read that snapshot and never query CelesTrak directly. The publisher observes CelesTrak's [GP data usage policy](https://celestrak.org/usage-policy.php), including the two-hour update cadence.

The publisher keeps the last validated snapshot if an update fails. Network failures and transient HTTP responses such as 408, 425, 429, and 5xx are retried automatically with a four-to-24-hour backoff; a `Retry-After` response is honoured when present. An explicit CelesTrak response saying that the active group has not changed, or an unexplained access-denied response, is recorded with a sanitized reason and requires an operator probe. Review the publisher status at `data/catalog-status.json` on the `gh-pages` branch, then use **Actions → Refresh shared satellite catalog → Run workflow** with `force_probe` enabled to make one operator-approved probe. A successful probe publishes the replacement snapshot and clears the pause.

The browser keeps its last valid local catalog for eight hours and continues to display stale data when the shared snapshot is unavailable. Satellite orbital data is provided by [CelesTrak](https://celestrak.org/).
