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
      container: {
        center: true, // برای مرکز کردن کانتینر
        padding: {
          DEFAULT: '1rem', // مقدار پیش‌فرض پدینگ
          sm: '1rem', // پدینگ برای حالت sm
          md: '2rem', // پدینگ برای حالت md
          lg: '2rem', // پدینگ برای حالت lg
          xl: '2rem', // پدینگ برای حالت xl
          '2xl': '1rem', // پدینگ برای حالت 2xl
        },
        screens: {
          '2xl': '1472px', // تنظیم اندازه 2xl به 1264 پیکسل
        },
      },
    },
  },
  plugins: [],
};
