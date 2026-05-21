import { z } from 'zod';

/**
 * Frontmatter contract (per design doc).
 * Validated at build time by scripts/validate-content.ts (prebuild hook).
 */

const isoDate = z.string().refine((v) => !Number.isNaN(Date.parse(v)), {
	message: 'must be an ISO date string'
});

export const LENSES = ['Cloud & Operations', 'Data Layer', 'Architecture & Coordination'] as const;
export const lensEnum = z.enum(LENSES);
export type Lens = z.infer<typeof lensEnum>;

export const caseStudyFrontmatter = z.object({
	title: z.string().min(1),
	description: z.string().min(1).max(160),
	published: isoDate,
	og_image: z.string().optional(),
	client_anonymized: z.string().optional(),
	industry: z.string().optional(),
	stack: z.array(z.string()).optional(),
	engagement: z.string().optional(),
	duration: z.string().optional(),
	lenses: z.array(lensEnum).optional(),
	roi: z
		.array(
			z.object({
				value: z.string(),
				label: z.string()
			})
		)
		.optional()
});

export type CaseStudyFrontmatter = z.infer<typeof caseStudyFrontmatter>;

export const essayFrontmatter = z.object({
	title: z.string().min(1),
	description: z.string().min(1).max(160),
	published: isoDate,
	og_image: z.string().optional(),
	dek: z.string().optional()
});

export type EssayFrontmatter = z.infer<typeof essayFrontmatter>;

export type CaseStudyEntry = CaseStudyFrontmatter & { slug: string };
export type EssayEntry = EssayFrontmatter & { slug: string };
