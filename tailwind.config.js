/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        alefba_pattern: "url('/src/assets/Alefba.svg)",
      },
      colors: {
        blue: "#118AD3",
        green: "#00BA9F",
        red: "#FF1654"
      },
      fontFamily :{
        iranYekan: ["iranYekan","sans-serif"],
        iranSans: ["iranSans","sans-serif"],
      }
    },
  },
  plugins: [],
};
