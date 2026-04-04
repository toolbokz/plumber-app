import { SITE } from "@/lib/site";
import { Container } from "@/components/Container";

const FOOTER_LINKS = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#process" },
    { label: "Why Us", href: "#why" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#callback" },
];

export function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <Container className="py-12 sm:py-16">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3">
                            <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-600 shadow-sm shadow-sky-600/20">
                                <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-base font-bold tracking-tight text-slate-950">{SITE.name}</p>
                                <p className="text-xs text-slate-500">Trusted plumbing, any time.</p>
                            </div>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-slate-500">
                            Professional plumbing services across {SITE.serviceAreaLabel}. Available 24/7 for
                            emergencies, repairs, and installations.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-950">Quick Links</h3>
                        <ul className="mt-3 space-y-2.5">
                            {FOOTER_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-slate-500 transition-colors hover:text-slate-950"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-950">Services</h3>
                        <ul className="mt-3 space-y-2.5">
                            {SITE.services.map((service) => (
                                <li key={service}>
                                    <span className="text-sm text-slate-500">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-950">Contact</h3>
                        <ul className="mt-3 space-y-3">
                            <li>
                                <a
                                    href={SITE.phoneHref}
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors hover:text-sky-600"
                                >
                                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    {SITE.phoneDisplay}
                                </a>
                            </li>
                            <li className="text-sm text-slate-500">
                                {SITE.availability}
                            </li>
                            <li className="text-sm text-slate-500">
                                {SITE.serviceAreaLabel}
                            </li>
                            <li className="flex items-center gap-2 pt-1">
                                <a
                                    href={SITE.social.facebookUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-slate-900/5 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                                >
                                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-[#1877F2]" fill="currentColor">
                                        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.69.24 2.69.24v2.98h-1.52c-1.5 0-1.97.94-1.97 1.9v2.28h3.35l-.54 3.49h-2.81V24C19.61 23.1 24 18.1 24 12.07Z" />
                                    </svg>
                                </a>
                                <a
                                    href={SITE.social.instagramUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-slate-900/5 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                                >
                                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="url(#igGradientFt)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <defs>
                                            <linearGradient id="igGradientFt" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                                                <stop offset="0" stopColor="#F58529" />
                                                <stop offset="0.35" stopColor="#DD2A7B" />
                                                <stop offset="0.7" stopColor="#8134AF" />
                                                <stop offset="1" stopColor="#515BD4" />
                                            </linearGradient>
                                        </defs>
                                        <rect x="4" y="4" width="16" height="16" rx="4" />
                                        <path d="M16 11.37a4 4 0 1 1-7.74 1.26 4 4 0 0 1 7.74-1.26Z" />
                                        <path d="M17.5 6.5h.01" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row">
                    <p className="text-xs text-slate-400">
                        &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
                    </p>
                    <p className="text-xs text-slate-400">
                        Website by{" "}
                        <a
                            href="https://fullstackforge.co.nz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-slate-500 transition-colors hover:text-slate-950"
                        >
                            Fullstack Forge
                        </a>
                    </p>
                </div>
            </Container>
        </footer>
    );
}
