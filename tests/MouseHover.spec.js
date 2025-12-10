const {test,expect} = require('@playwright/test')

test('Mouse Hover',async ({page})=>{

    await page.goto('https://demo.opencart.com')
    
    let desktops = await page.locator("//a[normalize-space()='Desktops']")
    let macbook  = await page.locator("//a[normalize-space()='Mac (1)']")

    // Mouse hover
    await desktops.hover()
    await macbook.hover()

    await page.waitForTimeout(3000)
})