//const {test,expect} = require('@playwright/test')  //or
import {test,expect} from '@playwright/test'
import { execPath } from 'process';

test('Locators',async ({page})=>{

   await page.goto("https://www.demoblaze.com/index.html")

   // click on login button  - Property/Attribute
  // await page.locator('id=login2').click()  //used id attribute/property here
   //or
   await page.click('id=login2');  //used id attribute/property here

   // provide username  - CSS
  // await page.locator('#loginusername').fill("kishore@1234")
  //or
  // await page.locator('#loginusername').type("kishore@1234")
   //or
   await page.fill('#loginusername','kishore@1234')
   //or
   //await page.type('#loginusername','kishore@1234')

   // provide password - CSS
   await page.fill("input[id='loginpassword']",'password@1234')

   // login button - XPath
   await page.click("//button[normalize-space()='Log in']")

   // verify logout link presence - XPath
   const logoutLink = await page.locator("//a[normalize-space()='Log out']")

   await expect(logoutLink).toBeVisible()

   await page.close()
})