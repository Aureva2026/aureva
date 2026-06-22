/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'aureva-sage': '#A8B5A0',
        'aureva-forest': '#2F4F3F',
        'aureva-cream': '#F5F1E8',
        'aureva-gold': '#D4AF37',
      },
    },
  },
  plugins: [],
};