# Playwright Automation Framework

A sample UI automation framework built with Playwright and TypeScript.

This project demonstrates modern QA Automation practices including:

- Playwright Test Runner
- TypeScript
- Page Object Model (POM)
- Data-Driven Testing
- Boundary Value Analysis (BVA)
- GitHub Actions CI/CD Integration
- Environment Variable Configuration

---

## Test Coverage

### Authentication

Automated validation of:

- Successful login
- Successful logout
- Authentication workflow verification

### User Registration

Automated validation of:

- Successful user registration
- Dynamic username generation
- Registration confirmation messages

### Parking Calculator

Automated tests covering:

- Valet Parking
- Short-Term Parking
- Long-Term Garage Parking
- Long-Term Surface Parking
- Economy Lot Parking

The suite focuses on business-critical pricing boundaries such as:

- 5-hour Valet threshold
- 30-minute Short-Term increments
- Daily maximum rates
- Weekly maximum rates
- "7th Day Free" calculations

### Cars Listing

Automated verification of:

- Vehicle listings
- Vehicle information display
- Accessibility snapshot validation

---

## Project Structure

```text
.
├── poms/
│   ├── auth.ts
│   ├── cars.ts
│   ├── parking.ts
│   └── register.ts
│
├── tests/
│   ├── auth.spec.ts
│   ├── cars.spec.ts
│   ├── parking.spec.ts
│   └── register.spec.ts
│
├── utils/
│   └── parking-test-data.ts
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── playwright.config.ts
├── .env.example
└── package.json
```

---

## Design Patterns

### Page Object Model (POM)

Page interactions are encapsulated within dedicated page classes to improve maintainability and reduce code duplication.

Example:

```ts
await authPage.login();
await authPage.logout();

await parkingPage.enterParkingDetails(
    parkingLot,
    entryDate,
    exitDate,
    entryTime,
    exitTime
);

await parkingPage.calculate();
```

### Data-Driven Testing

Parking calculator scenarios are stored separately from test logic and executed dynamically.

Example:

```ts
for (const scenario of parkingScenarios) {
    test(scenario.name, async ({ parkingPage }) => {
        // Test execution
    });
}
```

### Boundary Value Analysis (BVA)

Test cases were selected around pricing boundaries where defects are most likely to occur.

Examples:

| Parking Type | Boundary Tested |
|-------------|----------------|
| Valet | 5h vs 5h 1m |
| Short-Term | 1h 30m vs 1h 31m |
| Garage | 7d vs 7d 1m |
| Surface | 7d vs 7d 1m |
| Economy | 7d vs 7d 1m |

---

## Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Environment Variables

Create a local `.env` file from `.env.example`.

```bash
cp .env.example .env
```

Configure the required values:

```env
PARKING_URL=
CARS_URL=
REGISTER_URL=
LOGIN_URL=
LOGIN_USERNAME=
LOGIN_PASSWORD=
REGISTER_PASSWORD=
```

---

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run Playwright UI Mode:

```bash
npx playwright test --ui
```

Run a specific test file:

```bash
npx playwright test tests/parking.spec.ts
```

Generate and open the HTML report:

```bash
npx playwright show-report
```

---

## Continuous Integration

The project includes a GitHub Actions workflow that:

- Installs project dependencies
- Installs Playwright browsers
- Executes the test suite automatically on push
- Uses GitHub Secrets for secure environment variable management
- Provides automated feedback on test execution status

---

## Technologies

- TypeScript
- Playwright
- Node.js
- GitHub Actions

---

## Author

**Lance Cruz**

Software Engineer with 8+ years of experience in web development and a growing focus on QA Automation Engineering.

Technical background:

- PHP / Laravel
- Node.js / NestJs
- TypeScript
- REST API Development
- Playwright Test Automation
- CI/CD with GitHub Actions

---

## Future Improvements

- API testing integration
- Cross-browser execution matrix
- Test data factories and fixtures
- Parallel execution optimization
- Docker-based test execution
- Test result reporting integrations
