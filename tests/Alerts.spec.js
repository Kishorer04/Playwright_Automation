const {test,expect} = require('@playwright/test')

test.skip('Alert with OK',async({page})=>{
 
    await page.goto('https://testautomationpractice.blogspot.com')

    // Have to enable Dialog window handle before the action that triggers the actual alert. This is used to register the alert before the trigger and handle it either by
	//accepting, dismissing or fetching text from the alert.

     //Enabling alert handling or Dialog window handler
    page.on('dialog',async (dialog) =>{   // Here have to mention 'dialog' in quotes. This is syntax
       expect(dialog.type()).toContain('alert')
       expect(dialog.message()).toContain('I am an alert box!')
       await page.waitForTimeout(3000)
       await dialog.accept()
    })

    await page.waitForTimeout(5000)
    await page.click("//button[normalize-space()='Simple Alert']")  // Clicking alert

})


test.skip('Confirmation dialog-alert with OK and Cancel',async({page})=>{
 
    await page.goto('https://testautomationpractice.blogspot.com')

    // Have to enable Dialog window handle before the action that triggers the actual alert. This is used to register the alert before the trigger and handle it either by
	//accepting, dismissing or fetching text from the alert.

    //Enabling alert handling or Dialog window handler
    page.on('dialog',async (dialog) =>{    // Here have to mention 'dialog' in quotes. This is syntax
       expect(dialog.type()).toContain('confirm')
       expect(dialog.message()).toContain('Press a button!')
       await page.waitForTimeout(3000)
       await dialog.accept() // closes by using OK button
    //    await dialog.dismiss() // closes by using Cancel button
    })

    await page.click("//button[normalize-space()='Confirmation Alert']") // Clicking alert

    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')

    await page.waitForTimeout(5000)
})


test('Prompt dialog',async({page})=>{
 
    await page.goto('https://testautomationpractice.blogspot.com')

    // Have to enable Dialog window handle before the action that triggers the actual alert. This is used to register the alert before the trigger and handle it either by
	//accepting, dismissing or fetching text from the alert.

    //Enabling alert handling or Dialog window handler
    page.on('dialog',async (dialog) =>{    // Here have to mention 'dialog' in quotes. This is syntax
       expect(dialog.type()).toContain('prompt')
       expect(dialog.message()).toContain('Please enter your name:')
       expect(dialog.defaultValue()).toContain('Harry Potter')
       await page.waitForTimeout(3000)
       await dialog.accept('John') // Send the input and close by using OK button. Sending input here because we cannot inspect or handle the input box in the alert
    //    await dialog.dismiss() // closes by using Cancel button
    })

    await page.click("//button[normalize-space()='Prompt Alert']")  // Clicking alert

    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello John! How are you today?')

    await page.waitForTimeout(5000)
})