/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: '20px',
      center: true,
    },
    screens: {
      'sm': {'max': '465px'}
    },
    extend: {
      colors: {
        grayText: '#CACACA',
        grayInput: '#3C3B3D',
        avtorColor: '#F89202',
        downloud: '#95390C',
        violet: '#95390C',
        reds: '#5328A1',
      },
      // backgroundImage: {
      //   'banner': "url('./src/img/banner.jpg')",
      // }
    },
  },
  plugins: [],
}
