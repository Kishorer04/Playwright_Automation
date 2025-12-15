// We have different types of built-in reporters provided by Playwright like list,line,dot,html,json,junit
// To generate these different types of built-in reporters we can either configure in playwright.config.js (refer 'reporter' parameter above 'use' section in defineConfig section) or
// can use commands in the terminal (refer commands in notes)
// Can generate multiple combination of reporters as well (refer 'reporter' parameter above 'use' section in defineConfig section in playwright.config.js for configuring multiple reporters)
// For multiple combination of reporters using command-line simply use comma(,) and enter the reporter names. No space between reporter names
// Command-line reporters override playwright.config.js
// For Allure Report refer screenshot (Note: No separate spec file for Allure report POC is created)


const {test,expect} = require('@playwright/test')

test('Test 1',async ({page})=>{
await page.goto('https://www.demoblaze.com/index.html')
await expect(page).toHaveTitle('STORE')
})

test('Test 2',async ({page})=>{
await page.goto('https://www.demo.opencart.com')
await expect(page).toHaveTitle('Your Store')
})


test('Test 3',async ({page})=>{
await page.goto('https://www.demo.nopcommerce.com')
await expect(page).toHaveTitle('nopCommerce demo store')
})