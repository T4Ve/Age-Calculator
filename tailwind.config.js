/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Poppins','sans-serif'],
      },
      colors:{
        DarkCyan: 'hsl(158, 36%, 37%)',
        Purple: 'hsl(259, 100%, 65%)',
        LightRed: 'hsl(0, 100%, 67%)',
        White: 'hsl(0, 0%, 100%)',
        OffWhite: 'hsl(0, 0%, 94%)',
        LightGrey: 'hsl(0, 0%, 86%)',
        SmokeyGrey: 'hsl(0, 1%, 44%)',
        OffBlack: 'hsl(0, 0%, 8%)'

      }
    },
  },
  plugins: [],
}
