/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom_green_100: "hsla(179, 53%, 96%, 1)",
        custom_green_600: "hsla(180, 29%, 50%, 1)",
        custom_green_900: "hsla(180, 14%, 20%, 1)",
        custom_grey_100: "hsla(180, 10%, 74%, 1)",
        custom_grey_300: "hsla(180, 8%, 52%, 1)",
      },
      width: {
        container: "66.375rem",
      },
      maxWidth: {
        container: "69.375rem",
      },
    },
  },
  plugins: [],
};
