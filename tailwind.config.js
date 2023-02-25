/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./build/*.html", "./build/js/script.js/"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',       
        md: '0.25rem',
        lg: '1rem',
       xl: '1.25rem',
      }
    },

    extend: {

      screens: {
        'xl': '1320px',
        '2xl': '1690px'
      },

      spacing: {
        'fluid-1': 'clamp(1.31rem, calc(0.65rem + 3.29vw), 3.00rem)',
        'fluid-2': 'clamp(1.31rem, calc(0.07rem + 6.22vw), 4.50rem)',
        '13': '3.25rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '23': '5.75rem',
        '26': '6.5rem',
        '30': '7.5rem'
    },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(50% 50% at 50% 50%, #FF304D 0%, rgba(255, 48, 77, 0) 100%, var(--tw-gradient-stops))',
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
        'light-gray': '#E0E0E0',
        'base-gray': '#919191',
        'middle-gray': '#909090',
        'dark-gray': '#474747',
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
