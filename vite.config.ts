import vue from "@vitejs/plugin-vue";
import dotenv from "dotenv";
import { defineConfig } from "vite";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_URL, // Set base url in here
  plugins: [vue()],
  publicDir: "public",
});
