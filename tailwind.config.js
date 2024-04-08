/** @type {import(tailwindcss).Config} */ module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryLightCyan: 'hsl(193, 38%, 86%)',
        PrimaryNeonGreen: 'hsl(150, 100%, 66%)',
        NeutralGrayishBlue: 'hsl(217, 19%, 38%)',
        NeutralDarkGrayishBlue: 'hsl(217, 19%, 24%)',
        NeutralDarkBlue: 'hsl(218, 23%, 16%)',
      },
    }
  },
  plugins: [],
};
