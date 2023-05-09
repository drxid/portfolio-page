export const content = ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'];
export const darkMode = 'class';

export const theme = {
  fontSize: {
    xs: ['0.75rem', '1rem'],
    sm: ['0.875rem', '1rem'],
    base: ['1rem', '1.5rem'],
    lg: ['1.125rem', '1.75rem'],
    xl: ['1.25rem', '1.75rem'],
    '2xl': ['1.5rem', '2rem'],
    '3xl': ['1.875rem', '2.25rem'],
    '4xl': ['2.25rem', '2.5rem'],
    '5xl': ['3rem', '1'],
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  container: {
    center: true,
    padding: {
      DEFAULT: '1rem',
      sm: '1rem',
      lg: '1rem',
      xl: '1rem',
    },
  },
  extend: {
    colors: {
      gold: {
        50: '#FFEFDA',
        100: '#FEE2BD',
        200: '#FFDCAD',
        300: '#FFD58C',
        400: '#FFD180',
        500: '#FFC660',
        600: '#FFC050',
        700: '#FFBA40',
        800: '#FFB530',
        900: '#FFAF20',
        text: '#1E202B',
      },
    },
    animation: {
      'animate-bounce': 'bounce 1s infinite',
    },
  },
};
export const plugins = [];