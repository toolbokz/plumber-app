"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";

const FAQS = [
    {
        question: "What areas do you service?",
        answer: `We provide plumbing services across ${SITE.serviceAreaLabel}. Contact us to confirm availability in your area — we cover a wide range of locations and can often dispatch a plumber the same day.`,
    },
    {
        question: "Do you offer 24/7 emergency plumbing?",
        answer: "Yes. We operate around the clock for urgent plumbing emergencies including burst pipes, major leaks, overflows, and loss of hot water. Call us any time — day or night, weekends and public holidays included.",
    },
    {
        question: "How quickly can you respond?",
        answer: "For emergencies, we prioritise fast response and aim to have a plumber on the way as quickly as possible. Response times depend on your location and current demand, but we always keep you informed.",
    },
    {
        question: "Do you provide quotes before starting work?",
        answer: "Absolutely. We assess the situation, explain your options clearly, and provide upfront pricing before any work begins. No hidden fees, no surprises.",
    },
    {
        question: "Are your plumbers licensed and insured?",
        answer: "Yes. Our team is fully qualified, licensed, and insured. You can trust us to work safely and professionally in your home or business.",
    },
    {
        question: "What types of plumbing work do you handle?",
        answer: "We handle everything from emergency repairs, blocked drains, and leak detection to hot water systems, bathroom and kitchen plumbing, and routine maintenance. If it involves plumbing, we can help.",
    },
] as const;

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section aria-labelledby="faq-heading" className="border-t border-slate-200">
            <Container className="py-20 sm:py-24">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
                        FAQ
                    </p>
                    <h2
                        id="faq-heading"
                        className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
                    >
                        Common questions
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Quick answers before you book a plumber.
                    </p>
                </div>

                <div className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-900/5">
                    {FAQS.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div key={i} className="group">
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-slate-50/50"
                                    aria-expanded={isOpen}
                                >
                                    <span className="pr-4 text-base font-semibold text-slate-950">
                                        {faq.question}
                                    </span>
                                    <span className="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 transition-colors group-hover:bg-slate-200" aria-hidden="true">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}
                                >
                                    <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
