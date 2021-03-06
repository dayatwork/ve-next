module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        zIndex: {
          "-10": "-10",
          60: "60",
        },
        primary: {
          DEFAULT: "#00B4BF",
          50: "#A6FAFF",
          100: "#8CF8FF",
          200: "#59F5FF",
          300: "#26F3FF",
          400: "#00E4F2",
          500: "#00B4BF",
          600: "#00848C",
          700: "#005459",
          800: "#002426",
          900: "#000000",
          // 50: "#f1f7f7",
          // 100: "#d3f0f7",
          // 200: "#a1e4ee",
          // 300: "#69c8d6",
          // 400: "#30a7b8",
          // 500: "#238a99",
          // 600: "#1e717e",
          // 700: "#1b5662",
          // 800: "#153a47",
          // 900: "#0d2432",
        },
      },
      animation: {
        "pulse-full": "pulse-full 15s linear infinite",
      },
      keyframes: {
        // "pulse-full": {
        //   "25%, 60%": {
        //     opacity: 1,
        //   },
        //   "50%": {
        //     opacity: 0,
        //   },
        // },
        "pulse-full": {
          "0%, 10%": {
            transform: "translateX(-100%)",
          },
          "50%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
