# World Electricity Globe

An interactive 3D globe visualising electricity access across every country on Earth.

Countries with **reliable electricity** (≥90% national access rate) glow in warm electric yellow.
Countries with **limited access** remain dark.
Hover any country to see generation stats, primary fuel source, and access percentage.

## Features

- Rotatable 3D globe — drag to spin, scroll to zoom
- Auto-rotates when idle
- Per-country hover tooltip with:
  - Electricity access rate (%)
  - Total generation (TWh)
  - Primary energy source
  - Visual progress bar
- ~150 countries with verified electricity data
- Dark space theme with star field

## Data Sources

- **IEA World Energy Outlook 2022** — electricity access rates and generation totals
- **World Bank Tracking SDG7 Report 2023** — national access percentages
- Threshold: countries with ≥90% national electricity access are classified as "reliably powered"

Notable dark countries include Nigeria (57% access), Ethiopia (45%), DR Congo (19%), South Sudan (7.7%), and most of Sub-Saharan Africa.

## Stack

- [globe.gl](https://globe.gl/) — 3D WebGL globe (Three.js-based)
- [Natural Earth](https://www.naturalearthdata.com/) — country GeoJSON polygons
- Vanilla HTML/JS — no build step required

## Running Locally

Open `index.html` in any modern browser. Requires an internet connection to load the globe library (CDN) and country boundary GeoJSON.

```bash
# Option: serve locally
npx serve .
# or
python3 -m http.server 8080
```

## GitHub Pages

Push this repo to GitHub and enable GitHub Pages (Settings → Pages → Deploy from main branch) to host it publicly.

---

Data reflects best available figures as of 2022–2023. Electricity landscapes change; see IEA and World Bank for the latest.
