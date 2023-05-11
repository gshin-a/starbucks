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
        screen5: { min: "961px", max: "1340px" },
        screen6: { min: "961px", max: "1479px" },
        screen7: { max: "1200px" },
        screen8: { max: "1500px" },
        screen9: { max: "1700px" },
        screen10: { max: "1120px" },
        screen11: { max: "1300px" },
        screen12: { max: "1400px" },
        screen13: { max: "1600px" },
        screen14: { max: "1800px" },
        screen15: { max: "1900px" },
        screen16: { min: "641px", max: "960px" },
        screen17: { max: "960px" },
        screen18: { max: "480px" },
        screen19: { min: "481px", max: "660px" },
        screen20: { min: "376px", max: "480px" },
        screen21: { max: "375px" },
        screen22: { min: "641px", max: "1020px" },
        screen23: { max: "640px" },
        screen24: { min: "961px", max: "1500px" },
        screen25: { min: "481px", max: "960px" },
        screen26: { min: "931px", max: "1120px" },
        screen27: { max: "930px" },
        screen28: { min: "930px", max: "980px" },
        screen29: { min: "980px", max: "1050px" },
        screen30: { min: "1050px", max: "1120px" },
        screen31: { min: "1120px", max: "1200px" },
        screen32: { min: "1201px", max: "1300px" },
        screen33: { min: "1301px", max: "1400px" },
        screen34: { min: "1401px", max: "1500px" },
        screen35: { min: "1501px", max: "1600px" },
        screen36: { min: "1601px", max: "1700px" },
        screen37: { min: "1701px", max: "1800px" },
        screen38: { min: "1801px", max: "1900px" },
        screen39: { min: "481px", max: "930px" },
        screen40: { min: "1101px", max: "1400px" },
        screen41: { min: "961px", max: "1100px" },
        screen42: { min: "381px", max: "480px" },
        screen43: { max: "380px" },
        screen44: { min: "481px", max: "640px" },
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
            left: "-146.96875rem",
          },
          to: {
            left: "-95.15625rem",
          },
        },
        prevSlide2: {
          from: {
            left: "-146.96875rem",
          },
          to: {
            left: "-43.34375rem",
          },
        },
        nextSlide: {
          from: {
            left: "-146.96875rem",
          },
          to: {
            left: "-198.78125rem",
          },
        },
        nextSlide2: {
          from: {
            left: "-146.96875rem",
          },
          to: {
            left: "-250.59375rem",
          },
        },
        prevSlideT: {
          from: {
            left: "-92.1875rem",
          },
          to: {
            left: "-60.3125rem",
          },
        },
        prevSlide2T: {
          from: {
            left: "-146.96875rem",
          },
          to: {
            left: "-28.4375rem",
          },
        },
        nextSlideT: {
          from: {
            left: "-92.1875rem",
          },
          to: {
            left: "-124.0625rem",
          },
        },
        nextSlide2T: {
          from: {
            left: "-92.1875rem",
          },
          to: {
            left: "-155.9375rem",
          },
        },
        prevSlideM: {
          from: {
            left: "-300vw",
          },
          to: {
            left: "-200vw",
          },
        },
        prevSlide2M: {
          from: {
            left: "-300vw",
          },
          to: {
            left: "-100vw",
          },
        },
        nextSlideM: {
          from: {
            left: "-300vw",
          },
          to: {
            left: "-400vw",
          },
        },
        nextSlide2M: {
          from: {
            left: "-300vw",
          },
          to: {
            left: "-500vw",
          },
        },
        showMainSlide: {
          from: {
            height: 0,
          },
          to: {
            height: "41.125rem",
          },
        },
        closeMainSlide: {
          from: {
            height: "41.125rem",
          },
          to: {
            height: 0,
          },
        },
        showMainSlideT: {
          from: {
            height: 0,
          },
          to: {
            height: "27.875rem",
          },
        },
        closeMainSlideT: {
          from: {
            height: "27.875rem",
          },
          to: {
            height: 0,
          },
        },
        showMainSlideM: {
          from: {
            height: 0,
          },
          to: {
            height: "23.125rem",
          },
        },
        closeMainSlideM: {
          from: {
            height: "23.125rem",
          },
          to: {
            height: 0,
          },
        },
      },
      animation: {
        show1: "show 500ms ease forwards",
        show2: "show 500ms ease 500ms forwards",
        show3: "show 500ms ease 1s forwards",
        show4: "show 500ms ease 1500ms forwards",
        show5: "show 500ms ease 2s forwards",
        show6: "show 500ms ease 2500ms forwards",
        down: "down 1000ms ease-in forwards",
        prevSlide: "prevSlide 300ms ease forwards",
        prevSlide2: "prevSlide2 300ms ease forwards",
        nextSlide: "nextSlide 300ms ease forwards",
        nextSlide2: "nextSlide2 300ms ease forwards",
        prevSlideT: "prevSlideT 300ms ease forwards",
        prevSlide2T: "prevSlide2T 300ms ease forwards",
        nextSlideT: "nextSlideT 300ms ease forwards",
        nextSlide2T: "nextSlide2T 300ms ease forwards",
        prevSlideM: "prevSlideM 300ms ease forwards",
        prevSlide2M: "prevSlide2M 300ms ease forwards",
        nextSlideM: "nextSlideM 300ms ease forwards",
        nextSlide2M: "nextSlide2M 300ms ease forwards",
        showMainSlide: "showMainSlide 500ms ease forwards",
        closeMainSlide: "closeMainSlide 500ms ease forwards",
        showMainSlideT: "showMainSlideT 500ms ease forwards",
        closeMainSlideT: "closeMainSlideT 500ms ease forwards",
        showMainSlideM: "showMainSlideM 500ms ease forwards",
        closeMainSlideM: "closeMainSlideM 500ms ease forwards",
      },
    },
  },
  plugins: [],
};
