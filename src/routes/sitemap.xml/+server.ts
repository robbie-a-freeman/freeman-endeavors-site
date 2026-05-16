import { SITE } from '$lib/config';
import { loadCaseStudies, loadEssays } from '$lib/content/loaders';

export const prerender = true;

const STATIC_ROUTES = ['/', '/services/', '/case-studies/', '/approach/', '/contact/', '/writing/'];

export async function GET() {
	const caseStudies = loadCaseStudies(
		import.meta.glob<{ metadata?: Record<string, unknown> }>(
			'../case-studies/*/+page.svelte.md',
			{ eager: true }
		)
	);
	const essays = loadEssays(
		import.meta.glob<{ metadata?: Record<string, unknown> }>('../writing/*/+page.svelte.md', {
			eager: true
		})
	);

	const urls: { loc: string; lastmod?: string }[] = [
		...STATIC_ROUTES.map((path) => ({ loc: `${SITE.url}${path}` })),
		...caseStudies.map((c) => ({
			loc: `${SITE.url}/case-studies/${c.slug}/`,
			lastmod: c.published
		})),
		...essays.map((e) => ({
			loc: `${SITE.url}/writing/${e.slug}/`,
			lastmod: e.published
		}))
	];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map(
		(u) =>
			`\t<url>\n\t\t<loc>${u.loc}</loc>${u.lastmod ? `\n\t\t<lastmod>${u.lastmod}</lastmod>` : ''}\n\t</url>`
	)
	.join('\n')}
</urlset>
`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
}
