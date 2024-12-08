/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        voile: {
          light: '#E7D6F7', // Light purple
          DEFAULT: '#B792E0', // Main purple
          dark: '#6B4D9B', // Darker shade
        },
        dark: {
          background: '#121212', // Dark mode background
          text: '#E0E0E0', // Light text for dark mode
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
