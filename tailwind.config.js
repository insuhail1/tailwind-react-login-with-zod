/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-down": "slide-down 300ms ease-in-out",
        "slide-up": "slide-up 300ms ease-in-out",
      },
      keyframes: {
        "slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      colors: {
        backgroundPrimary: "rgb(0, 0, 0)",
        backgroundSecondary: "rgb(39, 41, 45)",
        primaryButton: "rgba(74, 150, 255, 1)",

        textPrimary: "rgba(255, 255, 255, 1)",
        textSecondary: "rgba(197, 199, 202, 1)",
        textTertiary: "rgba(107, 108, 112, 1)",

        borderPrimary: "rgba(127, 128, 132, 1)",
      },
    },
  },
  plugins: [],
};
