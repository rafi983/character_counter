/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        counter: {
          'neutral-900': 'hsl(233, 18%, 9%)',
          'neutral-800': 'hsl(235, 14%, 15%)',
          'neutral-700': 'hsl(235, 13%, 19%)',
          'neutral-600': 'hsl(234, 14%, 29%)',
          'neutral-500': 'hsl(240, 26%, 92%)',
          'neutral-400': 'hsl(240, 24%, 96%)',
          'purple-400': 'hsl(274, 90%, 80%)',
          'purple-300': 'hsl(274, 90%, 73%)',
          'yellow-500': 'hsl(37, 100%, 50%)',
          'orange-500': 'hsl(15, 99%, 67%)'
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))'
        }
      },
      backgroundImage: {
        'theme-dark': `url('/assets/bg-dark-theme.png')`,
        'theme-light': `url('/assets/bg-light-theme.png')`,
        'pattern-character': `url('/assets/pattern-character-count.svg')`,
        'pattern-word-count': `url('/assets/pattern-word-count.svg')`,
        'pattern-sentence-count': `url('/assets/pattern-sentence-count.svg')`
      },
      fontSize: {
        'Heading-64': [
          '64px',
          {
            lineHeight: '100%',
            letterSpacing: '-1px'
          }
        ],
        'Heading-40': [
          '40px',
          {
            lineHeight: '100%',
            letterSpacing: '-1px'
          }
        ],
        'Heading-24': [
          '24px',
          {
            lineHeight: '150%',
            letterSpacing: '-1px'
          }
        ],
        'Regular-20': [
          '20px',
          {
            lineHeight: '130%',
            letterSpacing: '-0.6px'
          }
        ],
        'Regular-16': [
          '16px',
          {
            lineHeight: '130%',
            letterSpacing: '-0.6px'
          }
        ]
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
