/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── LIGHT THEME PALETTE ──
        // Primary backgrounds
        'surface':      '#FFFFFF',
        'surface-alt':  '#F7F8FA',
        'surface-card': '#FFFFFF',

        // Text colors
        'ink':          '#1A1A2E',
        'ink-light':    '#4A4A6A',
        'ink-muted':    '#8888A0',

        // Brand accent (royal blue + gold)
        royal: {
          DEFAULT:    '#2D3A8C',
          light:      '#4A5BC7',
          dark:       '#1E2761',
          50:         '#EEF0FF',
          100:        '#D9DEFF',
        },
        accent: {
          DEFAULT:    '#C9A84C',
          light:      '#E8C96A',
          dark:       '#7A5E22',
        },

        // Borders / dividers
        'border-light': '#E8E8F0',
        'border-mid':   '#D0D0DE',

        // Legacy token overrides (so old classes don't break during migration)
        obsidian:         '#FFFFFF',
        'dark':           '#F7F8FA',
        'dark-2':         '#F0F1F5',
        'dark-3':         '#E8E8F0',
        'dark-4':         '#D0D0DE',
        ivory: {
          DEFAULT:        '#1A1A2E',
          dim:            '#4A4A6A',
        },
        gold: {
          DEFAULT:        '#2D3A8C',
          light:          '#4A5BC7',
          dim:            '#1E2761',
        },
        'background-dark':  '#FFFFFF',
        'background-dull':  '#F0F1F5',
        'blue-lighter':     '#2D3A8C',
        'neutral-lighter':  '#E8E8F0',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        poppins:  ['"DM Sans"', 'system-ui', 'sans-serif'],
        sans:     ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #4A5BC7, #2D3A8C)',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(45,58,140,0.08)' },
          '50%':      { boxShadow: '0 0 40px rgba(45,58,140,0.15)' },
        },
      },
      boxShadow: {
        'card':     '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)',
        'card-lg':  '0 4px 24px rgba(0,0,0,0.08)',
        'brand-sm': '0 4px 16px rgba(45,58,140,0.12)',
        'brand-md': '0 8px 24px rgba(45,58,140,0.18)',
        'brand-lg': '0 12px 40px rgba(45,58,140,0.25)',
        // Legacy
        'gold-sm':  '0 4px 16px rgba(45,58,140,0.12)',
        'gold-md':  '0 8px 24px rgba(45,58,140,0.18)',
        'gold-lg':  '0 12px 40px rgba(45,58,140,0.25)',
      },
    },
  },
  plugins: [],
}