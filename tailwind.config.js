  // tailwind.config.js
  module.exports = {
    purge: [],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
        colors:{
          first: '#553c9a',
          second: '#453476',
          bgColor:'#f7fafc'
        },
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }