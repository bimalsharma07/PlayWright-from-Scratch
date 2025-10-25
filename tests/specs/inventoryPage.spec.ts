import { test, expect } from '../../fixtures/base-page';
import { LoginPage } from '../../pages/LoginPage';
import data from '../../test-data/data.json';

test.describe('@regression Inventory Page actions', ()=> {

test('Verify total items ', async({page, loginPage, inventoryPage})=> {
    await page.goto('/');
    await loginPage.validlogin(data.validuser.username, data.validuser.password);
    await inventoryPage.assertProductCount(6);
})
test('Filter items low to high', async({page, loginPage, inventoryPage})=> {
    await page.goto('/');
    await loginPage.validlogin(data.validuser.username, data.validuser.password);
    await inventoryPage.checkSortContainer();
})
test('Add products to cart and verify item count', async({page, loginPage, inventoryPage})=> {
    await page.goto('/');
    await loginPage.validlogin(data.validuser.username, data.validuser.password);
    await inventoryPage.addProductToCart(data.products.backpack);
    await inventoryPage.addProductToCart(data.products.bikeLight); 
    
    const cartCount = await inventoryPage.getCartItemCount();
    expect(cartCount).toBe(2);
    
    await inventoryPage.clickcartLink();
})




})
