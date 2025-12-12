// In Playwright page and window both means the same

const {test,expect, chromium} = require('@playwright/test')

test('Handle Pages/Windows', async()=>{  // Here we are not using 'page' fixture. We are creating on our own using the below code

    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
    const page2 = await context.newPage()

    const allPages = context.pages()
    console.log("No. of pages created: ",allPages.length)

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

    await page2.goto('https://www.orangehrm.com')
    await expect(page2).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM')
})


test.only('Handle Multiple Pages/Windows', async()=>{  // Here we are not using 'page' fixture. We are creating on our own using the below code

    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

    const pagePromise = context.waitForEvent('page') // Triggering the event before clicking on the link to open another page/tab
                                                     // Event name is 'page'. This is the syntax

    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click() // This line opens the second page/tab in the browser

    const newPage = await pagePromise // Storing the event in a variable
    await expect(newPage).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM') 

    await page1.waitForTimeout(3000) // Use 'page1' for interacting with the first page/tab
    await newPage.waitForTimeout(3000) // Use 'newPage' for interacting with the second page/tab

    await browser.close() // Closing bcoz we created our own 'page'. Not used 'page' fixture
})