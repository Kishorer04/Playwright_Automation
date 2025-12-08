const {test,expect} = require('@playwright/test')

test('Handle Inner IFrames',async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames')

    let frame3 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'})

    await frame3.locator("input[name='mytext3']").fill('welcome')

    //Handling Nested frame
    let childFrames = await frame3.childFrames() // Returns an array of child frames of the parent frame
    await childFrames[0].locator("//div[@id='i6']").check() // Radio button

    await page.waitForTimeout(3000)

})