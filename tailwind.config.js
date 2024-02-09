/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F9B138',
        'secondary': '#0F172A',
        'card': '#1E293B',
        'text-gray': '#bcbcbc',
      },
      backgroundImage: {
        'bg-hero': "url('/src/assets/img/large_triangles.svg')",
        'hero-flodip': "url('/src/assets/img/BANNER_FLODIP.jpg')",
        'hero': "url('/src/assets/img/protruding_squares.svg')",
      },
    },
  },
  plugins: [],
}