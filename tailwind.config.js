module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    container: {
      center: true,
      padding: '1em',
    },

    fontFamily: {
      sans: ['Work Sans', 'Roboto', 'sans-serif', 'ui-sans-serif', 'system-ui'],
      serif: ['Avenir', 'Nunito', 'sans-serif', 'ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },

    extend: {
      backgroundOpacity: ['active'],

      colors: {
        primary: '#003654',
        secondary: '#29ABE2',
        accent: '#fffbdb',
      },
    },
  },
  variants: {},
  plugins: [],
}
