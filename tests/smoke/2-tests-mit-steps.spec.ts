import { test, expect } from '@playwright/test';

test('Test 1', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
