const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        loader: 'loader 0.6s infinite alternate'
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.1,
            transform: 'translate3d(0, -1rem, 0)'
          }
        }
      },
      screens: {
        'sm': {'min': '640px'},
        'md': {'min': '768px'},
        'lg': {'min': '1024px'},
        'xl': {'min': '1280px'},
        '2xl': {'min': '1536px'},
      },
      colors: {
        primary: '#393D47',
        secondary: '#777f92',
      },
      fontFamily: {
        satoshi: ['Satoshi'],
        roboto: ['Roboto', 'sans-seri'],
        rale: ['Raleway', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
      const isFirefoxRule = postcss.atRule({
        name: '-moz-document',
        params: 'url-prefix()',
      });
      isFirefoxRule.append(container.nodes);
      container.append(isFirefoxRule);
      isFirefoxRule.walkRules((rule) => {
        rule.selector = `.${e(
        `firefox${separator}${rule.selector.slice(1)}`
        )}`;
      });
      });
    }),
  ],
}