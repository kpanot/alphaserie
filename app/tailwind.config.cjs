/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    '../node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],

  plugins: [require('flowbite/plugin')],

  darkMode: 'media',

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#f2f7fd',
          100: '#e5eef9',
          200: '#c4dcf3',
          300: '#91c0e8',
          400: '#56a0da',
          500: '#3b8dd0',
          600: '#2067a9',
          700: '#1b5389',
          800: '#1a4772',
          900: '#1b3d5f',
          950: '#12273f'
        }
      }
    }
  }
};


module.exports = config;
