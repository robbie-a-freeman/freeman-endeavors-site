import { describe, it, expect } from 'vitest';
import { loadCaseStudies, loadEssays } from './loaders';

describe('loadCaseStudies', () => {
	it('returns sorted entries from valid modules', () => {
		const modules = {
			'./old/+page.svelte.md': {
				metadata: {
					title: 'Old',
					description: 'older study',
					published: '2024-01-01'
				}
			},
			'./new/+page.svelte.md': {
				metadata: {
					title: 'New',
					description: 'newer study',
					published: '2025-05-05'
				}
			}
		};
		const result = loadCaseStudies(modules);
		expect(result).toHaveLength(2);
		expect(result[0].slug).toBe('new');
		expect(result[1].slug).toBe('old');
	});

	it('returns empty array for empty modules (empty-glob fallback)', () => {
		expect(loadCaseStudies({})).toEqual([]);
	});

	it('skips entries with invalid frontmatter rather than throwing', () => {
		const modules = {
			'./ok/+page.svelte.md': {
				metadata: { title: 'Ok', description: 'ok', published: '2025-01-01' }
			},
			'./bad/+page.svelte.md': {
				metadata: { title: 'Bad' } // missing required fields
			}
		};
		const result = loadCaseStudies(modules);
		expect(result).toHaveLength(1);
		expect(result[0].slug).toBe('ok');
	});
});

describe('loadEssays', () => {
	it('returns sorted entries from valid modules', () => {
		const modules = {
			'./a/+page.svelte.md': {
				metadata: { title: 'A', description: 'a essay', published: '2025-01-01' }
			},
			'./b/+page.svelte.md': {
				metadata: { title: 'B', description: 'b essay', published: '2025-06-01' }
			}
		};
		const result = loadEssays(modules);
		expect(result[0].slug).toBe('b');
		expect(result[1].slug).toBe('a');
	});

	it('returns empty array for empty modules', () => {
		expect(loadEssays({})).toEqual([]);
	});
});
