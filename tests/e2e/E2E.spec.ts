import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/cartPage';
import { CheckoutPage } from '../../pages/checkoutPage';
import { OverviewPage } from '../../pages/OverviewPage';
import { OrderPage } from '../../pages/OrderPage';
import { config } from 'dotenv';
config();


test('Sauce Demo E2E - Login to Order Completion', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const overviewPage = new OverviewPage(page);
  const orderPage = new OrderPage(page);

  await test.step('Login to SauceDemo', async () => {
    await loginPage.goto();
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
    await loginPage.loginSucess();
  });

  await test.step('Sort and Add Products to Cart', async () => {
    await inventoryPage.checkSortContainer();
    await inventoryPage.clickFirstProduct();
    await inventoryPage.clickSecondProduct();
    await inventoryPage.clickcartLink();
  });

  await test.step('Verify Cart and Proceed to Checkout', async () => {
    await cartPage.checkCartTitle();
    await cartPage.checkRemoveButton();
    await cartPage.checkContinueShoppingButton();
    await cartPage.checkCheckoutButton();
    await cartPage.checkCartURL();
  });

  await test.step('Enter Checkout Info and Continue', async () => {
    await checkoutPage.verifyCheckoutTitle();
    await checkoutPage.yourInformation();
    await checkoutPage.clickContinueButton();
    await checkoutPage.clickCancelButton();
  });

  await test.step('Review Overview Page and Finish', async () => {
    await overviewPage.checkOverviewTitle();
    await overviewPage.checkPaymentInformation();
    await overviewPage.checkShippingInformation();
    await overviewPage.checkPriceTotal();
    await overviewPage.checkCancelButton();
    await overviewPage.clickFinishButton();
    await overviewPage.checkFinishURL();
  });

  await test.step('Verify Order Completion Page', async () => {
    await orderPage.verifyPageTitle();
    await orderPage.verifyConfirmationMessage();
    await orderPage.clickBackToHomeButton();
  });
});
