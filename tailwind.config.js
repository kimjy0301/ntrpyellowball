module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
        "yellow-1": "#F5dF4D",
        "yellow-2": "#e4e875",
        "yellow-3": "#f9ec00",
        "yellow-4": "#ded800",
        "grey-1": "#939597",
        "band-1": "#64ed38",
        "green-1": "#dae122",
        "btn-1": "#ede100",
        "btn-2": "#dbdb3e",
        "btn-3": "#bac642",
        "btn-4": "#a9bf4c",
        "btn-5": "#94a378",
        "btn-6": "#939798",
      },
      screens: {
        "hover-hover": { raw: "(hover: hover)" },
      },
    },
  },
  variants: {
    extend: {
      scale: ["active"],
    },
  },
  plugins: [],
};
