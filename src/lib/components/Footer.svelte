<script lang="ts">
	import { SITE, CTA } from '$lib/config';

	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="container footer-inner">
		<div class="footer-grid">
			<div class="brand">
				<a href="/" class="brand-lockup" aria-label={SITE.name}>
					<img
						src="/brand/lockup/lockup-stacked-620.png"
						srcset="/brand/lockup/lockup-stacked-620.png 1x, /brand/lockup/lockup-stacked-1240.png 2x"
						alt=""
						width="620"
						height="540"
					/>
				</a>
				<p class="tagline">{SITE.tagline}</p>
			</div>
			<nav aria-label="Footer">
				<h4 class="caption">Site</h4>
				<ul>
					<li><a href="/services/">Services</a></li>
					<li><a href="/case-studies/">Case studies</a></li>
					<li><a href="/approach/">Approach</a></li>
					<li><a href="/writing/">Writing</a></li>
					<li><a href={CTA.href}>Contact</a></li>
				</ul>
			</nav>
			<div>
				<h4 class="caption">Get in touch</h4>
				<ul>
					<li><a href="mailto:{SITE.email}">{SITE.email}</a></li>
					{#if SITE.linkedin}
						<li><a href={SITE.linkedin} rel="me">LinkedIn</a></li>
					{/if}
				</ul>
			</div>
		</div>
		<div class="meta">
			<span class="caption">© {year} {SITE.name} LLC</span>
		</div>
	</div>
</footer>

<style>
	.footer {
		border-top: 1px solid var(--rule);
		margin-top: var(--s-10);
		padding: var(--s-8) 0 var(--s-7);
		background: var(--surface);
	}

	.footer-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--s-6);
	}

	.brand .brand-lockup {
		display: block;
		text-decoration: none;
		margin-bottom: var(--s-3);
		transition: opacity var(--t-state) var(--ease);
	}

	.brand .brand-lockup img {
		display: block;
		width: 100%;
		max-width: 180px;
		height: auto;
	}

	:global(html[data-theme='dark']) .brand .brand-lockup img {
		filter: invert(0.92) hue-rotate(180deg) saturate(0.85);
	}

	.brand .brand-lockup:hover {
		opacity: 0.78;
	}

	.brand .tagline {
		color: var(--muted);
		max-width: 26ch;
		font-size: var(--fs-body-sm);
	}

	h4.caption {
		margin: 0 0 var(--s-3);
	}

	nav ul,
	.footer div > ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: var(--s-2);
	}

	nav a,
	.footer div ul a {
		color: var(--ink);
		text-decoration: none;
		font-size: var(--fs-body-sm);
	}

	nav a:hover,
	.footer div ul a:hover {
		color: var(--forest);
	}

	.meta {
		margin-top: var(--s-7);
		padding-top: var(--s-4);
		border-top: 1px solid var(--rule);
	}

	@media (min-width: 720px) {
		.footer-grid {
			grid-template-columns: 2fr 1fr 1fr;
			gap: var(--s-8);
		}
	}
</style>
