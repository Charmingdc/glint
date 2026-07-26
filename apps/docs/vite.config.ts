import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  base: "/docs/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@glint/core": resolve(__dirname, "../../packages/core/src/index.ts"),
    },
  },
});
