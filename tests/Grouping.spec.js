// const {test,expect} = require('@playwright/test')  //or
import { test, expect } from '@playwright/test'


test.beforeAll(async()=>{
    console.log('This is beforeAll Hook....')
})

test.afterAll(async()=>{
    console.log('This is afterAll Hook....')
})

test.beforeEach(async()=>{
    console.log('This is beforeEach Hook....')
})

test.afterEach(async()=>{
    console.log('This is afterEach Hook....')
})

test.describe.only('Group 1', () => {       // Use .only to execute only the specific group
                                            // use .skip to skip execution of the specific group
    test('Test 1', async ({ page }) => {
        console.log('This is test 1')
    })

    test('Test 2', async ({ page }) => {
        console.log('This is test 2')
    })
})

test.describe('Group 2', () => {

    test('Test 3', async ({ page }) => {
        console.log('This is test 3')
    })

    test('Test 4', async ({ page }) => {
        console.log('This is test 4')
    })

})

