/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,jsx,md,mdx}',
    './components/**/*.{js,jsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        'primary-light': 'hsl(var(--primary-light))',
        'primary-dark': 'hsl(var(--primary-dark))',
        secondary: 'hsl(var(--secondary))',
        'secondary-dark': 'hsl(var(--secondary-dark))',
        accent: 'hsl(var(--accent))',
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
        error: 'hsl(var(--error))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: 'hsl(var(--card))',
        'card-foreground': 'hsl(var(--card-foreground))',
        popover: 'hsl(var(--popover))',
        'popover-foreground': 'hsl(var(--popover-foreground))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: [
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        'hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};