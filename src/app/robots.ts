import type { MetadataRoute } from "next";

function getBaseUrl() {
    // Set this in production to your real domain (no trailing slash):
    // NEXT_PUBLIC_SITE_URL=https://plumbfix.co.nz
    return process.env.NEXT_PUBLIC_SITE_URL ?? "https://plumbfix.co.nz";
}

export default function robots(): MetadataRoute.Robots {
    const baseUrl = getBaseUrl();

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/"],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
