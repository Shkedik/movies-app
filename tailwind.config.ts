import type { Config } from 'tailwindcss'
const { join } = require('path');

const config: Config = {
  content: [
    join(__dirname, './pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      sans: ['GolosTextWebRegular', 'GolosTextWebDemiBold', 'GolosTextWebBold', 'GolosTextWebBlack', 'GolosTextWebMedium' , 'sans-serif'],
      serif: ['serif'],
      mono: ['monospace'],
    },
  },
  plugins: [],
}
export default config
