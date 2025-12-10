const {test,expect} = require('@playwright/test')

test('Mouse Right/Context click',async ({page})=>{

   await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    
    let button = await page.locator("//span[normalize-space()='right click me']")

    //Right click
    await button.click({button: 'right'})

    await page.waitForTimeout(3000)
})