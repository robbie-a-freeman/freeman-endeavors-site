/**
 * Pre-build content validation.
 * Wired as the `prebuild` npm script. Fails `yarn build` on Zod schema violations.
 *
 * Parses YAML frontmatter from every src/routes/case-studies/[slug]/+page.svelte.md
 * and src/routes/writing/[slug]/+page.svelte.md, runs the schema, prints named
 * errors per file, and exits 1 if any file fails.
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { parse as parseYaml } from 'yaml';
import { caseStudyFrontmatter, essayFrontmatter } from '../src/lib/content/schema.ts';

interface Issue {
	file: string;
	message: string;
}

const issues: Issue[] = [];

function parseFrontmatter(raw: string): Record<string, unknown> {
	const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
	if (!match) return {};
	try {
		return parseYaml(match[1]) ?? {};
	} catch (err) {
		return { __parse_error: (err as Error).message };
	}
}

function walk(dir: string, suffix: string): string[] {
	const out: string[] = [];
	if (!existsSync(dir)) return out;
	for (const entry of readdirSync(dir)) {
		const p = join(dir, entry);
		const s = statSync(p);
		if (s.isDirectory()) {
			out.push(...walk(p, suffix));
		} else if (p.endsWith(suffix)) {
			out.push(p);
		}
	}
	return out;
}

const root = process.cwd();
const caseStudyFiles = walk(join(root, 'src/routes/case-studies'), '+page.svelte.md');
const essayFiles = walk(join(root, 'src/routes/writing'), '+page.svelte.md');

for (const file of caseStudyFiles) {
	const raw = readFileSync(file, 'utf8');
	const fm = parseFrontmatter(raw);
	if ('__parse_error' in fm) {
		issues.push({ file, message: `YAML parse error: ${fm.__parse_error}` });
		continue;
	}
	const result = caseStudyFrontmatter.safeParse(fm);
	if (!result.success) {
		for (const err of result.error.errors) {
			issues.push({ file, message: `${err.path.join('.') || '(root)'}: ${err.message}` });
		}
	}
}

for (const file of essayFiles) {
	const raw = readFileSync(file, 'utf8');
	const fm = parseFrontmatter(raw);
	if ('__parse_error' in fm) {
		issues.push({ file, message: `YAML parse error: ${fm.__parse_error}` });
		continue;
	}
	const result = essayFrontmatter.safeParse(fm);
	if (!result.success) {
		for (const err of result.error.errors) {
			issues.push({ file, message: `${err.path.join('.') || '(root)'}: ${err.message}` });
		}
	}
}

if (issues.length > 0) {
	console.error(`\n✗ Content validation failed: ${issues.length} issue(s).\n`);
	for (const issue of issues) {
		const relative = issue.file.replace(`${root}/`, '');
		console.error(`  ${relative}`);
		console.error(`    → ${issue.message}\n`);
	}
	process.exit(1);
}

console.log(
	`✓ Content validation passed: ${caseStudyFiles.length} case studies, ${essayFiles.length} essays.`
);
