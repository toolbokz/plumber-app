import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const contentType = req.headers.get("content-type") ?? "";

    let name = "";
    let phone = "";
    let issue = "";

    try {
        if (
            contentType.includes("application/x-www-form-urlencoded") ||
            contentType.includes("multipart/form-data")
        ) {
            const data = await req.formData();
            name = String(data.get("name") ?? "").trim();
            phone = String(data.get("phone") ?? "").trim();
            issue = String(data.get("issue") ?? "").trim();
        } else if (contentType.includes("application/json")) {
            const data = (await req.json()) as Partial<{
                name: string;
                phone: string;
                issue: string;
            }>;
            name = String(data.name ?? "").trim();
            phone = String(data.phone ?? "").trim();
            issue = String(data.issue ?? "").trim();
        }
    } catch {
        // If parsing fails, continue to redirect (no sensitive error leak).
    }

    // Placeholder integration:
    // In production, send this to email/CRM (e.g. SendGrid, Mailgun, HubSpot).
    // Keeping it server-side avoids exposing keys and stays compatible with static UI.
    console.info("[Plumbfix] callback request", {
        name,
        phone,
        issue,
        receivedAt: new Date().toISOString(),
    });

    const url = new URL(req.url);
    const origin = `${url.protocol}//${url.host}`;

    return NextResponse.redirect(`${origin}/?callback=success#callback`, {
        status: 303,
    });
}
