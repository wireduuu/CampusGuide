/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#1F6F5C',   // Institutional green
        dark: '#145244',
        light: '#3A8C78',
      },
      background: {
        DEFAULT: '#F7EFE3',   // Cream background
        soft: '#FBF6EE',
      },
      accent: {
        DEFAULT: '#D6B26E',   // Subtle gold accent
      },
      text: {
        primary: '#1F2933',
        muted: '#6B7280',
      },
    },
  },
},
  plugins: [],
}
