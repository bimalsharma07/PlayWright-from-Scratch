import { defineConfig, devices } from '@playwright/test'
require('dotenv').config();
export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,

  forbidOnly: !!process.env.CI,
  
  retries: process.env.CI ? 2 : 0,
 
  workers: process.env.CI ? 1 : undefined,
  
  reporter: [['html'], ['allure-playwright']],
    
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    baseURL: 'https://www.saucedemo.com/',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
