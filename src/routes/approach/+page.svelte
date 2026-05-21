<script lang="ts">
	import Meta from '$lib/components/Meta.svelte';
	import BookCallCTA from '$lib/components/BookCallCTA.svelte';

	const values = [
		{
			num: '01',
			name: 'Integrity',
			body: 'When we commit to a deliverable or a date, we meet it. We prefer to underpromise and overdeliver.'
		},
		{
			num: '02',
			name: 'Fit-to-purpose',
			body: 'Solutions architected to your business requirements. Whether you need AI in production or a simple integration, we’ll tell you what the problem calls for — and then we’ll build it.'
		},
		{
			num: '03',
			name: 'Communication',
			body: 'You’ll always know what we’ve finished, what’s coming next, and what we need from you to keep moving. We’d rather over-communicate progress than leave you guessing about your own project.'
		},
		{
			num: '04',
			name: 'Collaboration',
			body: 'We work alongside your team, not around them. Engagements include knowledge transfer by default — we want your engineers to understand and own what we built, and we expect to learn from your business as much as we teach about ours.'
		}
	];
</script>

<Meta
	title="Approach"
	description="How we work: the four values we operate by, the methodology behind each engagement, and who actually shows up to your project."
/>

<header class="page-header container">
	<p class="caption">How we work</p>
	<h1>A small firm, by intention.</h1>
	<p class="lede">
		Freeman Endeavors is a principal-led collective. The principal is on every engagement.
		Collaborators come in by name when their craft is what the job calls for. The team scales to
		the work; the work doesn't scale to the team.
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
				<p class="caption value-num"><span class="glyph">§</span> {v.num} · {v.name.toUpperCase()}</p>
				<h3>{v.name}</h3>
				<p class="value-body">{v.body}</p>
			</article>
		{/each}
	</div>
</section>

<section class="container section-block">
	<div class="section-head">
		<p class="caption section-eyebrow"><span class="glyph">§</span> 02 · Methodology</p>
		<h2>What an engagement actually looks like.</h2>
	</div>
	<div class="prose narrow-prose">
		<p>
			Every engagement starts with a conversation, not a proposal. The 45-minute architecture call
			is free, and the work-or-don't-work decision happens at the end of it. If we think you'd be
			better served somewhere else, we say so.
		</p>
		<p>
			When the work begins, the principal is named, the deliverables are named, and the end
			condition is named — when this engagement is done, what is true that wasn't before. Weekly
			written check-ins go to whoever needs to know status. Architecture decisions get written
			down in your repository, with the trade-offs and the date.
		</p>
		<p>
			We work inside your team, your tools, and your repository. We follow your code-review
			conventions. We commit under our own names and credit the engineers we paired with. When the
			engagement ends, what we leave behind is a system another engineer — one we've never met —
			can read and own.
		</p>
		<p>
			We will tell you when you don't need us. We will tell you when a problem is the wrong size
			for our shape. We will tell you, before you write a check, when an audit is going to come
			back saying "the system is fine, fix the team."
		</p>
	</div>
</section>

<section class="container section-block">
	<div class="section-head">
		<p class="caption section-eyebrow"><span class="glyph">§</span> 03 · The team</p>
		<h2>The principal and the bench.</h2>
	</div>
	<div class="prose narrow-prose">
		<p>
			The principal is Robbie Freeman. Eighteen years of building software, the last eight focused
			on the systems SMBs depend on. The work tends to fall into three lanes that overlap more
			than people expect: <strong>cloud architecture</strong> — serverless, VM fleets, and the
			decision between them; <strong>the data layer</strong> — Postgres, GraphQL, and schemas
			designed to survive year three; and <strong>scoping and coordination</strong> — the parts
			of senior engineering that aren't writing code. The codebases he's owned range from Rails
			monoliths older than some of the engineers using them to serverless TypeScript shipped this
			quarter. The systems run today inside healthcare-adjacent and fintech-adjacent SMBs.
		</p>
		<p>
			The bench is a small set of senior engineers Freeman Endeavors works with by name, brought
			into an engagement only when their craft is what the job calls for. The bench is real but
			intentionally unnamed in public — confidentiality is part of how we work.
		</p>
		<p>
			What this means in practice: you get a principal who's accountable, plus the right
			specialist when the work calls for one, and nobody you didn't ask for.
		</p>
	</div>
</section>

<section class="container closing">
	<div class="closing-grid">
		<div>
			<h2>If this sounds like the way you'd want to work, the call is free.</h2>
			<p>Forty-five minutes, no deck, no follow-up unless you ask for one.</p>
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
