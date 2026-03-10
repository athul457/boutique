/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        antique: {
          gold: '#C5A059',
          goldDark: '#997A3D',
          white: '#F9F6F0',
          dark: '#2A241D',
          brown: '#4A3D30',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Lato"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
