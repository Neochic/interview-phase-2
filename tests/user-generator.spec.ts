import { test, expect } from '@playwright/test';

test('has correct title', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await expect(page).toHaveTitle('User Generator');
});

test('shows correct headline', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await expect(page.getByRole('heading', { name: 'User Generator' })).toBeVisible();
});
