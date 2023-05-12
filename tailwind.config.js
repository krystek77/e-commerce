/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        html: ["var(--font-montserrat)"],
      },
      colors: {
        primary: {
          DEFAULT: "#dc2626",
          light: "#ef4444",
          dark: "#991b1b",
        },
        accent: {
          DEFAULT: "#67e8f9",
          light: "#a5f3fc",
          dark: "#22d3ee",
        },
        black:{
          DEFAULT:"#1E212B"
        },
        green:{
          DEFAULT:"#4D8B31"
        },
        gold:{
          DEFAULT:"#FFC800"
        }
      },
    },
    plugins: [],
  },
};