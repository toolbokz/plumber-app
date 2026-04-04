import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";
import Image from "next/image";
import { fetchUnsplashImage } from "@/lib/images";

const SERVICES = [
    {
        title: "Emergency Plumbing",
        description:
            "Burst pipes, major leaks, overflows, and no hot water. We respond fast — 24/7, including nights, weekends, and holidays.",
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
            </svg>
        ),
        urgent: true,
        query: "burst water pipe repair",
    },
    {
        title: "Blocked Drains",
        description:
            "Stubborn blockages cleared quickly with professional equipment. Sinks, toilets, stormwater, and sewer drains.",
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20" />
                <path d="m8 6 4-4 4 4" />
                <path d="M4 14a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4" />
            </svg>
        ),
        query: "plumber clearing blocked drain",
    },
    {
        title: "Leak Detection & Repair",
        description:
            "Pinpoint hidden leaks and fix them before they cause costly damage. Accurate diagnosis, lasting repairs.",
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
        ),
        query: "plumber repairing water leak",
    },
    {
        title: "Hot Water Systems",
        description:
            "Repairs, replacements, and new installations. Electric, gas, and solar hot water cylinders — expert advice included.",
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 9a4 4 0 0 0-4 4H4a8 8 0 0 1 16 0h-4a4 4 0 0 0-4-4Z" />
                <path d="M12 9V2" />
                <path d="m8 13-2 8h12l-2-8" />
            </svg>
        ),
        query: "hot water cylinder installation",
    },
    {
        title: "Bathroom & Kitchen",
        description:
            "Tap replacements, toilet repairs, vanity installs, dishwasher connections, and full plumbing fit-outs for renovations.",
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7V5a2 2 0 0 1 2-2h6" />
                <path d="M3 7h18v4a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6V7z" />
                <path d="M12 17v4" />
                <path d="M8 21h8" />
            </svg>
        ),
        query: "modern bathroom plumbing renovation",
    },
    {
        title: "Maintenance & Installations",
        description:
            "Preventative plumbing maintenance, upgrades, and new fixture installations for homes, rentals, and small businesses.",
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
        query: "wrench tools plumbing maintenance",
    },
] as const;

async function ServiceImage({ query, alt }: { query: string; alt: string }) {
    const img = await fetchUnsplashImage(query, {
        orientation: "landscape",
        width: 640,
    });

    if (!img) {
        return (
            <div className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 to-slate-200">
                <svg viewBox="0 0 24 24" className="h-10 w-10 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
            </div>
        );
    }

    return (
        <div className="relative h-44 w-full overflow-hidden rounded-xl">
            <Image
                src={img.src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
            />
            {img.credit && (
                <span className="pf-credit">
                    Photo: {img.credit}
                </span>
            )}
        </div>
    );
}

export async function Services() {
    return (
        <section id="services" aria-labelledby="services-heading" className="border-t border-slate-100">
            <Container className="py-20 sm:py-24">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
                        Our services
                    </p>
                    <h2
                        id="services-heading"
                        className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
                    >
                        Plumbing services that cover the urgent — and the everyday.
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600">
                        Whether it&apos;s a middle-of-the-night emergency or scheduled maintenance,
                        {SITE.name} delivers reliable results with clear communication.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((s) => (
                        <div
                            key={s.title}
                            className="pf-card group relative overflow-hidden transition-all duration-200 hover:shadow-md hover:shadow-slate-900/5 hover:ring-slate-900/10"
                        >
                            <ServiceImage query={s.query} alt={s.title} />
                            <div className="p-6">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                                        {s.icon}
                                    </div>
                                    <h3 className="text-base font-bold text-slate-950">
                                        {s.title}
                                    </h3>
                                    {"urgent" in s && s.urgent && (
                                        <span className="ml-auto rounded-full bg-red-50 px-2.5 py-0.5 text-[11px] font-semibold text-red-600 ring-1 ring-red-100">
                                            24/7
                                        </span>
                                    )}
                                </div>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    {s.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="#callback"
                        className="pf-btn pf-btn-primary gap-2 px-7 py-3.5 text-base"
                    >
                        Request a Quote
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </a>
                </div>
            </Container>
        </section>
    );
}
