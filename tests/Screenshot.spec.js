// In playwright.config.js added 'screenshot' parameter and given value as 'on' under 'use' section to take screenshot in each step for any spec file and this screenshot will be part of the report
// If automatic screenshot is not required in each step just mark 'screenshot' parameter as 'off' or explore other options as per necessity for 'screenshot' parameter in playwright.config.js
// And if screenshot is required whenever needed use the screenshot() in the code level
// Results will be available under 'test-results' folder
// This configuration in playwright.config.js is applicable for all the spec files

import { test, expect } from '@playwright/test'

test('Page screenshot', async ({ page }) => {
    await page.goto('https://demo.opencart.com')
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'HomePage.png' })
})

test('Full page screenshot', async ({ page }) => {
    await page.goto('https://demo.opencart.com')
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'FullPage.png', fullPage: true })
})

test.only('Element screenshot', async ({ page }) => {
    await page.goto('https://demo.opencart.com')
    await page.locator("//*[@id='content']").screenshot({path: 'tests/screenshots/' + Date.now() + 'Element.png' })
})