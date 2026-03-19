import { test, expect } from '@playwright/test';

test('home page renders header and CTA', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: /site a/i })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: /welcome/i })
  ).toBeVisible();
  await expect(
    page.getByRole('button', { name: /get started/i })
  ).toBeVisible();
});

