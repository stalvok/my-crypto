module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '480px'
    },
    extend: {
      boxShadow: {
        panel: '0px 20px 60px rgba(55, 62, 125, 0.05)',
        button: '0px 20px 30px rgba(25, 28, 50, 0.1)'
      },
      textColor: {
        panel: '#9395A4'
      },
      backgroundColor: {
        panel: 'rgba(255, 255, 255, 0.8)',
        panelMarket: 'rgba(255, 255, 255, 0.4)'
      }
    },
  },
  plugins: [],
}