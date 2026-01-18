/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary))",
        accent: "rgb(var(--color-accent))",
        background: "rgb(var(--color-bg))",
        surface: "rgb(var(--color-surface))",
        text: {
          primary: "rgb(var(--color-text-primary))",
          muted: "rgb(var(--color-text-muted))",
        },
        border: "rgb(var(--color-border))",
      },
    },
  },
  plugins: [],
};
