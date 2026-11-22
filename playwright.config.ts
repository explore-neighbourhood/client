import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  use: {
    baseURL: process.env.E2E_BASE_URL ?? 'http://localhost:3000',
    browserName: 'chromium',
    launchOptions: { executablePath: process.env.E2E_CHROMIUM_PATH },
  },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1280, height: 900 } } },
    { name: 'mobile', use: { viewport: { width: 375, height: 812 }, isMobile: true, hasTouch: true } },
  ],
});
