// In playwright.config.js added 'screenshot' parameter and given value as 'on' under 'use' section to take screenshot in each step for any spec file and this screenshot will be part of the report
// If automatic screenshot is not required in each step just take off the 'screenshot' parameter along with the value 'on' from playwright.config.js
// And if screenshot is required whenever needed use the screenshot() in the code level

import { test, expect } from '@playwright/test'

test('Test', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html')
    await page.getByRole('link',{name:'Log in'}).click()
    await page.locator('#loginusername').fill('kishore@1234')
    await page.locator('#loginpassword').fill('password@1234')
    await page.getByRole('button',{name:'Log in'}).click()
})