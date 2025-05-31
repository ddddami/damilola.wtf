/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.3rem",
        screens: {
          sm: "100%",
          md: "800px",
          // "2xl": "768px",
        },
      },
      fontSize: {
        base: ["1rem", { lineHeight: "1.5" }],
        lgbase: ["1.1rem", { lineHeight: "1.6" }],
      },

      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        heading: "rgb(var(--color-heading) / <alpha-value>)",
        body: "rgb(var(--color-body) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",

        accent: {
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
          50: "#fef7e7",
          100: "#fdecc4",
          200: "#fbd485",
          300: "#f9bc46",
          400: "#e4af5d",
          500: "#d4961a",
          600: "#b8820f",
          700: "#996b0f",
          800: "#7c5613",
          900: "#674713",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
