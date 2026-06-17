import { Locator, Page } from '@playwright/test';

export class CarsPage {
    public url = process.env.CARS_URL!;
    readonly page: Page;
    readonly carsContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.carsContainer = page.locator('#core');
    }

    public async goto() {
        await this.page.goto(this.url);
    }
}