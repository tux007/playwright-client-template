# EN
# Automated Smoke Tests (Playwright)

## What is covered
- Critical user journeys (login, checkout, booking, etc.)
- Smoke tests only (fast & stable)
- Cross-browser ready


## How to run tests locally
```bash
npm install
npx playwright install
npm test
```


## Test reports
After each run, an HTML report is generated showing:
- Passed / failed tests
- Screenshots on failure
- Execution duration


## CI
Tests run automatically on every push via GitHub Actions.


## What is NOT covered
- Visual regression testing
- Load / performance testing
- Complex end-to-end business flows

---

# DE
# Automatisierte Smoke Tests (Playwright)

## Was wird abgedeckt
- Kritische User Journeys (Login, Checkout, Buchung, etc.)
- Nur Smoke Tests (schnell & stabil)
- Cross-Browser fähig


## Tests lokal ausführen
```bash
npm install
npx playwright install
npm test
```


## Test Reports
Nach jedem Durchlauf wird ein HTML-Report generiert mit:
- Bestandenen / fehlgeschlagenen Tests
- Screenshots bei Fehlern
- Ausführungsdauer


## CI
Tests werden automatisch bei jedem Push via GitHub Actions ausgeführt.


## Was NICHT abgedeckt wird
- Visual Regression Testing
- Load / Performance Testing
- Komplexe End-to-End Business Flows