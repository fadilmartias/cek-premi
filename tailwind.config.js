/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['variant'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            'ig-gradient': 'linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7)',
      },
    },
  },
  plugins: [],
};
