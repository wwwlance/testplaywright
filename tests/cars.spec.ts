import { test, expect } from '../base';

test('cars are displayed', async ({ carsPage }) => {

    await carsPage.goto();
    await expect(carsPage.carsContainer).toMatchAriaSnapshot(`
        - paragraph: A demo with separate UI and API layers for practicing automated UI testing with Playwright.
        - img "VW Golf"
        - heading "VW Golf" [level=5]
        - paragraph: /€\\d+,\\d+/
        - img "VW Polo"
        - heading "VW Polo" [level=5]
        - paragraph: /€\\d+,\\d+/
        - img "Renault Clio"
        - heading "Renault Clio" [level=5]
        - paragraph: /€\\d+,\\d+/
        - img "Renault Megane"
        - heading "Renault Megane" [level=5]
        - paragraph: /€\\d+,\\d+/
        - img "Fiat Panda"
        - heading "Fiat Panda" [level=5]
        - paragraph: /€\\d+,\\d+/
        - img /Fiat \\d+/
        - heading /Fiat \\d+/ [level=5]
        - paragraph: /€\\d+,\\d+/
    `);
});