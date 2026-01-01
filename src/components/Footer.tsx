import { SITE } from "@/lib/site";
import { Container } from "@/components/Container";

export function Footer() {
    return (
        <footer className="pf-section">
            <Container className="py-10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold text-slate-950">{SITE.name}</p>
                        <p className="mt-1 text-sm text-slate-600">
                            24/7 Plumbing Services — {SITE.serviceAreaLabel}
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href={SITE.social.facebookUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-slate-200 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                        >
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                className="h-5 w-5 text-[#1877F2]"
                                fill="currentColor"
                            >
                                <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.69.24 2.69.24v2.98h-1.52c-1.5 0-1.97.94-1.97 1.9v2.28h3.35l-.54 3.49h-2.81V24C19.61 23.1 24 18.1 24 12.07Z" />
                            </svg>
                        </a>

                        <a
                            href={SITE.social.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-slate-200 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                        >
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                className="h-5 w-5"
                                fill="none"
                                stroke="url(#igGradient)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <defs>
                                    <linearGradient id="igGradient" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" stopColor="#F58529" />
                                        <stop offset="0.35" stopColor="#DD2A7B" />
                                        <stop offset="0.7" stopColor="#8134AF" />
                                        <stop offset="1" stopColor="#515BD4" />
                                    </linearGradient>
                                </defs>
                                <rect x="4" y="4" width="16" height="16" rx="4" />
                                <path d="M16 11.37a4 4 0 1 1-7.74 1.26 4 4 0 0 1 7.74-1.26Z" />
                                <path d="M17.5 6.5h.01" />
                            </svg>
                        </a>

                        <a
                            href={SITE.phoneHref}
                            className="text-sm font-semibold text-slate-950 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                        >
                            {SITE.phoneDisplay}
                        </a>
                    </div>
                </div>

                <p className="mt-8 text-xs text-slate-500">
                    © {new Date().getFullYear()} {SITE.name}. All rights reserved.
                </p>
            </Container>
        </footer>
    );
}
