import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // Keep styling premium + consistent by leaning on Tailwind's defaults.
            // If you later add a design system, extend tokens here.
        },
    },
    plugins: [],
};

export default config;
