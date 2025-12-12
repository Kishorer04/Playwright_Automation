// In playwright.config.js added 'video' parameter and given value as 'on' under 'use' section to take video of each step for any spec file and this video will be part of the report
// If video is not required in each step just mark 'video' parameter as 'off' or explore other options as per necessity for 'video' parameter in playwright.config.js
// Results will be available under 'test-results' folder
// This configuration in playwright.config.js is applicable for all the spec files

import { test, expect } from '@playwright/test'

test('Test', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html')
    await page.getByRole('link',{name:'Log in'}).click()
    await page.locator('#loginusername').fill('kishore@1234')
    await page.locator('#loginpassword').fill('password@1234')
    await page.getByRole('button',{name:'Log in'}).click()
    await expect(page.locator('#logout2')).toBeVisible()
})