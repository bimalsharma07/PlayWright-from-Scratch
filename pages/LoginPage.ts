import {expect, type Locator, type Page} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly Message: string = 'Epic sadface: Username and password do not match any user in this service';
    
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', {name : 'Login'})
        this.errorMessage = page.getByText(this.Message);

    }
    async goto() {
        await this.page.goto('/');
    }
    async invalidLogin(Invalid_Username: string, Invadlid_Password: string) {
        await this.usernameInput.fill(Invalid_Username);
        await this.passwordInput.fill(Invadlid_Password);
        await this.loginButton.click();
        await expect(this.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');

    }

    async validlogin(USERNAME: string, PASSWORD: string) {
        await this.usernameInput.fill(USERNAME);
        await this.passwordInput.fill(PASSWORD);
        await this.loginButton.click();
    }
    async loginSucess() {
        await expect(this.page).toHaveURL('/inventory.html', { timeout: 200000 });
    }
}