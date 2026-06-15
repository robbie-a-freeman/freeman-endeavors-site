<script lang="ts">
	import { onMount } from 'svelte';
	import Meta from '$lib/components/Meta.svelte';
	import { SITE, CAL_LINK, PLAUSIBLE_EVENT_BOOKED } from '$lib/config';

	let slot: HTMLDivElement | null = $state(null);
	let loadState: 'pending' | 'loading' | 'ready' | 'failed' = $state('pending');

	const LAZY_TIMEOUT_MS = 500;
	const SCRIPT_TIMEOUT_MS = 5000;

	onMount(() => {
		if (!slot) return;

		let triggered = false;
		const trigger = () => {
			if (triggered) return;
			triggered = true;
			observer?.disconnect();
			clearTimeout(idleTimer);
			loadEmbed();
		};

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries.some((e) => e.isIntersecting)) trigger();
			},
			{ rootMargin: '200px' }
		);
		observer.observe(slot);

		const idleTimer = setTimeout(trigger, LAZY_TIMEOUT_MS);

		function loadEmbed() {
			loadState = 'loading';

			const failTimer = setTimeout(() => {
				if (loadState !== 'ready') {
					loadState = 'failed';
				}
			}, SCRIPT_TIMEOUT_MS);

			try {
				// Standard Cal.com embed loader.
				/* eslint-disable */
				(function (C, A, L) {
					let p = function (a: any, ar: any) {
						a.q.push(ar);
					};
					let d = C.document;
					(C as any).Cal =
						(C as any).Cal ||
						function () {
							let cal = (C as any).Cal;
							let ar = arguments;
							if (!cal.loaded) {
								cal.ns = {};
								cal.q = cal.q || [];
								d.head.appendChild(d.createElement('script')).src = A;
								cal.loaded = true;
							}
							if (ar[0] === L) {
								const api: any = function () {
									p(api, arguments);
								};
								const namespace = ar[1];
								api.q = api.q || [];
								if (typeof namespace === 'string') {
									cal.ns[namespace] = cal.ns[namespace] || api;
									p(cal.ns[namespace], ar);
									p(cal, ['initNamespace', namespace]);
								} else p(cal, ar);
								return;
							}
							p(cal, ar);
						};
				})(window, 'https://app.cal.com/embed/embed.js', 'init');
				/* eslint-enable */

				const cal = window.Cal;
				if (!cal) throw new Error('Cal failed to initialize');
				cal('init', 'architecture-call', { origin: 'https://cal.com' });
				const ns = cal.ns?.['architecture-call'];
				if (!ns) throw new Error('Cal namespace missing');
				ns('inline', {
					elementOrSelector: '#cal-embed-slot',
					calLink: CAL_LINK,
					layout: 'month_view'
				});
				ns('ui', {
					theme: 'light',
					styles: { branding: { brandColor: '#1A4D2E' } },
					hideEventTypeDetails: false
				});
				ns('on', {
					action: 'bookingSuccessful',
					callback: () => {
						clearTimeout(failTimer);
						window.plausible?.(PLAUSIBLE_EVENT_BOOKED);
					}
				});
				ns('on', {
					action: 'linkReady',
					callback: () => {
						clearTimeout(failTimer);
						loadState = 'ready';
					}
				});
			} catch {
				clearTimeout(failTimer);
				loadState = 'failed';
			}
		}

		return () => {
			observer.disconnect();
			clearTimeout(idleTimer);
		};
	});
</script>

<Meta
	title="Book a call"
	description="A free 45-minute consultation. Tell us what's broken — we'll tell you plainly whether we're the right team, and what an honest next step looks like."
/>

<section class="container intro">
	<p class="caption">Contact</p>
	<h1>Book a 45-minute consultation.</h1>
	<p class="lede">
		Free. No prep. We listen, we ask, we tell you what we'd do. If we're not the right team, we'll
		say so.
	</p>
</section>

<section class="container embed-section">
	<div id="cal-embed-slot" bind:this={slot} class="embed-slot">
		{#if loadState === 'pending' || loadState === 'loading'}
			<div class="skeleton" aria-busy="true" aria-live="polite">
				<p class="caption">Loading scheduler…</p>
			</div>
		{:else if loadState === 'failed'}
			<div class="embed-fallback" role="alert">
				<p class="caption">The scheduler couldn't load.</p>
				<h2>Email us instead.</h2>
				<p>
					Send a note to <a href="mailto:{SITE.email}">{SITE.email}</a> with a one-line summary of what's
					going on. We'll reply with two or three time options within a business day.
				</p>
			</div>
		{/if}
	</div>
</section>

<section class="container fallback">
	<h2>Or send a note.</h2>
	<p>
		If a calendar embed isn't your speed, <a href="mailto:{SITE.email}">{SITE.email}</a> works just as
		well. Tell us briefly what's going on; we'll reply with times.
	</p>
</section>

<style>
	.intro {
		padding-top: var(--s-9);
		padding-bottom: var(--s-6);
	}

	.intro h1 {
		margin: var(--s-3) 0 var(--s-5) 0;
		max-width: 22ch;
	}

	.lede {
		font-size: var(--fs-body-lg);
		color: var(--ink-2);
		max-width: 56ch;
	}

	.embed-section {
		padding-bottom: var(--s-7);
	}

	.embed-slot {
		min-height: 600px;
		border: 1px solid var(--rule);
		background: var(--surface);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.skeleton {
		padding: var(--s-7);
		color: var(--muted);
	}

	.embed-fallback {
		padding: var(--s-7);
		text-align: center;
		max-width: 40rem;
	}

	.embed-fallback h2 {
		margin: var(--s-3) 0;
		font-size: var(--fs-display-md);
	}

	.embed-fallback p {
		color: var(--ink-2);
		max-width: 36ch;
		margin-left: auto;
		margin-right: auto;
	}

	.fallback {
		border-top: 1px solid var(--rule);
		padding-top: var(--s-7);
		padding-bottom: var(--s-9);
	}

	.fallback h2 {
		font-size: 1.5rem;
		margin: 0 0 var(--s-3);
	}

	.fallback p {
		color: var(--ink-2);
		max-width: 46ch;
	}
</style>
