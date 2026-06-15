import { SITE } from '$lib/config';

export const prerender = true;

const STATIC_ROUTES = ['/', '/services/', '/approach/', '/contact/'];

export async function GET() {
	const urls: { loc: string; lastmod?: string }[] = STATIC_ROUTES.map((path) => ({
		loc: `${SITE.url}${path}`
	}));

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
