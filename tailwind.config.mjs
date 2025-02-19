/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      shabnam: ['shabnam', 'sans-serif'],
      shabnamMedium: ['shabnamMedium', 'sans-serif'],
      shabnamBold: ['shabnamBold', 'sans-serif'],
      dana: ['dana', 'sans-serif'],
      danaBold: ['danaBold', 'sans-serif'],
      danaMedium: ['danaMedium', 'sans-serif'],
      morabba: ['morabba', 'sans-serif'],
      morabbaBold: ['morabbaBold', 'sans-serif'],
      morabbaMedium: ['morabbaMedium', 'sans-serif'],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
