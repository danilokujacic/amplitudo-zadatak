/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        border: "var(--border)",
        ltgray: "var(--ltgray)",
        tableHover: "var(--table-hover)",
        selectText: "var(--select-data)",
      },
    },
  },
  plugins: [],
};
