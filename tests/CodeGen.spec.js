// This code below is generated using CodeGen
// Command used: npx playwright codegen -o tests/CodeGen.spec.js

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('kishore@1234');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('password@1234');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});