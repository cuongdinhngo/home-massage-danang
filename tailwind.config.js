/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue", 
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#101828',
      },
      fontFamily: {
        'lora': ['Lora', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}