const {test,expect}= require('@playwright/test')

test('Built-in Locators',async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // page.getByAltText()
    let logo = await page.getByAltText('company-branding') // 'alt' is the attribute
    await expect(logo).toBeVisible()

    // page.getByPlaceholder()
    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder('Password').fill('admin123')

    // page.getByRole()
    await page.getByRole('button',{type:'submit'}).click()  // Here 'role' is not an attribute. We can locate any type of element by using getByRole()
                                                            // Just mention the tag name like button,input,select etc. and in the curly braces specify any attribute and value
    
    // page.getByText()
    let name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent()                                                       
    await expect(await page.getByText(name)).toBeVisible()

    // page.getByLabel()
    // page.getByTitle()
    // page.getByTestId()


})