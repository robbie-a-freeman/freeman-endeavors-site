/**
 * Site-wide configuration constants.
 * Replace the placeholders before production launch (T20, T22, T19 dependencies).
 */

export const SITE = {
	name: 'Freeman Endeavors',
	domain: 'freemanendeavors.com',
	url: 'https://freemanendeavors.com',
	email: 'robbie@freemanendeavors.com',
	twitter: '',
	linkedin: 'https://www.linkedin.com/company/freeman-endeavors',
	titleSuffix: 'Freeman Endeavors',
	tagline: 'Software consulting that ships outcomes, not decks.'
} as const;

/**
 * Cal.com integration (T22).
 * Set CAL_LINK to the public event slug — e.g. `freemanendeavors/architecture-call`.
 * The /contact/ page renders the inline embed; every other CTA links to /contact/.
 */
export const CAL_LINK = 'https://cal.com/robbie-freeman-7f0cpu';

/**
 * Plausible analytics (T19). Custom event for the conversion funnel.
 */
export const PLAUSIBLE_EVENT_BOOKED = 'architecture_call_booked';

/**
 * Locked primary CTA copy (design doc requirement; single source of truth).
 */
export const CTA = {
	primary: 'Book a 45-minute architecture call',
	primaryShort: 'Book a call',
	href: '/contact/'
} as const;

/**
 * Architecture Audit pricing (T20). Published number on /services/.
 * Refine in V1.1 with conversion data; an unpublished price is a worse failure.
 */
export const AUDIT_PRICE_USD = 12000;
export const AUDIT_DURATION = '~2 weeks';
