/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian:     '#0A0A0B',
        'dark':       '#111114',
        'dark-2':     '#18181C',
        'dark-3':     '#222228',
        'dark-4':     '#2C2C34',
        ivory: {
          DEFAULT:    '#F0EAD6',
          dim:        '#B8B09A',
        },
        gold: {
          DEFAULT:    '#C9A84C',
          light:      '#E8C96A',
          dim:        '#7A5E22',
        },
        // keep legacy names so old code doesn't break
        'background-dark':  '#111114',
        'background-dull':  '#222228',
        'blue-lighter':     '#C9A84C',  // remapped to gold
        'neutral-lighter':  '#2C2C34',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        poppins:  ['"DM Sans"', 'system-ui', 'sans-serif'],
        sans:     ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E8C96A, #C9A84C)',
      },
      animation: {
        'fade-up':   'fadeUp 0.65s ease both',
        'float':     'floatPiece 3s ease-in-out infinite',
        'glow':      'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        floatPiece: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,168,76,0.1)' },
          '50%':      { boxShadow: '0 0 40px rgba(201,168,76,0.25)' },
        },
      },
      boxShadow: {
        'gold-sm':  '0 4px 16px rgba(201,168,76,0.15)',
        'gold-md':  '0 8px 24px rgba(201,168,76,0.25)',
        'gold-lg':  '0 12px 40px rgba(201,168,76,0.35)',
      },
    },
  },
  plugins: [],
}