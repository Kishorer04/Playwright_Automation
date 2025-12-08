const {test,expect} = require('@playwright/test')

test('Hidden options dropdown',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("[name='username']").fill('Admin')
    await page.locator("[name='password']").fill('admin123')
    await page.locator("[type='submit']").click()

    await page.locator("//span[normalize-space()='PIM']").click()

    // Click on dropdown
    await page.locator('div:nth-child(6) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) i:nth-child(1)').click()

    // Waiting for options
    await page.waitForTimeout(3000)

   let options=  await page.$$("//div[@role='listbox']//span")

    for(let option of options)
    {
            let jobTitle = await option.textContent()
            // console.log(jobTitle)
            if(jobTitle.includes('QA Engineer'))
            {
                await option.click()
                break
            }
    }
    await page.waitForTimeout(3000)
})