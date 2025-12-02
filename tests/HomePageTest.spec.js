const {test,expect} = require('@playwright/test') //Can use let or const or var

test('Home Page',async ({page})=>{  // "()=>" is an Arrow function which is Anonymous bcoz it doesn't have a name.'page' is a fixture available in playwright and it is passed inside the Arrow Anonymous function. 
                                    // Curly braces covering 'page' are mandatory and its the syntax
                                    // Javascript is an Asynchronized language
                                    // async keyword. This should be used before the function and it makes sure the function returns a 'promise'
   
await page.goto('https://www.demoblaze.com/index.html') // await keyword makes sure the function waits for the 'promise'

   const pageTitle= await page.title();
   console.log("Page title is: ",pageTitle);

   await expect(page).toHaveTitle('STORE'); // expect is used for Validation/Assertion

   const pageUrl = await page.url();

   console.log("Page URL is: ",pageUrl)

   await expect(page).toHaveURL("https://www.demoblaze.com/index.html");

   await page.close();

})