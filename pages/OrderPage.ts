import {expect, type Locator , type Page} from '@playwright/test';

export class OrderPage {
     readonly page: Page;
     readonly pageTitle: Locator;
     readonly confirmationMessage: Locator;
     readonly backToHomeButton: Locator;

     constructor(page: Page) {
          this.page = page;
          this.pageTitle = page.locator('[data-test="title"]');
          this.confirmationMessage = page.locator('[data-test="complete-header"]');
          this.backToHomeButton = page.locator('#back-to-products');

     }

     async verifyPageTitle() {
          await expect(this.pageTitle).toHaveText('Checkout: Complete!');
     }

     async verifyConfirmationMessage() {
           await expect(this.confirmationMessage).toHaveText('Thank you for your order!');

}
    async clickBackToHomeButton() {
          await expect(this.backToHomeButton).toBeVisible();
     }

}
