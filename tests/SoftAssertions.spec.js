const {test, expect} = require('@playwright/test')

test('Soft Assertions',async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

    //Soft Assertions
    await expect.soft(page).toHaveTitle('STORE123')
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html')
    await expect.soft(page.locator('.navbar-brand')).toBeVisible()

    // For every Hard assertion, equivalent Soft assertion is available. Just use .soft()

})