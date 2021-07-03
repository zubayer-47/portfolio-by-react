module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      playFair: ["Playfair Display", "serif"],
      dancingScript: ["Dancing Script", "cursive"],
      josefinSlab: ["Josefin Slab", 'serif'],
    },
    extends: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
