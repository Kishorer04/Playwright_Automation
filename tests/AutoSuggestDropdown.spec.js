const {test,expect} = require('playwright/test')

test('Handle AutoSuggest Dropdown',async ({page})=>{

    await page.goto('https://www.redbus.in')
    
    await page.locator("//div[text()='From']").fill('Delhi')

    await page.waitForSelector("//div[@class='listHeader___40b031']")

   let fromCityOptions =  await page.$$("//div[@class='listHeader___40b031']")

   for(let option of fromCityOptions)
   {
    let value = await option.textContent()
    // console.log(value)
    if(value.includes('Anand Vihar'))
    {
        await option.click()
        break
    }
   }
   
   await page.waitForTimeout(3000)

})