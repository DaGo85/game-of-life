module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        50: `repeat(50 , minmax(0, 1fr))`,

        // Complex site-specific row configuration
        layout: "20px minmax(20px, 1fr) 20px",
      },
    },
  },
  plugins: [],
};
