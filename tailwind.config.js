/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: "Manrope",
        geo: "Gilroy GEO Heavy",
        nino: "BPG Nino Mtavruli Bold",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/FRAME.PNG')",
        expertContainerBackground: "url('./images/background.png')",
        rectangleBackground: "url('./images/Rectangle-background.png')",
        footerBackgroundImage: "url('./images/footer-background.png')",
      },
      backgroundColor: {
        backColor: "var(--glass, rgba(233, 235, 239, 0.80))",
        inputBackground: "rgba(123, 199, 208, 0.50)",
        footerBackground:
          "var(--g, linear-gradient(90deg, #2662D6 0%, #3DB8B1 100%))",
      },
    },
  },
  plugins: [],
};
