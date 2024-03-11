/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-light-blue': '#9feeff',
        'primary': '#0098ee',
        'secondary': '#1400b4'
      }
    },
  },
  plugins: [],
}

