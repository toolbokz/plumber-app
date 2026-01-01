import { SITE } from "@/lib/site";
import { Container } from "@/components/Container";

export function Header() {
    return (
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur">
            <Container className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                    <div
                        className="grid h-10 w-10 place-items-center rounded-lg bg-slate-50 ring-1 ring-slate-200"
                        aria-hidden="true"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5 text-sky-600"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 2v20" />
                            <path d="M7 7h10" />
                            <path d="M7 17h10" />
                            <path d="M5 12h14" />
                        </svg>
                    </div>
                    <div className="leading-tight">
                        <p className="text-base font-semibold tracking-tight text-slate-950">{SITE.name}</p>
                        <p className="text-xs text-slate-600">
                            24/7 Plumbing Services — {SITE.serviceAreaLabel}
                        </p>
                    </div>
                </div>

                <div className="hidden items-center gap-4 sm:flex">
                    <div className="text-right">
                        <p className="text-xs text-slate-600">Emergency? Call now</p>
                        <p className="text-sm font-semibold text-slate-950">{SITE.phoneDisplay}</p>
                    </div>
                    <a
                        href={SITE.phoneHref}
                        className="pf-btn pf-btn-primary rounded-lg px-4 py-2 text-sm"
                    >
                        Call
                    </a>
                </div>
            </Container>
        </header>
    );
}
