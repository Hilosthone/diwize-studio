// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'class',
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           DEFAULT: '#7C3AED', // Main Purple
//           light: '#C4B5FD', // Light Purple
//           dark: '#4C1D95', // Deep Purple
//         },
//         background: {
//           light: '#FFFFFF', // Light mode background
//           dark: '#0F0F0F', // Dark mode background
//         },
//       },
//       fontFamily: {
//         nexas: ['Nexas', 'sans-serif'],
//         poppins: ['Poppins', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C3AED',
          light: '#C4B5FD',
          dark: '#4C1D95',
        },
        background: {
          light: '#FFFFFF',
          dark: '#0F0F0F',
        },
      },
      fontFamily: {
        nexas: ['Nexas', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
