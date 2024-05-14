/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        text: "#000000",
        background: "#eff0f0",
        "background-darker": "#E3E4E4",
        primary: "#58e9c7",
        "primary-op": "rgba(88, 233, 199, 0.7)",
        "primary-hover": "rgba(88, 233, 199, 0.85)",
        secondary: "#66998d",
        "secondary-op": "rgba(102, 153, 141, 0.65)",
        accent: "#26e3b7",
        "text-dark": "#ffffff",
        "background-dark": "#0f1010",
        "primary-dark": "#16a785",
        "secondary-dark": "#66998d",
        "accent-dark": "#1cd9ad",
      },
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        heading: "Montserrat",
        body: "Montserrat",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
    },
  },
  plugins: [],
};
