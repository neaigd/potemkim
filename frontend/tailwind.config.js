/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.md", // Adiciona arquivos Markdown para escaneamento do Tailwind
  ],
  darkMode: 'class', // Enable dark mode based on class
  theme: {
    extend: {
      colors: {
        // Light theme colors (default)
        light: {
          'background': '#f8fafc', // slate-50
          'text-primary': '#1e293b', // slate-900
          'text-secondary': '#475569', // slate-600
          'card-background': '#ffffff', // white
          'border': '#e2e8f0', // slate-200
          'accent-blue': '#3b82f6', // blue-500
          'accent-purple': '#9333ea', // purple-600
        },
        // Dark theme colors
        dark: {
          'background': '#1e293b', // slate-900
          'text-primary': '#f8fafc', // slate-50
          'text-secondary': '#94a3b8', // slate-400
          'card-background': '#334155', // slate-700
          'border': '#475569', // slate-600
          'accent-blue': '#60a5fa', // blue-400
          'accent-purple': '#c084fc', // purple-400
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  safelist: [
    // Existing safelist entries
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
    // New safelist entries for dark mode
    'bg-light-background',
    'text-light-text-primary',
    'text-light-text-secondary',
    'bg-light-card-background',
    'border-light-border',
    'bg-dark-background',
    'text-dark-text-primary',
    'text-dark-text-secondary',
    'bg-dark-card-background',
    'border-dark-border',
    'bg-light-accent-blue',
    'text-light-accent-blue',
    'bg-light-accent-purple',
    'text-light-accent-purple',
    'bg-dark-accent-blue',
    'text-dark-accent-blue',
    'bg-dark-accent-purple',
    'text-dark-accent-purple',
  ],
}