/**
 * World Electricity Data
 * Sources: IEA World Energy Outlook 2022, World Bank Tracking SDG7 Report 2023
 * Threshold: countries with ≥90% national electricity access rate are classified as "lit"
 *
 * Fields:
 *   lit            — true if reliable/widespread electricity access (≥90%)
 *   access_pct     — national electricity access rate (%)
 *   generation_twh — total electricity generation in terawatt-hours (TWh)
 *   primary_source — dominant fuel/technology
 */

window.ELECTRICITY_DATA = {

  // ─── Americas ─────────────────────────────────────────────────────────
  "United States": {
    lit: true, access_pct: 100, generation_twh: 4355, primary_source: "Natural Gas"
  },
  "Canada": {
    lit: true, access_pct: 100, generation_twh: 651, primary_source: "Hydropower"
  },
  "Mexico": {
    lit: true, access_pct: 99.9, generation_twh: 354, primary_source: "Natural Gas"
  },
  "Brazil": {
    lit: true, access_pct: 99.5, generation_twh: 671, primary_source: "Hydropower"
  },
  "Argentina": {
    lit: true, access_pct: 99.0, generation_twh: 141, primary_source: "Natural Gas"
  },
  "Chile": {
    lit: true, access_pct: 99.9, generation_twh: 80, primary_source: "Coal & Hydro"
  },
  "Colombia": {
    lit: true, access_pct: 99.5, generation_twh: 79, primary_source: "Hydropower"
  },
  "Peru": {
    lit: true, access_pct: 97.0, generation_twh: 58, primary_source: "Hydropower"
  },
  "Ecuador": {
    lit: true, access_pct: 97.0, generation_twh: 31, primary_source: "Hydropower"
  },
  "Venezuela": {
    lit: true, access_pct: 97.0, generation_twh: 64, primary_source: "Hydropower"
  },
  "Bolivia": {
    lit: true, access_pct: 95.0, generation_twh: 10, primary_source: "Natural Gas"
  },
  "Paraguay": {
    lit: true, access_pct: 98.0, generation_twh: 65, primary_source: "Hydropower"
  },
  "Uruguay": {
    lit: true, access_pct: 99.5, generation_twh: 14, primary_source: "Hydropower"
  },
  "Cuba": {
    lit: true, access_pct: 99.0, generation_twh: 20, primary_source: "Oil"
  },
  "Costa Rica": {
    lit: true, access_pct: 99.9, generation_twh: 12, primary_source: "Hydropower"
  },
  "Panama": {
    lit: true, access_pct: 93.0, generation_twh: 11, primary_source: "Hydropower"
  },
  "Dominican Republic": {
    lit: true, access_pct: 96.0, generation_twh: 18, primary_source: "Natural Gas"
  },
  "Guatemala": {
    lit: true, access_pct: 92.0, generation_twh: 13, primary_source: "Coal & Hydro"
  },
  "Jamaica": {
    lit: true, access_pct: 97.0, generation_twh: 5, primary_source: "Oil"
  },
  "Trinidad and Tobago": {
    lit: true, access_pct: 99.8, generation_twh: 10, primary_source: "Natural Gas"
  },
  "Honduras": {
    lit: false, access_pct: 87.0, generation_twh: 9, primary_source: "Hydropower"
  },
  "El Salvador": {
    lit: true, access_pct: 98.0, generation_twh: 7, primary_source: "Geothermal"
  },
  "Nicaragua": {
    lit: false, access_pct: 86.0, generation_twh: 5, primary_source: "Hydro & Oil"
  },
  "Haiti": {
    lit: false, access_pct: 49.0, generation_twh: 1, primary_source: "Oil"
  },
  "Guyana": {
    lit: false, access_pct: 87.0, generation_twh: 1, primary_source: "Oil"
  },
  "Suriname": {
    lit: true, access_pct: 99.0, generation_twh: 2, primary_source: "Hydropower"
  },

  // ─── Europe ───────────────────────────────────────────────────────────
  "United Kingdom": {
    lit: true, access_pct: 100, generation_twh: 333, primary_source: "Natural Gas"
  },
  "Germany": {
    lit: true, access_pct: 100, generation_twh: 572, primary_source: "Wind & Solar"
  },
  "France": {
    lit: true, access_pct: 100, generation_twh: 500, primary_source: "Nuclear"
  },
  "Italy": {
    lit: true, access_pct: 100, generation_twh: 297, primary_source: "Natural Gas"
  },
  "Spain": {
    lit: true, access_pct: 100, generation_twh: 269, primary_source: "Nuclear & Wind"
  },
  "Netherlands": {
    lit: true, access_pct: 100, generation_twh: 120, primary_source: "Natural Gas"
  },
  "Belgium": {
    lit: true, access_pct: 100, generation_twh: 89, primary_source: "Nuclear"
  },
  "Sweden": {
    lit: true, access_pct: 100, generation_twh: 166, primary_source: "Hydropower"
  },
  "Norway": {
    lit: true, access_pct: 100, generation_twh: 157, primary_source: "Hydropower"
  },
  "Denmark": {
    lit: true, access_pct: 100, generation_twh: 34, primary_source: "Wind"
  },
  "Finland": {
    lit: true, access_pct: 100, generation_twh: 84, primary_source: "Nuclear"
  },
  "Poland": {
    lit: true, access_pct: 100, generation_twh: 178, primary_source: "Coal"
  },
  "Austria": {
    lit: true, access_pct: 100, generation_twh: 62, primary_source: "Hydropower"
  },
  "Switzerland": {
    lit: true, access_pct: 100, generation_twh: 68, primary_source: "Hydropower"
  },
  "Portugal": {
    lit: true, access_pct: 100, generation_twh: 57, primary_source: "Wind & Hydro"
  },
  "Greece": {
    lit: true, access_pct: 100, generation_twh: 55, primary_source: "Natural Gas"
  },
  "Hungary": {
    lit: true, access_pct: 100, generation_twh: 35, primary_source: "Nuclear"
  },
  "Romania": {
    lit: true, access_pct: 100, generation_twh: 65, primary_source: "Hydropower"
  },
  "Bulgaria": {
    lit: true, access_pct: 100, generation_twh: 47, primary_source: "Nuclear & Coal"
  },
  "Czechia": {
    lit: true, access_pct: 100, generation_twh: 86, primary_source: "Coal & Nuclear"
  },
  "Slovakia": {
    lit: true, access_pct: 100, generation_twh: 28, primary_source: "Nuclear"
  },
  "Croatia": {
    lit: true, access_pct: 100, generation_twh: 14, primary_source: "Hydropower"
  },
  "Slovenia": {
    lit: true, access_pct: 100, generation_twh: 15, primary_source: "Nuclear"
  },
  "Serbia": {
    lit: true, access_pct: 100, generation_twh: 37, primary_source: "Coal"
  },
  "Ukraine": {
    lit: true, access_pct: 100, generation_twh: 156, primary_source: "Nuclear"
  },
  "Russia": {
    lit: true, access_pct: 100, generation_twh: 1200, primary_source: "Natural Gas"
  },
  "Belarus": {
    lit: true, access_pct: 100, generation_twh: 40, primary_source: "Natural Gas"
  },
  "Latvia": {
    lit: true, access_pct: 100, generation_twh: 6, primary_source: "Hydropower"
  },
  "Lithuania": {
    lit: true, access_pct: 100, generation_twh: 5, primary_source: "Wind"
  },
  "Estonia": {
    lit: true, access_pct: 100, generation_twh: 8, primary_source: "Wind & Oil Shale"
  },
  "Iceland": {
    lit: true, access_pct: 100, generation_twh: 19, primary_source: "Geothermal"
  },
  "Ireland": {
    lit: true, access_pct: 100, generation_twh: 30, primary_source: "Natural Gas"
  },
  "Luxembourg": {
    lit: true, access_pct: 100, generation_twh: 2, primary_source: "Natural Gas"
  },
  "Moldova": {
    lit: true, access_pct: 100, generation_twh: 11, primary_source: "Natural Gas"
  },
  "North Macedonia": {
    lit: true, access_pct: 100, generation_twh: 6, primary_source: "Coal"
  },
  "Bosnia and Herzegovina": {
    lit: true, access_pct: 100, generation_twh: 17, primary_source: "Coal"
  },
  "Albania": {
    lit: true, access_pct: 100, generation_twh: 7, primary_source: "Hydropower"
  },
  "Montenegro": {
    lit: true, access_pct: 100, generation_twh: 4, primary_source: "Hydropower"
  },
  "Kosovo": {
    lit: true, access_pct: 100, generation_twh: 7, primary_source: "Coal"
  },
  "Turkey": {
    lit: true, access_pct: 100, generation_twh: 328, primary_source: "Coal & Hydro"
  },

  // ─── Middle East ──────────────────────────────────────────────────────
  "Saudi Arabia": {
    lit: true, access_pct: 100, generation_twh: 389, primary_source: "Natural Gas"
  },
  "United Arab Emirates": {
    lit: true, access_pct: 100, generation_twh: 142, primary_source: "Natural Gas"
  },
  "Iran": {
    lit: true, access_pct: 99.7, generation_twh: 340, primary_source: "Natural Gas"
  },
  "Iraq": {
    lit: false, access_pct: 88.0, generation_twh: 94, primary_source: "Natural Gas"
  },
  "Israel": {
    lit: true, access_pct: 100, generation_twh: 72, primary_source: "Natural Gas"
  },
  "Jordan": {
    lit: true, access_pct: 99.8, generation_twh: 20, primary_source: "Natural Gas"
  },
  "Kuwait": {
    lit: true, access_pct: 100, generation_twh: 78, primary_source: "Natural Gas"
  },
  "Qatar": {
    lit: true, access_pct: 100, generation_twh: 48, primary_source: "Natural Gas"
  },
  "Bahrain": {
    lit: true, access_pct: 100, generation_twh: 30, primary_source: "Natural Gas"
  },
  "Oman": {
    lit: true, access_pct: 98.0, generation_twh: 38, primary_source: "Natural Gas"
  },
  "Syria": {
    lit: false, access_pct: 72.0, generation_twh: 15, primary_source: "Natural Gas"
  },
  "Lebanon": {
    lit: false, access_pct: 85.0, generation_twh: 14, primary_source: "Oil"
  },
  "Yemen": {
    lit: false, access_pct: 55.0, generation_twh: 5, primary_source: "Oil"
  },
  "Palestine": {
    lit: false, access_pct: 78.0, generation_twh: 1, primary_source: "Grid Import"
  },

  // ─── Central Asia ────────────────────────────────────────────────────
  "Kazakhstan": {
    lit: true, access_pct: 100, generation_twh: 121, primary_source: "Coal"
  },
  "Uzbekistan": {
    lit: true, access_pct: 100, generation_twh: 73, primary_source: "Natural Gas"
  },
  "Turkmenistan": {
    lit: true, access_pct: 100, generation_twh: 22, primary_source: "Natural Gas"
  },
  "Kyrgyzstan": {
    lit: true, access_pct: 99.7, generation_twh: 16, primary_source: "Hydropower"
  },
  "Tajikistan": {
    lit: true, access_pct: 99.0, generation_twh: 22, primary_source: "Hydropower"
  },
  "Azerbaijan": {
    lit: true, access_pct: 100, generation_twh: 27, primary_source: "Natural Gas"
  },
  "Georgia": {
    lit: true, access_pct: 100, generation_twh: 14, primary_source: "Hydropower"
  },
  "Armenia": {
    lit: true, access_pct: 100, generation_twh: 9, primary_source: "Nuclear"
  },
  "Afghanistan": {
    lit: false, access_pct: 67.0, generation_twh: 2, primary_source: "Hydropower"
  },

  // ─── South Asia ───────────────────────────────────────────────────────
  "India": {
    lit: true, access_pct: 99.0, generation_twh: 1624, primary_source: "Coal"
  },
  "Pakistan": {
    lit: false, access_pct: 74.0, generation_twh: 151, primary_source: "Natural Gas"
  },
  "Bangladesh": {
    lit: true, access_pct: 96.0, generation_twh: 100, primary_source: "Natural Gas"
  },
  "Sri Lanka": {
    lit: true, access_pct: 99.8, generation_twh: 15, primary_source: "Hydropower"
  },
  "Nepal": {
    lit: true, access_pct: 93.0, generation_twh: 8, primary_source: "Hydropower"
  },
  "Bhutan": {
    lit: true, access_pct: 95.0, generation_twh: 9, primary_source: "Hydropower"
  },

  // ─── East & Southeast Asia ───────────────────────────────────────────
  "China": {
    lit: true, access_pct: 100, generation_twh: 8534, primary_source: "Coal"
  },
  "Japan": {
    lit: true, access_pct: 100, generation_twh: 1013, primary_source: "LNG"
  },
  "South Korea": {
    lit: true, access_pct: 100, generation_twh: 594, primary_source: "Coal & Nuclear"
  },
  "North Korea": {
    lit: false, access_pct: 26.0, generation_twh: 25, primary_source: "Coal"
  },
  "Taiwan": {
    lit: true, access_pct: 100, generation_twh: 280, primary_source: "Natural Gas"
  },
  "Mongolia": {
    lit: false, access_pct: 85.0, generation_twh: 7, primary_source: "Coal"
  },
  "Indonesia": {
    lit: true, access_pct: 99.5, generation_twh: 307, primary_source: "Coal"
  },
  "Malaysia": {
    lit: true, access_pct: 99.9, generation_twh: 182, primary_source: "Natural Gas"
  },
  "Thailand": {
    lit: true, access_pct: 100, generation_twh: 196, primary_source: "Natural Gas"
  },
  "Vietnam": {
    lit: true, access_pct: 99.4, generation_twh: 243, primary_source: "Coal"
  },
  "Philippines": {
    lit: true, access_pct: 94.0, generation_twh: 112, primary_source: "Coal"
  },
  "Myanmar": {
    lit: false, access_pct: 70.0, generation_twh: 22, primary_source: "Hydropower"
  },
  "Cambodia": {
    lit: false, access_pct: 75.0, generation_twh: 7, primary_source: "Coal"
  },
  "Laos": {
    lit: true, access_pct: 90.0, generation_twh: 37, primary_source: "Hydropower"
  },
  "Singapore": {
    lit: true, access_pct: 100, generation_twh: 54, primary_source: "Natural Gas"
  },
  "Brunei": {
    lit: true, access_pct: 100, generation_twh: 4, primary_source: "Natural Gas"
  },
  "Timor-Leste": {
    lit: false, access_pct: 58.0, generation_twh: 0.3, primary_source: "Diesel"
  },

  // ─── Oceania ─────────────────────────────────────────────────────────
  "Australia": {
    lit: true, access_pct: 100, generation_twh: 265, primary_source: "Coal"
  },
  "New Zealand": {
    lit: true, access_pct: 100, generation_twh: 43, primary_source: "Hydropower"
  },
  "Papua New Guinea": {
    lit: false, access_pct: 14.0, generation_twh: 4, primary_source: "Hydropower"
  },
  "Fiji": {
    lit: false, access_pct: 84.0, generation_twh: 1, primary_source: "Hydropower"
  },
  "Solomon Islands": {
    lit: false, access_pct: 22.0, generation_twh: 0.1, primary_source: "Diesel"
  },

  // ─── North Africa ────────────────────────────────────────────────────
  "Egypt": {
    lit: true, access_pct: 99.0, generation_twh: 203, primary_source: "Natural Gas"
  },
  "Algeria": {
    lit: true, access_pct: 99.8, generation_twh: 76, primary_source: "Natural Gas"
  },
  "Tunisia": {
    lit: true, access_pct: 99.7, generation_twh: 20, primary_source: "Natural Gas"
  },
  "Libya": {
    lit: false, access_pct: 70.0, generation_twh: 37, primary_source: "Natural Gas"
  },
  "Morocco": {
    lit: false, access_pct: 83.0, generation_twh: 37, primary_source: "Coal"
  },

  // ─── Sub-Saharan Africa ───────────────────────────────────────────────
  "Nigeria": {
    lit: false, access_pct: 57.0, generation_twh: 30, primary_source: "Natural Gas"
  },
  "Ethiopia": {
    lit: false, access_pct: 45.0, generation_twh: 15, primary_source: "Hydropower"
  },
  "Kenya": {
    lit: false, access_pct: 75.0, generation_twh: 11, primary_source: "Geothermal"
  },
  "Tanzania": {
    lit: false, access_pct: 38.0, generation_twh: 8, primary_source: "Hydropower"
  },
  "Democratic Republic of the Congo": {
    lit: false, access_pct: 19.0, generation_twh: 10, primary_source: "Hydropower"
  },
  "South Africa": {
    lit: false, access_pct: 84.2, generation_twh: 242, primary_source: "Coal"
  },
  "Ghana": {
    lit: false, access_pct: 84.8, generation_twh: 18, primary_source: "Hydropower"
  },
  "Senegal": {
    lit: false, access_pct: 69.0, generation_twh: 5, primary_source: "Oil"
  },
  "Angola": {
    lit: false, access_pct: 45.0, generation_twh: 12, primary_source: "Hydropower"
  },
  "Sudan": {
    lit: false, access_pct: 41.0, generation_twh: 16, primary_source: "Hydropower"
  },
  "South Sudan": {
    lit: false, access_pct: 7.7, generation_twh: 0.5, primary_source: "Oil/Diesel"
  },
  "Niger": {
    lit: false, access_pct: 18.0, generation_twh: 1, primary_source: "Oil/Thermal"
  },
  "Chad": {
    lit: false, access_pct: 10.7, generation_twh: 0.3, primary_source: "Oil"
  },
  "Mali": {
    lit: false, access_pct: 35.0, generation_twh: 2, primary_source: "Hydropower"
  },
  "Burkina Faso": {
    lit: false, access_pct: 21.0, generation_twh: 1, primary_source: "Thermal"
  },
  "Uganda": {
    lit: false, access_pct: 41.0, generation_twh: 5, primary_source: "Hydropower"
  },
  "Rwanda": {
    lit: false, access_pct: 36.0, generation_twh: 1, primary_source: "Hydropower"
  },
  "Burundi": {
    lit: false, access_pct: 11.0, generation_twh: 0.3, primary_source: "Hydropower"
  },
  "Mozambique": {
    lit: false, access_pct: 33.0, generation_twh: 18, primary_source: "Hydropower"
  },
  "Zambia": {
    lit: false, access_pct: 47.0, generation_twh: 14, primary_source: "Hydropower"
  },
  "Zimbabwe": {
    lit: false, access_pct: 40.0, generation_twh: 8, primary_source: "Hydropower"
  },
  "Madagascar": {
    lit: false, access_pct: 24.0, generation_twh: 1, primary_source: "Hydropower"
  },
  "Malawi": {
    lit: false, access_pct: 14.0, generation_twh: 2, primary_source: "Hydropower"
  },
  "Cameroon": {
    lit: false, access_pct: 63.0, generation_twh: 9, primary_source: "Hydropower"
  },
  "Ivory Coast": {
    lit: false, access_pct: 64.0, generation_twh: 9, primary_source: "Natural Gas"
  },
  "Somalia": {
    lit: false, access_pct: 35.0, generation_twh: 0.4, primary_source: "Diesel"
  },
  "Eritrea": {
    lit: false, access_pct: 43.0, generation_twh: 0.4, primary_source: "Diesel"
  },
  "Djibouti": {
    lit: false, access_pct: 60.0, generation_twh: 0.6, primary_source: "Oil Import"
  },
  "Central African Republic": {
    lit: false, access_pct: 14.0, generation_twh: 0.2, primary_source: "Hydropower"
  },
  "Republic of the Congo": {
    lit: false, access_pct: 51.0, generation_twh: 2, primary_source: "Hydropower"
  },
  "Gabon": {
    lit: true, access_pct: 90.0, generation_twh: 2, primary_source: "Hydropower"
  },
  "Equatorial Guinea": {
    lit: false, access_pct: 67.0, generation_twh: 0.8, primary_source: "Natural Gas"
  },
  "Guinea": {
    lit: false, access_pct: 45.0, generation_twh: 1, primary_source: "Hydropower"
  },
  "Guinea-Bissau": {
    lit: false, access_pct: 33.0, generation_twh: 0.1, primary_source: "Diesel"
  },
  "Sierra Leone": {
    lit: false, access_pct: 26.0, generation_twh: 0.4, primary_source: "Hydropower"
  },
  "Liberia": {
    lit: false, access_pct: 27.0, generation_twh: 0.5, primary_source: "Hydropower"
  },
  "Togo": {
    lit: false, access_pct: 53.0, generation_twh: 0.3, primary_source: "Hydropower"
  },
  "Benin": {
    lit: false, access_pct: 41.0, generation_twh: 0.3, primary_source: "Oil Import"
  },
  "Gambia": {
    lit: false, access_pct: 58.0, generation_twh: 0.3, primary_source: "Oil"
  },
  "Mauritania": {
    lit: false, access_pct: 47.0, generation_twh: 0.7, primary_source: "Oil & Solar"
  },
  "Namibia": {
    lit: false, access_pct: 56.0, generation_twh: 2, primary_source: "Hydropower"
  },
  "Botswana": {
    lit: false, access_pct: 72.0, generation_twh: 3, primary_source: "Coal"
  },
  "Lesotho": {
    lit: false, access_pct: 41.0, generation_twh: 0.7, primary_source: "Hydropower"
  },
  "Eswatini": {
    lit: false, access_pct: 74.0, generation_twh: 0.6, primary_source: "Hydropower"
  },
  "Western Sahara": {
    lit: false, access_pct: 55.0, generation_twh: 0.1, primary_source: "Oil"
  },
  "Comoros": {
    lit: false, access_pct: 62.0, generation_twh: 0.1, primary_source: "Diesel"
  }
};
