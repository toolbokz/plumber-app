import { SITE } from "@/lib/site";
import { Container } from "@/components/Container";

const TESTIMONIALS = [
    {
        name: "Sarah M.",
        context: "Homeowner, Auckland",
        quote:
            "Called after hours with a leaking pipe and got a fast response. Clear communication the whole way, tidy work, and the repair has held perfectly. Couldn't ask for more.",
        rating: 5,
    },
    {
        name: "James T.",
        context: "Property Manager",
        quote:
            "Plumbfix handled an urgent blocked drain at one of our rental properties. Kept me in the loop throughout, and the tenant was well looked after. Reliable — exactly what I need in a plumber.",
        rating: 5,
    },
    {
        name: "Aroha K.",
        context: "Small Business Owner",
        quote:
            "Professional, punctual, and completely upfront. We had hot water issues at the shop and they explained every option clearly before doing the work. Will definitely use again.",
        rating: 5,
    },
    {
        name: "Mark & Lisa D.",
        context: "Homeowners, Wellington",
        quote:
            "Had Plumbfix install a new hot water cylinder and re-plumb our laundry. The team was clean, efficient, and the pricing was exactly what they quoted. Top quality work.",
        rating: 5,
    },
] as const;

export function Testimonials() {
    return (
        <section id="reviews" aria-labelledby="testimonials-heading" className="bg-slate-950 text-white">
            <Container className="py-20 sm:py-24">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/10">
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 text-amber-400" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span>{SITE.rating.score.toFixed(1)} on Google</span>
                    </div>
                    <h2
                        id="testimonials-heading"
                        className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                        Trusted by homeowners and businesses across NZ
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-white/60">
                        Don&apos;t just take our word for it — here&apos;s what our customers say about working with {SITE.name}.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {TESTIMONIALS.map((t) => (
                        <figure
                            key={t.name}
                            className="group relative rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 transition-all duration-200 hover:bg-white/[0.07] hover:ring-white/15"
                        >
                            <div className="flex items-center gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                                {[...Array(t.rating)].map((_, i) => (
                                    <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 text-amber-400" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <blockquote className="mt-4 text-sm leading-relaxed text-white/70">
                                &ldquo;{t.quote}&rdquo;
                            </blockquote>
                            <figcaption className="mt-5 border-t border-white/10 pt-4">
                                <p className="text-sm font-semibold text-white">{t.name}</p>
                                <p className="mt-0.5 text-xs text-white/50">{t.context}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm text-white/40">
                        Based on {SITE.rating.reviews} verified Google reviews
                    </p>
                </div>
            </Container>
        </section>
    );
}
