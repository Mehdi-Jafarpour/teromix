   

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        color1: '#F7941D',
        color2: '#414143',
        color3: '#828186'
      },
      screens: {
        'xs': '480px',    // Extra small screens (custom size)
        'sm': '640px',    // Small screens
        'md': '768px',    // Medium screens
        'lg': '1024px',   // Large screens
        'xl': '1280px',   // Extra large screens
        '2xl': '1536px',  // 2x Extra large screens
      }
    },
  },
  plugins: [],
}
