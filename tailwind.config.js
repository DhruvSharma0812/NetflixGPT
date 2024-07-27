/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#2E2C2C',  // Add your custom color here
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

