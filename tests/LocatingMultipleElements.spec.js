const{test, expect} = require('@playwright/test')

test('LocatingMultipleElements',async({page})=>{

    await page.goto("https://www.demoblaze.com/index.html")
    
    //Capturing all links
    /*
    const links = await page.$$('a')   // $$ is used to locate multiple elements and the return type will be array. Can use locator() also to locate multiple elements and the return type will be a locator object

    for(const link of links)
    {
        const linkText = await link.textContent()
        console.log(linkText)
    }
    */

    // Locate all the products displayed on the home page

    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")
    const products = await page.$$("//div[@id='tbodyid']//div//h4/a") // $$ is used to locate multiple elements and the return type will be array. Can use locator() also to locate multiple elements and the return type will be a locator object

    for(const product of products)
    {
        const prodName= await product.textContent()
        console.log(prodName)
    }

})