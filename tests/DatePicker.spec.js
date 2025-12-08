const {test,expect} = require('@playwright/test')

test('Date Picker',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com')
    
    // Simply using fill()
    /*
    await page.fill('#datepicker','06/05/2025')
    await page.waitForTimeout(3000)
    */

    // Handle using logic
    const year = '2026'
    const month = 'March'
    const date = '15'

    await page.click('#datepicker')

    while(true)
    {
        let currentYear = await page.locator('.ui-datepicker-year').textContent()
        let currentMonth = await page.locator('.ui-datepicker-month').textContent()

        if(currentYear == year && currentMonth == month)
        {
            break
        }
        await page.locator("a[title='Next']").click()
        // await page.locator("a[title='Prev']").click() // For moving backwards 
    }
   

    // Approach 1 - Selecting date using loop
    /*
    let dates = await page.$$('.ui-state-default') // Want the dates as array so using '$$'
    for(const dt of dates)
    {
        if(await dt.textContent() == date)
        {
            await dt.click()
            break
        }
    }
        */

    //Approach 2 - Date selection without loop using XPath
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`) // This is the syntax use a variable in XPath in JS
    await page.waitForTimeout(3000)

})