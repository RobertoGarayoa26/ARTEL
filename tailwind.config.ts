import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Identidad ARTEL
        ink: {
          DEFAULT: '#0B0E14', // fondo casi negro azulado
          900: '#0B0E14',
          800: '#11151F',
          700: '#161C29',
          600: '#1E2636',
        },
        steel: {
          400: '#8A94A6',
          300: '#AEB6C4',
          200: '#CBD2DD',
        },
        artel: {
          green: '#1F9E57', // verde del logo (AR)
          'green-600': '#16824A',
          'green-400': '#33C878',
          blue: '#1C50A8', // azul del logo (TEL)
          'blue-600': '#123B82',
          'blue-400': '#3E7BD6',
          cyan: '#31D9B4',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space)', 'var(--font-inter)', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(31,158,87,0.5)' },
          '70%': { boxShadow: '0 0 0 16px rgba(31,158,87,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(31,158,87,0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'pulse-ring': 'pulse-ring 2.4s infinite',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;
