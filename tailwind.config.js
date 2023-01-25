module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        't-black': "#333333",
        't-orange': "#feb358",
        't-blue': "#3c78e0",
        't-teal': "#50bec1",
      }
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
