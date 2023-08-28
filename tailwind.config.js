/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       margin: {
        'custom-left': '250px',
        'custom-top': '100px',
      },
      colors:{
        customBlue: '#0582ca',
      },
      maxWidth: {
        'xs': '20rem',
        'sm': '24rem',
        'md': '25rem', // Adjust this value to your desired width
        'lg': '32rem',
        'xl': '36rem',
        '2xl': '42rem',
      },
    },
  },
  plugins: [],
}

