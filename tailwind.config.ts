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
        // Identidad ARTEL — superficies claras (tema light)
        ink: {
          DEFAULT: '#FFFFFF', // fondo de página
          900: '#FFFFFF',
          800: '#F6F7F9', // tarjetas / superficie ligeramente marcada
          700: '#F0F2F5', // bandas alternas de sección
          600: '#E4E8EE', // superficie más marcada / hover
        },
        // Reservado para las franjas hero con foto (scrim oscuro intencional)
        noir: {
          DEFAULT: '#0B0E14',
        },
        steel: {
          200: '#12161F', // texto primario / énfasis (casi negro)
          300: '#4B5565', // texto secundario
          400: '#6B7280', // etiquetas / texto terciario
          500: '#94A0B2', // texto más tenue (disclaimers, captions)
        },
        artel: {
          green: '#1F9E57', // verde del logo (AR)
          'green-600': '#16824A',
          'green-400': '#33C878',
          blue: '#1C50A8', // azul del logo (TEL)
          'blue-600': '#123B82',
          'blue-400': '#3E7BD6',
          cyan: '#31D9B4',
          electric: '#2B6EFF', // azul eléctrico — acento de máximo impacto
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
        // Degradado de marca (azul → cian). El verde queda reservado para WhatsApp.
        'brand-gradient': 'linear-gradient(135deg, #1C50A8 0%, #2E8FD9 55%, #31D9B4 100%)',
        // Cian multi-tono (estilo blexxon) para elementos de máximo impacto.
        'cyan-gradient': 'linear-gradient(135deg, #5EEAD4 0%, #31D9B4 45%, #0EA5B8 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
