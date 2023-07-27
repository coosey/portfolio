module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
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
        nav: '#858994',
      },
      fontFamily: {
        pd: ['Playfair Display'],
        nav: ['Abril Fatface'],
        roboto: ['Roboto', 'Space Mono'],
        jet: ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}