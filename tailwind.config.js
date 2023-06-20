/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      phone: "500px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1240px",
      mac: "1728px",
    },
    extend: {
      backgroundImage: {
        "dog-banner": "url('../public/banner.jpg')",
      },
      colors: {
        "light-white": "#FFFBF6",
        nude: "#F1CDAB",
        orange: "#F3B27A",
        blue: "#5779A7",
        purple: "#464F70",
        gray: "#9CACC1",
        "dark-color": "1F2332",
      },
    },
  },
  plugins: [],
};
