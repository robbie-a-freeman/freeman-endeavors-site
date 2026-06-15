import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import BookCallCTA from './BookCallCTA.svelte';

describe('BookCallCTA', () => {
	it('renders the locked CTA copy', () => {
		const { getByText } = render(BookCallCTA);
		expect(getByText('Book a free consultation')).toBeInTheDocument();
	});

	it('links to /contact/', () => {
		const { container } = render(BookCallCTA);
		const a = container.querySelector('a');
		expect(a?.getAttribute('href')).toBe('/contact/');
	});

	it('applies the size-large class when size=large', () => {
		const { container } = render(BookCallCTA, { size: 'large' });
		const a = container.querySelector('a');
		expect(a?.className).toContain('size-large');
	});
});
