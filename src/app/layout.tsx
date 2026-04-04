import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Plumbfix | 24/7 Emergency Plumber — Trusted Local Service (NZ)",
    description:
        "Fast, reliable 24/7 plumbing across New Zealand. Emergency callouts, blocked drains, leak repairs, hot water systems, and maintenance. 5.0 Google rating. Call 021 230 5191.",
    metadataBase: new URL("https://plumbfix.co.nz"),
    openGraph: {
        title: "Plumbfix | 24/7 Emergency Plumber — Trusted Local Service",
        description:
            "Rated 5.0 on Google. Trusted local plumber available 24/7 for emergencies, repairs, and installations across New Zealand.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en-NZ" className={`h-full ${inter.variable}`}>
            <body className={`${inter.className} min-h-full`}>{children}</body>
        </html>
    );
}
