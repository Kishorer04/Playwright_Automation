const {test,expect} = require('@playwright/test')

test('Test1 @sanity', async ({page})=>{  // Tag name should have '@' as prefix and should be along with the Test name
                                         // The tag name can be with or without space from the Test name
    console.log('This is Test 1')
})

test('Test2@sanity', async ({page})=>{  // The tag name can be with or without space from the Test name

    console.log('This is Test 2')
})

test('Test3@regression', async ({page})=>{

    console.log('This is Test 3')
})

test('Test4@regression', async ({page})=>{

    console.log('This is Test 4')
})

test('Test5@sanity@regression', async ({page})=>{

    console.log('This is Test 5')
})