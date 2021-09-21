module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "#F7F8FA",
        primary: {
          // https://maketintsandshades.com/#28ABBE
          DEFAULT: "#28abbe",
          50: "#eaf7f9",
          100: "#d4eef2",
          200: "#a9dde5",
          300: "#7ecdd8",
          400: "#53bccb",
          500: "#28abbe",
          600: "#249aab",
          700: "#208998",
          800: "#1c7885",
          900: "#186772",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
