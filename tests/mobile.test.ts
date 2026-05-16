import { expect, test, devices } from '@playwright/test';

test.use({ viewport: devices['iPhone 13'].viewport });

const ROUTES = ['/', '/services/', '/case-studies/', '/approach/', '/writing/', '/contact/'];

for (const path of ROUTES) {
	test(`mobile renders ${path}`, async ({ page }) => {
		const response = await page.goto(path);
		expect(response?.status()).toBe(200);

		// Mobile nav should show the hamburger.
		const hamburger = page.locator('button[aria-controls="mobile-drawer"]');
		await expect(hamburger).toBeVisible();
	});
}

test('mobile nav drawer opens and closes', async ({ page }) => {
	await page.goto('/');
	const hamburger = page.locator('button[aria-controls="mobile-drawer"]');
	await hamburger.click();
	await expect(page.locator('#mobile-drawer')).toBeVisible();
	await page.locator('#mobile-drawer a[href="/services/"]').first().click();
	// Navigation closes the drawer and lands on /services/.
	await page.waitForURL('**/services/');
	await expect(page.locator('h1')).toContainText('Three ways');
});
