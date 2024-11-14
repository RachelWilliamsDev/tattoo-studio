import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "screen-2xl": "1520px",
      },
      fontFamily: {
        angel: ['"Angel Rhapsody"', "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mutedBackground: "var(--background-muted)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        overlay: {
          DEFAULT: "var(--overlay-bg)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
        },
        accent: {
          DEFAULT: "var(--accent)",
        },
      },
      borderRadius: {
        "4xl": "var(--radius)",
      },
      backgroundImage: {
        header: "url('/assets/bg-header.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
