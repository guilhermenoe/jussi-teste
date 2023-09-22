import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#03FFA5'
      },
      backgroundImage: {
        'logo': "url('/public/logojussi.png')",
        'Job-jussi': "url('https://i.imgur.com/u0y92g7.png')"
      },
    },
  },
  plugins: [],
}
export default config
