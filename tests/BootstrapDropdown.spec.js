const {test,expect} = require('@playwright/test')

// Dropdowns which does not have Select tag are called as Bootstrap Dropdown
// Bootstrap Dropdowns can have any other tags like div,button etc. other than Select tag

test('Handle Bootstrap Dropdown',async ({page})=>{

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')

    await page.locator('.multiselect').click() // click on the dropdown

    //1
    const options = await page.locator('ul>li label input')
    await expect(options).toHaveCount(11)

    //2
    const options1 = await page.$$('ul>li label input')
    await expect(options1.length).toBe(11)

    //3. Select options from dropdown
    const options2 = await page.$$('ul>li label')
    for(let option of options2)
    {
        let value = await option.textContent()   // or can use innerText() as well
        // console.log("Value is ", value)
        if(value.includes('Angular') || value.includes('Java'))
        {
            await option.click()
        }
    }

    //4. Deselect options from dropdown
     const options3 = await page.$$('ul>li label')
    for(let option of options3)
    {
        let value = await option.textContent()   // or can use innerText() as well
        // console.log("Value is ", value)
        if(value.includes('HTML') || value.includes('CSS'))
        {
            await option.click()
        }
    }

    await page.waitForTimeout(3000)

})