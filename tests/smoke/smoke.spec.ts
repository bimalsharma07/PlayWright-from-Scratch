import {test, expect} from '../../fixtures/base-page';
import  data from '../../test-data/data.json';

test.describe('@smoke E2E Smoke Test', () => {
test('Complete E2E Flow', async ({ page, loginPage, inventoryPage, cartPage, checkoutPage, overviewPage }) => {
    //Step 1: Login 
        await loginPage.goto();
        await loginPage.validlogin(data.validuser.username, data.validuser.password);
        await loginPage.loginSucess();

//Step 2: Inventory Page
    await inventoryPage.clickcartLink();
    await expect(page).toHaveURL(/cart.html/);

//Step 3: Cart Page
    await cartPage.checkCheckoutButton();
    await expect(page).toHaveURL(/checkout-step-one.html/);

//Step 4: Checkout Page
    await checkoutPage.yourInformation();
    await checkoutPage.clickContinueButton();
    await expect(page).toHaveURL(/checkout-step-two.html/);

//Step 5: Overview Page
    await overviewPage.clickFinishButton();
    await expect(page).toHaveURL(/checkout-complete.html/);
   })
})