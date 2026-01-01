import { SITE } from "@/lib/site";
import { Container } from "@/components/Container";
import Image from "next/image";

import plumber2 from "@/images/plumber-2.jpg";

export function Hero() {
    return (
        <section aria-labelledby="hero-heading" className="pf-section border-t-0">
            <Container className="py-16 sm:py-20 lg:py-24">
                {/*
          Design note:
          - Use a big, direct headline + two CTAs.
          - Keep the hero clean (no busy imagery) to feel premium and fast.
        */}
                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <div>
                        <div className="pf-pill">
                            <span className="inline-flex h-2 w-2 rounded-full bg-sky-400" aria-hidden="true" />
                            <span>24/7 Emergency Plumber</span>
                        </div>

                        <h1
                            id="hero-heading"
                            className="mt-5 text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl"
                        >
                            Fast, reliable plumbing help — any time, day or night.
                        </h1>
                        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
                            Plumbfix is a trusted local plumber in New Zealand, available 24 hours for
                            urgent callouts. Clear communication, quality workmanship, and a quick
                            response when it matters.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <a
                                href={SITE.phoneHref}
                                className="pf-btn pf-btn-primary gap-2 px-5 py-3 text-base"
                            >
                                <span>Call {SITE.phoneDisplay}</span>
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
                                    <path d="M5 12h14" />
                                    <path d="m13 5 7 7-7 7" />
                                </svg>
                            </a>

                            <a
                                href="#callback"
                                className="pf-btn pf-btn-secondary px-5 py-3 text-base"
                            >
                                Request a Call Back
                            </a>
                        </div>

                        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
                            <div className="pf-panel p-4">
                                <dt className="text-xs font-semibold text-slate-600">Google rating</dt>
                                <dd className="mt-1 flex items-baseline gap-2">
                                    <span className="text-2xl font-semibold text-slate-950">{SITE.rating.score.toFixed(1)}</span>
                                    <span className="text-sm text-slate-700">({SITE.rating.reviews} reviews)</span>
                                </dd>
                            </div>
                            <div className="pf-panel p-4">
                                <dt className="text-xs font-semibold text-slate-600">Availability</dt>
                                <dd className="mt-1 text-lg font-semibold text-slate-950">{SITE.availability}</dd>
                            </div>
                            <div className="pf-panel p-4">
                                <dt className="text-xs font-semibold text-slate-600">Service area</dt>
                                <dd className="mt-1 text-lg font-semibold text-slate-950">{SITE.serviceAreaLabel}</dd>
                            </div>
                        </dl>
                    </div>

                    <div className="pf-card overflow-hidden p-0">
                        <div className="relative aspect-[4/3] w-full">
                            <Image
                                src={plumber2}
                                alt="Plumber on site"
                                fill
                                priority
                                className="object-cover"
                                sizes="(min-width: 1024px) 440px, 100vw"
                            />
                        </div>

                        <div className="p-6">
                            <h2 className="text-lg font-semibold text-slate-950">Emergency checklist</h2>
                            <p className="mt-2 text-sm leading-relaxed text-slate-700">
                                If you have a leak, overflow, or no hot water, call now — we’re available
                                24/7.
                            </p>
                            <ul className="mt-5 space-y-3 text-sm text-slate-700">
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-400" aria-hidden="true" />
                                    Shut off the water at the mains (if safe).
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-400" aria-hidden="true" />
                                    Turn off power to affected areas if needed.
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-400" aria-hidden="true" />
                                    Call Plumbfix for fast advice and dispatch.
                                </li>
                            </ul>
                            <a
                                href={SITE.phoneHref}
                                className="pf-btn pf-btn-primary mt-6 w-full px-5 py-3 text-base"
                            >
                                Call now
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
