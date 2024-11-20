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
        background: {
          DEFAULT: "var(--background)",
          darker: "var(--background-darker)",
        },
        foreground: "var(--foreground)",
        mutedBackground: "var(--background-muted)",
        cream: "var(--cream)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          muted: "var(--primary-muted)",
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
        contact: "url('/assets/bg-contact.png')",
        testimonials: "url('/assets/bg-testimonials.png')",
        faq: "url('/assets/bg-faq.png')",
        footer: "url('/assets/bg-footer.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
