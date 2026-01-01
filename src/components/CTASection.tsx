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
            className="pf-section"
        >
            <Container className="py-16">
                <div className="pf-card grid gap-10 rounded-3xl p-6 sm:p-10 lg:grid-cols-2 lg:items-start">
                    <div>
                        <h2 id="cta-heading" className="text-3xl font-semibold tracking-tight text-slate-950">
                            Need a plumber urgently?
                        </h2>
                        <p className="mt-3 max-w-xl text-slate-700">
                            Call now for 24/7 emergency plumbing. If you can’t talk right away, request a
                            callback and we’ll get back to you as soon as possible.
                        </p>

                        <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-slate-200">
                            <div className="relative h-[220px] w-full sm:h-[240px]">
                                <Image
                                    src={plumber3}
                                    alt="Emergency plumber on the job"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 1024px) 520px, 100vw"
                                />
                            </div>
                        </div>

                        <div className="pf-panel mt-6 p-5">
                            <p className="text-sm text-slate-600">24/7 emergency line</p>
                            <a
                                href={SITE.phoneHref}
                                className="mt-1 inline-flex items-center gap-2 text-2xl font-semibold tracking-tight text-slate-950 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                            >
                                {SITE.phoneDisplay}
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5 text-sky-600"
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
                            <p className="mt-2 text-xs text-slate-600">
                                For urgent leaks, overflows, or no hot water — call immediately.
                            </p>
                        </div>
                    </div>

                    <div>
                        {/*
              Implementation note:
              - Form POSTs to a local API route and redirects back with a success flag.
              - Keeps the UX fast (no client JS required) while staying deploy-ready.
            */}
                        <div className="pf-panel p-6">
                            <h3 className="text-lg font-semibold text-slate-950">Request a call back</h3>
                            <p className="mt-2 text-sm text-slate-700">
                                Leave your details and a brief issue description.
                            </p>

                            <Suspense fallback={null}>
                                <CallbackNotice />
                            </Suspense>

                            <form
                                className="mt-5 grid gap-4"
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
                                        placeholder="Your name"
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
                                        What’s happening?
                                    </label>
                                    <textarea
                                        id="issue"
                                        name="issue"
                                        rows={4}
                                        className="pf-input resize-none"
                                        placeholder="Leak under sink, blocked drain, no hot water…"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="pf-btn pf-btn-primary px-5 py-3 text-base"
                                >
                                    Request Callback
                                </button>

                                <p className="text-xs text-slate-600">
                                    By submitting, you agree we can contact you about this enquiry.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
