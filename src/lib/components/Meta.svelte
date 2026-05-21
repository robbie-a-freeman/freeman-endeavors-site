<script lang="ts">
	import { page } from '$app/stores';
	import { SITE } from '$lib/config';

	interface Props {
		title: string;
		description: string;
		ogImage?: string;
		ogType?: 'website' | 'article';
	}

	const { title, description, ogImage = '/brand/og/og-default.png', ogType = 'website' }: Props = $props();

	const fullTitle = $derived(`${title} — ${SITE.titleSuffix}`);
	// T5-followup: HTML-escape description to prevent Meta-tag injection
	// via case-study / essay frontmatter.
	const safeDescription = $derived(
		description
			.replace(/&/g, '&amp;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#39;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
	);
	const canonical = $derived(`${SITE.url}${$page.url.pathname}`);
	const absoluteOgImage = $derived(
		ogImage.startsWith('http') ? ogImage : `${SITE.url}${ogImage}`
	);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={safeDescription} />
	<link rel="canonical" href={canonical} />

	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={safeDescription} />
	<meta property="og:image" content={absoluteOgImage} />
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content={ogType} />
	<meta property="og:site_name" content={SITE.name} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={safeDescription} />
	<meta name="twitter:image" content={absoluteOgImage} />
</svelte:head>
