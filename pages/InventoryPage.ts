import { expect, type Locator, type Page} from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly sortContainer: Locator;
    readonly firstProduct: Locator;
    readonly secondProduct: Locator;
    readonly cartLink: Locator;
    readonly cartBadge: Locator;
    readonly inventoryItems: Locator;

    constructor(page: Page) {
        this.page = page;
        this.sortContainer = page.locator('.product_sort_container');
        this.inventoryItems = page.locator('.inventory_item');
        this.firstProduct = page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]');
        this.secondProduct = page.locator('button[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]')
        this.cartLink = page.locator('[data-test="shopping-cart-link"]')
    }
  
    async getProductCount() {
    return await this.inventoryItems.count();
  }
     async assertProductCount(expectedCount: number) {
    const actualCount = await this.getProductCount();
    expect(actualCount).toBe(expectedCount);
  }
    async checkSortContainer() {
       await this.sortContainer.selectOption('lohi');
    }
  
     async addProductToCart(productName: string) {
    const productItem = this.inventoryItems.filter({ hasText: productName });
    await productItem.locator('button').click();
  }

 async getCartItemCount() {
    const badgeVisible = await this.cartLink.isVisible();
    return badgeVisible ? parseInt(await this.cartBadge.textContent() || '0') : 0;
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