"use client";

import { SITE } from "@/lib/site";
import { useEffect, useRef, useState } from "react";

export function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    return (
        <section
            aria-labelledby="hero-heading"
            className="relative min-h-[90vh] flex items-center overflow-hidden"
        >
            {/* Video background */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source
                    src={isMobile ? "/videos/hero-bg-mobile.mp4" : "/videos/hero-bg.mp4"}
                    type="video/mp4"
                />
            </video>

            {/* Transparent black overlay */}
            <div
                className="absolute inset-0 bg-black/60"
                aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                            <span className="inline-flex h-2 w-2 rounded-full bg-sky-400" />
                        </span>
                        Available 24/7 — Emergency Plumber
                    </div>

                    <h1
                        id="hero-heading"
                        className="mt-6 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
                    >
                        Fast, reliable plumbing help —{" "}
                        <span className="text-sky-400">any time, day or night.</span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/80 sm:text-xl">
                        Plumbfix is your trusted local plumber in New Zealand. Urgent callouts,
                        quality workmanship, and a quick response when it matters most.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                        <a
                            href={SITE.phoneHref}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-sky-400 hover:shadow-sky-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                        >
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                className="h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <span>Call {SITE.phoneDisplay}</span>
                        </a>

                        <a
                            href="#callback"
                            className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                        >
                            Request a Call Back
                        </a>
                    </div>

                    {/* Trust stats */}
                    <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-8">
                        <div>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="mt-1 text-sm text-white/70">
                                {SITE.rating.score.toFixed(1)} / 5 ({SITE.rating.reviews} reviews)
                            </p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-white">24/7</p>
                            <p className="text-sm text-white/70">Always available</p>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-white">{SITE.serviceAreaLabel}</p>
                            <p className="text-sm text-white/70">Service area</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
