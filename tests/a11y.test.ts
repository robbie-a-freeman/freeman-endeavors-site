import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const ROUTES = [
	'/',
	'/services/',
	'/case-studies/',
	'/case-studies/specialty-pharmacy-modernization/',
	'/approach/',
	'/contact/',
	'/writing/',
	'/writing/honest-software-diagnosis/'
];

for (const path of ROUTES) {
	test(`a11y ${path}`, async ({ page }) => {
		await page.goto(path);
		const results = await new AxeBuilder({ page })
			.withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
			.analyze();
		expect(results.violations).toEqual([]);
	});
}
