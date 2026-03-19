import { test, expect } from '@playwright/test';

test('home page renders api data (mocked) and utils output', async ({ page }) => {
  await page.route('https://jsonplaceholder.typicode.com/posts/1', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        userId: 1,
        id: 1,
        title: 'Mock Title',
        body: 'Mock Body',
      }),
    });
  });

  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: /site e/i })
  ).toBeVisible();
  await expect(page.getByText('Mock Title')).toBeVisible();

  await expect(page.getByText(/isExternalUrl/i)).toBeVisible();
  await expect(page.getByText(/= true/i)).toBeVisible();
});

