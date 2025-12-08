const { test, expect } = require('@playwright/test')

test('Handling Table', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com')

    let table = await page.locator("#productTable")

    // 1. Total number of rows and columns
    let columns = await table.locator('thead tr th')
    console.log('Number of columns', await columns.count())

    let rows = await table.locator('tbody tr')
    console.log('Number of rows', await rows.count())

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)

    // 2. Select checkbox for Laptop
    const matchedRow = rows.filter({    // Using filter() here  // Note: Here it is not an arrow function
        has: page.locator('td'),  // In the table, data is present in 'td' tag
        hasText: 'Laptop'
    })
    await matchedRow.locator('input').check()

    //3. Select multiple products by using re-usable function
    await selectProduct(rows, page, 'Tablet')
    await selectProduct(rows, page, 'Smartwatch')
    await page.waitForTimeout(5000)

    //4. Print all product details using loop
    /*
    for (let i = 0; i < await rows.count(); i++) {
        const row = rows.nth(i)
        const tds = row.locator('td')

        for (let j = 0; j < await tds.count() - 1; j++)   // '-1' bcoz we don't need Select (last) column
        {
            console.log(await tds.nth(j).textContent())
        }
    }
        */

    //5. Read data from all the pages in the table
    let pages = await page.locator('.pagination li a')
    console.log('Number of pages in the table: ', await pages.count())

    for (let p = 0; p < await pages.count(); p++) {  // Loop for page
        if (p > 0) {
            await pages.nth(p).click()
        }
        for (let i = 0; i < await rows.count(); i++) { // Loop for row
            const row = rows.nth(i)
            const tds = row.locator('td')

            for (let j = 0; j < await tds.count() - 1; j++)   // Loop for data in each row (column)  
            // '-1' bcoz we don't need Select (last) column
            {
                console.log(await tds.nth(j).textContent())
            }
        }
        await page.waitForTimeout(3000)
    }

})

// This a re-usable JS function, written outside test()
async function selectProduct(rows, page, name) {  // using 'async' bcoz 'await' is used inside the function
    const matchedRow = rows.filter({
        has: page.locator('td'),  // In the table, data is present in 'td' tag
        hasText: name
    })
    await matchedRow.locator('input').check()
}