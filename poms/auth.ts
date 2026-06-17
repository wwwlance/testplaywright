import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class AuthPage {
    public url = process.env.LOGIN_URL!;
    readonly page: Page;
    readonly authMessage: Locator;

    constructor (
        page: Page
    ) {
        this.page = page;
        this.authMessage =  page.locator('#flash');
    }
  
    public async goto() {
        await this.page.goto(this.url);
    }

    public async login() {
        await this.page.getByRole('textbox', { name: 'Username' }).click();
        await this.page.getByRole('textbox', { name: 'Username' }).fill(process.env.LOGIN_USERNAME!);
        await this.page.getByRole('textbox', { name: 'Password' }).click();
        await this.page.getByRole('textbox', { name: 'Password' }).fill(process.env.LOGIN_PASSWORD!);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    public async logout() {
        await this.page.getByRole('link', { name: 'Logout' }).click();
    }
}