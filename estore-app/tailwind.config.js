/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        estore: ['estore-font','sans']
      }
    },
  },
  plugins: [ function ({ addBase }) {
    addBase({
      body: { fontFamily: 'estore-font' }, // Apply the 'sans' font family to the body
    });
  },],
}

