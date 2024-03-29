/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter", sans-serif',
          require("tailwindcss/defaultTheme").fontFamily.sans,
        ],

        mono: [
          '"JetBrains Mono", monospace',
          require("tailwindcss/defaultTheme").fontFamily.sans,
        ],
      },
    },
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    themes: ["cupcake", "night", "luxury", "white"],
  },
};
