import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            colors: {
                primary: {
                    100: '#F8F6E3',
                    200: '#97E7e1',
                    300: '#6AD4DD',
                    400: '#7AA2E3'
                }
            },
            fontFamily: {
                fredoka: ['Fredoka', 'sans-serif']
            }
        }
    },
    plugins: []
}
export default config
