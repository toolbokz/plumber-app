import { Container } from "@/components/Container";
import Image from "next/image";

import plumber1 from "@/images/plumber-1.jpg";

const REASONS = [
    {
        title: "Available 24/7",
        description: "Emergency plumbing doesn’t wait — neither do we.",
    },
    {
        title: "Fast response times",
        description: "We prioritize urgent callouts and keep you updated.",
    },
    {
        title: "Clear communication",
        description: "Straight answers, practical options, and no confusion.",
    },
    {
        title: "Quality workmanship",
        description: "Repairs done properly, using proven methods and materials.",
    },
    {
        title: "Local NZ service",
        description: "Professional plumbing with a local, reliable approach.",
    },
] as const;

export function WhyChoose() {
    return (
        <section aria-labelledby="why-heading" className="pf-section">
            <Container className="py-16">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
                    <div>
                        <h2 id="why-heading" className="text-2xl font-semibold tracking-tight text-slate-950">
                            Why choose Plumbfix
                        </h2>
                        <p className="mt-3 max-w-2xl text-slate-700">
                            We’re built around speed, trust, and doing the right thing — especially when
                            the situation is urgent.
                        </p>

                        <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-slate-200">
                            <div className="relative h-[260px] w-full sm:h-[228px] lg:h-[450px]">
                                <Image
                                    src={plumber1}
                                    alt="Plumber working on a repair"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 1024px) 520px, 100vw"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        {REASONS.map((r) => (
                            <div key={r.title} className="pf-card pf-card-hover p-6">
                                <div className="flex items-start gap-3">
                                    <div className="pf-panel grid h-9 w-9 place-items-center">
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
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-slate-950">{r.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-slate-700">{r.description}</p>
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
