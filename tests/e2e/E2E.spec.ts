import { test } from '../../fixtures/base-page';
import  data from '../../test-data/data.json';
// import {config} from 'dotenv';
// config();


test('Sauce Demo E2E - Login to Order Completion', async ({ loginPage, inventoryPage, cartPage, checkoutPage, overviewPage, orderPage }) => {

  await test.step('Login to SauceDemo', async () => {
    await loginPage.goto();
    await loginPage.validlogin(data.visualuser.username, data.validuser.password);
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
