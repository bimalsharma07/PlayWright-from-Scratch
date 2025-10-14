import { expect, test } from '../../fixtures/base-page';
import { LoginPage } from '../../pages/LoginPage';
import data from '../../test-data/data.json';


test.describe('@regression Login Tests', () => {
    test('Login with valid user', async ({page, loginPage}) => {
        await page.goto('/');
        await loginPage.validlogin(data.validuser.username, data.validuser.password);
        await loginPage.loginSucess();
    });
    test('Login with locked out user', async ({page, loginPage}) => {
        await page.goto('/');
        await loginPage.LockedUser(data.lockeduser.username, data.lockeduser.password);
        await expect(loginPage.LockedMessage).toBeVisible();
    });
    test('Login with problem user', async ({page, loginPage}) => {
        await page.goto('/');
        await loginPage.validlogin(data.problemuser.username, data.problemuser.password);
        await loginPage.loginSucess();
    });
    test('Login with performance glitch user', async ({page, loginPage}) => {
        await page.goto('/');
        await loginPage.validlogin(data.performanceglitchuser.username, data.performanceglitchuser.password);
        await loginPage.loginSucess();
    });
    test('Login with error user', async ({page, loginPage}) => {
        await page.goto('/');
        await loginPage.validlogin(data.erroruser.username, data.erroruser.password);
        await loginPage.loginSucess();
    });
    test('Login with visual user', async ({page, loginPage}) => {
        await page.goto('/');
        await loginPage.validlogin(data.visualuser.username, data.visualuser.password);
        await loginPage.loginSucess();
    });
    test('Login with invalidvalid user', async ({page, loginPage}) => {
        await page.goto('/');
        await loginPage.invalidLogin(data.invalidLogins.username, data.invalidLogins.password);
        await expect(loginPage.errorMessage).toBeVisible();
    });
    test('Login with empty user', async ({page, loginPage}) => {
        await page.goto('/');
        await loginPage.EmptyUser(data.emptyLogins.username, data.emptyLogins.username);
        await expect(loginPage.EmptyMessage).toBeVisible();
    });
});