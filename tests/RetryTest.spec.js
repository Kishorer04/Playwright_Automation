// Refer 'retries' parameter above 'use' section in 'defineConfig' section in playwright.config.js
// Test Flakiness

import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'   // .. represents current project
import { HomePage } from '../pages/HomePage'
import { CartPage } from '../pages/CartPage'

test('POM Test',async({page})=>{

    //Login
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login('kishore@1234','password@1234')
    await page.waitForTimeout(3000)

    //Home
    const home = new HomePage(page)
    await home.addProductToCart('Nexus 6')
    await page.waitForTimeout(3000)
    await home.gotoCart()

    //Cart
    const cart = new CartPage(page);
    await page.waitForTimeout(3000)
    const status = await cart.checkProductInCart('Nexus 6')
    expect(await status).toBe(true)

})