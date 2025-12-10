const {test,expect} = require('@playwright/test')

test('Upload Single file',async ({page})=>{

    await page.goto('https://foundit.in')
    await page.waitForSelector('.mqfihd-upload')
    await page.locator('.mqfihd-upload').click()

    // Here the element tag is 'input' and 'type=file'. For more details refer the screenshot

    await page.locator('#file-upload').setInputFiles('tests/upload_files/sample.txt')

    await page.waitForTimeout(3000)
})

test.only('Upload Multiple files',async({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')

    // Here the element tag is 'input' and 'type=file'. For more details refer the screenshot

    await page.locator('#filesToUpload')
    .setInputFiles(['tests/upload_files/sample.txt', 'tests/upload_files/testfile.docx'])

    await page.waitForTimeout(3000)

    expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('sample.txt')
    expect(await page.locator('#fileList li:nth-child(2)')).toHaveText('testfile.docx')

    await page.waitForTimeout(3000)

    // For Removing the uploaded files
    await page.locator('#filesToUpload').setInputFiles([]) // Passing empty array for removing

     await page.waitForTimeout(3000)

     expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')

     await page.waitForTimeout(3000)

})