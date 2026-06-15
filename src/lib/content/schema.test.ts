import { describe, it, expect } from 'vitest';
import { caseStudyFrontmatter, essayFrontmatter } from './schema';

describe('caseStudyFrontmatter', () => {
	it('accepts a minimally valid case study', () => {
		const result = caseStudyFrontmatter.safeParse({
			title: 'Pharmacy modernization',
			description: 'Replatformed without an outage.',
			published: '2025-03-20'
		});
		expect(result.success).toBe(true);
	});

	it('rejects missing required field', () => {
		const result = caseStudyFrontmatter.safeParse({
			description: 'no title here',
			published: '2025-03-20'
		});
		expect(result.success).toBe(false);
	});

	it('rejects malformed published date', () => {
		const result = caseStudyFrontmatter.safeParse({
			title: 'Pharmacy',
			description: 'Replatformed without an outage.',
			published: 'not-a-date'
		});
		expect(result.success).toBe(false);
	});

	it('rejects description over 160 chars', () => {
		const result = caseStudyFrontmatter.safeParse({
			title: 'Pharmacy',
			description: 'x'.repeat(161),
			published: '2025-03-20'
		});
		expect(result.success).toBe(false);
	});
});

describe('essayFrontmatter', () => {
	it('accepts a minimally valid essay', () => {
		const result = essayFrontmatter.safeParse({
			title: 'Diagnosis',
			description: 'A piece on honest software diagnosis.',
			published: '2025-05-12'
		});
		expect(result.success).toBe(true);
	});

	it('rejects description over 160 chars', () => {
		const result = essayFrontmatter.safeParse({
			title: 'Diagnosis',
			description: 'x'.repeat(161),
			published: '2025-05-12'
		});
		expect(result.success).toBe(false);
	});
});
