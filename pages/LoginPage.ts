import {expect, type Locator, type Page} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    //readonly Message: string;
    readonly EmptyMessage: Locator;
    readonly LockedMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', {name : 'Login'})
        this.errorMessage = page.getByText('Epic sadface: Username and password do not match any user in this service');
        this.LockedMessage = page.getByText('Epic sadface: Sorry, this user has been locked out');
        this.EmptyMessage = page.getByText('Epic sadface: Username is required');
    }
    async goto() {
        await this.page.goto('/');
    }
    async invalidLogin(Invalid_Username: string, Invadlid_Password: string) {
        await this.usernameInput.fill(Invalid_Username);
        await this.passwordInput.fill(Invadlid_Password);
        await this.loginButton.click();
        await expect(this.errorMessage).toBeVisible();

    }
     async LockedUser(Username: string, Password: string) {
        await this.usernameInput.fill(Username);
        await this.passwordInput.fill(Password);
        await this.loginButton.click();
        await expect(this.LockedMessage).toBeVisible();
    }
     async EmptyUser(Username: string, Password: string) {
        await this.usernameInput.fill(Username);
        await this.passwordInput.fill(Password);
        await this.loginButton.click();
        await expect(this.EmptyMessage).toBeVisible();
    }

    async validlogin(USERNAME: string, PASSWORD: string) {
        await this.usernameInput.fill(USERNAME);
        await this.passwordInput.fill(PASSWORD);
        await this.loginButton.click();
    }
    async loginSucess() {
        await expect(this.page).toHaveURL('/inventory.html');
    }
}