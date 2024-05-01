import type { Config } from "tailwindcss";

export default {
  corePlugins: {
    // Reset css. default: true
    preflight: true,
  },
  darkMode: ["selector", "[data-theme='dark']"],
  content: ["./index.html", "./src/**/*.{vue,js,jsx,cjs,mjs,ts,tsx,cts,mts}"],
  theme: {
    extend: {
      container: {
        screens: {
          "2xl": "1280px",
        },
      },
      colors: {
        "green-munsell": "#00BD7E33",
        "eerie-black": "#181818",
        charcoal: "#333366",
      },
    },
  },
  plugins: [],
} satisfies Config;
