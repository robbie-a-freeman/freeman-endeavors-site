import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/svelte';
import Meta from './Meta.svelte';

vi.mock('$app/stores', () => ({
	page: {
		subscribe: (cb: (val: { url: URL }) => void) => {
			cb({ url: new URL('https://freemanendeavors.com/services/') });
			return () => {};
		}
	}
}));

beforeEach(() => {
	document.head.innerHTML = '';
});

const getMeta = (name: string) => document.querySelector(`meta[name="${name}"]`);
const getProp = (property: string) => document.querySelector(`meta[property="${property}"]`);

describe('Meta', () => {
	it('appends suffix to title', () => {
		render(Meta, { title: 'Services', description: 'Our services.' });
		expect(document.title).toBe('Services — Freeman Endeavors');
	});

	it('writes the description meta tag', () => {
		render(Meta, { title: 'Services', description: 'A short description.' });
		expect(getMeta('description')?.getAttribute('content')).toBe('A short description.');
	});

	it('falls back to og-default when ogImage is not supplied', () => {
		render(Meta, { title: 'Services', description: 'Our services.' });
		expect(getProp('og:image')?.getAttribute('content')).toBe(
			'https://freemanendeavors.com/brand/og/og-default.png'
		);
	});

	it('uses the supplied ogImage when given', () => {
		render(Meta, { title: 'Case study', description: 'A case study.', ogImage: '/og/cs.png' });
		expect(getProp('og:image')?.getAttribute('content')).toBe(
			'https://freemanendeavors.com/og/cs.png'
		);
	});

	it('HTML-escapes description to prevent meta-tag injection (T5-followup)', () => {
		render(Meta, {
			title: 'Tricky',
			description: 'Bad "value" with <script>alert(1)</script>'
		});
		const content = getMeta('description')?.getAttribute('content');
		expect(content).not.toContain('<script>');
		expect(content).toContain('&lt;script&gt;');
		expect(content).toContain('&quot;value&quot;');
	});
});
