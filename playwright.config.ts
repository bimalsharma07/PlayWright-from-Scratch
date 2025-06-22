import { defineConfig, devices } from '@playwright/test'
require('dotenv').config();


export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: false,
  
  reporter: [['html'], ['allure-playwright']],
    
  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 819 },
      },
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
