const {test,expect} = require('@playwright/test')

test('Hard Assertions Test',async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

    // expect(page).toHaveURL()
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    // expect(page).toHaveTitle()
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    // expect(locator).toBeVisible()
    let logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    // expect(locator).toBeEnabled()  // expect(locator).toBeDisabled()
    let searchStoreBox = await page.locator('#small-searchterms')
     await expect(searchStoreBox).toBeEnabled()
                                //.toBeDisabled()

    // expect(locator).toBeChecked()
    // radio button
    let maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked()

    // check box
    let newsletterCheckbox = await page.locator('#NewsLetterSubscriptions_0__IsActive')
    await expect(newsletterCheckbox).toBeChecked()

    // expect(locator).toHaveAttribute()
    let regButton = await page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type','submit')

    // expect(locator).toHaveText()
     await expect(await page.locator('.page-title h1')).toHaveText('Register')

    // expect(locator).toContainText()
    await expect(await page.locator('.page-title>h1')).toContainText('Reg')

    // expect(locator).toHaveValue()
    let emailInput = await page.locator('#Email')
    await emailInput.fill('test@demo.com')
    await expect(emailInput).toHaveValue('test@demo.com')

    // expect(locator).toHaveCount()
    let options = await page.locator("select[name='DateOfBirthMonth'] option") // Can use locator() to identify single element and multiple elements. Or can use $$ also for identifying multiple elements.
    await expect(options).toHaveCount(13)

})