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
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0048ff",

          "secondary": "#0082ff",

          "accent": "#00b600",

          "neutral": "#261722",

          "base-100": "#f4fbff",

          "info": "#0082a5",

          "success": "#6cfe00",

          "warning": "#cb6c00",

          "error": "#e10031",
        },
      },
      "cupcake"
    ],
  },
  plugins: [require("daisyui")],
}
export default config
