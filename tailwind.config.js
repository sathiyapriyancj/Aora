/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"], // Scan these files for Tailwind classes
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
