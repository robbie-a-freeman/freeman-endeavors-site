<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import BookCallCTA from '$lib/components/BookCallCTA.svelte';

	const values = [
		{
			num: '01',
			name: 'Integrity',
			body: 'We strive for our yes to mean yes and our "when" to really mean "then". We take seriously our commitments to a deliverables and dates.'
		},
		{
			num: '02',
			name: 'Fit-to-purpose',
			body: 'Our solutions are crafted according to your business requirements. Whether you need AI in production or an internal mobile application, we can design a solution and build it to fit the core requirements.'
		},
		{
			num: '03',
			name: 'Pedagogy',
			body: "It would be dishonest to pretend to know what we don't. Instead, we teach as we build, and we stay students of your business. If you have an existing system, you’ll leave knowing your system better than when we arrived; we’ll leave knowing your domain better than when we walked in."
		},
		{
			num: '04',
			name: 'Collaboration',
			body: 'We work alongside you and your team. We do everything with shared knowledge in mind. You should be equipped to understand and own what we built, as opposed to being kept in the dark as we work in a remote cave.'
		}
	];
</script>

<Meta
	title="Approach"
	description="How we work: the four values we operate by, and who actually shows up to your project."
/>

<header class="page-header container">
	<p class="caption">How we work</p>
	<h1>Don't hike alone. Bring a friend!</h1>
	<p class="lede">
		The software wilderness can be a scary place of hidden costs, uncertain scope, and changing
		capabilities. We have values and processes that we stand by to navigate this with you.
	</p>
</header>

<section class="container section-block">
	<div class="section-head">
		<p class="caption section-eyebrow"><span class="glyph">§</span> 01 · Values</p>
		<h2>Four commitments we hold ourselves to.</h2>
	</div>

	<div class="values-list">
		{#each values as v, i}
			<article class="value" class:first={i === 0}>
				<p class="caption value-num">
					<span class="glyph">§</span>
					{v.num} · {v.name.toUpperCase()}
				</p>
				<h3>{v.name}</h3>
				<p class="value-body">{v.body}</p>
			</article>
		{/each}
	</div>
</section>

<section class="container section-block">
	<div class="section-head">
		<p class="caption section-eyebrow">
			<span class="glyph">§</span> 02 · Principal Software Consultant
		</p>
		<h2>Robbie Freeman</h2>
	</div>
	<div class="team-grid">
		<figure class="portrait">
			<picture>
				<source
					type="image/webp"
					srcset="/brand/team/robbie-freeman-600.webp 1x, /brand/team/robbie-freeman-1200.webp 2x"
				/>
				<img
					src="/brand/team/robbie-freeman-600.jpg"
					srcset="/brand/team/robbie-freeman-600.jpg 1x, /brand/team/robbie-freeman-1200.jpg 2x"
					alt="Portrait of Robbie Freeman"
					width="600"
					height="600"
					loading="lazy"
					decoding="async"
				/>
			</picture>
		</figure>
		<div class="prose narrow-prose">
			<p>
				Robbie has founded and run Freeman Endeavors for the past 4 years, focused in particular on
				software systems of startups and small-medium businesses. His software work has spanned
				multiple industries including finance, commercial real estate, and education.
			</p>
			<p>
				Robbie has lived in three different states: New Hampshire (best), Texas (eh), and New Jersey
				(pretty good). When he's not building software systems, he plays badminton, makes single
				origin pour-overs, tackles DIY projects around the house, and — as you may guess from this
				site — goes on day hikes.
			</p>
			<p class="bio-contact">
				Email more your style? Contact me directly at
				<a href="mailto:robbie@freemanendeavors.com">robbie@freemanendeavors.com</a>.
			</p>
		</div>
	</div>
</section>

<section class="container closing">
	<div class="closing-grid">
		<div>
			<h2>If you're interested in working with us, book a call!</h2>
		</div>
		<div><BookCallCTA size="large" /></div>
	</div>
</section>

<style>
	.page-header {
		padding-top: var(--s-9);
		padding-bottom: var(--s-7);
	}

	.page-header h1 {
		margin: var(--s-3) 0 var(--s-5) 0;
		max-width: 22ch;
	}

	.lede {
		font-size: var(--fs-body-lg);
		color: var(--ink-2);
		max-width: 56ch;
	}

	.section-block {
		padding-top: var(--s-8);
		padding-bottom: var(--s-8);
		border-top: 1px solid var(--rule);
	}

	.section-head {
		margin-bottom: var(--s-6);
	}

	.section-eyebrow {
		margin: 0 0 var(--s-3);
	}

	.section-eyebrow .glyph {
		color: var(--brick);
	}

	.section-head h2 {
		font-size: var(--fs-display-md);
		max-width: 22ch;
		margin: 0;
	}

	.narrow-prose {
		max-width: 38rem;
	}

	.team-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--s-6);
		align-items: start;
	}

	.portrait {
		margin: 0;
		max-width: 18rem;
	}

	.portrait img {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		background: var(--surface-2);
	}

	.portrait-caption {
		margin: var(--s-3) 0 0;
	}

	.portrait-caption .glyph {
		color: var(--brick);
	}

	.bio-contact {
		color: var(--ink-2);
		font-style: italic;
		margin: 0 0 var(--s-5);
	}

	.bio-contact a {
		color: var(--ink-1);
		text-decoration: underline;
		text-underline-offset: 0.2em;
		text-decoration-thickness: 1px;
	}

	.bio-contact a:hover {
		color: var(--brick);
	}

	@media (min-width: 720px) {
		.team-grid {
			grid-template-columns: minmax(14rem, 18rem) minmax(0, 1fr);
			gap: var(--s-7);
		}
	}

	.values-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0;
	}

	.value {
		padding: var(--s-6) 0;
		border-top: 1px solid var(--rule);
	}

	.value.first {
		border-top: 1px solid var(--rule-strong);
	}

	.value-num {
		margin: 0 0 var(--s-3);
	}

	.value-num .glyph {
		color: var(--brick);
	}

	.value h3 {
		font-family: var(--font-display);
		font-size: var(--fs-display-md);
		font-weight: 500;
		margin: 0 0 var(--s-4);
		letter-spacing: -0.012em;
	}

	.value-body {
		font-size: var(--fs-body-lg);
		color: var(--ink-2);
		max-width: 52ch;
	}

	.closing {
		border-top: 1px solid var(--rule);
		padding-top: var(--s-8);
		padding-bottom: var(--s-9);
	}

	.closing-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--s-5);
	}

	.closing-grid h2 {
		font-size: var(--fs-display-md);
		max-width: 22ch;
	}

	.closing-grid p {
		color: var(--ink-2);
		max-width: 42ch;
		font-size: var(--fs-body-lg);
	}

	@media (min-width: 720px) {
		.closing-grid {
			grid-template-columns: 2fr 1fr;
			align-items: end;
			gap: var(--s-7);
		}
	}
</style>
