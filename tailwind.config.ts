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
            fontFamily: {
                hexa: "Hexa, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                jeko: "Jeko, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            },
            colors: {
                dark: "#333",
                light: "#eee",
            },
        },
    }
};
export default config;
