import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { config } from 'dotenv';
config();

test ('Sauce Demo Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
    await loginPage.loginSucess();
})