import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const ROUTES = [
	'/',
	'/services/',
	'/case-studies/',
	'/case-studies/vr-edtech-second-principal/',
	'/case-studies/workforce-saas-founding-engineer/',
	'/case-studies/higher-ed-donation-page/',
	'/approach/',
	'/contact/',
	'/writing/',
	'/writing/honest-software-diagnosis/'
];

for (const path of ROUTES) {
	test(`a11y ${path}`, async ({ page }) => {
		await page.goto(path);
		// Layout fades in on mount (.layout starts opacity:0, transitions to
		// opacity:1 over --t-entry/600ms). Axe analyzes computed colors and
		// flattens partially-opaque text against the background, so analyzing
		// mid-fade produces phantom low-contrast violations. Wait for the
		// transition to complete before analyzing.
		await expect(page.locator('.layout')).toHaveCSS('opacity', '1');
		const results = await new AxeBuilder({ page })
			.withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
			.analyze();
		expect(results.violations).toEqual([]);
	});
}
