import {test as base} from '@playwright/test'
import { OverviewPage } from './../pages/OverviewPage';
import { LoginPage } from '../pages/LoginPage'
import { InventoryPage } from '../pages/InventoryPage'
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { OrderPage } from '../pages/OrderPage';

type myFixtures = {
     loginPage : LoginPage;
     inventoryPage : InventoryPage;
     cartPage : CartPage;
     checkoutPage : CheckoutPage;
     overviewPage : OverviewPage;
     orderPage : OrderPage;

}
export const test = base.extend<myFixtures>({
       loginPage : async ({page}, use) => {
          await use(new LoginPage(page))
       },
       inventoryPage: async ({page}, use) => {
        await use(new InventoryPage(page))
       },
       cartPage : async ({page}, use) => {
        await use(new CartPage(page))
       },
       checkoutPage : async ({page}, use) => {
        await use(new CheckoutPage(page))
       },
       overviewPage : async ({page}, use) => {
        await use(new OverviewPage(page))
       },
       orderPage : async ({page}, use) => {
        await use(new OrderPage(page))
       },
    })
export {expect} from '@playwright/test';