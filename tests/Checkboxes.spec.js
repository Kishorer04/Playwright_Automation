const {test,expect} = require('@playwright/test')

test('Handle Checkboxes', async ({page})=>{

    page.goto('https://itera-qa.azurewebsites.net/home/automation')

    // Single checkbox
    await page.locator("//input[@id='monday' and @type='checkbox']").check() //or
    // await page.check("//input[@id='monday' and @type='checkbox']")

    await expect(await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked()
    await expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy()
    
    await expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeFalsy()
    
    // Multiple checkboxes
      const checkboxLocators=[
                       "//input[@id='monday' and @type='checkbox']",
                       "//input[@id='sunday' and @type='checkbox']",
                       "//input[@id='saturday' and @type='checkbox']"
                        ]
    
    for(const locator of checkboxLocators)  //Select multiple checkboxes
    {
        await page.locator(locator).check()
    }

    await page.waitForTimeout(3000)

    for(const locator of checkboxLocators)  //Unselect multiple checkboxes which are already selected
    {
        if(await page.locator(locator).isChecked())
        {
         await page.locator(locator).uncheck()
        } 
    }

    await page.waitForTimeout(3000)

})