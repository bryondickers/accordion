/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      orange: "hsl(var(--orange))",
      txtOrange: "hsl(var(--txt-orange))",
      pink: "hsl(var(--pink))",
      txtPink: "hsl(var(--txt-pink))",
      green: "hsl(var(--green))",
      txtGreen: "hsl(var(--txt-green))",
      purple: "hsl(var(--purple))",
      txtPurple: "hsl(var(--txt-purple))",
      black: "hsl(var(--black))",
    },
    extend: {},
  },
  plugins: [],
};
