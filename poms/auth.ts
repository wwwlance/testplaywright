import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class AuthPage {
    public url = "https://practice.expandtesting.com/login"
    readonly page: Page;
    readonly loginSuccessMessage: Locator;
    readonly logoutSuccessMessage: Locator;

    constructor (page: Page) {
        this.page = page;
        this.loginSuccessMessage =  this.page.getByText(
            'You logged into a secure area!'
        );
        this.logoutSuccessMessage = this.page.getByText(
            'You logged out of the secure'
        );
    }

    public async goto() {
        await this.page.goto(this.url);
    }

    public async login() {
        await this.page.getByRole('textbox', { name: 'Username' }).click();
        await this.page.getByRole('textbox', { name: 'Username' }).fill('practice');
        await this.page.getByRole('textbox', { name: 'Password' }).click();
        await this.page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    public async logout() {
        await this.page.getByRole('link', { name: 'Logout' }).click();
    }

    public async loginSuccess() {
        return expect(this.loginSuccessMessage).toBeVisible();
    }

    public async logoutSuccess() {
        return expect(this.logoutSuccessMessage).toBeVisible();
    }
}