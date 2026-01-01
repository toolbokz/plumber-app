import { SITE } from "@/lib/site";
import { Container } from "@/components/Container";

export function TrustSignals() {
    return (
        <section aria-labelledby="trust-heading" className="pf-section">
            <Container className="py-16">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h2 id="trust-heading" className="text-2xl font-semibold tracking-tight text-slate-950">
                            Trusted local plumber. Built for urgent callouts.
                        </h2>
                        <p className="mt-3 max-w-2xl text-slate-700">
                            Plumbfix is rated {SITE.rating.score.toFixed(1)} stars from {SITE.rating.reviews} Google
                            reviews. We show up, communicate clearly, and do the job properly.
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <div className="pf-pill px-4 py-2 text-sm">
                                <Stars />
                                <span>
                                    <span className="font-semibold text-slate-950">{SITE.rating.score.toFixed(1)}</span> Google rating
                                </span>
                            </div>
                            <div className="pf-pill px-4 py-2 text-sm">
                                <Pin />
                                <span>
                                    <span className="font-semibold text-slate-950">NZ</span> local service
                                </span>
                            </div>
                            <div className="pf-pill px-4 py-2 text-sm">
                                <Clock />
                                <span>
                                    <span className="font-semibold text-slate-950">24/7</span> emergency availability
                                </span>
                            </div>
                        </div>
                    </div>

                    <dl className="grid gap-4 sm:grid-cols-3">
                        <TrustCard
                            title="Fast response"
                            description="Urgent callouts prioritized, with clear updates."
                            icon={<Bolt />}
                        />
                        <TrustCard
                            title="Upfront pricing"
                            description="No surprises — you’ll know what’s happening."
                            icon={<Tag />}
                        />
                        <TrustCard
                            title="Reliable workmanship"
                            description="Quality repairs that hold up over time."
                            icon={<Shield />}
                        />
                    </dl>
                </div>
            </Container>
        </section>
    );
}

function TrustCard({
    title,
    description,
    icon,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
}) {
    return (
        <div className="pf-card pf-card-hover p-5">
            <div className="flex items-start gap-3">
                <div className="pf-panel grid h-10 w-10 place-items-center">
                    <div className="text-sky-600" aria-hidden="true">
                        {icon}
                    </div>
                </div>
                <div>
                    <dt className="text-sm font-semibold text-slate-950">{title}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-slate-700">{description}</dd>
                </div>
            </div>
        </div>
    );
}

function Stars() {
    return (
        <span className="inline-flex items-center" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, idx) => (
                <svg
                    key={idx}
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-amber-300"
                    fill="currentColor"
                >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}
        </span>
    );
}

function Bolt() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
        </svg>
    );
}

function Tag() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.59 13.41 11 3H4v7l9.59 9.59a2 2 0 0 0 2.82 0l4.18-4.18a2 2 0 0 0 0-2.82Z" />
            <path d="M7 7h.01" />
        </svg>
    );
}

function Shield() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        </svg>
    );
}

function Pin() {
    return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 21s6-4.35 6-10a6 6 0 0 0-12 0c0 5.65 6 10 6 10Z" />
            <path d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        </svg>
    );
}

function Clock() {
    return (
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
            <path d="M12 6v6l4 2" />
        </svg>
    );
}
