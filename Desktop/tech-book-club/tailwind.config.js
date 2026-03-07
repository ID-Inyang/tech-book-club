export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      martian: ['Martian Mono', 'monospace'],
    },
    extend: {
      backgroundImage: {
        'gradient-107': 'linear-gradient(107deg, #FF9A60 11.37%, #062630 61.84%)',
      },
    },
  },
  plugins: [],
}
