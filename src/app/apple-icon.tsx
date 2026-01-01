import { ImageResponse } from "next/og";

export const size = {
    width: 180,
    height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
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
                    borderRadius: 32,
                }}
            >
                <div
                    style={{
                        width: 132,
                        height: 132,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: 28,
                        color: "#38bdf8",
                        fontSize: 92,
                        fontWeight: 900,
                        letterSpacing: -2,
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
