// In playwright.config.js changing fullyParallel to 'false' from 'true'
// By default it will be 'true'. Changing it to 'false' for executing Hooks.spec.js
// In playwright.config.js the value of 'workers: process.env.CI' is '1' by default


// const {test,expect} = require('@playwright/test') //or
import {test,expect} from '@playwright/test'

let page // global 'page'. This 'page' we are going to use throughout this file

// beforeEach() fixture
test.beforeEach(async ({browser})=>{            // All hooks like beforeEach, afterEach, beforeAll, afterAll will not accept 'page' fixture
                                                // So we have to use 'browser' fixture and then get 'page' fixture from it
page  = await browser.newPage() // We have got 'page' from 'browser'. We will be using this 'page' throughout this file
await page.goto('https://www.demoblaze.com/index.html')

// Login
await page.locator('#login2').click()
await page.locator('#loginusername').fill('kishore@1234')
await page.locator('#loginpassword').fill('password@1234')
await page.locator("//button[normalize-space()='Log in']").click()

})

// afterEach() fixture
test.afterEach(async()=>{     // Nothing is given in the brackets since we have got 'page' fixture globally
                              // We will be using that 'page' fixture throughout this file
    
    await page.waitForTimeout(3000)
    // Logout
    await page.locator('#logout2').click()
    await page.waitForTimeout(3000)
})


// Normal test
test('Home Page Test',async()=>{  // Nothing is given in the brackets since we have got 'page' fixture globally
                                 // If we are not using Hooks concept then we have to use 'page' fixture in every Test method
    await page.waitForTimeout(3000)
    let products = await page.$$('.hrefch') 
    expect(products).toHaveLength(9)
})

// Normal test
test('Add Product to Cart Test',async()=>{  // Nothing is given in the brackets since we have got 'page' fixture globally
                                            // If we are not using Hooks concept then we have to use 'page' fixture in every Test method
    await page.waitForTimeout(3000)
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[normalize-space()='Add to cart']").click()

    page.on('dialog', async (dialog) =>{   // Here have to mention 'dialog' in quotes. This is syntax
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
        await page.waitForTimeout(3000)
    })
})