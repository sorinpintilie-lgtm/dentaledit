import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "var(--brand-500)",
          600: "var(--brand-600)",
          700: "var(--brand-700)",
        },
        mint: {
          50: "var(--mint-50)",
          100: "var(--mint-100)",
          200: "var(--mint-200)",
        },
        cream: {
          100: "var(--cream-100)",
        },
        ink: {
          900: "var(--ink)",
          700: "var(--ink-2)",
          500: "var(--muted)",
        },
        sky: {
          500: "var(--sky)",
        },
        coral: {
          500: "var(--coral)",
        },
        violet: {
          500: "var(--violet)",
        },
        line: "var(--line)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "Segoe UI", "Arial", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "var(--shadowSoft)",
        lift: "var(--shadowLift)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        underlineDraw: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        }
      },
      animation: {
        shimmer: "shimmer 1.6s ease-in-out infinite",
        floaty: "floaty 3.6s ease-in-out infinite",
        underlineDraw: "underlineDraw 900ms ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;