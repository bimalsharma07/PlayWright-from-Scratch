import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { OverviewPage } from '../pages/OverviewPage';
import { OrderPage } from '../pages/OrderPage';
import data from '../test-data/data.json';

type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  overviewPage: OverviewPage;
  orderPage: OrderPage;

  loggedInPage: Page;
  cartReadyPage: Page;
  checkoutReadyPage: Page;
  overviewReadyPage: Page;
};

export const test = base.extend<MyFixtures>({

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  overviewPage: async ({ page }, use) => {
    await use(new OverviewPage(page));
  },
  orderPage: async ({ page }, use) => {
    await use(new OrderPage(page));
  },

  // Stateful Fixtures
  loggedInPage: async ({ page, loginPage }, use) => {
    await loginPage.goto();
    await loginPage.validlogin('standard_user', 'secret_sauce');
    await use(page);
  },

  cartReadyPage: async ({ loggedInPage, inventoryPage }, use) => {
    await inventoryPage.addProductToCart(data.products.backpack);
    await inventoryPage.addProductToCart(data.products.bikeLight); 
    await use(loggedInPage);
  },

  checkoutReadyPage: async ({ loginPage, cartReadyPage, inventoryPage,checkoutPage }, use) => {
    await loginPage.goto();
    await loginPage.validlogin('standard_user', 'secret_sauce');
    await checkoutPage.goto();
    await use(cartReadyPage);
  },
});

export { expect } from '@playwright/test';
