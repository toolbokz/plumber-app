import { SITE } from "@/lib/site";
import { Container } from "@/components/Container";

export function TrustSignals() {
    return (
        <section aria-label="Trust signals" className="border-y border-slate-100 bg-slate-50/50">
            <Container className="py-8 sm:py-10">
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-2">
                    <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-900/5 sm:mr-4">
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 text-amber-400" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <div className="text-sm">
                            <span className="font-bold text-slate-950">{SITE.rating.score.toFixed(1)}</span>
                            <span className="text-slate-500"> · {SITE.rating.reviews} reviews</span>
                        </div>
                    </div>
                    {[
                        { icon: "shield", title: "Licensed & insured", desc: "Qualified professionals you can trust" },
                        { icon: "bolt", title: "Fast response", desc: "Urgent jobs prioritised, clear updates" },
                        { icon: "tag", title: "Upfront pricing", desc: "No hidden fees or surprise charges" },
                        { icon: "clock", title: "24/7 availability", desc: "Day, night, weekends & holidays" },
                    ].map((s) => (
                        <div key={s.title} className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-white/80">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                                {s.icon === "shield" && <ShieldCheck />}
                                {s.icon === "bolt" && <Bolt />}
                                {s.icon === "tag" && <Tag />}
                                {s.icon === "clock" && <Clock />}
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-slate-950">{s.title}</p>
                                <p className="text-xs text-slate-500">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

function ShieldCheck() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}

function Bolt() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
        </svg>
    );
}

function Tag() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.59 13.41 11 3H4v7l9.59 9.59a2 2 0 0 0 2.82 0l4.18-4.18a2 2 0 0 0 0-2.82Z" />
            <path d="M7 7h.01" />
        </svg>
    );
}

function Clock() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
            <path d="M12 6v6l4 2" />
        </svg>
    );
}
