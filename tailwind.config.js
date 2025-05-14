/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bae0fd',
          300: '#7ac8fb',
          400: '#38a8f6',
          500: '#0e89e9',
          600: '#0670cd',
          700: '#085ba7',
          800: '#0c4c87',
          900: '#0f3f6f',
          950: '#0a294c',
        },
        secondary: {
          50: '#f2f9f9',
          100: '#dcf0f0',
          200: '#bce1e2',
          300: '#90cccf',
          400: '#5caeb5',
          500: '#3f959d',
          600: '#357a83',
          700: '#30666d',
          800: '#2d555c',
          900: '#29494f',
          950: '#182e33',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};