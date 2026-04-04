"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";
import { Container } from "@/components/Container";

const NAV_LINKS = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#process" },
    { label: "Why Us", href: "#why" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#callback" },
] as const;

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 border-b border-slate-900/5 bg-white/90 backdrop-blur-md">
            <Container className="flex items-center justify-between py-3.5">
                <a href="/" className="flex items-center gap-3 group">
                    <div
                        className="grid h-10 w-10 place-items-center rounded-xl bg-sky-600 shadow-sm shadow-sky-600/20 transition-shadow group-hover:shadow-md group-hover:shadow-sky-600/25"
                        aria-hidden="true"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                    </div>
                    <div className="leading-tight">
                        <p className="text-base font-bold tracking-tight text-slate-950">
                            {SITE.name}
                        </p>
                        <p className="text-[11px] font-medium text-slate-500">
                            24/7 Plumbing Services
                        </p>
                    </div>
                </a>

                <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-950"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden items-center gap-3 lg:flex">
                    <div className="text-right">
                        <p className="text-[11px] font-medium text-slate-500">
                            Emergency? Call now
                        </p>
                        <a
                            href={SITE.phoneHref}
                            className="text-sm font-bold text-slate-950 transition-colors hover:text-sky-600"
                        >
                            {SITE.phoneDisplay}
                        </a>
                    </div>
                    <a
                        href={SITE.phoneHref}
                        className="pf-btn pf-btn-primary gap-2 rounded-xl px-5 py-2.5 text-sm"
                    >
                        <PhoneIcon />
                        Call Now
                    </a>
                </div>

                <div className="flex items-center gap-2 lg:hidden">
                    <a
                        href={SITE.phoneHref}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white shadow-sm shadow-sky-600/20"
                        aria-label="Call now"
                    >
                        <PhoneIcon />
                    </a>
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-slate-50"
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? (
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 6h16" />
                                <path d="M4 12h16" />
                                <path d="M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </Container>

            {menuOpen && (
                <div className="border-t border-slate-100 bg-white lg:hidden">
                    <Container className="py-4">
                        <nav className="flex flex-col gap-1" aria-label="Mobile">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                        <div className="mt-4 border-t border-slate-100 pt-4">
                            <a
                                href={SITE.phoneHref}
                                className="pf-btn pf-btn-primary flex w-full gap-2 px-4 py-3 text-sm"
                            >
                                <PhoneIcon />
                                Call {SITE.phoneDisplay}
                            </a>
                        </div>
                    </Container>
                </div>
            )}
        </header>
    );
}

function PhoneIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}
