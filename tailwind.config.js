/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btn: "hsl(223, 87%, 63%)",
        btnHover: "hsl(223, 100%, 88%)",
        error: "hsl(354, 100%, 66%)",
        text: "hsl(0, 0%, 59%)",
        spanText: "hsl(209, 33%, 12%)",
      },
      fontFamily: {
        default: '"Libre Franklin", sans-serif',
      },
    },
  },
  plugins: [],
};
