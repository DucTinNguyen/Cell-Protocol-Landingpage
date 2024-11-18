import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryText: "#8CE339"
      },
      fontFamily: {
        neueHaas: ['var(--font-neue-haas)', 'system-ui'],
        marbold: ['var(--font-marbold)', 'system-ui'],
        cirka: ['var(--font-cirka)', 'system-ui'],
      },
    },
  },
  plugins: [],
};
export default config;
