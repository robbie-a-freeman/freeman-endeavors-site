import { expect, test } from '@playwright/test';

const ROUTES: { path: string; titleContains: string }[] = [
	{ path: '/', titleContains: 'Software consulting' },
	{ path: '/services/', titleContains: 'Services' },
	{ path: '/case-studies/', titleContains: 'Case studies' },
	{ path: '/case-studies/vr-edtech-second-principal/', titleContains: 'VR EdTech' },
	{ path: '/case-studies/workforce-saas-founding-engineer/', titleContains: 'Founding engineer' },
	{ path: '/case-studies/higher-ed-donation-page/', titleContains: 'donation modal' },
	{ path: '/approach/', titleContains: 'Approach' },
	{ path: '/contact/', titleContains: 'Book a call' },
	{ path: '/writing/', titleContains: 'Writing' },
	{ path: '/writing/honest-software-diagnosis/', titleContains: 'diagnosis' }
];

for (const { path, titleContains } of ROUTES) {
	test(`smoke ${path}`, async ({ page }) => {
		const response = await page.goto(path);
		expect(response?.status()).toBe(200);

		const title = await page.title();
		expect(title.toLowerCase()).toContain(titleContains.toLowerCase());

		const description = await page.locator('meta[name="description"]').getAttribute('content');
		expect(description).toBeTruthy();

		const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
		expect(ogImage).toMatch(/^https:\/\/freemanendeavors\.com\/og\//);
	});
}

test('sitemap.xml lists every public URL', async ({ page }) => {
	const response = await page.goto('/sitemap.xml');
	expect(response?.status()).toBe(200);
	expect(response?.headers()['content-type']).toContain('xml');
	const body = await response!.text();
	for (const { path } of ROUTES) {
		expect(body).toContain(`https://freemanendeavors.com${path}`);
	}
});

test('robots.txt references the sitemap', async ({ page }) => {
	const response = await page.goto('/robots.txt');
	expect(response?.status()).toBe(200);
	const body = await response!.text();
	expect(body).toContain('Sitemap: https://freemanendeavors.com/sitemap.xml');
});
