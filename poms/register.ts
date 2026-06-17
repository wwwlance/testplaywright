import { Locator, Page } from "playwright"

export class RegisterPage {
    public url = process.env.REGISTER_URL!;
    readonly page: Page;
    readonly registerMessage: Locator;
  
    constructor(
        page: Page
    ) {
        this.page = page;
        this.registerMessage = page.locator('#flash');
    }

    public async goto() {
        await this.page.goto(this.url);
    }

    public async register() {
        await this.page.getByRole('textbox', { name: 'Username' }).fill(await this.randomUsername());
        await this.page.getByRole('textbox', { name: 'Password', exact: true }).fill(process.env.REGISTER_PASSWORD!);
        await this.page.getByRole('textbox', { name: 'Confirm Password' }).fill(process.env.REGISTER_PASSWORD!);
        await this.page.getByRole('button', { name: 'Register' }).click();
    }

    public async randomUsername(): Promise<string> {
        return 'user' + Math.random().toString(36).slice(2, 10);
    }

} 