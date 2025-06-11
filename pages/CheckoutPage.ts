import {expect, type Locator, type Page} from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly checkoutTitle: Locator
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;   
    readonly continueButton: Locator;
    readonly cancelButton: Locator;
 
    constructor(page: Page) {
        this.page = page;
        this.checkoutTitle = page.locator('[data-test="title"]')
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.cancelButton = page.locator('#cancel');
    }

    async verifyCheckoutTitle() {
        await expect(this.checkoutTitle).toHaveText('Checkout: Your Information');
    }

    async yourInformation() {
        await this.firstName.fill('John');
        await this.lastName.fill('Doe');
        await this.postalCode.fill('L22 5AA');
    }

    async clickContinueButton() {
        await expect(this.continueButton).toBeVisible();
        await this.continueButton.click();
    }

    async clickCancelButton() {
        expect(this.cancelButton).toBeVisible();

    }
}