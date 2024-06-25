import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      montserrat: 'var(--montserrat-font)',
    },
    extend: {
      colors: {
        basic: {
          black: '#000000',
          white: '#FFFFFF',
        },
        blue: {
          100: '#E8EFFB',
          200: '#C6D8F4',
          300: '#A3B9DC',
          400: '#394E6E',
          500: '#2E4465',
          600: '#1B3050',
          700: '#182B49',
          800: '#1D3D6C'
        },
        gold: {
          100: '#F7F4F1',
          200: '#DFD2C7',
          300: '#CFBBAA',
          400: '#BFA58E',
          500: '#AF8E72',
          600: '#8C725B',
          700: '#695544',
        },
        gray: {
          100: '#F6F7FA',
          200: '#E6ECF0',
          300: '#E4E7EC',
          400: '#CACFD8',
          500: '#9399A4',
          600: '#777C85',
          700: '#5B5F66',
        },
        turquoise: {
          500: '#00B0B5',
        },
        functional: {
          blue: '#3F78F3',
          red: '#DB2C3E',
          brown: '#E7B901',
          green: '#22AA48',
        },
      },
    },
  },
  plugins: [],
};

export default config;
