import { Container } from "@/components/Container";

const SERVICES = [
    {
        title: "Emergency plumbing",
        description: "Burst pipes, leaks, overflows — rapid help any time, 24/7.",
    },
    {
        title: "Blocked drains",
        description: "Clear stubborn blockages and get water flowing again.",
    },
    {
        title: "Leak repairs",
        description: "Pinpoint and repair leaks fast to prevent damage.",
    },
    {
        title: "Hot water cylinders",
        description: "No hot water? Repairs, replacements, and advice you can trust.",
    },
    {
        title: "General maintenance",
        description: "Fixes, upgrades, and preventative plumbing maintenance.",
    },
    {
        title: "Residential & small commercial",
        description: "Homes, rentals, and small businesses across NZ.",
    },
] as const;

export function Services() {
    return (
        <section aria-labelledby="services-heading" className="pf-section">
            <Container className="py-16">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <h2 id="services-heading" className="text-2xl font-semibold tracking-tight text-slate-950">
                            Plumbing services that cover the urgent — and the everyday.
                        </h2>
                        <p className="mt-3 max-w-2xl text-slate-700">
                            Whether it’s a middle-of-the-night emergency or ongoing property maintenance,
                            Plumbfix delivers reliable service with clear communication.
                        </p>
                    </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((s) => (
                        <div
                            key={s.title}
                            className="pf-card pf-card-hover p-6"
                        >
                            <div className="flex items-start gap-3">
                                <div className="mt-1 h-2 w-2 rounded-full bg-sky-400" aria-hidden="true" />
                                <div>
                                    <h3 className="text-base font-semibold text-slate-950">{s.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-700">{s.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
