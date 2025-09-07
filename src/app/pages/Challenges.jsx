// Temporary landing page for the Hackathon Challenges section
// TODO: Replace with live challenge listing & rules when ready.

// (Old imports removed until real data / components are integrated.)

export function ChallengesPage() {
	return (
		<main className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:pt-16">
			<section className="relative overflow-hidden rounded-3xl border border-amber-200/40 bg-gradient-to-br from-[#ffa800] via-amber-400 to-orange-500 p-10 text-white shadow-lg dark:border-amber-300/20 dark:from-[#ffa800] dark:via-amber-500 dark:to-orange-600 sm:p-16">
				{/* Subtle pattern overlay */}
				<div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.5)_1px,transparent_0)] [background-size:22px_22px]" />

				<div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
					<h1 className="text-balance text-4xl font-extrabold tracking-tight drop-shadow-sm sm:text-5xl md:text-6xl">
						Challenge <span className="whitespace-nowrap">(Hackathon)</span>
					</h1>
					<p className="mt-6 text-pretty text-base font-medium leading-relaxed text-orange-50/95 sm:text-lg md:text-xl">
						Coming soon. We are preparing an exciting <strong className="font-semibold">12-hour sustainability-themed hackathon</strong>. Details about rules, tracks, registration, and prizes will be published here soon.
					</p>
					<div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-xs font-medium uppercase tracking-wide text-white backdrop-blur-md ring-1 ring-white/30">
						<span className="inline-block h-2 w-2 animate-pulse rounded-full bg-white" />
						Stay tuned
					</div>
				</div>
			</section>

			<div className="mx-auto mt-12 max-w-3xl text-center text-sm text-gray-600 dark:text-gray-400">
				Need to get in touch meanwhile? Email us at <a className="font-semibold text-[#ffa800] underline decoration-dotted underline-offset-2 hover:brightness-110" href="mailto:techx-tunisia-25@ieee.tn">techx-tunisia-25@ieee.tn</a>
			</div>
		</main>
	);
}
