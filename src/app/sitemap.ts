import type { MetadataRoute } from "next";

function getBaseUrl() {
    // Set this in production to your real domain (no trailing slash):
    // NEXT_PUBLIC_SITE_URL=https://plumbfix.co.nz
    return process.env.NEXT_PUBLIC_SITE_URL ?? "https://plumbfix.co.nz";
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = getBaseUrl();

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
    ];
}
