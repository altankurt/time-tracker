/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx}",
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',  
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      
      colors: {
        primary: "#C63D2F",
        secondary: "#E25E3E",
        neutral: "#EAC696",
        dark: "#393E46",
        light: "#F2F4FB",
        
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")],
};
