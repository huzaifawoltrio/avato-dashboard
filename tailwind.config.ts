import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        // AvatoAI Custom Colors
        heading: '#000000',
        body: '#0c0c0c',
        primary: {
          DEFAULT: '#ff6b35',
          50: '#fff4f0',
          100: '#ffe8e0',
          200: '#ffd0c1',
          300: '#ffb8a2',
          400: '#ff9f82',
          500: '#ff6b35',
          600: '#e55a2e',
          700: '#cc4826',
          800: '#b2371f',
          900: '#992517',
        },
        secondary: {
          DEFAULT: '#ffb84d',
          50: '#fffbf0',
          100: '#fff7e0',
          200: '#ffefc1',
          300: '#ffe7a2',
          400: '#ffdf82',
          500: '#ffb84d',
          600: '#e5a744',
          700: '#cc953b',
          800: '#b28432',
          900: '#997329',
        },
        gray: {
          DEFAULT: '#414141',
          50: '#f9f9f9',
          100: '#f3f3f3',
          200: '#e6e6e6',
          300: '#d9d9d9',
          400: '#cccccc',
          500: '#414141',
          600: '#3a3a3a',
          700: '#333333',
          800: '#2d2d2d',
          900: '#262626',
        },
        light: '#e6e6e6',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;