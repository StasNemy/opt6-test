import color from "./constants/color";

const plugin = require("tailwindcss/plugin");

/** @type {NonNullable<NonNullable<import('tailwindcss').Config['theme']>['container']>} */
const container = {
  screens: {
    xl: "1162px",
  },
  center: true,
  padding: {
    DEFAULT: "1rem",
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: color.primary,
        dodger: color.dodgerBlue,
        charcoal: color.blueCharcoal,
        cobalt: color.cobalt,
      },
      white: {
        DEFAULT: color.white,
      },
      gray: {
        300: color.solitude,
        DEFAULT: color.gray,
        600: color.suvaGrey,
      },
      black: {
        300: color.mdHeading,
        DEFAULT: color.black,
      },
      error: {
        DEFAULT: color.error,
      },
    },
    fontSize: {
      h1: [
        "41px",
        {
          fontWeight: 600,
          lineHeight: "120%",
        },
      ],
      h2: [
        "34px",
        {
          fontWeight: 600,
          lineHeight: "120%",
        },
      ],
      h3: [
        "31px",
        {
          fontWeight: 600,
          lineHeight: "120%",
        },
      ],
      h5: [
        "18px",
        {
          fontWeight: 600,
          lineHeight: "120%",
        },
      ],
      p: [
        "18px",
        {
          lineHeight: "normal",
        },
      ],
      caption: [
        "13px",
        {
          fontWeight: 400,
          lineHeight: "120%",
        },
      ],
      "caption-2": [
        "15px",
        {
          lineHeight: "normal",
        },
      ],
      label: [
        "12px",
        {
          lineHeight: "120%",
        },
      ],
    },
    fontFamily: {},
    container,
    boxShadow: {
      slide: `0 0 20px 0 ${color.slideShadow}`,
    },
    extend: {
      spacing: {
        7.5: "1.875rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addComponents({
        ".btn": {
          borderRadius: "7px",
          padding: "9px 18px",
        },
      });
    }),
  ],
};
