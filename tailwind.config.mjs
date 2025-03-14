/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
      colors: {
        primary: {
          DEFAULT: "#FF0000",
          light: "",
          dark: "#FFC2C2",
        },
      },
    },
  },
  plugins: [],
};
