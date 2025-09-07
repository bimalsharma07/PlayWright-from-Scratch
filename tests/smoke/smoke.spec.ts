import { OrderPage } from './../../pages/OrderPage';
import { OverviewPage } from './../../pages/OverviewPage';
import { InventoryPage } from './../../pages/InventoryPage';
import {test,expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { CartPage } from '../../pages/CartPage';
import  testData from '../../test-data/data.json';
import { CheckoutPage } from '../../pages/CheckoutPage';


test.describe('@smoke E2E Smoke Test', () => {
test('Complete E2E Flow', async ({ page }) => {
    //Step 1: Login 
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.validlogin(process.env.USERNAME!, process.env.PASSWORD!);
        await loginPage.loginSucess();

//Step 2: Inventory Page
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.clickcartLink();
    await expect(page).toHaveURL(/cart.html/);

//Step 3: Cart Page
    const cartPage = new CartPage(page);
    await cartPage.checkCheckoutButton();
    await expect(page).toHaveURL(/checkout-step-one.html/);

//Step 4: Checkout Page
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.yourInformation();
    await checkoutPage.clickContinueButton();
    await expect(page).toHaveURL(/checkout-step-two.html/);

//Step 5: Overview Page
    const overviewPage = new OverviewPage(page);
    await overviewPage.clickFinishButton();
    await expect(page).toHaveURL(/checkout-complete.html/);

})

})