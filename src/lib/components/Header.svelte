<script lang="ts">
	import { page } from '$app/stores';
	import { SITE, CTA } from '$lib/config';
	import ThemeToggle from './ThemeToggle.svelte';

	let drawerOpen = $state(false);

	const navLinks = [
		{ href: '/services/', label: 'Services' },
		{ href: '/case-studies/', label: 'Case studies' },
		{ href: '/approach/', label: 'Approach' },
		{ href: '/writing/', label: 'Writing' }
	];

	const isActive = (href: string) => {
		const pathname = $page.url.pathname;
		if (href === '/') return pathname === '/';
		return pathname === href || pathname.startsWith(href);
	};

	const toggleDrawer = () => (drawerOpen = !drawerOpen);
	const closeDrawer = () => (drawerOpen = false);

	$effect(() => {
		if (drawerOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

<header class="header">
	<div class="container header-inner">
		<a href="/" class="wordmark" onclick={closeDrawer}>{SITE.name}</a>

		<nav class="nav-desktop" aria-label="Primary">
			<ul>
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							class:active={isActive(link.href)}
							aria-current={isActive(link.href) ? 'page' : undefined}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
			<a href={CTA.href} class="header-cta">{CTA.primaryShort}</a>
			<ThemeToggle />
		</nav>

		<div class="mobile-controls">
			<ThemeToggle />
			<button
				class="hamburger"
				aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={drawerOpen}
				aria-controls="mobile-drawer"
				onclick={toggleDrawer}
			>
				<span aria-hidden="true">{drawerOpen ? '✕' : '≡'}</span>
			</button>
		</div>
	</div>

	{#if drawerOpen}
		<div
			id="mobile-drawer"
			class="drawer"
			role="dialog"
			aria-modal="true"
			aria-label="Navigation"
		>
			<nav aria-label="Primary mobile">
				<ul>
					{#each navLinks as link}
						<li>
							<a
								href={link.href}
								class:active={isActive(link.href)}
								aria-current={isActive(link.href) ? 'page' : undefined}
								onclick={closeDrawer}
							>
								{link.label}
							</a>
						</li>
					{/each}
					<li>
						<a href={CTA.href} class="drawer-cta" onclick={closeDrawer}>
							{CTA.primary}
						</a>
					</li>
				</ul>
			</nav>
		</div>
	{/if}
</header>

<style>
	.header {
		position: sticky;
		top: 0;
		z-index: 50;
		background: var(--surface);
		border-bottom: 1px solid var(--rule);
	}

	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 64px;
		padding-top: var(--s-3);
		padding-bottom: var(--s-3);
	}

	.wordmark {
		font-family: var(--font-display);
		font-weight: 500;
		font-size: 1.25rem;
		color: var(--ink);
		text-decoration: none;
		letter-spacing: -0.01em;
	}

	.wordmark:hover {
		color: var(--ink-2);
	}

	.nav-desktop {
		display: none;
		align-items: center;
		gap: var(--s-5);
	}

	.nav-desktop ul {
		display: flex;
		gap: var(--s-5);
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.nav-desktop ul a {
		font-family: var(--font-body);
		font-weight: 500;
		font-size: 0.9375rem;
		color: var(--ink);
		text-decoration: none;
		padding: var(--s-2) 0;
		border-bottom: 2px solid transparent;
		transition: border-color var(--t-state) var(--ease);
	}

	.nav-desktop ul a:hover {
		border-bottom-color: var(--rule-strong);
	}

	.nav-desktop ul a.active {
		border-bottom-color: var(--brick);
	}

	.header-cta {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-family: var(--font-body);
		font-weight: 500;
		font-size: 0.9375rem;
		line-height: 1;
		white-space: nowrap;
		flex-shrink: 0;
		background: var(--brick);
		color: var(--surface);
		padding: 0.75rem 1.25rem;
		border-radius: var(--r-sm);
		text-decoration: none;
		border: 1px solid var(--brick);
		transition: background-color var(--t-state) var(--ease);
	}

	.header-cta:hover {
		background: var(--brick-2);
		border-color: var(--brick-2);
		color: var(--surface);
	}

	.mobile-controls {
		display: inline-flex;
		align-items: center;
		gap: var(--s-2);
	}

	.hamburger {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		background: transparent;
		border: 1px solid var(--rule-strong);
		border-radius: var(--r-sm);
		color: var(--ink);
		font-size: 1.25rem;
		line-height: 1;
	}

	.drawer {
		position: fixed;
		inset: 64px 0 0 0;
		background: var(--surface);
		padding: var(--s-7) var(--gutter);
		z-index: 49;
	}

	.drawer ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: var(--s-5);
	}

	.drawer a {
		font-family: var(--font-display);
		font-weight: 500;
		font-size: 2rem;
		color: var(--ink);
		text-decoration: none;
	}

	.drawer a.active {
		color: var(--brick);
	}

	.drawer-cta {
		display: inline-block;
		font-family: var(--font-body) !important;
		font-size: 1rem !important;
		background: var(--brick);
		color: var(--surface) !important;
		padding: 0.875rem 1.25rem;
		border-radius: var(--r-sm);
		margin-top: var(--s-4);
	}

	@media (min-width: 720px) {
		.nav-desktop {
			display: flex;
		}

		.mobile-controls {
			display: none;
		}

		.drawer {
			display: none;
		}
	}
</style>
