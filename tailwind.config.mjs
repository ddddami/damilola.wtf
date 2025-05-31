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
          md: "720px",
          // "2xl": "768px",
        },
      },
      fontSize: {
        base: ["1rem", { lineHeight: "1.5" }],
        lgbase: ["1.1rem", { lineHeight: "1.6" }],
      },
      colors: {
        primary: {
          DEFAULT: "#FF0000",
          light: "",
          dark: "#FFC2C2",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
