const {test,expect} = require('@playwright/test')

test('Handle Select Tag Dropdown',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com')
    
    // Multiple ways to select option from the dropdown
    
    // selectOption() can be used only for dropdowns with Select tag

    // await page.locator('#country').selectOption({label:'India'}) // label: visible text  
    // await page.locator('#country').selectOption('India')  // visible text
    // await page.locator('#country').selectOption({value:'uk'})  //using value attribute
    // await page.locator('#country').selectOption({index:1}) // using index
    // await page.selectOption('#country','India') //by text

    //Assertions
    // 1. Check number of options in dropdown - Approach 1
    let options  = await page.locator('#country option') 
    await expect(options).toHaveCount(10)

    //2. Check number of options in dropdown - Approach 2
    let options1 = await page.$$('#country option') // using $$ to fetch the options as an array. Can use locator() also but the return type won't be an array but a locator object
                                                    
    console.log('Number of options: ',options1.length)
    await expect(options1.length).toBe(10)
    console.log('Check')

    //3. Check presence of value in the dropdown - Approach 1
    let content = await page.locator('#country').textContent() // textContent() will return all the options in String format
    await expect(content.includes('India')).toBeTruthy()

    //4. Check presence of value in the dropdown using looping - Approach 2
    /*
    let options2 = await page.$$('#country option') // using $$ to fetch the options as an array. Can use locator() also but the return type won't be an array but a locator object
    let status = false;                             

    for(let option of options2)
    {
    //    console.log(await option.textContent())
    let value = await option.textContent()
    if(value.includes('France'))
    {
        status = true
        break
    }
    }
    expect(status).toBeTruthy()
    */

    // 5. Select option from dropdown using loop
    let options2 = await page.$$('#country option') // using $$ to fetch the options as an array. Can use locator() also but the return type won't be an array but a locator object
    let status = false;                             
                                                    
    for(let option of options2)
    {
    let value = (await option.textContent()).trim()
    if(value.includes('France'))
    {
        await page.selectOption('#country',value)
        break
    }
    }
    await page.waitForTimeout(3000)

})

