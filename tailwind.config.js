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
      backgroundImage:()=>({
        'gradient-linear-black':'linear-gradient(to left, rgba(114,117,129,1) 15%, rgba(221,224,238,1) 100%)',
        'gradient-linear-primary':'linear-gradient(to left, rgba(220,38,38,1) 15%, rgba(239,68,68,1) 100%)'
      }),
      fontFamily: {
        html: ["var(--font-montserrat)"],
        inter:["Inter","sans-serif"]
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
          DEFAULT:"#1E212B",
          medium:"#727581",
          light:"#dde0ee"
        },
        green:{
          DEFAULT:"#4D8B31",
          medium:"#83c34c",
          light:"#c1e1a6"
        },
        gold:{
          DEFAULT:"#FFC800",
          dark:"#ff9c00",
          light:"#ffebaf"
        }
      },
    },
    plugins: [],
  },
};