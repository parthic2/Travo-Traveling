/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("./tailwind.workspace.preset.js")],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}