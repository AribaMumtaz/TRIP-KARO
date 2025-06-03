/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        volkhov: ['Volkhov', 'serif'], // Define custom font family
        'theme': '#10b982',

      },
      // colors: {
      //   transparent: 'transparent',
      //   current: 'currentColor',
      //   'white': '#ffffff',
      //   'purple': '#3f3cbb',
      //   'midnight': '#121063',
      //   'metal': '#565584',
      //   'tahiti': '#3ab7bf',
      //   'silver': '#ecebff',
      //   'bubble-gum': '#ff77e9',
      //   'bermuda': '#78dcca',
      //   'theme': '#10b982',

      // },
    },

  },
  plugins: [],
}

