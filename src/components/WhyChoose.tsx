import { Container } from "@/components/Container";
import Image from "next/image";
import { fetchUnsplashImage } from "@/lib/images";

import plumber1 from "@/images/plumber-1.jpg";

const REASONS = [
    {
        title: "Available 24/7, 365 days",
        description:
            "Plumbing emergencies don't follow business hours. We're on call around the clock — nights, weekends, and public holidays.",
        icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
    },
    {
        title: "Rapid response times",
        description:
            "We prioritise urgent callouts and keep you updated with clear ETAs. No guessing, no waiting in the dark.",
        icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
            </svg>
        ),
    },
    {
        title: "Transparent, upfront pricing",
        description:
            "We explain the job, outline your options, and provide clear pricing before any work begins. No surprises.",
        icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.59 13.41 11 3H4v7l9.59 9.59a2 2 0 0 0 2.82 0l4.18-4.18a2 2 0 0 0 0-2.82Z" />
                <path d="M7 7h.01" />
            </svg>
        ),
    },
    {
        title: "Quality workmanship guaranteed",
        description:
            "Repairs done properly, using proven materials and techniques. We stand behind every job we complete.",
        icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        ),
    },
    {
        title: "Local NZ plumber you can trust",
        description:
            "Fully qualified, licensed, and insured. We treat every home and business with care and respect.",
        icon: (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s6-4.35 6-10a6 6 0 0 0-12 0c0 5.65 6 10 6 10Z" />
                <path d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
            </svg>
        ),
    },
] as const;

export function WhyChoose() {
    return (
        <section id="why" aria-labelledby="why-heading" className="border-t border-slate-100">
            <Container className="py-20 sm:py-24">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
                            Why choose Plumbfix
                        </p>
                        <h2
                            id="why-heading"
                            className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
                        >
                            Built around speed, trust, and doing the job right.
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-slate-600">
                            When you need a plumber, you need someone reliable. We combine fast
                            response with honest communication and workmanship you can count on.
                        </p>

                        <div className="mt-8 overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-900/5">
                            <div className="relative h-[280px] w-full lg:h-[400px]">
                                <Image
                                    src={plumber1}
                                    alt="Professional plumber at work"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 1024px) 520px, 100vw"
                                    placeholder="blur"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-3 lg:pt-4">
                        {REASONS.map((r, i) => (
                            <div
                                key={r.title}
                                className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-900/5 transition-all duration-200 hover:shadow-md hover:ring-slate-900/10"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-colors group-hover:bg-sky-100">
                                        {r.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-slate-950">
                                            {r.title}
                                        </h3>
                                        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                                            {r.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
