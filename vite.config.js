import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: '/real-estate/',
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
        },
      },
    },
});