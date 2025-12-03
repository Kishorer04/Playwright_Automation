const {test, expect} = require('@playwright/test')

test('Handle RadioButtons',async ({page})=>{

    await page.goto('https://itera-qa.azurewebsites.net/home/automation')
    
    await page.locator("//input[@value='option2']").check() //or
    // await page.check("//input[@value='option2']")

    await expect(await page.locator("//input[@value='option2']")).toBeChecked()
    await expect(await page.locator("//input[@value='option2']").isChecked()).toBeTruthy()
    
    await expect(await page.locator("//input[@value='option1']").isChecked()).toBeFalsy()
    
    await page.waitForTimeout(5000)

})