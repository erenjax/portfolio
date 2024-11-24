/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['14px', '20px'],
      sm: ['16px', '24px'],
      base: ['24px', '40px'],
      md: ['32px', '48px'],
      md1: ['48px', '64px'],
      lg: ['64px', '72px']
    },
    extend: {
      borderRadius: {
        "sm": "16px",
        "md": "24px",
        "lg": "32px",
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
