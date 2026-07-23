/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // add satoshi font
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "15%": { transform: "scale(1.7)", opacity: "0" },
          "100%": { transform: "scale(1.7)", opacity: "0" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        contactPulse: {
          "0%, 91%, 100%": { transform: "scale(1)" },
          "93%": { transform: "scale(1.06)" },
          "95%": { transform: "scale(1)" },
          "97%": { transform: "scale(1.04)" },
          "99%": { transform: "scale(1)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "pulse-ring": "pulseRing 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spinSlow 4s linear infinite",
        "contact-pulse": "contactPulse 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
