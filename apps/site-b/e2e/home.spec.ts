import { test, expect } from '@playwright/test';

test('home page renders form and validation errors', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: /site b/i })
  ).toBeVisible();

  await expect(page.getByRole('button', { name: /submit/i })).toBeVisible();

  // Trigger zod validation via submit.
  await page.getByLabel('Name').fill('John');
  await page.getByLabel('Email').fill('not-an-email');
  await page.getByRole('button', { name: /submit/i }).click();

  await expect(page.getByText('Invalid email')).toBeVisible();
});

