import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
    title: "Plumbfix | 24/7 Emergency Plumber (New Zealand)",
    description:
        "Fast, reliable 24/7 plumbing across New Zealand. Emergency plumbing, blocked drains, leak repairs, hot water cylinders, and maintenance. Call 021 230 5191.",
    metadataBase: new URL("https://plumbfix.co.nz"),
    openGraph: {
        title: "Plumbfix | 24/7 Emergency Plumber",
        description:
            "Trusted local plumber with a 5.0 Google rating. Open 24 hours for emergencies.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en-NZ" className="h-full">
            <body className={`${inter.className} min-h-full`}>{children}</body>
        </html>
    );
}
