import {expect, type Locator, type Page} from '@playwright/test';

export class OverviewPage {
    readonly page: Page;
    readonly overviewTitle: Locator;
    readonly paymentInformation: Locator;
    readonly shippingInformation: Locator;
    readonly priceTotal: Locator;
    readonly finishButton: Locator;
    readonly cancelButton: Locator;

    constructor(page: Page) {
        this.page= page;
        this.overviewTitle = page.locator('[data-test="title"]');
        this.paymentInformation = page.locator('[data-test="payment-info-label"]');
        this.shippingInformation = page.locator('[data-test="shipping-info-label"]');
        this.priceTotal = page.locator('[data-test="total-info-label"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.cancelButton = page.locator('#cancel');
    }

    async checkOverviewTitle() {
        await expect(this.overviewTitle).toHaveText('Checkout: Overview');
    }
    async checkPaymentInformation() {
        await expect(this.paymentInformation).toHaveText('Payment Information:');
    }
    async checkShippingInformation() {
        await expect(this.shippingInformation).toHaveText('Shipping Information:');
    }
    async checkPriceTotal() {
        await expect(this.priceTotal).toHaveText('Price Total');
    }
    async checkCancelButton() {
        await expect(this.cancelButton).toBeVisible();
    }
    async clickFinishButton() {
        await expect(this.finishButton).toBeVisible();
        await this.finishButton.click();
    }
    async checkFinishURL() {    
        await expect(this.page).toHaveURL('/checkout-complete.html');
    }
}