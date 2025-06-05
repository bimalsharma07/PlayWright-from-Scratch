import {expect, type Locator, type Page} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }
    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }
    async login(USERNAME: string, PASSWORD: string) {
        await this.usernameInput.fill(USERNAME);
        await this.passwordInput.fill(PASSWORD);
        await this.loginButton.click();
    }
    async loginSucess() {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }
}