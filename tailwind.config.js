/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#14569F",
      },
      screens: {
        squished: [{ min: "639px", max: "950px" }],
      },
    },
  },
  plugins: [require("daisyui")],
};
