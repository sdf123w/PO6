/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
      },
      colors: {
        golden: {
          50: '#FFFBF0',
          100: '#FFF8DC',
          200: '#FFEBCD',
          300: '#FFE4B5',
          400: '#FFD700',
          500: '#FFA500',
          600: '#FF8C00',
          700: '#FF6B35',
          800: '#E55A2B',
          900: '#CC4B24',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-golden': 'pulse-golden 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'golden': '0 10px 40px rgba(255, 215, 0, 0.3)',
        'golden-lg': '0 20px 60px rgba(255, 215, 0, 0.4)',
      },
    },
  },
  plugins: [],
}