import { test as base } from "playwright/test";
import { RegisterPage } from "./poms/register";
import { AuthPage } from "./poms/auth";
import { CarsPage } from "./poms/cars";
import { ParkingPage } from "./poms/parking";

type Fixtures = {
    registerPage: RegisterPage;
    authPage: AuthPage;
    carsPage: CarsPage;
    parkingPage: ParkingPage;
}

export const test = base.extend<Fixtures>({
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page))
    },
    authPage: async ({ page }, use) => {
        await use(new AuthPage(page))
    },
    carsPage: async ({ page }, use) => {
        await use(new CarsPage(page))
    },
    parkingPage: async ({ page }, use) => {
        await use(new ParkingPage(page))
    }
})

export { expect } from "@playwright/test"