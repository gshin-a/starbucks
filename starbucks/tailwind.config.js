/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["Avenir", "Arial", "georgia"],
      },
      screens: {
        screen1: "961px",
        screen2: { min: "641px", max: "1120px" },
        screen3: { max: "1400px" },
        screen4: { max: "961px" },
        screen5: { min: "960px", max: "1340px" },
        screen6: { min: "960px", max: "1479px" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "100auto": "100% auto",
      },
      keyframes: {
        show: {
          from: { opacity: 0 },
          to: {
            opacity: 1,
          },
        },
        down: {
          from: {
            height: "1.5rem",
          },
          to: {
            height: 0,
          },
        },
        prevSlide: {
          from: {
            left: "-95.15625rem",
          },
          to: {
            left: "-43.34375rem",
          },
        },
        nextSlide: {
          from: {
            left: "-95.15625rem",
          },
          to: {
            left: "-146.96875rem",
          },
        },
      },
      animation: {
        show1: "show 500ms ease forwards",
        show2: "show 500ms ease 500ms forwards",
        show3: "show 500ms ease 1s forwards",
        show4: "show 500ms ease 1500ms forwards",
        show5: "show 500ms ease 2s forwards",
        down: "down 1000ms ease forwards",
        prevSlide: "prevSlide 500ms ease forwards",
        nextSlide: "nextSlide 500ms ease forwards",
      },
    },
  },
  plugins: [],
};
