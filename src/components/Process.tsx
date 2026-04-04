import { Container } from "@/components/Container";

const STEPS = [
    {
        step: "01",
        title: "Get in touch",
        description:
            "Call us 24/7 or request a callback online. We respond quickly — especially for emergencies.",
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
    },
    {
        step: "02",
        title: "Assessment & quote",
        description:
            "We assess the job, explain your options, and provide clear upfront pricing before any work starts.",
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
        ),
    },
    {
        step: "03",
        title: "Professional repair",
        description:
            "Our qualified plumber completes the work efficiently, using quality materials and proven methods.",
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
    },
    {
        step: "04",
        title: "Quality guaranteed",
        description:
            "We stand behind every job with follow-up support and workmanship assurance. Done right, built to last.",
        icon: (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        ),
    },
] as const;

export function Process() {
    return (
        <section aria-labelledby="process-heading" className="bg-slate-50">
            <Container className="py-20 sm:py-24">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
                        How it works
                    </p>
                    <h2
                        id="process-heading"
                        className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
                    >
                        Simple, reliable process
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600">
                        From your first call to job completion — clear communication and quality work at every step.
                    </p>
                </div>

                <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {STEPS.map((s, i) => (
                        <div key={s.step} className="relative text-center lg:text-left">
                            {i < STEPS.length - 1 && (
                                <div
                                    className="absolute left-1/2 top-8 hidden h-px w-full -translate-x-0 translate-y-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 lg:block"
                                    style={{ left: "60%", width: "80%" }}
                                    aria-hidden="true"
                                />
                            )}
                            <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm ring-1 ring-slate-900/5 lg:mx-0">
                                {s.icon}
                            </div>
                            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-sky-600/60">
                                Step {s.step}
                            </p>
                            <h3 className="mt-3 text-lg font-semibold text-slate-950">
                                {s.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                {s.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
