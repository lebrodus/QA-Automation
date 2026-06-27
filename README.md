# QA-Automation

> End-to-end UI and API test automation built with Cypress - demonstrating the Page Object Model, data-driven testing, custom commands, Cucumber/BDD and network stubbing.

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?logo=javascript&logoColor=000)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Cypress](https://img.shields.io/badge/Tested%20with-Cypress%2012-17202C?logo=cypress&logoColor=fff)](https://www.cypress.io/)
[![Cucumber](https://img.shields.io/badge/BDD-Cucumber-23D96C?logo=cucumber&logoColor=fff)](https://cucumber.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Overview

This repository is a hands-on test-automation suite that exercises modern Cypress patterns against public practice applications. It is structured the way a maintainable automation framework should be - locators isolated in page objects, test data externalised into fixtures, repeated flows wrapped in custom commands, and behaviour described in plain-language Cucumber scenarios.

It covers the building blocks of a real-world QA framework:

- **End-to-end flows** - searching a catalogue, adding items to a cart, and completing checkout.
- **Page Object Model (POM)** - element selectors and page actions encapsulated in dedicated classes.
- **Data-driven tests** - inputs and product lists loaded from JSON fixtures.
- **Custom commands** - reusable steps (e.g. `addProduct2Cart`) registered on the Cypress command chain.
- **BDD with Cucumber** - feature files and step definitions via the cucumber preprocessor.
- **API / network testing** - intercepting and stubbing HTTP responses with `cy.intercept`.
- **Assertions and traversal** - DOM traversal, aliasing, dynamic table validation and total-price reconciliation.

## Tech stack

| Area | Tooling |
| --- | --- |
| Language | JavaScript (ES6+) |
| Test runner | Cypress 12 |
| BDD | `@badeball/cypress-cucumber-preprocessor` |
| Preprocessing | `@cypress/browserify-preprocessor` |
| Reporting | Mochawesome |
| Design patterns | Page Object Model, custom commands, fixtures |

## Getting started

> Requires [Node.js](https://nodejs.org/) (LTS recommended) and npm.

```bash
# 1. Clone the repository
git clone https://github.com/lebrodus/QA-Automation.git
cd QA-Automation/cypress

# 2. Install dependencies
npm install

# 3. Open the interactive Cypress runner
npm run cypress:open

# ...or run the suite headlessly
npm test
```

### Useful scripts

| Command | Description |
| --- | --- |
| `npm run cypress:open` | Launch the interactive Cypress Test Runner. |
| `npm test` | Run all specs headlessly. |
| `npm run test:headed` | Run headlessly but with the browser visible. |
| `npm run test:chrome` | Run the suite in Chrome. |
| `npm run test:record` | Run and record to Cypress Cloud (needs `CYPRESS_RECORD_KEY`). |

> The tests run against public practice sites configured in `cypress.config.js` (`env.url` / `env.urlbook`). To record runs to Cypress Cloud, export your key as an environment variable rather than hard-coding it: `export CYPRESS_RECORD_KEY=<your-key>`.

## Project structure

```
QA-Automation/
├── cypress/
│   ├── cypress/
│   │   ├── integration/
│   │   │   ├── examples/        # E2E specs (cart, checkout, web tables, mocking, frames...)
│   │   │   │   └── BDD/         # Cucumber .feature files + step definitions
│   │   │   └── pageObject/      # Page Object Model classes (homePage, shop, room)
│   │   ├── fixtures/            # Test data (JSON)
│   │   └── support/             # Custom commands and global hooks
│   ├── cypress.config.js        # Cypress + Cucumber configuration
│   └── package.json
└── API/                         # API testing notes and sample data sets
```

## Author

**Lewis Babe Yaka** - QA Tech Lead & SDET  
[LinkedIn](https://www.linkedin.com/in/lewis-babe-yaka)

## License

Released under the [MIT License](LICENSE).
