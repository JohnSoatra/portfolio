import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./constants/classes.ts",
    ],
    theme: {
        extend: {
            screens: {
                'xs': '0px',
                'sm': '360px'
            },
            colors: {
                dark: "#333",
                light: "#eee",
            },
            fontFamily: {
                'Roboto': "Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
            }
        },
    }
};
export default config;
