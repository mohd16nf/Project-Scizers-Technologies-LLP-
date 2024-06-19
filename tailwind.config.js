module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Include if you have an `app` directory
  ],
  theme: {
    extend: {
      colors: {
        'navy-light': 'rgba(0, 0, 139, 0.75)',
      },
    },
  },
  plugins: [],
};
