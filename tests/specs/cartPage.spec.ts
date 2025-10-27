import {expect, test} from '../../fixtures/base-page';



test.describe('@regression Cart Page Actions', ()=> {

  test('navigate to the cart page',async ({page, cartPage, cartReadyPage})=> {
            await cartPage.navigation();
  })
  test('verify cart title',async ({page, cartPage,cartReadyPage })=> {
    await cartPage.navigation();
  await cartPage.checkCartTitle();
  })

  test('verify total items in page',async ({page, cartPage, cartReadyPage})=> {
    await cartPage.navigation();
  await cartPage.itemsCount();
  })
  test('verify Remove, and continueshopping button',async ({page, cartPage, cartReadyPage})=> {
    await cartPage.navigation();
    await cartPage.checkContinueShoppingButton(); 
    await cartPage.checkRemoveButton();
    }) 
  test('click checkout button and verify the new page', async ({page, cartPage, cartReadyPage})=> {
    await cartPage.navigation();
    await cartPage.checkCheckoutButton();
    await cartPage.checkCartURL();
    })
  })