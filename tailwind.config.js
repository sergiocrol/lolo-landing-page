module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  // purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        blue: '#2D2D5B',
        orange: '#FF8B81',
        gray: '#84837E',
        lightGray: '#bcbaba',
        yellow: '#FCF6E8',
        violet: '#89879D',
        transparentWhite: '#FFFFFF66',
        blue1: '#404095',
        blue2: 'linear-gradient(#e66465, #9198e5)',
        blueSignup: '#7DB4E7',
        blueDarkSignup: '#375672',
        redSignup: '#FAC1AE',
        redDarkSignup: '#6B4748'
      },
      fontFamily: {
        sans: ['Lato', 'Sans-serif'],
        montserrat: ['Montserrat', 'Sans-serif'],
      },
      fontSize: {
        13: '0.8125rem',
        14: '0.875rem',
        15: '0.9376rem',
        17: '1.0625rem',
        20: '1.25rem',
        22: '1.375rem',
        24: '1.5rem',
        26: '1.625rem',
        30: '1.875rem',
        32: '2rem',
        36: '2.3rem',
        40: '2.5rem',
        42: '2.625rem',
        50: '3.125rem',
        55: '3.4375rem',
        60: '3.75rem',
        70: '4.375rem',
      },
      container: {
        center: true,
      },
      opacity: {
        70: '0.70',
        90: '0.90',
      },
      borderRadius: {
        10: '0.625rem',
        40: '2.5rem',
      },
      width: {
        73: '73%',
        17: '17rem',
        60: '60rem'
      },
      maxWidth: {
        8: '8rem',
        13: '13rem',
        12: '12rem',
        15: '15rem',
        17: '17rem',
        21: '21rem',
        22: '22rem',
        23: '23rem',
        24: '24rem',
        26: '26rem',
        27: '27rem',
        29: '29rem',
        30: '30.6rem',
        32: '32rem',
        35: '35rem',
        36: '36rem',
        40: '40rem',
        52: '52rem',
        53: '53rem',
      },
      minWidth: {
        14: '14rem',
        21: '21rem',
        24: '24rem',
        29: '29rem',
      },
      maxHeight: {
        10: '10rem',
        15: '15rem',
        19: '19rem',
        21: '21rem',
        29: '29rem',
        32: '32rem',
        35: '35rem',
        36: '36rem',
        40: '40rem',
        53: '53rem',
      },
      minHeight: {
        15: '15rem',
        19: '19rem',
        21: '21rem',
        32: '32rem',
        34: '34rem',
      },
      margin: {
        7: '1.75rem'
      },
      height: {
        90: '90%',
        80: '80%',
      },
      inset: {
        '1/2': '50%'
      }
    },
  },
  variants: {
    opacity: ({ after }) => after(['disabled']),
    cursor: ({ after }) => after(['disabled']),
    backgroundColor: ({ after }) => after(['even']),
  },
  plugins: [],
};
