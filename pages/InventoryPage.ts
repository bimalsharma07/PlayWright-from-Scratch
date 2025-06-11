import { expect, type Locator, type Page} from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly sortContainer: Locator;
    readonly firstProduct: Locator;
    readonly secondProduct: Locator;
    readonly cartLink: Locator;
    readonly cartBadge: Locator;

    constructor(page: Page) {
        this.page = page;
        this.sortContainer = page.locator('.product_sort_container');
        this.firstProduct = page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]');
        this.secondProduct = page.locator('button[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.cartLink = page.locator('a.shopping_cart_link');
    }

    async checkSortContainer() {
       await this.sortContainer.selectOption('lohi');
    }

    async clickFirstProduct() {
        await this.firstProduct.click();
    }
    async clickSecondProduct() {
        await this.secondProduct.click();
    }
    async clickcartLink() {
        await this.cartLink.click();
    }

}