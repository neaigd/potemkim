/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
  safelist: [
    'bg-blue-100',
    'text-blue-900',
    'bg-purple-100',
    'text-purple-900',
    'p-4',
    'mb-6',
    'rounded-xl',
    'shadow-md',
    'ml-auto',
    'mr-0',
    'text-right',
    'mr-auto',
    'ml-0',
    'text-left',
    'max-w-3xl',
  ],
}