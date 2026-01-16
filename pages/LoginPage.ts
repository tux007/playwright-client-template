import { Page, Locator } from '@playwright/test';


export class LoginPage {
readonly page: Page;
readonly usernameInput: Locator;
readonly passwordInput: Locator;
readonly loginButton: Locator;
readonly productsTitle: Locator;


constructor(page: Page) {
this.page = page;
this.usernameInput = page.locator('[data-test="username"]');
this.passwordInput = page.locator('[data-test="password"]');
this.loginButton = page.locator('[data-test="login-button"]');
this.productsTitle = page.locator('[data-test="title"]');
}


async goto() {
await this.page.goto('/');
}


async login(username: string, password: string) {
await this.usernameInput.fill(username);
await this.passwordInput.fill(password);
await this.loginButton.click();
}


async isLoggedIn(): Promise<boolean> {
return await this.productsTitle.isVisible();
}


async getProductsTitle(): Promise<string> {
return await this.productsTitle.textContent() || '';
}
}