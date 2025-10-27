import {expect, type Locator, type Page} from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly cartTitle: Locator;
    readonly cartItem: Locator;
    readonly removeButton: Locator;
    readonly continueShoppingButton: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartTitle = page.getByText('Your Cart');
        this.cartItem = page.locator('.cart_item');
        this.removeButton = page.locator('#remove-sauce-labs-bike-light');
        this.continueShoppingButton = page.getByRole('button', {name : 'Continue Shopping'})
        this.checkoutButton = page.getByRole('button', {name: 'Checkout'})

    }

    async navigation() {
        await this.page.goto('/cart.html')
    }
    async checkCartTitle() {
        await expect(this.cartTitle).toHaveText('Your Cart');
    }
    async itemsCount(){
        await expect(this.cartItem).toHaveCount(2)
    }

    async checkRemoveButton() {
        await expect(this.removeButton).toBeVisible();
    }

    async checkContinueShoppingButton() {
        await expect(this.continueShoppingButton).toBeVisible();
    }
    async checkCheckoutButton() {
        await expect(this.checkoutButton).toBeVisible();
        await this.checkoutButton.click();
    }
    async checkCartURL() {
        await expect(this.page).toHaveURL('/checkout-step-one.html');
    }
}