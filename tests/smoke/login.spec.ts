import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';


test('user can log in successfully', async ({ page }) => {
const loginPage = new LoginPage(page);


await loginPage.goto();
await loginPage.login(
process.env.TEST_USER_EMAIL!,
process.env.TEST_USER_PASSWORD!
);


// Überprüfe, ob der Products-Titel angezeigt wird
await expect(loginPage.productsTitle).toBeVisible();
await expect(loginPage.productsTitle).toHaveText('Products');


// Alternative: Überprüfe die URL
await expect(page).toHaveURL(/inventory/);
});