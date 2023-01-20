/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/script.js/"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1.25rem',
      }
    },

        extend: {
      
      gridTemplateColumns: {
        '2col': '1fr 3fr',
        '3col': '2fr 3fr 3fr',
      },
      
      gridTemplateRows: {
        'h-archive-rows': '1fr 1fr 1fr 3fr 3fr 3fr 3fr 3fr'
      },
      
      colors: {
        'base-black': '#171717',
        'base-white': '#F8F8F8',
        'base-red': '#FF304D',
        'base-gray': '#919191',
        'middle-gray': '#909090',
        'dark-gray': '#474747',
      },
           
      backgroundImage: {
        'gradient-radial': 'radial-gradient(#FF304D,#171717)',
      },
      
      backgroundImage: {
        'our-achievements': "url('/images/our_achievements_820.jpg')",
      },
      
      screens: {
        '2xl': '1650px'
      },

      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },

      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
