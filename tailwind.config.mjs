/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF7EB',
        ink: '#111111',
        orange: '#FF4D00',
        blue: '#1B1BFF',
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        hard: '6px 6px 0 #111111',
        'hard-sm': '4px 4px 0 #111111',
      },
    },
  },
  plugins: [],
};
