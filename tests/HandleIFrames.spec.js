const {test,expect} = require('@playwright/test')

test('Frames',async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    //The tag in the html dom can be 'iframe' or 'frame' also sometimes. It depends on the webpage

    //Total frames
    let allFrames = await page.frames()
    console.log("Number of frames ",allFrames.length)

    // Approach 1: Using Name or URL of the frame
    // let frame1 = await page.frame('name') // use if Name of the frame is present
    // let frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'}) // Used frame's URL here
    // await frame1.fill("input[name='mytext1']",'Hello')

    // await page.waitForTimeout(5000)

    // Approach 2: Using frame locator
      let inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
      await inputBox.fill('Hello')

})