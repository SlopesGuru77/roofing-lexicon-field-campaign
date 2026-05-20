import type { Config } from 'tailwindcss';
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        newsprint: '#f5f1e8',
        'paper-dark': '#ebe5d3',
        'paper-line': '#d4cdb7',
        card: '#fbf8ef',
        redline: '#b91c1c',
        footnote: '#475569',
        citation: '#92400e',
        good: '#1f5d3a',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
} satisfies Config;
