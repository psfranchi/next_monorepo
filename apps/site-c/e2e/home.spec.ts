import { test, expect } from '@playwright/test';

test('home page renders content with date formatting', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: /site c/i })
  ).toBeVisible();
  await expect(page.getByText(/^Published:/)).toBeVisible();
  await expect(page.getByText(/^Updated:/)).toBeVisible();

  await expect(
    page.getByRole('heading', { name: /sample article/i })
  ).toBeVisible();
});

