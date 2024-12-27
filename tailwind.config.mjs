/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customText: "#1d1d1f", 
        primaryBlue: "#0076df",
      },
      fontFamily: {
        sf: ['"SF Pro Display"', '"SF Pro Icons"', '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"], // Font stack
      },
    },
  },
  plugins: [],
};
