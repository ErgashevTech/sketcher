# 3D Print Cost UZ

Static 3D printing cost calculator for the Uzbekistan market.

## What it includes

- UZS currency formatting
- Editable local defaults for electricity, labor, and material cost
- Cost breakdown for material, electricity, depreciation, maintenance, labor, packaging, hardware, failure risk, and overhead
- Suggested selling prices with 20%, 35%, 50%, and custom margins

## Files

- `index.html` - layout and content
- `styles.css` - UI styling
- `script.js` - calculator logic

## Local assumptions used in the default preset

- Household electricity: `650 so'm / kWh`
  - Source date: June 1, 2026 tariff update
- Average monthly wage: `7,091,100 so'm`
  - Source period: January-June 2026
- Hourly labor default: `42,209 so'm / hour`
  - Derived as `7,091,100 / 168`
- PLA default: `190,000 so'm / kg`
  - Market-based starter estimate, not an official tariff

## Run

Open `index.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```
