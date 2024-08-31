/** @type {import('tailwindcss').Config} */
import { fontSize, colors } from './src/config/tailwind';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize,
      colors,
    },
  },
  plugins: [],
};
