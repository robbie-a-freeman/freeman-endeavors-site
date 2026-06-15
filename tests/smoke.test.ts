import { expect, test } from '@playwright/test';

type Route = { path: string; titleContains: string; inSitemap: boolean };

const ROUTES: Route[] = [
	{ path: '/', titleContains: 'Software consulting', inSitemap: true },
	{ path: '/services/', titleContains: 'Services', inSitemap: true },
	{ path: '/case-studies/', titleContains: 'Case studies', inSitemap: false },
	{
		path: '/case-studies/vr-edtech-second-principal/',
		titleContains: 'VR EdTech',
		inSitemap: false
	},
	{
		path: '/case-studies/workforce-saas-founding-engineer/',
		titleContains: 'Founding engineer',
		inSitemap: false
	},
	{
		path: '/case-studies/higher-ed-donation-page/',
		titleContains: 'donation modal',
		inSitemap: false
	},
	{ path: '/approach/', titleContains: 'Approach', inSitemap: true },
	{ path: '/contact/', titleContains: 'Book a call', inSitemap: true },
	{ path: '/writing/', titleContains: 'Writing', inSitemap: false },
	{ path: '/writing/honest-software-diagnosis/', titleContains: 'diagnosis', inSitemap: false }
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
		expect(ogImage).toMatch(/^https:\/\/freemanendeavors\.com\/brand\/og\//);
	});
}

test('sitemap.xml lists public URLs and excludes hidden ones', async ({ page }) => {
	const response = await page.goto('/sitemap.xml');
	expect(response?.status()).toBe(200);
	expect(response?.headers()['content-type']).toContain('xml');
	const body = await response!.text();
	for (const { path, inSitemap } of ROUTES) {
		const url = `https://freemanendeavors.com${path}`;
		if (inSitemap) {
			expect(body).toContain(url);
		} else {
			expect(body).not.toContain(url);
		}
	}
});

test('robots.txt references the sitemap', async ({ page }) => {
	const response = await page.goto('/robots.txt');
	expect(response?.status()).toBe(200);
	const body = await response!.text();
	expect(body).toContain('Sitemap: https://freemanendeavors.com/sitemap.xml');
});
