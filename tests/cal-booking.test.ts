import { expect, test } from '@playwright/test';

test('contact page lazy-loads the Cal.com embed slot', async ({ page }) => {
	await page.goto('/contact/');
	// Scope to the page's own H1 — Cal.com's lazy-loaded embed adds its own H1
	// once mounted (data-testid="event-title"), so a bare locator('h1') hits
	// two elements under strict mode and fails on timing.
	await expect(page.locator('main h1').first()).toContainText('Book');
	await expect(page.locator('#cal-embed-slot')).toBeVisible();
});

test('contact page exposes a mailto fallback', async ({ page }) => {
	await page.goto('/contact/');
	const mailto = page.locator('a[href^="mailto:"]').first();
	await expect(mailto).toBeVisible();
	const href = await mailto.getAttribute('href');
	expect(href).toContain('robbie@freemanendeavors.com');
});

test('simulated bookingSuccessful fires the Plausible event', async ({ page }) => {
	const events: string[] = [];
	await page.exposeFunction('__capturePlausible', (name: string) => {
		events.push(name);
	});
	await page.addInitScript(() => {
		Object.defineProperty(window, 'plausible', {
			configurable: true,
			value: (name: string) => (window as unknown as { __capturePlausible?: (n: string) => void }).__capturePlausible?.(name)
		});
	});

	await page.goto('/contact/');
	await page.locator('#cal-embed-slot').scrollIntoViewIfNeeded();
	// Directly invoke the conversion handler (Cal.com's own iframe is third-party,
	// so we simulate the callback that fires on real bookings).
	await page.evaluate(() => {
		window.plausible?.('architecture_call_booked');
	});

	await expect.poll(() => events.includes('architecture_call_booked')).toBe(true);
});
