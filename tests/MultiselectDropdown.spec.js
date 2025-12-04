const {test,expect}= require('@playwright/test')

test('Handle Multiselect Dropdown',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com')

    //Select multiple options from Multiselect Dropdown
    await page.selectOption('#colors',['Blue','Red','Yellow']) // This dropdown is Select tag dropdown, that's why using selectOption()

    //Assertions
    //1. Check number of options in dropdown
    let options = await page.locator('#colors option')
    await expect(options).toHaveCount(7)

    //2. Check number of options in dropdown using JS array
    let options1 =await page.$$('#colors option')
    console.log('Number of options: ',options1.length)
    await expect(options1.length).toBe(7)

    //3. Check presence of value in the dropdown
    let content = await page.locator('#colors').textContent()
    await expect(content.includes('Blue')).toBeTruthy()
    await expect(content.includes('Black')).toBeFalsy()

    await page.waitForTimeout(3000)

})

