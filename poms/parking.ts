import { Locator, Page } from "playwright/test";

export class ParkingPage {
    public url = process.env.PARKING_URL!;
    readonly page: Page;
    readonly parkingLotDropdown: Locator;
    readonly entryDate: Locator;
    readonly exitDate: Locator;
    readonly entryTime: Locator;
    readonly exitTime: Locator;
    readonly calculateButton: Locator;
    readonly resultValue: Locator;
    readonly resultMessage: Locator;
    
    constructor(
        page: Page
    ) {
        this.page = page;
        this.parkingLotDropdown =
            page.getByLabel('Choose a Parking Lot');
        this.entryDate =
            page.getByRole('textbox', { name: 'Entry Date' });
        this.exitDate =
            page.getByRole('textbox', { name: 'Exit Date' });
        this.entryTime =
            page.getByRole('textbox', { name: 'Entry Time' });
        this.exitTime =
            page.getByRole('textbox', { name: 'Exit Time' });
        this.calculateButton =
            page.getByTestId('calculate-cost');
        this.resultValue = 
            page.locator('#resultValue');
        this.resultMessage = 
            page.locator('#resultMessage');
    }

    public async goto() {
        await this.page.goto(this.url);
    }

    public async enterParkingDetails(
        parkingLot: string,
        entryDate: string,
        exitDate: string,
        entryTime: string,
        exitTime: string,
    ) {
        await this.parkingLotDropdown.selectOption(parkingLot);
        await this.entryDate.fill(entryDate);
        await this.exitDate.fill(exitDate);
        await this.entryTime.fill(entryTime);
        await this.exitTime.fill(exitTime);
    }

    public async calculate() {
        await this.page.getByTestId('calculate-cost').click();
    }
}