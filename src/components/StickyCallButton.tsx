import { SITE } from "@/lib/site";

export function StickyCallButton() {
    return (
        <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
            <div className="mx-auto max-w-6xl px-4 pb-4">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/95 to-transparent"
                />
                <a
                    href={SITE.phoneHref}
                    className="relative flex w-full items-center justify-center gap-2.5 rounded-2xl bg-sky-600 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-sky-600/30 transition-all active:scale-[0.98]"
                    aria-label={`Call ${SITE.name} on ${SITE.phoneDisplay}`}
                >
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.57 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.09a2 2 0 0 1 2.11-.45c.83.25 1.7.45 2.6.57A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>Call {SITE.phoneDisplay}</span>
                </a>
                <p className="relative mt-2 text-center text-xs font-medium text-slate-500">
                    24/7 emergency plumber &middot; Fast response
                </p>
            </div>
        </div>
    );
}
