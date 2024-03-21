/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      fontFamily: {
        rightGrotesk: ["var(--right-grotesk)", "sans-serif"],
        messinaSansMono: ["var(--messina-sans-mono)", "sans-serif"],
        biroScriptUSPlus: ["var(--biro-script-plus)", "sans-serif"],
      },
      gap: {
        px: "1px",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "2.5rem",
        // Другие значения промежутков
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customWhite: "#ffffff",
      },
      fontSize: {
        "1xl": "12px",
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "40px",
        "5xl": "80px",
        "6xl": "160px",
      },
      lineHeight: {
        tini: "1",
        tight: "1.2",
        normal: "1.5",
        relaxed: "1.75",
        loose: "2",
      },
    },
  },
  plugins: [],
};
