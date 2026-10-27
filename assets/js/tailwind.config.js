// Shared Tailwind (CDN) theme. Colours come from the Gilgal logo: navy wordmark, cyan gear;
// "flare" is the safety-orange accent used for calls to action.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0A0E2E',
          900: '#11164A',
          800: '#1A2063',
          700: '#262C7C',
          600: '#3E4095',
          100: '#E6E8F5',
        },
        cyan: {
          500: '#1BA3DC',
          400: '#4CBBE9',
          100: '#E2F3FB',
        },
        flare: {
          700: '#A8370A',
          600: '#C2410C',
          500: '#E8590C',
          100: '#FDEBDD',
        },
        steel: {
          50: '#F4F6F9',
          100: '#EBEEF3',
          200: '#DCE1E9',
          300: '#C0C7D4',
          400: '#8C95A8',
          500: '#5D667D',
          600: '#465068',
          700: '#2F3850',
          900: '#151B2E',
        },
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        site: '80rem',
      },
    },
  },
};
