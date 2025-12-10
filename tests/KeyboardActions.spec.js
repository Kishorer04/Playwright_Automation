const {test,expect} = require('@playwright/test')

test('Keyboard actions', async({page})=>{

 await page.goto('https://gotranscript.com/text-compare')

//  await page.locator("[name='text1']").fill('welcome to automation')   //or

await page.fill("[name='text1']",'welcome to automation')

//Ctrl+A
await page.keyboard.press('Control+A') // If we have to use multiple keys combination use press()

//Ctrl+C
await page.keyboard.press('Control+C')

//Tab
await page.keyboard.down('Tab')   // If we have to use single key use down()/up()
await page.keyboard.up('Tab')

//Ctrl+V
await page.keyboard.press('Control+V')

await page.waitForTimeout(3000)

})