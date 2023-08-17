/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

    },
    boxShadow: {
      navbar: "0px 5px 10px 0px rgba(120, 120, 120, 0.1), 0 2px 3px -1px rgba(3, 3, 4, 0.05)",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1090px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1720px",
      "4xl": "1856px",
    },
  },
  plugins: [
    
  ],
}

