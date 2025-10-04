/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2fbf4',
          100: '#d9f5e0',
          200: '#b3eac1',
          300: '#86dca0',
          400: '#4fc978',
          500: '#27b35a',
          600: '#1a8d46',
          700: '#176f3a',
          800: '#145933',
          900: '#0f462a'
        }
      }
    }
  },
  plugins: [],
}
