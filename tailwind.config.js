/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'xs':'400px',
      'sm':'576px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1340px',
      '2xl':'1536px'
    },
    container:{
      padding:{
        DEFAULT: '14px',
        xl: '0',
      },
      center:true,
    },
    fontFamily:{
      Poppins:['Poppins', 'sans-serif'],
      Roboto:['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

