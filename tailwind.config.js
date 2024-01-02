/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
        "dim",
        "nord",
        "sunset",
       {darkpurple: {

          "primary": "#AA23FF",

          "secondary": "#0FF1EE",

          "accent": "#00a700",

          "neutral": "#0d1314",

          "base-100": "#191933",

          "info": "#268AFF",

          "success": "#1CDC18",

          "warning": "#FFAC18",

          "error": "#FB2F32",
        }},
      {red: {

          "primary": "#e5344d",

          "secondary": "#f9af22",

          "accent": "#ff0000",

          "neutral": "#212731",

          "base-100": "#16171b",

          "info": "#A3CAEB",

          "success": "#19763B",

          "warning": "#BE9E0E",

          "error": "#E86489",
        },},
      {bluebeard: {

          "primary": "#007aff",

          "secondary": "#ff0",

          "accent": "#ff5e00",

          "neutral": "#1A1721",

          "base-100": "#16151d",

          "info": "#69D1F7",

          "success": "#18C967",

          "warning": "#8F630A",

          "error": "#E36381",
        }}, {darksoul: {

          "primary": "#1d4ed8",

          "secondary": "#f97316",

          "accent": "#1FB2A5",

          "neutral": "#1A1721",

          "base-100": "#28334e",

          "info": "#1e4bcb",

          "success": "#84cc16",

          "warning": "#fd0",

          "error": "#dc2626",
        }}
    ],
  },
  plugins: [require("daisyui")],
}

