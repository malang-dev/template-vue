import type { Config } from "tailwindcss";

export default {
  corePlugins: {
    preflight: false,
  },
  content: ["./index.html", "./src/**/*.{vue,js,jsx,cjs,mjs,ts,tsx,cts,mts}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
