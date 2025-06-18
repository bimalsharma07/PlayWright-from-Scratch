import {expect, type Locator , type Page} from '@playwright/test';

export class OrderPage {
     readonly page: Page;
     readonly pageTitle: Locator;
     readonly confirmationMessage: Locator;
     readonly backToHomeButton: Locator;

     constructor(page: Page) {
          this.page = page;
          this.pageTitle = page.getByText('Checkout: Complete!');
          this.confirmationMessage = page.getByText('Thank you for your order!');
          this.backToHomeButton = page.getByRole('button', {name : 'Back Home'});

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
