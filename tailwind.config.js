/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        poppins:["poppins","sans-serif"]
      },
      borderRadius:{
        'tl-13':'13px',
        'br-24':'24px',
      }
    },
  },
  plugins: [],
}