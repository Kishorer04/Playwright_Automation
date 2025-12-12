// 'timeout' parameter has been added below 'use' section in playwright.config.js
// Even if we don't specify 'timeout' parameter in the config file the default timeout will be 30000 ms
// And this timeout can be changed if required


const {test,expect} = require('@playwright/test')
/*
// only()
test.only('Test 1',async({page})=>{
console.log('This is Test 1')
})


// skip()
test.skip('Test 2',async({page})=>{
console.log('This is Test 2')
})


// skip() - Based on certain condition
test.skip('Test 3',async({page,browserName})=>{   // browserName is one more fixture to fetch the browser name
console.log('This is Test 3')
if(browserName==='chromium')
{
    test.skip()
}
})
*/

// fixme()
test('Test 4',async({page})=>{
   test.fixme()                  // fixme() will also skip the test like skip(). We will use this whenever we have some known issues,
                                 // or the script need to be fixed and run in the future or the Test has some bugs etc. 
                                 // We can use this fixme() based on some condition also
                                 // If using fixme(), should use it in the first line of the Test
   console.log('This is Test 4')
})


// fail()
test('Test 5',async({page})=>{
test.fail()                   // Our expectation is this Test should fail since we have used test.fail()
console.log('This is Test 5')
expect(1).toBe(1)            // Actual
                             // In our case, this Test will fail because assertion is pass and we expect fail using test.fail()
                             // If both Exp and Act fail then Test will pass
                             // This is kind of negative assertion
})  


// fail() - Based on certain condition
test.skip('Test 6',async({page,browserName})=>{   // browserName is one more fixture to fetch the browser name
console.log('This is Test 6')
if(browserName==='chromium')   // Actual
{
    test.fail()  // Expectation
                 // If both Exp and Act fail then Test will pass
}                // This is kind of negative assertion
})


// slow()
test('Test 7',async({page})=>{
 test.slow() // This slow() annotation will triple the timeout. If the timeout is 1000 ms (given in playwright.config.js) after using this annotation in a Test, the new timeout for the Test will be 3000 ms
             // The default timeout is 30000 ms (given in playwright.config.js). After using this slow() annotation the timeout will be 90000 ms for the Test where slow() is used
 
 test.setTimeout(5000) // This is used to set timeout in Test level. The timeout specified in playwright.config.js is global and is applicable for all the spec files
 await page.goto('https://www.demoblaze.com/index.html')
 console.log('This is Test 7')

})
