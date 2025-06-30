/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-gray-100',
    'text-gray-900',
    'bg-blue-100',
    'text-blue-900',
    'bg-purple-100',
    'text-purple-900',
    'p-4',
    'rounded-xl',
    'shadow-md',
    'mb-6',
    'ml-auto',
    'mr-auto',
    'text-right',
    'text-left',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}