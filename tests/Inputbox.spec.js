const {test, expect} = require('@playwright/test')

test('Handle Inputbox',async ({page})=>{

    await page.goto('https://itera-qa.azurewebsites.net/home/automation')

    await page.locator("//input[@id='name']").fill("John") //or
    // await page.fill("input[@id='name']",'John')

    await expect(await page.locator("//input[@id='name']")).toBeVisible()
    await expect(await page.locator("//input[@id='name']")).toBeEmpty()
    await expect(await page.locator("//input[@id='name']")).toBeEditable()
    await expect(await page.locator("//input[@id='name']")).toBeEnabled()

    await page.waitForTimeout(5000)

})