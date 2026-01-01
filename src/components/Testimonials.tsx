import { SITE } from "@/lib/site";
import { Container } from "@/components/Container";

const TESTIMONIALS = [
    {
        name: "Sarah M.",
        context: "Homeowner",
        quote:
            "Called after hours with a leaking pipe and got a fast response. Clear communication, tidy work, and the repair has held perfectly. Highly recommended.",
    },
    {
        name: "James T.",
        context: "Property manager",
        quote:
            "Plumbfix handled an urgent blocked drain at one of our rentals. Great updates throughout and the tenant was looked after. Reliable service.",
    },
    {
        name: "Aroha K.",
        context: "Small business owner",
        quote:
            "Professional, punctual, and upfront. We had hot water issues and they explained options clearly before doing the work. Would use again.",
    },
] as const;

export function Testimonials() {
    return (
        <section aria-labelledby="testimonials-heading" className="pf-section">
            <Container className="py-16">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <h2
                            id="testimonials-heading"
                            className="text-2xl font-semibold tracking-tight text-slate-950"
                        >
                            What customers say
                        </h2>
                        <p className="mt-3 max-w-2xl text-slate-700">
                            Rated {SITE.rating.score.toFixed(1)} stars from {SITE.rating.reviews} Google reviews.
                        </p>
                    </div>
                </div>

                <div className="mt-8 grid gap-4 lg:grid-cols-3">
                    {TESTIMONIALS.map((t) => (
                        <figure
                            key={t.name}
                            className="pf-card pf-card-hover p-6"
                        >
                            <blockquote className="text-sm leading-relaxed text-slate-700">
                                “{t.quote}”
                            </blockquote>
                            <figcaption className="mt-5 flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-semibold text-slate-950">{t.name}</p>
                                    <p className="text-xs text-slate-600">{t.context}</p>
                                </div>
                                <div aria-hidden="true" className="text-amber-300">
                                    <Stars />
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </Container>
        </section>
    );
}

function Stars() {
    return (
        <span className="inline-flex items-center">
            {Array.from({ length: 5 }).map((_, idx) => (
                <svg
                    key={idx}
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                >
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}
        </span>
    );
}
