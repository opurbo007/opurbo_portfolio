import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: colors.blue[600],
          foreground: colors.white,
        },
        secondary: {
          DEFAULT: colors.gray[600],
          foreground: colors.white,
        },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "gradient-spin": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-ring": {
          "0%,100%": { opacity: "0.2", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(1.04)" },
        },
        shimmer: {
          "0%,100%": { opacity: "0.15" },
          "50%": { opacity: "0.3" },
        },
        "orbit-1": {
          from: { transform: "rotate(0deg) translateX(148px) rotate(0deg)" }, // was 128
          to: { transform: "rotate(360deg) translateX(148px) rotate(-360deg)" },
        },
        "orbit-2": {
          from: {
            transform: "rotate(120deg) translateX(155px) rotate(-120deg)",
          }, // was 118
          to: { transform: "rotate(480deg) translateX(155px) rotate(-480deg)" },
        },
        "orbit-3": {
          from: {
            transform: "rotate(240deg) translateX(160px) rotate(-240deg)",
          }, // was 135
          to: { transform: "rotate(600deg) translateX(160px) rotate(-600deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin 7s linear infinite",
        "spin-reverse": "spin 9s linear infinite reverse",
        "spin-rev-slow": "spin 12s linear infinite reverse",
        "spin-ultra-slow": "spin 20s linear infinite",
        "gradient-spin": "gradient-spin 3.5s ease infinite",
        "pulse-ring": "pulse-ring 3s ease-in-out infinite",
        shimmer: "shimmer 6s ease-in-out infinite",
        "orbit-1": "orbit-1 4s linear infinite",
        "orbit-2": "orbit-2 5.5s linear infinite",
        "orbit-3": "orbit-3 7s linear infinite",
      },
    },
  },
  plugins: [addVariablesForColors, require("tailwindcss-animate")],
} satisfies Config;

export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
