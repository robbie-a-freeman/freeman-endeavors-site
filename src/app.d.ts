declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	type CalApi = {
		(action: string, ...args: unknown[]): void;
		ns?: Record<string, CalApi | undefined>;
		loaded?: boolean;
		q?: unknown[];
	};

	interface Window {
		plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void;
		Cal?: CalApi;
	}
}

export {};
