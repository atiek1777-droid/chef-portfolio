/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary — Warm Ember Orange
        amber: {
          50: "#FEF3E2",
          100: "#FDE8CC",
          200: "#FBD699",
          300: "#F9C566",
          400: "#F7B433",
          500: "#D97706",
          600: "#BC5E05",
          700: "#9F4A04",
          800: "#823603",
          900: "#652102",
        },
        // Secondary — Golden Accent
        yellow: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        // Backgrounds — Warm Ivory
        cream: {
          DEFAULT: "#FFF8F0",
          50: "#FFFDF8",
          100: "#FFFFF0",
          200: "#FFF9E6",
          300: "#FFF1D3",
        },
        // Dark Warm Brown
        brown: {
          50: "#FAF4ED",
          100: "#F5E8DC",
          200: "#EBD1B8",
          300: "#E0BA95",
          400: "#D6A372",
          500: "#C27D1A",
          600: "#1A0F0A",
          700: "#1F1206",
          800: "#2B1810",
          900: "#1A0F0A",
        },
        // Text & Borders
        warmgray: {
          50: "#F9F5F0",
          100: "#F3EBE1",
          200: "#E8D5B7",
          300: "#D4B896",
          400: "#C09A75",
          500: "#6B4A2E",
          600: "#4A3728",
          700: "#3D2E22",
          800: "#30251C",
          900: "#1F1206",
        },
      },
      fontFamily: {
        sans: ["var(--font-tajawal)", "Tajawal", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 45px -22px rgba(217, 119, 6, 0.25)",
        card: "0 10px 28px -14px rgba(31, 18, 6, 0.12)",
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(217,119,6,0.05) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
