/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
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
        "primary": {
          DEFAULT: "#417F56",
          "light":"#E5F2E9",
          "dark": "#294F36",
          "darker": "#21402B",
        },
        "gray-plus": {
          950: "#121212",
          900: "#212121",
          800: "#353535",
          700: "#505050",
          600: "#717171",
          500: "#CBCBCB",
          400: "#D9D9D9",
          300: "#EFEFEF",
          200: "#F6F6F6"
        },
        "white-plus": {
          950: "#0D0D0D", // تیره‌تر برای حالت دارک
          900: "#1A1A1A",
          800: "#262626",
          700: "#3D3D3D",
          600: "#5C5C5C",
          500: "#A6A6A6",
          400: "#B2B2B2",
          300: "#C0C0C0",
          200: "#D6D6D6"  // روشن‌تر برای حالت دارک
        }
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
          '2xl': '1472px', // تنظیم اندازه 2xl به 1472 پیکسل
        },
      },
    },
  },
  plugins: [],
};
