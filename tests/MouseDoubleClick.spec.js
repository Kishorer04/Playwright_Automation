const {test,expect} = require('@playwright/test')

test('Mouse Double click', async({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com')

   let btnCopy = await page.locator("//button[normalize-space()='Copy Text']")

   // Double click
   await btnCopy.dblclick()

   let f2 = await page.locator('#field2')

   await expect(f2).toHaveValue('Hello World!')

   await page.waitForTimeout(3000)
})