import { test, expect } from '@playwright/test';

test('home page renders analytics UI and session id', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: /site d/i })
  ).toBeVisible();
  await expect(page.getByText(/session id:/i)).toBeVisible();

  // Buttons are client-side; ensure clicking them doesn't break the page.
  await expect(
    page.getByRole('button', { name: /identify session/i })
  ).toBeVisible();
  await expect(page.getByRole('button', { name: /track event/i })).toBeVisible();

  await page.getByRole('button', { name: /identify session/i }).click();
  await page.getByRole('button', { name: /track event/i }).click();
});

