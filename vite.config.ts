import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { svelteTesting } from '@testing-library/svelte/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit(), svelteTesting()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		environment: 'happy-dom',
		globals: true,
		setupFiles: ['./src/test-setup.ts']
	}
});
