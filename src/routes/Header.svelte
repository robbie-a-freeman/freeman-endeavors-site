<script lang="ts">
	import { page } from '$app/stores';	
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<div><a href="#expertise">Expertise</a></div>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<div id="home-link">
					<a href="/"><h3>Freeman Endeavors</h3><h3 id="second-header-line">Software Consulting</h3></a>
				</div>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="#contact">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		--background: var(--secondary-color);
	}

	nav {
		width: 100%;
		color: var(--off-white-color);
		height: 100%;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 5rem;
		color: var(--off-white-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		text-decoration: none;
		transition: color 0.2s linear;
		letter-spacing: 0.5rem;
		text-align: center;
	}

	nav #home-link a {
		background: var(--primary-color);
		display: flex;
		flex-direction: column;
		padding: 0 2.5rem 0 3rem; /* needed padding for letter spacing offset */
		line-height: 3px;
		min-width: 425px;
	}
	nav #home-link a #second-header-line {
		font-size: 1.3rem;
	}

	a:hover {
		color: var(--primary-color-2);
	}

	h3 {
		font-size: 16px;
	}
	#second-header-line {
		font-size: 24px !important;
	}
</style>
