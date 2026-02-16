/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Heritage palette matching visual identity
        heritage: {
          green: '#2D5A47',      // Sage/olive green (primary)
          'green-dark': '#1E3D30',
          'green-light': '#4A7A64',
          red: '#8B2332',        // Deep muted red (accent)
          'red-dark': '#6B1A26',
          cream: '#F5F1E8',      // Warm cream background
          'cream-dark': '#EBE5D8',
          sand: '#D4C5A9',       // Sandy beige
          black: '#1A1A1A',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Source Sans 3', 'sans-serif'],
      },
      backgroundImage: {
        'pattern-border': "url('/patterns/border.svg')",
      },
    },
  },
  plugins: [],
}
