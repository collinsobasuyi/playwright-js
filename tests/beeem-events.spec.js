// npx playwright codegen https://dev.events.beeem.com/
// @ts-check
const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://dev.events.beeem.com/');
  await page.getByRole('heading', { name: 'Filter by preferences' }).click();
  await page.getByRole('heading', { name: 'Browse a category' }).click();
  await page.getByRole('heading', { name: 'Price range' }).click();
  await page.getByRole('heading', { name: 'Details' }).click();
  await page.getByLabel('Search').click();
  await page.locator('label').filter({ hasText: 'Attending' }).click();
  await page.getByTestId('Organise by').getByRole('button', { name: '​' }).click();
  await page.locator('#menu-sort div').first().click();
  await page.locator('.MuiBox-root > div > div').first().click();
  await page.locator('#fade-menu div').first().click();
});