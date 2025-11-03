import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        surface: 'hsl(var(--surface))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
        },
        secondary: 'hsl(var(--secondary))',
        accent: 'hsl(var(--accent))',
        neutral: 'hsl(var(--neutral))',
      },
      borderRadius: {
        lg: '16px',
        md: '12px',
        sm: '10px',
      },
      boxShadow: {
        soft: '0 10px 30px -10px hsl(var(--neutral) / 0.15)',
        inset: 'inset 0 1px 0 0 hsl(var(--neutral) / 0.06)'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        logo: ['\'Tutano v2\'', 'var(--font-inter)', 'sans-serif']
      }
    },
  },
  plugins: [],
}
export default config
