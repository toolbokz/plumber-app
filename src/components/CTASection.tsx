import { Suspense } from "react";
import { SITE } from "@/lib/site";
import { Container } from "@/components/Container";
import { CallbackNotice } from "@/components/CallbackNotice";
import Image from "next/image";

import plumber3 from "@/images/plumber-3.jpg";

export function CTASection() {
    return (
        <section
            id="callback"
            aria-labelledby="cta-heading"
            className="border-t border-slate-100 bg-slate-50"
        >
            <Container className="py-20 sm:py-24">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
                        Get in touch
                    </p>
                    <h2
                        id="cta-heading"
                        className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
                    >
                        Need a plumber? Let&apos;s talk.
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Call now for 24/7 emergency plumbing, or request a callback
                        and we&apos;ll be in touch shortly.
                    </p>
                </div>

                <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-2 lg:items-start">
                    {/* Left: contact info + image */}
                    <div className="space-y-6">
                        {/* Emergency call card */}
                        <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-lg sm:p-8">
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400">
                                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white/60">24/7 Emergency Line</p>
                                    <a
                                        href={SITE.phoneHref}
                                        className="text-2xl font-bold tracking-tight text-white hover:text-sky-400 transition-colors"
                                    >
                                        {SITE.phoneDisplay}
                                    </a>
                                </div>
                            </div>
                            <p className="mt-4 text-sm leading-relaxed text-white/50">
                                For urgent leaks, burst pipes, overflows, or loss of hot water — call immediately for a fast response.
                            </p>
                            <a
                                href={SITE.phoneHref}
                                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-400 hover:shadow-sky-400/30 sm:w-auto"
                            >
                                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                Call Now
                            </a>
                        </div>

                        {/* Image */}
                        <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-900/5">
                            <div className="relative h-[220px] w-full sm:h-[260px]">
                                <Image
                                    src={plumber3}
                                    alt="Emergency plumber on the job"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 1024px) 520px, 100vw"
                                    placeholder="blur"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: callback form */}
                    <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-900/5 sm:p-8">
                        <h3 className="text-xl font-bold text-slate-950">
                            Request a callback
                        </h3>
                        <p className="mt-2 text-sm text-slate-600">
                            Leave your details and a brief description of the issue. We&apos;ll get back to you as soon as possible.
                        </p>

                        <Suspense fallback={null}>
                            <CallbackNotice />
                        </Suspense>

                        <form
                            className="mt-6 grid gap-5"
                            action="/api/request-callback"
                            method="post"
                        >
                            <div>
                                <label htmlFor="name" className="text-sm font-medium text-slate-700">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    autoComplete="name"
                                    className="pf-input"
                                    placeholder="Your full name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                                    Phone
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    inputMode="tel"
                                    autoComplete="tel"
                                    className="pf-input"
                                    placeholder="e.g. 021 123 4567"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="issue" className="text-sm font-medium text-slate-700">
                                    What&apos;s the issue?
                                </label>
                                <textarea
                                    id="issue"
                                    name="issue"
                                    rows={4}
                                    className="pf-input resize-none"
                                    placeholder="Describe the problem — e.g. leak under kitchen sink, blocked toilet, no hot water..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="pf-btn pf-btn-primary w-full px-6 py-3.5 text-base"
                            >
                                Request Callback
                            </button>

                            <p className="text-center text-xs text-slate-400">
                                By submitting you agree we can contact you about this enquiry. We respond quickly.
                            </p>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
}
