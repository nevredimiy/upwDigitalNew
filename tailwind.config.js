/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/script.js/"],
  theme: {
    container: {
      center: true,
      padding: {
        md: '0.25rem',
        lg: '0.5rem',
        xl: '0.25rem',
        DEFAULT: '1.25rem',
      }
    },

    extend: {

      backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      },
      

      gridRow: {
        'span-8': 'span 8 / span 8',
        'span-11': 'span 11 / span 11',
      },

      lineHeight: {
        '1.0': '1.0',
        '1.1': '1.1',
        '1.2': '1.2',
        '1.3': '1.3',
        '1.4': '1.4',
        '1.5': '1.5',
        '1.6': '1.6',
        '24': '24px',

      },
      
      gridTemplateColumns: {
        '2col33': '1fr 2fr',
        '2col25': '1fr 3fr',
        '3col': '2fr 3fr 3fr',
        '3col123': '1fr 2fr 3fr'
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
      },
      
    },
  },
  plugins: [],
}
