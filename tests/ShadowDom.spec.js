// XPath is not allowed for Shadow DOM
// Always use CSS
// Make sure Shadow root is open. We cannot automate if the Shadow root is closed. Automation is not feasible
// We don't have any dedicated method to switch to Shadow DOM and do the actions. Playwright automatically switches
// and it will automatically perform actions using the concept called Auto-Piercing
// In Playwright (Java & JavaScript), we don’t need to worry about normal or nested open Shadow DOM etc. Using page.locator() is enough—Playwright automatically pierces open Shadow DOM and performs actions. 
// Only closed Shadow DOM is not accessible.


const {test, expect} = require('@playwright/test')

test('Handle Shadow Dom',async({page})=>{
 
    await page.goto('https://books-pwakit.appspot.com/')
    let searchBox = await page.locator('book-app > app-header > app-toolbar > book-input-decorator > input#input')
    await searchBox.fill('Kishore')
    await page.waitForTimeout(3000)
})