import type { Config } from "tailwindcss";

export default {
  corePlugins: {
    // Reset css. default: true
    preflight: true,
  },
  darkMode: ["selector"],
  content: ["./index.html", "./src/**/*.{vue,js,jsx,cjs,mjs,ts,tsx,cts,mts}"],
  theme: {},
  plugins: [],
} satisfies Config;
