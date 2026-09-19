/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary — #5400DE
        royal: {
          50: "#F2E9FF",
          100: "#E2CFFC",
          300: "#B27CF2",
          500: "#7A2FE0",
          600: "#5400DE",
          700: "#43009F",
          900: "#26025B",
        },
        // Secondary — #9E2A2B
        crimson: {
          50: "#FBEDED",
          100: "#F3D2D2",
          300: "#C56A6A",
          500: "#9E2A2B",
          600: "#822122",
        },
        // Accent / CTA — #E09F3E
        gold: {
          50: "#FDF4E4",
          100: "#FAE6C2",
          300: "#EEC077",
          500: "#E09F3E",
          600: "#C1822A",
        },
        // Borders / muted text — #B1A7A6
        stone: {
          100: "#F1EDEB",
          200: "#E3DCD9",
          400: "#B1A7A6",
          500: "#8F8483",
        },
        // Background — #FFF8F0
        cream: {
          DEFAULT: "#FFF8F0",
          100: "#FFFFFF",
          200: "#FCF1E4",
        },
        // Readable dark neutral, tuned to sit with the purple/crimson family
        ink: {
          700: "#3D3541",
          900: "#241129",
        },
      },
      fontFamily: {
        sans: ["var(--font-tajawal)", "Tajawal", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 45px -22px rgba(84, 0, 222, 0.28)",
        card: "0 10px 28px -14px rgba(36, 17, 41, 0.16)",
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(84,0,222,0.05) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
