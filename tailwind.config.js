/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        coal: {
          DEFAULT: "#2E1C14",
          50: "#F6F1EC",
          100: "#E8DCD0",
          200: "#C9B29B",
          400: "#7A5B47",
          600: "#4A3226",
          800: "#2E1C14",
          900: "#1F130D",
        },
        ember: {
          DEFAULT: "#C5652B",
          50: "#FDF3EC",
          100: "#FAE4D2",
          300: "#E8A06B",
          500: "#C5652B",
          600: "#A84F20",
          700: "#8A3F19",
        },
        saffron: {
          DEFAULT: "#C79A3C",
          100: "#F2E6C8",
          300: "#DDBB6E",
          500: "#C79A3C",
          600: "#A87E2C",
        },
        linen: {
          DEFAULT: "#FBF7F1",
          100: "#FFFFFF",
          200: "#F5EFE5",
          300: "#EDE3D3",
        },
        ash: {
          500: "#8A8078",
          600: "#6B6259",
          700: "#4E473F",
        },
      },
      fontFamily: {
        sans: ["var(--font-tajawal)", "Tajawal", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 45px -20px rgba(46, 28, 20, 0.35)",
        card: "0 10px 30px -12px rgba(46, 28, 20, 0.18)",
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(46,28,20,0.06) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
