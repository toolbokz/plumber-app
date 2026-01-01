import { ImageResponse } from "next/og";

export const size = {
    width: 32,
    height: 32,
};

export const contentType = "image/png";

export default function Icon() {
    // Simple, high-contrast mark (dark base + confident blue accent).
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#020617", // slate-950
                    borderRadius: 8,
                }}
            >
                <div
                    style={{
                        width: 26,
                        height: 26,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: 8,
                        color: "#38bdf8", // sky-400-ish
                        fontSize: 18,
                        fontWeight: 800,
                        lineHeight: 1,
                    }}
                >
                    P
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
