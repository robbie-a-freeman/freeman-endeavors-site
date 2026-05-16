import {
	caseStudyFrontmatter,
	essayFrontmatter,
	type CaseStudyEntry,
	type EssayEntry
} from './schema';

type GlobModule = { metadata?: Record<string, unknown> };

const sortByPublishedDesc = <T extends { published: string }>(a: T, b: T) =>
	new Date(b.published).getTime() - new Date(a.published).getTime();

const slugFromPath = (path: string): string => {
	const match = path.match(/\/([^/]+)\/\+page\.svelte\.md$/);
	if (!match) throw new Error(`unparseable content path: ${path}`);
	return match[1];
};

export function loadCaseStudies(
	modules: Record<string, GlobModule>
): CaseStudyEntry[] {
	const entries: CaseStudyEntry[] = [];
	for (const [path, mod] of Object.entries(modules)) {
		const slug = slugFromPath(path);
		const parsed = caseStudyFrontmatter.safeParse(mod.metadata ?? {});
		if (!parsed.success) {
			console.warn(`[loaders] skipping case study ${slug}:`, parsed.error.message);
			continue;
		}
		entries.push({ slug, ...parsed.data });
	}
	return entries.sort(sortByPublishedDesc);
}

export function loadEssays(modules: Record<string, GlobModule>): EssayEntry[] {
	const entries: EssayEntry[] = [];
	for (const [path, mod] of Object.entries(modules)) {
		const slug = slugFromPath(path);
		const parsed = essayFrontmatter.safeParse(mod.metadata ?? {});
		if (!parsed.success) {
			console.warn(`[loaders] skipping essay ${slug}:`, parsed.error.message);
			continue;
		}
		entries.push({ slug, ...parsed.data });
	}
	return entries.sort(sortByPublishedDesc);
}
