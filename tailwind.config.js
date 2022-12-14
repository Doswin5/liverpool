// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: 'rgb(220, 7, 20)',
        onPrimary: 'rgb(255, 255, 255)',
        onPrimaryHover: 'rgba(255, 255, 255, 0.88)',
        primaryHover: 'rgba(46, 4, 6, 0.1)',
        tertiary: 'rgb(255, 56, 79)',
        onSecondary: 'rgb(12, 12, 12)',
        onSecondary2: 'rgb(12, 12, 12, 0.7)',
        onSecondaryHover: 'rgba(84, 84, 84, 0.5)',
      }
    },
  },
  plugins: [],
}

// 1. primary
// 2. onPrimary / secondary
// 3. onPrimaryHover
// 4. primaryHover
// 5. tertiary / rule
// 6. onSecondary
// 7. onSecondaryHover

