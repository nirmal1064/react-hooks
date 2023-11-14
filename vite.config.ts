/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  test: {
    environment: "jsdom"
  },
  build: {
    lib: {
      entry: resolve(__dirname, "hooks/index.ts"),
      formats: ["es"]
    }
  }
});
