/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      xxs: "360px",
      xs: "480px",
      "mid-sm": "615px",
      sm: "768px",
      lg: "1200px",
      xlg: "1440px",

      "c-400": "400px",
    },

    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
