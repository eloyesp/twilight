module.exports = {
    content: ['./**/*.liquid', './src/**/*.{tsx,ts,jsx,js}', './assets/*.{tsx,ts,jsx,js}'],
    theme: {
      extend: {
        colors: {
          primary: '#27282B',
          accent: '#E3672A'
        },
        animation: {
          spinAround: 'spinAround 500ms infinite linear',
          fadeIn: 'fadeIn 250ms ease-in',
        },
        keyframes: {
          spinAround: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(359deg)' },
          },
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
        },
        spacing: {
          'full': '100%',
        },
        transitionProperty: {
          'width': 'width',
        }
      },
    },
    extend: {
      borderRadius: {
        '3': '0.1875rem',
        '4xl': '1.875rem',
      }
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
    ],
  }
