/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      '2xl': { max: '1535px' }, // Desktop
      xl: { max: '1279px' }, // Laptop
      lg: { max: '1023px' }, // Landscape Tablet
      md: { max: '767px' }, // Tablet
      sm: { max: '639px' }, // Landscape Mobile
      xs: { min: '0px' }, // Mobile
    },
    extend: {
      colors: {
        white: {
          1: '#fff',
          2: '#f7f7f7',
          3: '#fefaf3',
        },
        red: {
          1: '#f00',
          2: '#f34f3f',
        },
        icn: {
          1: '#757575',
        },
        bd: {
          1: '#ccc',
          2: '#eee',
        },
        txt: {
          1: '#000',
          2: '#aaa',
          3: '#888',
          4: '#ccc',
          5: '#fff',
        },
      },
      transitionDuration: {
        2: '0.2s',
      },
      borderRadius: {
        2: '0.2rem',
        5: '0.5rem',
        10: '1rem',
        20: '2rem',
        rounded: '50%',
      },
      spacing: {
        10: '1rem',
        15: '1.5rem',
        20: '2rem',
        25: '2.5rem',
        30: '3rem',
        35: '3.5rem',
        40: '4rem',
        50: '5rem',
        80: '8rem',
        100: '10rem',
        150: '15rem',
        200: '20rem',
        250: '25rem',
      },
      maxWidth: {
        '3xl': '1536px',
        '2xl': '1280px',
        xl: '1024px',
        lg: '768px',
        md: '640px',
        sm: '100%',
      },
      fontSize: {
        10: '1rem',
        12: '1.2rem',
        14: '1.4rem',
        15: '1.5rem',
        16: '1.6rem',
        18: '1.8rem',
        20: '2rem',
        22: '2.2rem',
        25: '2.5rem',
        28: '2.8rem',
        30: '3rem',
        35: '3.5rem',
        40: '4rem',
      },
      fontFamily: {
        dancingScript: ['Dancing Script', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
        sourceSerifPro: ['Source Serif Pro', 'serif'],
      },
    },
  },
  plugins: [],
};
