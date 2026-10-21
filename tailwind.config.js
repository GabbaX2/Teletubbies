/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tubby-purple': '#7E22CE',
        'tubby-purple-light': '#A855F7',
        'tubby-green': '#65A30D',
        'tubby-green-light': '#84CC16',
        'tubby-yellow': '#EAB308',
        'tubby-yellow-light': '#FACC15',
        'tubby-red': '#DC2626',
        'tubby-red-light': '#EF4444',
        'tubby-blue': '#0284C7',
        'tubby-blue-light': '#38BDF8',
        'tubby-gold': '#F59E0B',
        'tubby-gold-light': '#FBBF24',
        'tubby-pink': '#EC4899',
        'tubby-custard': '#F472B6',
        'tubby-toast': '#D97706',
        'hill-bright': '#76C84D',
        'hill-deep': '#4FA828',
        'hill-shadow': '#387B1D',
        'sky-teletubby': '#38BDF8',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'sun-spin-slow': 'spin 30s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'wobble': 'wobble 0.8s ease-in-out',
        'crt-scan': 'scanlines 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { transform: 'scale(1)', filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.6))' },
          '50%': { transform: 'scale(1.05)', filter: 'drop-shadow(0 0 30px rgba(245, 158, 11, 0.9))' },
        },
        wobble: {
          '0%, 100%': { transform: 'translateX(0%)' },
          '15%': { transform: 'translateX(-6px) rotate(-4deg)' },
          '30%': { transform: 'translateX(5px) rotate(4deg)' },
          '45%': { transform: 'translateX(-3px) rotate(-2deg)' },
          '60%': { transform: 'translateX(2px) rotate(1deg)' },
          '75%': { transform: 'translateX(-1px) rotate(-0.5deg)' },
        },
        scanlines: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        }
      },
      fontFamily: {
        sans: ['"Fredoka"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      }
    },
  },
  plugins: [],
}
