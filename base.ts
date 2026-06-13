import { test as base } from "playwright/test";
import { RegisterPage } from "./poms/register";
import { AuthPage } from "./poms/auth";

type Fixtures = {
    registerPage: RegisterPage;
    authPage: AuthPage;
}

export const test = base.extend<Fixtures>({
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page))
    },
    authPage: async ({ page }, use) => {
        await use(new AuthPage(page))
    }
})

export { expect } from "@playwright/test"