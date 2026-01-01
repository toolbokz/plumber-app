"use client";

import { useSearchParams } from "next/navigation";

export function CallbackNotice() {
    const params = useSearchParams();
    const ok = params.get("callback") === "success";

    if (!ok) return null;

    return (
        <div
            role="status"
            className="mt-4 rounded-xl bg-emerald-500/10 p-4 text-sm text-emerald-200 ring-1 ring-emerald-400/30"
        >
            Request sent — we’ll contact you as soon as possible.
        </div>
    );
}
