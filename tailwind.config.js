module.exports = {
  content: ["./pages/**/*.{html,js}"],
  theme: {
    extend: {
      maxHeight: {
        600: "600px",
      },
      colors: {
        primary: "#0E1414",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        xl: "3rem",
        "2xl": "5rem",
      },
    },
    variants: {},
    plugins: [],
  },
};
