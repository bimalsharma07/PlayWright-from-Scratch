import {expect, type Locator, type Page} from '@playwright/test';
import data from '../test-data/data.json';

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
        this.checkoutTitle = page.getByText('Checkout: Your Information');
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.postalCode = page.getByPlaceholder('Zip/Postal Code');
        this.continueButton = page.getByRole('button', {name : 'continue'})
        this.cancelButton = page.getByRole('button', {name : 'cancel'})
    }

    async verifyCheckoutTitle() {
        await expect(this.checkoutTitle).toHaveText('Checkout: Your Information');
    }

    async yourInformation() {
        await this.firstName.fill(data.checkout.firstName);
        await this.lastName.fill(data.checkout.lastName);
        await this.postalCode.fill(data.checkout.postalCode);
    }

    async clickContinueButton() {
        await expect(this.continueButton).toBeVisible();
        await this.continueButton.click();
    }

    async clickCancelButton() {
        expect(this.cancelButton).toBeVisible();

    }
}