// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,   // Changing to 'false' to execute Hooks and Hooks1.spec.js in non-parallel mode. By default it will be 'true'
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0, // This retry is for CI so commenting
  // retries:1, // This will retry once if the Test fails
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,   // Only one worker by default. Did not change anything manually
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */

  // reporter: 'html', // Default is 'html'. Can change to 'list', 'line', 'dot', 'json' (refer below for syntax), 'junit' (refer below for syntax)
  // reporter:[['json', {outputFile: 'results.json'}]], // Generates report in the current project location
  // reporter:[['junit', {outputFile: 'results.xml'}]], // Generates report in the current project location

  //Combination of reports
  reporter: [['list'],
             ['html'],
             ['junit',{outputFile:'results.xml'}],
             ['json',{outputFile:'results.json'}],
             ['allure-playwright',{outputFolder: 'allure-results'}]  // For Allure report
            ],
  

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

    trace: 'retain-on-failure', // If 'on' tracing will happen and a tracing.zip file will be generated under test-results folder. And this trace will be part of the report
                               // We have options like 'on', 'off', 'on-all-retries, 'on-first-retry', 'retain-on-failure', 'retain-on-first-failure', 'retry-with-trace'
    
    screenshot: 'only-on-failure',  // If 'on' screenshot will be taken in each step in any spec file irrespective of the test status like pass/fail/skip etc. And this screenshot will be part of the report
                                    // We have four options like 'on', 'off', 'on-first-failure', 'only-on-failure'
    
    video:'retain-on-failure', // If 'on' video will be taken in each step in any spec file irrespective of the test status like pass/fail/skip etc. And this video will be part of the report
                                  // We have options like 'on', 'off', 'on-first-retry', 'retain-on-failure', 'retry-with-video'                              
    },

  // timeout: 30000,  // The default timeout is 30 seconds. Can change if required 

  /* Configure projects for major browsers */
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

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

