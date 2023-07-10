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
      fontFamily: {
        serif: ["var(--font-dmSerif)"],
      },
      backgroundImage: {
        banner: "url('../public/images/cat_and_dog.jpg')",
        deal1: "url('../public/images/Deal1.png')",
        deal2: "url('../public/images/Deal2.png')",
        specialBuilds: "url('../public/images/special_builds.png')",
        nextButton: "url('../public/assets/Arrow right.svg')",
        prevButton: "url('../public/assets/Arrow left.svg')",
      },
      listStyleImage: {
        dot: "url('../public/assets/yellow-dot.png')",
      },
      colors: {
        "light-white": "#FFFBF6",
        nude: "#F1CDAB",
        orange: "#F3B27A",
        blue: "#5779A7",
        purple: "#464F70",
        gray: "#9CACC1",
        grey: "#767676",
        "dark-color": "1F2332",
      },
    },
  },
  plugins: [],
};
