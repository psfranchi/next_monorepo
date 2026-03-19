import { defineConfig } from '@playwright/test';

const port = 3002;

export default defineConfig({
  testDir: './e2e',
  timeout: 30_000,
  use: {
    baseURL: `http://localhost:${port}`,
  },
  webServer: {
    command: 'pnpm start',
    port,
    reuseExistingServer: !process.env.CI,
  },
});

