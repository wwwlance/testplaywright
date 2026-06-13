import { Locator, Page } from "playwright"
import { expect } from "playwright/test";

const username = 'qa' + Math.random().toString(36).slice(2, 10);

export class RegisterPage {
    public url = "https://practice.expandtesting.com/register";
    readonly page: Page;
    readonly registerSuccessMessage: Locator;
  
    constructor(page: Page) {
        this.page = page;
        this.registerSuccessMessage = this.page.getByText(
            'Successfully registered, you can log in now'
        );
    }

    public async goto() {
        await this.page.goto(this.url);
    }

    public async register() {
        await this.page.getByRole('textbox', { name: 'Username' }).fill(await this.randomUsername());
        await this.page.getByRole('textbox', { name: 'Password', exact: true }).fill('password123test');
        await this.page.getByRole('textbox', { name: 'Confirm Password' }).fill('password123test');
        await this.page.getByRole('button', { name: 'Register' }).click();
    }
    
    public async registerSuccess() {
        return expect(this.registerSuccessMessage).toBeVisible();
    }

    public async randomUsername(): Promise<string> {
        return 'user' + Math.random().toString(36).slice(2, 10);
    }

} 