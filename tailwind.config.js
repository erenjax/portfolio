/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ['16px', '24px'],
      base: ['24px', '32px'],
      md: ['32px', '40px'],
      lg: ['64px', '72px']
    },
    extend: {
      borderRadius: {
        "xl": "64px",
      },
      colors: {
        customBlack: "#080708",
        customWhite: "#F8EFEB",
        accent: {
          blue: "#3B60E4",
          purple: {
            light: "#7765E3",
            dark: "#4C1945",
          }
        },
      }
    },
  },
  plugins: [],
}
