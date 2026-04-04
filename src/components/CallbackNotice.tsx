"use client";

import { useSearchParams } from "next/navigation";

export function CallbackNotice() {
    const params = useSearchParams();
    const ok = params.get("callback") === "success";

    if (!ok) return null;

    return (
        <div
            role="status"
            className="mt-4 rounded-xl bg-emerald-50 p-4 text-sm font-medium text-emerald-800 ring-1 ring-emerald-200"
        >
            <span className="mr-1.5">✓</span> Request received — we&apos;ll be in touch shortly.
        </div>
    );
}
