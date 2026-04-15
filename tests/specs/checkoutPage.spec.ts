import { CartPage } from './../../pages/CartPage';
import {expect, test} from '../../fixtures/base-page';


test.describe('@regression checkout page actions', ()=> {

    test('verify user is in checkout page', async ({ checkoutReadyPage, checkoutPage})  => {
        await checkoutPage.verifyCheckoutTitle();
    })
 
})