import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svelte.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svelte.md'],
			layout: {
				case_study: resolve(__dirname, 'src/lib/components/layouts/CaseStudy.svelte'),
				essay: resolve(__dirname, 'src/lib/components/layouts/Essay.svelte')
			}
		})
	],
	kit: {
		adapter: adapter(),
		alias: {
			$lib: 'src/lib'
		}
	}
};

export default config;
