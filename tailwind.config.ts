import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'primary': '#007bff', // Example: a blue primary color
        'primary-foreground': `rgb(var(--foreground-rgb))`
      },
      textColor: {
        'primary-foreground': `#FFFFFF`,
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
